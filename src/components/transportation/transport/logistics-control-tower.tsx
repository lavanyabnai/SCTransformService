"use client"

import { useState } from "react"
import { AlertTriangle, MoreVertical, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import dynamic from "next/dynamic"

// Leaflet Map Component
const LeafletMap = dynamic(() => import("./leaflet-map"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 flex items-center justify-center">Loading map...</div>,
})

// Mock data for USA logistics exceptions
const exceptions = [
  {
    id: "VR001",
    type: "HIGH-VALUE SHIPMENT",
    loadId: "VR-HT-2024",
    reason: "Temperature deviation",
    destination: "San Francisco",
    priority: "high",
    industry: "hi-tech",
  },
  {
    id: "RT002",
    type: "DELAYED DELIVERY",
    loadId: "RT-NY-1547",
    reason: "Traffic congestion",
    destination: "New York",
    priority: "medium",
    industry: "retail",
  },
  {
    id: "VR003",
    type: "SECURITY ALERT",
    loadId: "VR-TX-8821",
    reason: "Unauthorized stop",
    destination: "Austin",
    priority: "high",
    industry: "hi-tech",
  },
  {
    id: "RT004",
    type: "INVENTORY SHORTAGE",
    loadId: "RT-FL-3344",
    reason: "Missing items",
    destination: "Miami",
    priority: "medium",
    industry: "retail",
  },
  {
    id: "VR005",
    type: "FRAGILE HANDLING",
    loadId: "VR-WA-9912",
    reason: "Excessive vibration",
    destination: "Seattle",
    priority: "high",
    industry: "hi-tech",
  },
  {
    id: "RT006",
    type: "ROUTE DEVIATION",
    loadId: "RT-CA-7755",
    reason: "Unplanned detour",
    destination: "Los Angeles",
    priority: "low",
    industry: "retail",
  },
]

// Map markers data for USA cities with proper coordinates
const mapMarkers = [
  { id: 1, lat: 47.6062, lng: -122.3321, type: "emergency", city: "Seattle" },
  { id: 2, lat: 37.7749, lng: -122.4194, type: "alert", city: "San Francisco" },
  { id: 3, lat: 34.0522, lng: -118.2437, type: "normal", city: "Los Angeles" },
  { id: 4, lat: 33.4484, lng: -112.074, type: "deviation", city: "Phoenix" },
  { id: 5, lat: 39.7392, lng: -104.9903, type: "alert", city: "Denver" },
  { id: 6, lat: 32.7767, lng: -96.797, type: "normal", city: "Dallas" },
  { id: 7, lat: 41.8781, lng: -87.6298, type: "emergency", city: "Chicago" },
  { id: 8, lat: 40.7128, lng: -74.006, type: "normal", city: "New York" },
  { id: 9, lat: 33.749, lng: -84.388, type: "deviation", city: "Atlanta" },
  { id: 10, lat: 25.7617, lng: -80.1918, type: "alert", city: "Miami" },
  { id: 11, lat: 44.9778, lng: -93.265, type: "normal", city: "Minneapolis" },
  { id: 12, lat: 39.0997, lng: -94.5786, type: "deviation", city: "Kansas City" },
]

export default function LogisticsControlTower() {
  const [viewMode, setViewMode] = useState("in-transit")
  const [selectedPlant, setSelectedPlant] = useState("all-plants")
  const [selectedProduct, setSelectedProduct] = useState("all-products")


  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-orange-600"
      case "low":
        return "text-yellow-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="">
      {/* Header */}
      {/* <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">LCT</span>
            </div>
            <h1 className="text-xl font-semibold">USA Logistics Control Tower</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Sarah Johnson</span>
            <span className="text-xs text-gray-500">LOGISTICS MANAGER</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div> */}

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r p-6">
          <div className="space-y-6">
            {/* Alerts Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-medium">ALERTS</span>
              </div>

              {/* Controls */}
              <div className="space-y-4 mb-6">
                <Select value={selectedPlant} onValueChange={setSelectedPlant}>
                  <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-plants">All Plants</SelectItem>
                    <SelectItem value="west-coast">West Coast</SelectItem>
                    <SelectItem value="east-coast">East Coast</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                  <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-products">All Products</SelectItem>
                    <SelectItem value="vr-headsets">VR Headsets</SelectItem>
                    <SelectItem value="retail-goods">Retail Goods</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-4 mb-6">
                <span className={`text-sm ${viewMode === "in-plant" ? "text-gray-900" : "text-gray-500"}`}>
                  IN-PLANT
                </span>
                <Switch
                  checked={viewMode === "in-transit"}
                  onCheckedChange={(checked) => setViewMode(checked ? "in-transit" : "in-plant")}
                />
                <span
                  className={`text-sm ${viewMode === "in-transit" ? "text-blue-600 font-medium" : "text-gray-500"}`}
                >
                  IN-TRANSIT
                </span>
              </div>
            </div>

            {/* Performance Metrics */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <span className="font-medium">PERFORMANCE</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Card className="bg-red-500 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">03</div>
                    <div className="text-xs opacity-90">DELAYS</div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-500 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">05</div>
                    <div className="text-xs opacity-90">DEVIATIONS</div>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-500 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">02</div>
                    <div className="text-xs opacity-90">IN ALERT ZONE</div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-600 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">01</div>
                    <div className="text-xs opacity-90">EMERGENCY</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-6 h-full">
            {/* Map Section */}
            <div className="col-span-2">
              <Card className="h-full">
                <CardContent className="p-0 h-full relative">
                  {/* USA Map with Leaflet */}
                  <div className="w-full h-full relative">
                    <LeafletMap markers={mapMarkers} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Exceptions List */}
            <div className="col-span-1">
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Exceptions</CardTitle>
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      <Eye className="w-4 h-4 mr-1" />
                      VIEW ALL
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {/* Header */}
                    <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs font-medium text-gray-600 bg-gray-50">
                      <div className="col-span-3">LOAD ID</div>
                      <div className="col-span-4">REASON</div>
                      <div className="col-span-3">DESTINATION</div>
                      <div className="col-span-2">ACTION</div>
                    </div>

                    {/* Exception Items */}
                    {exceptions.map((exception) => (
                      <div
                        key={exception.id}
                        className="grid grid-cols-12 gap-2 px-4 py-3 text-xs border-b hover:bg-gray-50"
                      >
                        <div className="col-span-3">
                          <div className="font-medium">{exception.type}</div>
                          <div className="text-gray-500">{exception.loadId}</div>
                        </div>
                        <div className="col-span-4">
                          <div className={getPriorityColor(exception.priority)}>{exception.reason}</div>
                          <Badge variant="outline" className="text-xs mt-1">
                            {exception.industry}
                          </Badge>
                        </div>
                        <div className="col-span-3">
                          <div>{exception.destination}</div>
                        </div>
                        <div className="col-span-2 flex items-center gap-1">
                          <div
                            className={`w-2 h-2 rounded-full ${exception.priority === "high" ? "bg-red-500" : exception.priority === "medium" ? "bg-orange-500" : "bg-yellow-500"}`}
                          ></div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <MoreVertical className="w-3 h-3" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Track Shipment</DropdownMenuItem>
                              <DropdownMenuItem>Contact Driver</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

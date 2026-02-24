"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Truck } from "lucide-react"

export default function Map() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <MapPin className="mr-2 h-5 w-5" />
          Supplier Network Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
          {/* This is a placeholder for the map visualization */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <Truck className="h-16 w-16 text-blue-300 mb-4" />
            <h3 className="text-lg font-medium text-center">Supplier Network Map</h3>
            <p className="text-sm text-gray-500 text-center mt-2">
              Interactive map showing supplier locations, capacity, and performance metrics
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full max-w-3xl">
              <div className="bg-white p-3 rounded-md shadow">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm font-medium">Oriental Manufacturing (Dallas)</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Capacity: 95% (Critical)</div>
                <div className="text-xs text-gray-500">Lead Time: 14 days</div>
              </div>

              <div className="bg-white p-3 rounded-md shadow">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm font-medium">Acme Tiles (Chicago)</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Capacity: 75%</div>
                <div className="text-xs text-gray-500">Lead Time: 18 days</div>
              </div>

              <div className="bg-white p-3 rounded-md shadow">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm font-medium">Global Ceramics (Phoenix)</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Capacity: 60%</div>
                <div className="text-xs text-gray-500">Lead Time: 21 days</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

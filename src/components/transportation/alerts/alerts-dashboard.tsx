"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { MoreVertical, RefreshCw, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for alerts
const topPriorityAlerts = [
  {
    id: 1,
    title: "Crowding at gate-in",
    pendingFor: "30 mins",
    escalation: "FINAL ESCALATION",
    action: "CONTACT E&I",
    priority: "final",
  },
  {
    id: 2,
    title: "1st Weight failed",
    pendingFor: "20 mins",
    escalation: "FINAL ESCALATION",
    action: "CONTACT E&I",
    priority: "final",
  },
]

const mediumPriorityAlerts = [
  {
    id: 3,
    title: "Vehicle Breakdown",
    pendingFor: "12 mins",
    escalation: "2nd ESCALATION",
    action: "CONTACT LOGISTICS",
    priority: "second",
  },
  {
    id: 4,
    title: "Unregistered driver reported at Gate-in",
    pendingFor: "40 mins",
    escalation: "2nd ESCALATION",
    action: "CONTACT SECURITY",
    priority: "second",
  },
  {
    id: 5,
    title: "Bunching at Pyro-1 Loading bay",
    pendingFor: "12 mins",
    escalation: "2nd ESCALATION",
    action: "SEND TO AUDITOR",
    priority: "second",
  },
]

const moderatePriorityAlerts = [
  {
    id: 6,
    title: "Driver with expired documents",
    pendingFor: "12 mins",
    escalation: "1st ESCALATION",
    action: "CONTACT E&I",
    priority: "first",
  },
  {
    id: 7,
    title: "Unclean truck pending inspection for 40 minutes",
    pendingFor: "12 mins",
    escalation: "1st ESCALATION",
    action: "CONTACT RMM",
    priority: "first",
  },
  {
    id: 8,
    title: "Unregistered driver reported at Gate-in",
    pendingFor: "15 mins",
    escalation: "1st ESCALATION",
    action: "CONTACT SECURITY",
    priority: "first",
  },
]

const incomingTrucks = [
  { truckNo: "MH 14 RY 6789", loadType: "Concentrate" },
  { truckNo: "MH 14 AZ 1234", loadType: "Coal" },
  { truckNo: "MH 12 RY 6789", loadType: "Concentrate" },
]

export default function AlertsDashboard() {
  const [viewMode, setViewMode] = useState("in-plant")
  const [, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])


  const getActionColor = (action: string) => {
    if (action.includes("E&I")) return "bg-blue-600 text-white"
    if (action.includes("LOGISTICS")) return "bg-green-600 text-white"
    if (action.includes("SECURITY")) return "bg-purple-600 text-white"
    if (action.includes("AUDITOR")) return "bg-indigo-600 text-white"
    if (action.includes("RMM")) return "bg-teal-600 text-white"
    return "bg-gray-600 text-white"
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-slate-800 font-bold text-sm">CT</span>
            </div>
            <h1 className="text-gray-900 text-xl font-semibold">Control Tower</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-900 text-sm">Sunil Sharma</span>
            <span className="text-gray-600 text-xs">SUPPLY LOGISTICS</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Toggle Section */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <span className={`text-lg font-medium ${viewMode === "in-plant" ? "text-gray-900" : "text-gray-600"}`}>
              IN-PLANT
            </span>
            <Switch
              checked={viewMode === "in-transit"}
              onCheckedChange={(checked) => setViewMode(checked ? "in-transit" : "in-plant")}
              className="data-[state=checked]:bg-blue-500"
            />
            <span className={`text-lg font-medium ${viewMode === "in-transit" ? "text-gray-900" : "text-gray-600"}`}>
              IN-TRANSIT
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Alerts Section */}
          <div className="col-span-2 space-y-6">
            {/* Top Priority Alerts */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">TOP PRIORITY ALERTS</CardTitle>
                  <Badge className="bg-red-500 text-white">FINAL ESCALATION</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPriorityAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-3 border-l-4 border-red-500 bg-red-50"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{alert.title}</h4>
                      <p className="text-sm text-red-600">PENDING FOR {alert.pendingFor}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" className={getActionColor(alert.action)}>
                        {alert.action}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Escalate</DropdownMenuItem>
                          <DropdownMenuItem>Resolve</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Medium Priority Alerts */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">MEDIUM PRIORITY ALERTS</CardTitle>
                  <Badge className="bg-orange-500 text-white">2nd ESCALATION</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {mediumPriorityAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-3 border-l-4 border-orange-500 bg-orange-50"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{alert.title}</h4>
                      <p className="text-sm text-orange-600">PENDING FOR {alert.pendingFor}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" className={getActionColor(alert.action)}>
                        {alert.action}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Escalate</DropdownMenuItem>
                          <DropdownMenuItem>Resolve</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Moderate Priority Alerts */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">MODERATE PRIORITY ALERTS</CardTitle>
                  <Badge className="bg-yellow-500 text-black">1st ESCALATION</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {moderatePriorityAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-3 border-l-4 border-yellow-500 bg-yellow-50"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{alert.title}</h4>
                      <p className="text-sm text-yellow-600">PENDING FOR {alert.pendingFor}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" className={getActionColor(alert.action)}>
                        {alert.action}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Escalate</DropdownMenuItem>
                          <DropdownMenuItem>Resolve</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-1 space-y-6">
            {/* Trucks Status */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-gray-600">TRUCKS IN PARKING</div>
                  <div className="text-xs text-gray-500">PLANNED - 6</div>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">30</div>
                  <div className="text-sm text-gray-600">TRUCKS IN PLANT</div>
                  <div className="text-xs text-gray-500">PLANNED - 6</div>
                </CardContent>
              </Card>
            </div>

            {/* System Downtime */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">SYSTEM DOWNTIME</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 border-l-4 border-red-500 bg-red-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-red-600">Hardware issue at 2nd weighing scale</h4>
                      <p className="text-sm text-gray-600">TIME SINCE BLOCKAGE: 2 HOURS</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Contact Team</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm">Jonathan Doe</span>
                    <span className="text-xs text-gray-500">E&I IN CHARGE</span>
                    <Button size="sm" className="ml-auto bg-blue-600 text-white">
                      CONTACT
                    </Button>
                  </div>
                </div>

                <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-orange-600">ITMS System down</h4>
                      <p className="text-sm text-gray-600">TIME SINCE BLOCKAGE: 2 HOURS</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Contact Team</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm">Martin James</span>
                    <span className="text-xs text-gray-500">SHIFT PERSONNEL</span>
                    <Button size="sm" className="ml-auto bg-blue-600 text-white">
                      CONTACT
                    </Button>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="w-full text-blue-600">
                  <Eye className="w-4 h-4 mr-1" />
                  VIEW ALL
                </Button>
              </CardContent>
            </Card>

            {/* Incoming Trucks */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">INCOMING TRUCKS</CardTitle>
                  <RefreshCw className="w-4 h-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold">19</div>
                    <div className="text-sm text-gray-600">PLANNED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-red-600">12</div>
                    <div className="text-sm text-gray-600">EXPECTED</div>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-blue-600 text-white mb-4">
                  REQUEST 7 TRUCKS
                </Button>

                <div>
                  <h4 className="font-medium mb-2">Trucks Expected in Next Hour (6)</h4>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-xs font-medium text-gray-600">
                      <div>TRUCK NO.</div>
                      <div>LOAD TYPE</div>
                    </div>
                    {incomingTrucks.map((truck, index) => (
                      <div key={index} className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-red-600 font-medium">{truck.truckNo}</div>
                        <div>{truck.loadType}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

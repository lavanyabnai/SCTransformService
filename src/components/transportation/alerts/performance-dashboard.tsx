"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, Wrench, FileText, Eye } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data for charts
const chartData = [
  { name: "Jan", ALL: 85, CONCENTRATE: 78, COAL: 92, ZINC: 88, LEAD: 75, IRON: 82 },
  { name: "Feb", ALL: 88, CONCENTRATE: 82, COAL: 89, ZINC: 85, LEAD: 78, IRON: 86 },
  { name: "Mar", ALL: 92, CONCENTRATE: 85, COAL: 94, ZINC: 90, LEAD: 82, IRON: 88 },
  { name: "Apr", ALL: 89, CONCENTRATE: 88, COAL: 91, ZINC: 87, LEAD: 85, IRON: 90 },
  { name: "May", ALL: 94, CONCENTRATE: 91, COAL: 96, ZINC: 92, LEAD: 88, IRON: 93 },
  { name: "Jun", ALL: 91, CONCENTRATE: 89, COAL: 93, ZINC: 89, LEAD: 86, IRON: 91 },
]

const concernAreas = [
  {
    icon: <Clock className="w-4 h-4 text-red-500" />,
    title: "Average wait time at Agatha weighing scale",
    description: "increased by 24 hours",
    priority: "high",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-orange-500" />,
    title: "ITMS system down for 4 hours at Chandrapur",
    description: "",
    priority: "medium",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
    title: "2 Drainage lanes identified near Agatha - Chandrapur",
    description: "",
    priority: "high",
  },
]

const improvementAreas = [
  {
    icon: <Wrench className="w-4 h-4 text-blue-500" />,
    title: "Material handling at Agatha",
    department: "Operations",
  },
  {
    icon: <FileText className="w-4 h-4 text-green-500" />,
    title: "Auditing at Chandrapur",
    department: "Quality",
  },
  {
    icon: <Clock className="w-4 h-4 text-purple-500" />,
    title: "Instant planning at SK",
    department: "Planning",
  },
]

export default function PerformanceDashboard() {
  const [viewMode, setViewMode] = useState("in-plant")
  const [selectedPeriod, setSelectedPeriod] = useState("MTD")
  const [selectedPlant, setSelectedPlant] = useState("all-plants")

  const chartConfig = {
    ALL: { label: "ALL", color: "#8b5cf6" },
    CONCENTRATE: { label: "CONCENTRATE", color: "#06b6d4" },
    COAL: { label: "COAL", color: "#10b981" },
    ZINC: { label: "ZINC", color: "#f59e0b" },
    LEAD: { label: "LEAD", color: "#ef4444" },
    IRON: { label: "IRON", color: "#6366f1" },
  }

  return (
    <div className="bg-gray-50 min-h-screen">
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
            <span className="text-gray-900 text-sm">Abhishek Gupta</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Toggle Section */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <span className={`text-lg font-medium ${viewMode === "in-plant" ? "text-gray-900" : "text-gray-600"}`}>
              IN-PLANT PERFORMANCE
            </span>
            <Switch
              checked={viewMode === "in-transit"}
              onCheckedChange={(checked) => setViewMode(checked ? "in-transit" : "in-plant")}
              className="data-[state=checked]:bg-blue-500"
            />
            <span className={`text-lg font-medium ${viewMode === "in-transit" ? "text-gray-900" : "text-gray-600"}`}>
              IN-TRANSIT PERFORMANCE
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Charts Section */}
          <div className="col-span-3 space-y-6">
            {/* Controls */}
            <div className="flex gap-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32 bg-white text-gray-900 border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MTD">MTD</SelectItem>
                  <SelectItem value="YTD">YTD</SelectItem>
                  <SelectItem value="QTD">QTD</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedPlant} onValueChange={setSelectedPlant}>
                <SelectTrigger className="w-40 bg-white text-gray-900 border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-plants">All Plants</SelectItem>
                  <SelectItem value="plant-a">Plant A</SelectItem>
                  <SelectItem value="plant-b">Plant B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* P100 TAT Chart */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">P100 TAT</CardTitle>
                <div className="flex gap-2">
                  {Object.entries(chartConfig).map(([key, config]) => (
                    <Badge key={key} variant="outline" className="text-xs">
                      {config.label}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="ALL"
                        stackId="1"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="CONCENTRATE"
                        stackId="1"
                        stroke="#06b6d4"
                        fill="#06b6d4"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="COAL"
                        stackId="1"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* P101 TAT Chart */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">P101 TAT</CardTitle>
                <div className="flex gap-2">
                  {Object.entries(chartConfig).map(([key, config]) => (
                    <Badge key={key} variant="outline" className="text-xs">
                      {config.label}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="ZINC"
                        stackId="1"
                        stroke="#f59e0b"
                        fill="#f59e0b"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="LEAD"
                        stackId="1"
                        stroke="#ef4444"
                        fill="#ef4444"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="IRON"
                        stackId="1"
                        stroke="#6366f1"
                        fill="#6366f1"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* D100 TAT Chart */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">D100 TAT</CardTitle>
                <div className="flex gap-2">
                  {Object.entries(chartConfig).map(([key, config]) => (
                    <Badge key={key} variant="outline" className="text-xs">
                      {config.label}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="ALL"
                        stackId="1"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-1 space-y-6">
            {/* Concern Areas */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">CONCERN AREAS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {concernAreas.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    {item.icon}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      {item.description && <p className="text-xs text-gray-600">{item.description}</p>}
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full text-blue-600">
                  <Eye className="w-4 h-4 mr-1" />
                  VIEW ALL
                </Button>
              </CardContent>
            </Card>

            {/* Improvement Areas */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">IMPROVEMENT AREAS</CardTitle>
                <p className="text-sm text-gray-600">(by department)</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {improvementAreas.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    {item.icon}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-gray-600">{item.department}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full text-blue-600">
                  <Eye className="w-4 h-4 mr-1" />
                  VIEW ALL
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

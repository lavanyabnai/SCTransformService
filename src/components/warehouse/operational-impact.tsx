"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingDown, Clock } from "lucide-react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const impactData = [
  { day: "May 5", pickingRate: 95, orderFulfillment: 92 },
  { day: "May 6", pickingRate: 92, orderFulfillment: 90 },
  { day: "May 7", pickingRate: 88, orderFulfillment: 85 },
  { day: "May 8", pickingRate: 75, orderFulfillment: 70 },
  { day: "May 9", pickingRate: 60, orderFulfillment: 55 },
  { day: "May 10", pickingRate: 48, orderFulfillment: 45 },
  { day: "May 11", pickingRate: 42, orderFulfillment: 40 },
]

const metrics = [
  {
    name: "Picking Efficiency",
    value: "42%",
    change: "-53%",
    normal: "95%",
    status: "critical",
  },
  {
    name: "Order Cycle Time",
    value: "18 hours",
    change: "+12h",
    normal: "6 hours",
    status: "critical",
  },
  {
    name: "Order Accuracy",
    value: "96%",
    change: "-2%",
    normal: "98%",
    status: "warning",
  },
  {
    name: "Dock to Stock Time",
    value: "36 hours",
    change: "+24h",
    normal: "12 hours",
    status: "critical",
  },
]

export default function OperationalImpact() {
  return (
    <Card className="text-blue-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <BarChart3 className="mr-2 h-5 w-5" />
          Operational Impact Analysis
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-6">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={impactData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pickingRate"
                name="Picking Rate (%)"
                stroke="#3b82f6"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="orderFulfillment"
                name="Order Fulfillment (%)"
                stroke="#ef4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div key={metric.name} className="border rounded-md p-3">
              <div className="text-sm text-gray-500">{metric.name}</div>
              <div className="flex items-center mt-1">
                <div className="text-xl font-semibold">{metric.value}</div>
                <Badge
                  variant={metric.status === "critical" ? "destructive" : "outline"}
                  className={metric.status === "warning" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : ""}
                >
                  <TrendingDown className="h-3 w-3 mr-1" />
                  {metric.change}
                </Badge>
              </div>
              <div className="text-xs text-gray-500 mt-1">Normal: {metric.normal}</div>
            </div>
          ))}
        </div>

        <div className="border rounded-md p-4 mt-6 bg-gray-50">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="font-medium">Impact Timeline</h3>
          </div>

          <div className="mt-3 space-y-3">
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-sm font-medium">3 days ago</div>
              <div className="text-sm">Initial labor shortage reported (15% below normal)</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-sm font-medium">2 days ago</div>
              <div className="text-sm">Equipment maintenance issues began affecting operations</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-sm font-medium">Yesterday</div>
              <div className="text-sm">Labor shortage increased to 25%, order backlog began accumulating</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-sm font-medium">Today</div>
              <div className="text-sm">Critical situation with 35% labor shortage and 40% equipment unavailability</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

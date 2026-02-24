"use client"

import { TrendingUp, AlertTriangle } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const chartData = [
  { date: "03/22", supply: 200, demand: 180 },
  { date: "03/23", supply: 200, demand: 185 },
  { date: "03/24", supply: 200, demand: 190 },
  { date: "03/25", supply: 200, demand: 195 },
  { date: "03/26", supply: 120, demand: 200 },
  { date: "03/27", supply: 120, demand: 205 },
  { date: "03/28", supply: 120, demand: 210 },
  { date: "03/29", supply: 120, demand: 215 },
]

export default function InvProject() {
  return (
    <Card className="text-blue-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <TrendingUp className="mr-2 h-5 w-5" />
          Projected Inventory vs Demand
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-sm text-red-500 font-medium">Supply shortage of 80 units expected on 03/26</span>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="supply"
              stroke="#3b82f6"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Available Supply"
            />
            <Line type="monotone" dataKey="demand" stroke="#ef4444" strokeWidth={2} name="Demand" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="border rounded-md p-3">
            <div className="text-sm text-gray-500">Current Inventory</div>
            <div className="text-xl font-semibold mt-1">145 units</div>
          </div>
          <div className="border rounded-md p-3">
            <div className="text-sm text-gray-500">Safety Stock</div>
            <div className="text-xl font-semibold mt-1">50 units</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

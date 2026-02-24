"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle, TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const laborData = [
  { department: "Picking", required: 45, current: 28 },
  { department: "Packing", required: 30, current: 22 },
  { department: "Receiving", required: 25, current: 18 },
  { department: "Shipping", required: 20, current: 15 },
]

export default function LaborShortage() {
  return (
    <Card className="text-blue-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Users className="mr-2 h-5 w-5" />
          Labor Shortage Analysis
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-sm text-red-500 font-medium">35% overall staffing shortage</span>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={laborData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="required" name="Required Staff" fill="#3b82f6" />
            <Bar dataKey="current" name="Current Staff" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="border rounded-md p-3">
            <div className="text-sm text-gray-500">Absenteeism Rate</div>
            <div className="flex items-center mt-1">
              <div className="text-xl font-semibold">18%</div>
              <Badge variant="destructive" className="ml-2 text-xs">
                <TrendingDown className="h-3 w-3 mr-1" />
                +7%
              </Badge>
            </div>
          </div>

          <div className="border rounded-md p-3">
            <div className="text-sm text-gray-500">Temp Staff Available</div>
            <div className="text-xl font-semibold mt-1">15 workers</div>
            <div className="text-xs text-gray-500 mt-1">Can be deployed in 24h</div>
          </div>
        </div>

        <div className="border rounded-md p-3 mt-4">
          <div className="text-sm font-medium">Labor Shortage Details</div>
          <p className="text-sm text-gray-600 mt-1">
            Seasonal flu outbreak affecting 12 staff members. 8 open positions unfilled for 30+ days. Temporary staffing
            agency can provide 15 workers with 24-hour notice at 1.5x standard rate.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

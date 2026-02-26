"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { label: "Total Active Orders", value: "1,244", color: "text-blue-600" },
  { label: "Awaiting Allocation", value: "186", color: "text-yellow-600" },
  { label: "Allocated & In Progress", value: "892", color: "text-green-600" },
  { label: "Blocked / On Hold", value: "47", color: "text-red-600" },
  { label: "Partially Fulfilled", value: "119", color: "text-orange-600" },
]

export default function ActiveOrderStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Order Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm font-medium text-gray-700">{stat.label}</span>
              <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

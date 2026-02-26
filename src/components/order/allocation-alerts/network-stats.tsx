"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const warehouses = [
  { name: "DC East", utilization: 87, orders: 342, status: "normal" },
  { name: "DC West", utilization: 94, orders: 289, status: "warning" },
  { name: "DC Central", utilization: 72, orders: 415, status: "normal" },
  { name: "DC South", utilization: 68, orders: 198, status: "normal" },
]

export default function NetworkStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {warehouses.map((wh) => (
            <div key={wh.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{wh.name}</span>
                <span className="text-gray-500">{wh.orders} orders | {wh.utilization}% utilized</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    wh.utilization > 90 ? "bg-red-500" : wh.utilization > 80 ? "bg-yellow-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${wh.utilization}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

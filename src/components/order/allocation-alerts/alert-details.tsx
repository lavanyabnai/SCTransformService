"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const alerts = [
  {
    id: "ALT-001",
    type: "Stock Shortage",
    severity: "critical",
    product: "SKU-4521 Widget Pro",
    warehouse: "DC East",
    impact: "23 orders affected",
    time: "2 hours ago",
  },
  {
    id: "ALT-002",
    type: "Demand Spike",
    severity: "warning",
    product: "SKU-1089 Connector XL",
    warehouse: "DC West",
    impact: "15 orders affected",
    time: "4 hours ago",
  },
  {
    id: "ALT-003",
    type: "Allocation Conflict",
    severity: "critical",
    product: "SKU-7734 Sensor Unit",
    warehouse: "DC Central",
    impact: "31 orders affected",
    time: "5 hours ago",
  },
  {
    id: "ALT-004",
    type: "Lead Time Delay",
    severity: "warning",
    product: "SKU-2290 Power Module",
    warehouse: "DC South",
    impact: "8 orders affected",
    time: "6 hours ago",
  },
]

export default function AlertDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Alert Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-all">
              <div className="flex items-center gap-4">
                <Badge
                  className={
                    alert.severity === "critical"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }
                >
                  {alert.severity}
                </Badge>
                <div>
                  <p className="font-semibold">{alert.type}</p>
                  <p className="text-sm text-gray-600">{alert.product} — {alert.warehouse}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-red-600">{alert.impact}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

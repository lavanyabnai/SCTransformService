"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const linkedAlerts = [
  { orderId: "ORD-2841", sku: "SKU-4521", alert: "Stock Shortage", linked: "Supplier delay SPL-089", priority: "high" },
  { orderId: "ORD-2838", sku: "SKU-7734", alert: "Allocation Conflict", linked: "Capacity limit DC Central", priority: "high" },
  { orderId: "ORD-2835", sku: "SKU-1089", alert: "Demand Spike", linked: "Forecast miss Region West", priority: "medium" },
  { orderId: "ORD-2830", sku: "SKU-2290", alert: "Lead Time Delay", linked: "Transport delay RT-445", priority: "medium" },
  { orderId: "ORD-2827", sku: "SKU-5512", alert: "Stock Shortage", linked: "Production delay PLT-02", priority: "low" },
]

export default function LinkedAlertsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Linked Alerts & Root Causes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="p-3 font-medium">Order ID</th>
                <th className="p-3 font-medium">SKU</th>
                <th className="p-3 font-medium">Alert Type</th>
                <th className="p-3 font-medium">Linked Cause</th>
                <th className="p-3 font-medium">Priority</th>
              </tr>
            </thead>
            <tbody>
              {linkedAlerts.map((row) => (
                <tr key={row.orderId} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-mono text-blue-600">{row.orderId}</td>
                  <td className="p-3">{row.sku}</td>
                  <td className="p-3">{row.alert}</td>
                  <td className="p-3 text-gray-600">{row.linked}</td>
                  <td className="p-3">
                    <Badge
                      className={
                        row.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : row.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }
                    >
                      {row.priority}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

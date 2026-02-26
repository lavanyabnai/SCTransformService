"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertTriangle, Package, Truck, CheckCircle } from "lucide-react"

const orderMetrics = [
  { label: "Total Orders", value: "2,847", change: "+12%", trend: "up", icon: Package },
  { label: "On-Time Delivery", value: "92%", change: "+3%", trend: "up", icon: Truck },
  { label: "Open Alerts", value: "23", change: "-5", trend: "down", icon: AlertTriangle },
  { label: "Fulfillment Rate", value: "96%", change: "+1.5%", trend: "up", icon: CheckCircle },
]

const recentOrders = [
  { id: "ORD-2847", customer: "Acme Corp", status: "Delivered", amount: "$12,400", date: "Today" },
  { id: "ORD-2846", customer: "Global Trade", status: "In Transit", amount: "$8,750", date: "Today" },
  { id: "ORD-2845", customer: "Metro Supply", status: "Processing", amount: "$15,200", date: "Yesterday" },
  { id: "ORD-2844", customer: "Pacific Dist.", status: "Delivered", amount: "$6,300", date: "Yesterday" },
  { id: "ORD-2843", customer: "Eastern Logistics", status: "Delayed", amount: "$9,800", date: "2 days ago" },
]

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Order Management Home</h1>
        <p className="text-gray-600 mt-1">Overview of order performance and recent activity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {orderMetrics.map((metric) => (
          <Card key={metric.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                  <p className="text-2xl font-bold mt-1">{metric.value}</p>
                </div>
                <metric.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-green-500" />
                )}
                <span className="text-xs text-green-600 font-medium">{metric.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-all">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-semibold text-blue-600">{order.id}</span>
                  <span className="font-medium">{order.customer}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-gray-500">{order.date}</span>
                  <span className="font-semibold">{order.amount}</span>
                  <Badge
                    className={
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "In Transit"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

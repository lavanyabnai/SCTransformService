"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, ArrowRight } from "lucide-react"

const solutions = [
  {
    alert: "Stock Shortage — SKU-4521",
    recommendation: "Re-allocate 150 units from DC Central (surplus) to DC East",
    impact: "Resolves 23 pending orders",
    confidence: 94,
    status: "ready",
  },
  {
    alert: "Demand Spike — SKU-1089",
    recommendation: "Expedite PO-8834 from Supplier B, split shipment across DC West and DC Central",
    impact: "Covers 15 affected orders within 48hrs",
    confidence: 87,
    status: "ready",
  },
  {
    alert: "Allocation Conflict — SKU-7734",
    recommendation: "Prioritize top-tier customers, defer 12 lower-priority orders by 2 days",
    impact: "Maintains SLA for 19 of 31 affected orders",
    confidence: 82,
    status: "review",
  },
  {
    alert: "Lead Time Delay — SKU-2290",
    recommendation: "Switch to alternate supplier (Supplier D) for immediate availability",
    impact: "Reduces lead time from 8 days to 3 days",
    confidence: 91,
    status: "ready",
  },
]

export default function AllocationSolutions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-purple-600" />
          AI-Recommended Solutions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {solutions.map((sol, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{sol.alert}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <ArrowRight className="h-4 w-4 text-purple-500" />
                    <p className="text-sm text-gray-700">{sol.recommendation}</p>
                  </div>
                </div>
                <Badge
                  className={
                    sol.status === "ready"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }
                >
                  {sol.status === "ready" ? "Ready to Execute" : "Needs Review"}
                </Badge>
              </div>
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <span>Impact: <span className="font-medium text-gray-700">{sol.impact}</span></span>
                <span>Confidence: <span className="font-medium text-purple-600">{sol.confidence}%</span></span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

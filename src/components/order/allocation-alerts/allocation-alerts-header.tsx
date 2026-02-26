"use client"

import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

export default function AllocationAlertsHeader() {
  return (
    <div className="flex items-center justify-between p-6 border-b bg-white">
      <div className="flex items-center gap-3">
        <AlertTriangle className="h-6 w-6 text-orange-500" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Allocation Alerts</h1>
          <p className="text-sm text-gray-600">AI-powered order allocation monitoring and resolution</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge className="bg-red-100 text-red-800">5 Critical</Badge>
        <Badge className="bg-yellow-100 text-yellow-800">12 Warning</Badge>
        <Badge className="bg-green-100 text-green-800">8 Resolved</Badge>
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Share, X } from "lucide-react"

export default function AllocationAlertsHeader() {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Status</span>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Open
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Severity</span>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Medium
            </Badge>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <span>🔔</span>
            <span className="ml-1">Snooze</span>
            <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
          <Button variant="outline" size="sm">
            <Share className="w-3 h-3 mr-1" />
            Share Alert
            <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
          <Button variant="ghost" size="sm">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

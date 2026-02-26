"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock } from "lucide-react"
import { useRef, useEffect } from "react"

export default function ProductionTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This would be where you'd implement any interactive timeline functionality
  }, [])

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2 text-blue-600" />
            <CardTitle className="text-sm">Production Timeline</CardTitle>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Total Time from Raw Material Order to Distributed Product: 2 Weeks
          </Badge>
        </div>
        <p className="text-xs text-gray-500 mt-1">Wendy's Item: SAUCE MINT CHOCOLATE COOKIE</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-sm font-medium w-32">Name:</span>
              <span className="text-sm">Sauce Mint Chocolate Cookie</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium w-32">Due Date Order Raw Supplies:</span>
              <span className="text-sm">Thu, Mar 13, 2025</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium w-32">Due Date Production Start:</span>
              <span className="text-sm">Thu, Mar 20, 2025</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium w-32">Due Date Distribution Start:</span>
              <span className="text-sm">Mon, Mar 31, 2025</span>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-between mb-2">
              <div className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">Raw Ingredient Order Period</div>
              <div className="text-xs font-medium bg-gray-300 px-2 py-1 rounded">Production</div>
              <div className="text-xs font-medium bg-gray-500 text-white px-2 py-1 rounded">Distribution</div>
            </div>
            <div ref={timelineRef} className="h-16 border rounded-lg relative">
              {/* Timeline visualization */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="flex h-full">
                  <div className="w-1/3 bg-blue-50 border-r"></div>
                  <div className="w-1/3 bg-blue-100 border-r"></div>
                  <div className="w-1/3 bg-blue-200"></div>
                </div>

                {/* Timeline markers */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-xs text-gray-500">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="h-2 w-0.5 bg-gray-300 mb-1"></div>
                      <div>{i + 1}</div>
                    </div>
                  ))}
                </div>

                {/* Month labels */}
                <div className="absolute top-1 left-0 w-full flex justify-between px-2">
                  <div className="text-xs font-medium">March 2025</div>
                  <div className="text-xs font-medium">April 2025</div>
                </div>

                {/* Today marker */}
                <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

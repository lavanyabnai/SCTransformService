"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActiveOrderStats() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center">
          <span className="mr-2">📈</span>
          Active Individual Sales Order Stats (selected below)
        </CardTitle>
        <p className="text-xs text-gray-500">Individual Sales Order of same Item, from same DC, on same Day</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">DC Inventory Available</span>
            <span className="font-semibold">11</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Order Quantity</span>
            <span className="font-semibold">2</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Delta Available Inventory to Full Order</span>
              <span className="font-semibold">9</span>
            </div>
            <div className="w-full bg-red-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full w-full"></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Cases Needed Until Next Drop</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

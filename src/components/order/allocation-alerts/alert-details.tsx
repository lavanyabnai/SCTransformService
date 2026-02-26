"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function AlertDetails() {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <p className="text-sm text-gray-700">
          There is insufficient inventory to fulfill all sales orders for{" "}
          <strong>SAUCE MINT CHOCOLATE COOKIE (10332)</strong> at <strong>DC OREGON</strong> on Thu, Mar 13, 2025. There
          are <strong>11 cases available</strong> to promise at the DC but <strong>70 cases ordered</strong> by the
          individual restaurants.
        </p>

        <p className="text-sm text-gray-700">
          Based on the existing inventory available at the restaurants, the recommended solution is to{" "}
          <span className="text-blue-600 underline cursor-pointer">
            Cancel / Reduce Individual Sales Order Quantities to the Minimum
          </span>{" "}
          - No Transfer Needed.
        </p>

        <p className="text-sm text-gray-700">
          There are currently <strong>20 Alerts</strong> for the same Item at this DC, consider resolving them from a
          Network Perspective. Linked Alert:
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="flex items-center">
            <span className="mr-2">🤖</span>
            <span className="text-sm text-purple-700 font-medium">
              Insufficient Inventory for SAUCE MINT CHOCOLATE COOKIE at DC PORTLAND on Thursday March 13, 2025
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Zap,
  ShoppingCart,
  DollarSign,
  TrendingUp,
} from "lucide-react"
import MapComponent from "@/components/order/map-component"

export default function Dashboard() {
  const [selectedTool] = useState<string>("")


  return (
    <div className="flex h-screen bg-gray-50">
   

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Alert Banner */}
        <Alert className="m-4 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>You have 1 Network Alert that needs your Immediate Attention:</strong> Network Inventory LOW for
            SAUCE MINT CHOCOLATE COOKIE, risking Stock-Out in OREGON, consider lowering Max Allowed Demand (currently
            set at DOUBLE Supply Days).
          </AlertDescription>
        </Alert>

        <div className="mx-4 mb-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Zap className="w-4 h-4 mr-2" />
            Take Action
          </Button>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-12 gap-4 h-full">
            {/* Left Panel - Order Feed */}
            <div className="col-span-3">
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <CardTitle className="text-sm">AIP Order Feed</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Automation Hub
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-0">
                  {/* Received Order 1 */}
                  <div className="border-b-2 border-blue-600 pb-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm text-blue-700">Received Order 201034981</h4>
                      <Button variant="ghost" size="sm">
                        ⋯
                      </Button>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">📦</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Order of 2 cases of FROSTY MIX VANILLA CLEAN LABEL requested to ship on Thu, Mar 13, 2025.
                      </p>
                    </div>
                  </div>

                  {/* Received Order 2 */}
                  <div className="border-b-2 border-blue-600 pb-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm text-blue-700">Received Order 201034981</h4>
                      <Button variant="ghost" size="sm">
                        ⋯
                      </Button>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">📦</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Order of 1 case of FROSTY MIX CHOCOLATE CLEAN LABEL requested to ship on Thu, Mar 13, 2025.
                      </p>
                    </div>
                  </div>

                  {/* Processing Order 1 */}
                  <div className="border-b-2 border-blue-600 pb-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm text-blue-700">Processing Order 201034975</h4>
                      <Button variant="ghost" size="sm">
                        ⋯
                      </Button>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">📦</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Processing order of 1 case of SAUCE MINT CHOCOLATE COOKIE with requested ship date of Thu, Mar
                        13, 2025.
                      </p>
                    </div>
                  </div>

                  {/* Processing Order 2 */}
                  <div className="border-b-2 border-blue-600 pb-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm text-blue-700">Processing Order 201034975</h4>
                      <Button variant="ghost" size="sm">
                        ⋯
                      </Button>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">📦</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Processing order of 2 cases of FROSTY MIX VANILLA CLEAN LABEL with requested ship date of Thu,
                        Mar 13, 2025.
                      </p>
                    </div>
                  </div>

                  {/* Processing Order 3 */}
                  <div className="border-b-2 border-blue-600 pb-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm text-blue-700">Processing Order 201034975</h4>
                      <Button variant="ghost" size="sm">
                        ⋯
                      </Button>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">📦</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Processing order of 3 cases of FROSTY MIX CHOCOLATE CLEAN LABEL with requested ship date of Thu,
                        Mar 13, 2025.
                      </p>
                    </div>
                  </div>

                  {/* Allocation Alert Order */}
                  <div className="border-b-2 border-orange-400 pb-3 mb-3 bg-orange-50 p-3 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm text-orange-800">Allocation Alert Order</h4>
                      <Button variant="ghost" size="sm">
                        ⋯
                      </Button>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-orange-600 rounded flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">⚠️</span>
                      </div>
                      <p className="text-xs text-orange-700">
                        101087237P - An allocation alert occurred for order requiring immediate attention.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Panel - Stats and Map */}
            <div className="col-span-9 space-y-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <ShoppingCart className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold">30,149</p>
                        <p className="text-xs text-gray-500">Active Orders</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-8 h-8 text-orange-600" />
                      <div>
                        <p className="text-2xl font-bold">45</p>
                        <p className="text-xs text-gray-500">High Priority</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold">$23K</p>
                        <p className="text-xs text-green-600">↑ 14% Growth</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-8 h-8 text-cyan-600" />
                      <div>
                        <p className="text-2xl font-bold">6444</p>
                        <p className="text-xs text-cyan-600">↑ 1.6% Growth</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Section */}
              <Card className="flex-1">
                <CardContent className="p-0 h-[400px] relative">
                  <MapComponent selectedTool={selectedTool} />
                </CardContent>
              </Card>

              {/* Promotions Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm flex items-center">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-orange-600 text-xs">⚡</span>
                    </div>
                    ACTIVE & UPCOMING PROMOTIONS (9)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 text-xs">🍪</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Thin Mint Frosty</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          <strong>Description:</strong> The Thin Mints Frosty is a frozen dessert from Wendy's that
                          combines the classic Frosty with a minty cookie crumble sauce. It's available in vanilla or
                          chocolate.
                        </p>
                        <p className="text-xs text-gray-600">
                          <strong>Period:</strong> Running from February to May across the US network.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 text-xs">🐟</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Lenten Fish</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          <strong>Description:</strong> Wendy's brings back its Crispy Panko Fish Sandwich every year
                          for Lent. The sandwich is a limited-time offering during the Lenten season.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Clock, Search, AlertTriangle, Package, TrendingDown, Truck, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Alert Header Component
function AlertHeader() {
  return (
    <Card className="border-red-200 bg-red-50">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-red-900 font-semibold">CRITICAL ALERT:</span>
              <span className="text-red-800">Inventory Levels Severely Impacted - Stock & Supplier Shortage</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Key Metrics Component
function KeyMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardContent className="p-4">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Current Stock Level</div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-3xl font-bold text-red-600">58%</span>
              <Badge variant="destructive" className="text-xs">
                -42%
              </Badge>
            </div>
            <div className="text-xs text-gray-500 mt-1">Below optimal</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Estimated Restock</div>
            <div className="flex items-center justify-center space-x-1">
              <Clock className="h-4 w-4 text-orange-500" />
              <span className="text-3xl font-bold text-orange-600">96 hours</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">Without intervention</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Affected SKUs</div>
            <div className="flex items-center justify-center space-x-1">
              <Package className="h-4 w-4 text-blue-500" />
              <span className="text-3xl font-bold text-blue-600">184</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">Require immediate attention</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Facility Info Component
function FacilityInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-blue-700">Facility Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="text-xs text-gray-600">Location</div>
          <div className="font-medium">Atlanta Distribution Center</div>
        </div>

        <div>
          <div className="text-xs text-gray-600">Facility Size</div>
          <div className="font-medium">250,000 sq ft</div>
        </div>

        <div>
          <div className="text-xs text-gray-600">Normal Daily Capacity</div>
          <div className="font-medium">1,200 orders</div>
        </div>

        <div>
          <div className="text-xs text-gray-600">Current Daily Output</div>
          <div className="font-medium">510 orders</div>
          <Badge variant="destructive" className="ml-2 text-xs">
            57% Below Target
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

// Alert Details Component
function AlertDetails() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-orange-700">Alert Details</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">
          Inventory levels at Atlanta Distribution Center are severely impacted due to a 35% supplier shortage and 40%
          stock depletion. This is causing significant delays in order fulfillment and increasing backlog.
        </p>
      </CardContent>
    </Card>
  )
}

// Stock Shortage Analysis Component
function StockShortageAnalysis() {
  const categories = [
    { name: "Electronics", required: 50, current: 30, shortage: 40 },
    { name: "Clothing", required: 45, current: 25, shortage: 44 },
    { name: "Home & Garden", required: 35, current: 20, shortage: 43 },
    { name: "Sports", required: 25, current: 15, shortage: 40 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-sm">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <span>Stock Shortage Analysis</span>
        </CardTitle>
        <Badge variant="destructive" className="w-fit text-xs">
          35% overall stock shortage
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{category.name}</span>
                <span className="text-gray-600">{category.shortage}% shortage</span>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 bg-blue-100 rounded">
                  <div
                    className="bg-blue-500 h-6 rounded flex items-center justify-center text-white text-xs"
                    style={{ width: `${(category.required / 60) * 100}%` }}
                  >
                    Required Stock
                  </div>
                </div>
                <div className="flex-1 bg-red-100 rounded">
                  <div
                    className="bg-red-500 h-6 rounded flex items-center justify-center text-white text-xs"
                    style={{ width: `${(category.current / 60) * 100}%` }}
                  >
                    Current Stock
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Supplier Shortage Analysis Component
function SupplierShortageAnalysis() {
  const supplierData = [
    { name: "Available", value: 7, color: "#10b981" },
    { name: "Partial Supply", value: 10, color: "#f59e0b" },
    { name: "Unavailable", value: 10, color: "#ef4444" },
    { name: "Delayed System", value: 1, color: "#6b7280" },
  ]

  const supplierChartConfig = {
    available: {
      label: "Available",
      color: "#10b981",
    },
    partialSupply: {
      label: "Partial Supply",
      color: "#f59e0b",
    },
    unavailable: {
      label: "Unavailable",
      color: "#ef4444",
    },
    delayedSystem: {
      label: "Delayed System",
      color: "#6b7280",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-sm">
          <Truck className="h-4 w-4 text-orange-500" />
          <span>Supplier Shortage Analysis</span>
        </CardTitle>
        <Badge variant="secondary" className="w-fit text-xs">
          40% suppliers unavailable
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ChartContainer config={supplierChartConfig} className="h-32 w-32 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={supplierData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {supplierData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Available</span>
              </div>
              <span className="font-medium">7/12</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span>Partial Supply</span>
              </div>
              <span className="font-medium">10/25</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>Unavailable</span>
              </div>
              <span className="font-medium">10/18</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-400 rounded"></div>
                <span>Delayed System</span>
              </div>
              <span className="font-medium">1/1</span>
            </div>
          </div>

          <div className="text-center">
            <button className="text-blue-600 text-xs underline">Maintenance Schedule</button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Operational Impact Component
function OperationalImpact() {
  const chartData = [
    {
      date: "May 5",
      stockRate: 95,
      orderFulfillment: 98,
    },
    {
      date: "May 6",
      stockRate: 88,
      orderFulfillment: 92,
    },
    {
      date: "May 7",
      stockRate: 75,
      orderFulfillment: 78,
    },
    {
      date: "May 8",
      stockRate: 65,
      orderFulfillment: 68,
    },
    {
      date: "May 9",
      stockRate: 58,
      orderFulfillment: 55,
    },
  ]

  const chartConfig = {
    stockRate: {
      label: "Stock Rate (%)",
      color: "#3b82f6",
    },
    orderFulfillment: {
      label: "Order Fulfillment (%)",
      color: "#ef4444",
    },
  } satisfies ChartConfig

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-sm">
          <TrendingDown className="h-4 w-4 text-blue-500" />
          <span>Operational Impact Analysis</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-6 mb-4">
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-0.5 bg-blue-500"></div>
            <span>Stock Rate (%)</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-0.5 bg-red-500"></div>
            <span>Order Fulfillment (%)</span>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="stockRate"
                stroke={chartConfig.stockRate.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.stockRate.color, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="orderFulfillment"
                stroke={chartConfig.orderFulfillment.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.orderFulfillment.color, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="text-center">
            <div className="text-xs text-gray-600">Stock Efficiency</div>
            <div className="font-bold text-red-600">
              58% <span className="text-xs">-35%</span>
            </div>
            <div className="text-xs text-gray-500">Normal: 93%</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-600">Reorder Cycle Time</div>
            <div className="font-bold text-red-600">
              21 hours <span className="text-xs">+110%</span>
            </div>
            <div className="text-xs text-gray-500">Normal: 10 hours</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-600">Stock Accuracy</div>
            <div className="font-bold text-yellow-600">
              94% <span className="text-xs">-2%</span>
            </div>
            <div className="text-xs text-gray-500">Normal: 96%</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-600">Supplier to Stock Time</div>
            <div className="font-bold text-red-600">
              42 hours <span className="text-xs">+24%</span>
            </div>
            <div className="text-xs text-gray-500">Normal: 34 hours</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Impact Timeline Component
function ImpactTimeline() {
  const timelineEvents = [
    {
      time: "3 days ago",
      event: "Initial supplier shortage reported (15% below normal)",
    },
    {
      time: "2 days ago",
      event: "Stock maintenance issues began affecting operations",
    },
    {
      time: "Yesterday",
      event: "Supplier shortage increased to 25%, order tracking began accumulating",
    },
    {
      time: "Today",
      event: "Critical situation with 35% supplier shortage and 40% stock unavailability",
    },
  ]

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4 text-blue-500" />
          <span>Impact Timeline</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex space-x-3">
              <div className="text-xs text-gray-600 w-20 flex-shrink-0">{event.time}</div>
              <div className="text-xs text-gray-800">{event.event}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Order Backlog Component
function OrderBacklog() {
  const orders = [
    {
      id: "ORD-7829",
      customer: "Acme Corp",
      items: 24,
      priority: "High",
      status: "Delayed",
      promisedDate: "May 10, 2025",
      delay: "1 day",
    },
    {
      id: "ORD-7830",
      customer: "TechSolutions Inc",
      items: 18,
      priority: "Critical",
      status: "Delayed",
      promisedDate: "May 10, 2025",
      delay: "1 day",
    },
    {
      id: "ORD-7835",
      customer: "Global Retail",
      items: 42,
      priority: "Medium",
      status: "Delayed",
      promisedDate: "May 11, 2025",
      delay: "Expected",
    },
    {
      id: "ORD-7842",
      customer: "Healthcare Partners",
      items: 15,
      priority: "Critical",
      status: "Delayed",
      promisedDate: "May 11, 2025",
      delay: "Expected",
    },
    {
      id: "ORD-7850",
      customer: "Logistics Pro",
      items: 31,
      priority: "Low",
      status: "At Risk",
      promisedDate: "May 12, 2025",
      delay: "Potential",
    },
  ]

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-sm">
            <Package className="h-4 w-4 text-blue-500" />
            <span>Order Backlog</span>
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            Avg Delay: 36 hours
          </Badge>
        </div>
        <div className="text-sm text-red-600">
          <AlertTriangle className="h-4 w-4 inline mr-1" />
          184 orders affected (showing top 5 by priority)
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="text-left p-2">Order ID</th>
                <th className="text-left p-2">Customer</th>
                <th className="text-left p-2">Items</th>
                <th className="text-left p-2">Priority</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Promised Date</th>
                <th className="text-left p-2">Delay</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 font-medium">{order.id}</td>
                  <td className="p-2">{order.customer}</td>
                  <td className="p-2">{order.items}</td>
                  <td className="p-2">
                    <Badge
                      variant={
                        order.priority === "Critical"
                          ? "destructive"
                          : order.priority === "High"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {order.priority}
                    </Badge>
                  </td>
                  <td className="p-2">
                    <Badge variant={order.status === "Delayed" ? "destructive" : "secondary"} className="text-xs">
                      {order.status}
                    </Badge>
                  </td>
                  <td className="p-2">{order.promisedDate}</td>
                  <td className="p-2">
                    <span
                      className={
                        order.delay === "1 day"
                          ? "text-red-600"
                          : order.delay === "Expected"
                            ? "text-yellow-600"
                            : "text-blue-600"
                      }
                    >
                      {order.delay}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-xs text-gray-600">Critical Orders</div>
            <div className="font-bold text-red-600">42</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-600">High Priority Orders</div>
            <div className="font-bold text-orange-600">85</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-600">Standard Orders</div>
            <div className="font-bold text-blue-600">110</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Resolution Options Component
function ResolutionOptions() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const options = [
    {
      id: 1,
      title: "Option 1: Emergency Restocking",
      recommended: false,
      details: [
        "• Hire 25 emergency suppliers for 2 weeks",
        "• Expedite stock repairs with overtime",
        "• Recovery time: 48-72 hours",
      ],
      cost: "$42,500",
      recoverySpeed: "Moderate",
      customerImpact: "Moderate",
      dialogTitle: "Implement Emergency Restocking Plan?",
      dialogDescription:
        "This will authorize hiring 25 emergency suppliers for 2 weeks with expedited stock repairs and overtime. Total cost: $42,500. Recovery time: 48-72 hours.",
    },
    {
      id: 2,
      title: "Option 2: Comprehensive Recovery",
      recommended: true,
      details: [
        "• Hire 35 emergency suppliers + authorize overtime",
        "• Rent 10 additional supplier units",
        "• Recovery time: 24-36 hours",
      ],
      cost: "$85,750",
      recoverySpeed: "Fast",
      customerImpact: "Low",
      dialogTitle: "Implement Comprehensive Recovery Plan?",
      dialogDescription:
        "This will authorize hiring 35 emergency suppliers with overtime and renting 10 additional supplier units. Total cost: $85,750. Recovery time: 24-36 hours.",
    },
    {
      id: 3,
      title: "Option 3: 3PL Outsourcing",
      recommended: false,
      details: [
        "• Temporarily outsource fulfillment to 3PL partner",
        "• Focus internal resources on supplier repair",
        "• Recovery time: 12-24 hours for critical orders",
      ],
      cost: "$124,000",
      recoverySpeed: "Very Fast",
      customerImpact: "Reduced",
      dialogTitle: "Implement 3PL Outsourcing Plan?",
      dialogDescription:
        "This will temporarily outsource fulfillment to 3PL partner and focus internal resources on supplier repair. Total cost: $124,000. Recovery time: 12-24 hours for critical orders.",
    },
  ]

  const handleSelectOption = (optionId: number) => {
    setSelectedOption(optionId)
    setIsDialogOpen(true)
  }

  const handleConfirm = () => {
    console.log(`Confirmed option ${selectedOption}`)
    setIsDialogOpen(false)
    setSelectedOption(null)
  }

  const handleCancel = () => {
    setIsDialogOpen(false)
    setSelectedOption(null)
  }

  const currentOption = options.find((option) => option.id === selectedOption)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-sm">
          <CheckCircle className="h-4 w-4 text-blue-500" />
          <span>Resolution Options</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {options.map((option) => (
            <div
              key={option.id}
              className={`p-4 border rounded-lg ${option.recommended ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-sm">{option.title}</h3>
                  {option.recommended && <Badge className="mt-1 text-xs">Recommended</Badge>}
                </div>

                <div className="space-y-1">
                  {option.details.map((detail, index) => (
                    <div key={index} className="text-xs text-gray-700">
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-medium">{option.cost}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Recovery Speed:</span>
                    <Badge
                      variant={
                        option.recoverySpeed === "Very Fast"
                          ? "default"
                          : option.recoverySpeed === "Fast"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {option.recoverySpeed}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Customer Impact:</span>
                    <Badge
                      variant={
                        option.customerImpact === "Reduced"
                          ? "default"
                          : option.customerImpact === "Low"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {option.customerImpact}
                    </Badge>
                  </div>
                </div>

                <Button
                  size="sm"
                  className={`w-full text-xs ${option.recommended ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  variant={option.recommended ? "default" : "outline"}
                  onClick={() => handleSelectOption(option.id)}
                >
                  Select Option
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{currentOption?.dialogTitle}</DialogTitle>
              <DialogDescription className="text-gray-600">{currentOption?.dialogDescription}</DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex space-x-2">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleConfirm}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

// Main Dashboard Component
export default function InventoryControlDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-blue-900">Inventory Alert: Stock Level Management Impact</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input className="pl-10 w-64" placeholder="Search..." />
            </div>
            <Button variant="outline" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>May 11, 2025</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <AlertHeader />
            <KeyMetrics />
            <AlertDetails />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StockShortageAnalysis />
              <SupplierShortageAnalysis />
            </div>

            <OperationalImpact />
            <ImpactTimeline />
            <OrderBacklog />
            <ResolutionOptions />
          </div>

          <div className="lg:col-span-1">
            <FacilityInfo />
          </div>
        </div>
      </main>
    </div>
  )
}

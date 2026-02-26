"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Zap, X } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from "recharts"

interface SolutionOverviewProps {
  onSubmit: () => void
}

export default function SolutionOverview({ onSubmit }: SolutionOverviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedActions, setSelectedActions] = useState<string[]>([])

  const supplierData = [
    {
      name: "Gourmet Creations",
      shipFrom: "ALBANY, UT",
      dc: "COLORADO",
      status: "Open",
      recommendedQuantity: 20,
    },
    {
      name: "Gourmet Creations",
      shipFrom: "CLOVIS, MO",
      dc: "KANSAS CITY",
      status: "Open",
      recommendedQuantity: 122,
    },
    {
      name: "Gourmet Creations",
      shipFrom: "DAYTON, WI",
      dc: "ILLINOIS",
      status: "Open",
      recommendedQuantity: 0,
    },
    {
      name: "Gourmet Creations",
      shipFrom: "ALBANY, UT",
      dc: "OREGON",
      status: "Open",
      recommendedQuantity: 287,
    },
    {
      name: "Gourmet Creations",
      shipFrom: "ALBANY, UT",
      dc: "HAWAII",
      status: "Open",
      recommendedQuantity: 8,
    },
    {
      name: "Gourmet Creations",
      shipFrom: "CLOVIS, MO",
      dc: "PELHAM",
      status: "Open",
      recommendedQuantity: 168,
    },
    {
      name: "Gourmet Creations",
      shipFrom: "DAYTON, WI",
      dc: "KENTUCKY",
      status: "Open",
      recommendedQuantity: 0,
    },
  ]

  const chartData = [
    { month: "Feb 2025", networkInventory: 4000, withRecommendedOrders: 4000 },
    { month: "Mar 2025", networkInventory: 5500, withRecommendedOrders: 5500 },
    { month: "Apr 2025", networkInventory: 3200, withRecommendedOrders: 4800 },
    { month: "May 2025", networkInventory: 2400, withRecommendedOrders: 2800 },
  ]

  const distributionActions = [
    "Ship 503 Cases to Dayton, WI",
    "Purchase 2821 Cases of SAUCE MINT CHOCOLATE COOKIE",
    "Ship 746 Cases to Clovis, MO",
    "Ship 562 Cases to Gary, PA",
    "Ship 354 Cases to Gary, PA",
    "Ship 1237 Cases to Albany, UT",
    "Ship 1228 Cases to Albany, UT",
    "Produce 2804 Cases of SAUCE MINT CHOCOLATE COOKIE",
    "Ship 792 Cases to Clovis, MO",
    "Ship 487 Cases to Dayton, WI",
  ]

  useEffect(() => {
    // Pre-select all actions when modal opens
    if (isModalOpen) {
      setSelectedActions([...distributionActions])
    }
  }, [isModalOpen])

  const handleExecuteOrders = () => {
    setIsModalOpen(true)
  }

  const handleRemoveAction = (action: string) => {
    setSelectedActions(selectedActions.filter((a) => a !== action))
  }

  const handleSubmit = () => {
    // Close the modal
    setIsModalOpen(false)

    // Call the parent component's onSubmit handler to change the view
    onSubmit()
  }

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center">
              <span className="mr-2">📊</span>
              Solution Overview - Existing Inventory at Suppliers & DCs
            </CardTitle>
            <Button className="bg-green-600 hover:bg-green-700" onClick={handleExecuteOrders}>
              <Zap className="w-4 h-4 mr-2" />
              Execute Recommended Orders
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="h-64 bg-white rounded-lg border p-4">
              <ChartContainer
                config={{
                  networkInventory: {
                    label: "Network Inventory",
                    color: "hsl(var(--chart-1))",
                  },
                  withRecommendedOrders: {
                    label: "With Recommended Orders",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-full w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ReferenceLine x="Mar 2025" stroke="#ef4444" strokeDasharray="5 5" label="Today" />
                    <Line
                      type="monotone"
                      dataKey="networkInventory"
                      stroke="var(--color-networkInventory)"
                      strokeWidth={2}
                      fill="var(--color-networkInventory)"
                      fillOpacity={0.2}
                    />
                    <Line
                      type="monotone"
                      dataKey="withRecommendedOrders"
                      stroke="var(--color-withRecommendedOrders)"
                      strokeWidth={2}
                      strokeDasharray="5 3"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            <div className="overflow-auto max-h-64">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier Name</TableHead>
                    <TableHead>Supplier Ship From</TableHead>
                    <TableHead>DC</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Recommended Quantity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supplierData.map((supplier, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-gray-50"}>
                      <TableCell>{supplier.name}</TableCell>
                      <TableCell>{supplier.shipFrom}</TableCell>
                      <TableCell>{supplier.dc}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          {supplier.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{supplier.recommendedQuantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Execute Distribution Solution Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Execute Distribution Solution</DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Distribution Solution *</h4>
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {distributionActions.map((action, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-2 rounded ${
                      selectedActions.includes(action) ? "bg-purple-100" : "bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`action-${index}`}
                        checked={selectedActions.includes(action)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedActions([...selectedActions, action])
                          } else {
                            setSelectedActions(selectedActions.filter((a) => a !== action))
                          }
                        }}
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <label
                        htmlFor={`action-${index}`}
                        className="text-sm font-medium cursor-pointer flex items-center"
                      >
                        {action.startsWith("Ship") && (
                          <span className="mr-1 text-xs bg-purple-600 text-white p-1 rounded">🚚</span>
                        )}
                        {action.startsWith("Produce") && (
                          <span className="mr-1 text-xs bg-purple-600 text-white p-1 rounded">🏭</span>
                        )}
                        {action.startsWith("Purchase") && (
                          <span className="mr-1 text-xs bg-purple-600 text-white p-1 rounded">🛒</span>
                        )}
                        {action}
                      </label>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => handleRemoveAction(action)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                Submit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

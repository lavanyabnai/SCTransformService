"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Zap, TrendingUp, Info, X } from "lucide-react"

export default function AllocationSolutions() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isUpdatingData, setIsUpdatingData] = useState(false)
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([])

  const allocationAlerts = [
    "9039-10332-2025-03-06",
    "13931-10332-2025-03-06",
    "9042-10332-2025-03-06",
    "13132-10332-2025-03-06",
    "10544-10332-2025-03-06",
    "13960-10332-2025-03-06",
    "5147-10332-2025-03-06",
    "11946-10332-2025-03-06",
    "7846-10332-2025-03-06",
    "8433-10332-2025-03-06",
    "5053-10332-2025-03-06",
    "7729-10332-2025-03-06",
    "9008-10332-2025-03-06",
    "13308-10332-2025-03-06",
    "9009-10332-2025-03-06",
    "9437-10332-2025-03-06",
  ]

  const solutionsData = [
    {
      title: "Cancel / Reduce Individual Sales Order Quantities to the Minimum - No Transfer Needed",
      originDC: "No value",
      destinationDC: "OREGON",
      freightCost: "No value",
      transferNotStrictlyNeeded: "Yes",
      potentialUpsideRevenue: "No value",
      type: "cancel",
    },
    {
      title: "Transfer Quantity to Fulfill All Orders",
      originDC: "BRITISH CO.",
      destinationDC: "OREGON",
      freightCost: "$901.32",
      transferNotStrictlyNeeded: "Yes",
      potentialUpsideRevenue: "$9,178.68",
      type: "transfer",
    },
    {
      title: "Transfer Quantity to Fulfill All Orders",
      originDC: "SACRAMENTO",
      destinationDC: "OREGON",
      freightCost: "$1,704.44",
      transferNotStrictlyNeeded: "Yes",
      potentialUpsideRevenue: "$8,375.56",
      type: "transfer",
    },
  ]

  const handleExecuteSolution = () => {
    setIsModalOpen(true)
    setSelectedAlerts(allocationAlerts) // Pre-select all alerts
  }

  const handleSubmit = async () => {
    setIsProcessing(true)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setIsModalOpen(false)
    setShowSuccess(true)
    setIsUpdatingData(true)

    // Hide success message and stop updating after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
      setIsUpdatingData(false)
    }, 3000)
  }

  const handleAlertToggle = (alertId: string) => {
    setSelectedAlerts((prev) => (prev.includes(alertId) ? prev.filter((id) => id !== alertId) : [...prev, alertId]))
  }

  return (
    <>
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
          <span className="mr-2">✓</span>
          Edits successfully applied
          <Button
            variant="ghost"
            size="sm"
            className="ml-2 text-white hover:bg-green-600"
            onClick={() => setShowSuccess(false)}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      )}

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center">
              <span className="mr-2">🔄</span>
              Allocation Solutions
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={handleExecuteSolution}>
                <Zap className="w-3 h-3 mr-1" />
                Execute Solution
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={handleExecuteSolution}>
                <TrendingUp className="w-3 h-3 mr-1" />
                Execute Solution & Evaluate Network Inventory (Recommended)
              </Button>
              <Button variant="outline" size="sm">
                <Info className="w-3 h-3 mr-1" />
                Get more Details on Solution
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Minimum Supply Days Banner */}
          <div className="bg-purple-600 text-white p-3 rounded-lg">
            <p className="text-sm font-medium">
              Minimum Amount of Supply Days (= Allowed Demand) Needed: <span className="font-bold">3</span>
            </p>
          </div>

          {/* Solutions Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Title</TableHead>
                <TableHead>Origin DC</TableHead>
                <TableHead>Destination DC</TableHead>
                <TableHead>Freight Cost</TableHead>
                <TableHead>Transfer Not Strictly Needed</TableHead>
                <TableHead>Potential Upside Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {solutionsData.map((solution, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <span
                        className={`mr-2 px-2 py-1 rounded text-xs text-white ${
                          solution.type === "cancel" ? "bg-purple-600" : "bg-purple-600"
                        }`}
                      >
                        🔄
                      </span>
                      {solution.title}
                    </div>
                  </TableCell>
                  <TableCell>
                    {solution.originDC === "No value" ? (
                      <span className="text-gray-400 italic">{solution.originDC}</span>
                    ) : (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {solution.originDC}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      {solution.destinationDC}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {solution.freightCost === "No value" ? (
                      <span className="text-gray-400 italic">{solution.freightCost}</span>
                    ) : (
                      <span className="font-medium">{solution.freightCost}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      {solution.transferNotStrictlyNeeded}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {solution.potentialUpsideRevenue === "No value" ? (
                      <span className="text-gray-400 italic">{solution.potentialUpsideRevenue}</span>
                    ) : (
                      <span className="font-medium text-green-600">{solution.potentialUpsideRevenue}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Updating Data Indicator */}
          {isUpdatingData && (
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center text-gray-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Updating data...
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Cancel Allocation Alert Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              Cancel Allocation Alert
              <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          {isProcessing && (
            <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-4">
              <div className="flex items-center text-blue-700">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Applying edits...
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">Allocation Alerts *</h4>
              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto border rounded p-3">
                {allocationAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={alert}
                      checked={selectedAlerts.includes(alert)}
                      onCheckedChange={() => handleAlertToggle(alert)}
                      className="text-purple-600"
                    />
                    <label htmlFor={alert} className="text-sm text-purple-600 cursor-pointer">
                      {alert}
                    </label>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <X className="w-3 h-3 text-gray-400" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)} disabled={isProcessing}>
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isProcessing || selectedAlerts.length === 0}
                className="bg-green-600 hover:bg-green-700"
              >
                {isProcessing ? "Processing..." : "Submit"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

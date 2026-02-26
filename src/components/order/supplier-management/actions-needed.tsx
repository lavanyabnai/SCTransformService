"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Zap, Info } from "lucide-react"

export default function ActionsNeeded() {
  const actionsData = [
    {
      type: "Production Order",
      title: "Produce 3048 Cases of SAUCE MINT CHOCOLATE COOKIE",
      dueDate: "2025-03-23",
      status: "Instructions Sent",
      item: "SAUCE MINT CHOCOLATE COOKIE (10332)",
      quantity: 3048,
    },
    {
      type: "Distribution Order",
      title: "Ship 503 Cases to Dayton, WI",
      dueDate: "2025-03-27",
      status: "Instructions Sent",
      item: "SAUCE MINT CHOCOLATE COOKIE (10332)",
      quantity: 503,
    },
    {
      type: "Distribution Order",
      title: "Ship 746 Cases to Clovis, MO",
      dueDate: "2025-03-27",
      status: "Instructions Sent",
      item: "SAUCE MINT CHOCOLATE COOKIE (10332)",
      quantity: 746,
    },
    {
      type: "Distribution Order",
      title: "Ship 562 Cases to Gary, PA",
      dueDate: "2025-03-27",
      status: "Instructions Sent",
      item: "SAUCE MINT CHOCOLATE COOKIE (10332)",
      quantity: 562,
    },
    {
      type: "Distribution Order",
      title: "Ship 1237 Cases to Albany, UT",
      dueDate: "2025-03-27",
      status: "Instructions Sent",
      item: "SAUCE MINT CHOCOLATE COOKIE (10332)",
      quantity: 1237,
    },
    {
      type: "Production Order",
      title: "Produce 2821 Cases of SAUCE MINT CHOCOLATE COOKIE",
      dueDate: "2025-03-31",
      status: "Instructions Sent",
      item: "SAUCE MINT CHOCOLATE COOKIE (10332)",
      quantity: 2821,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2 text-blue-600" />
            <CardTitle className="text-sm">Actions Needed</CardTitle>
            <Badge variant="destructive" className="ml-2 bg-red-100 text-red-700">
              Total Actions needed: 36
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Zap className="w-3 h-3 mr-1" />
              Send Instructions
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Zap className="w-3 h-3 mr-1" />
              Send Instructions & Evaluate Network Inventory (Recommended)
            </Button>
            <Button variant="outline" size="sm">
              <Info className="w-3 h-3 mr-1" />
              Get more Details on Action
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Distribution Solution Title</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Wendy's Item</TableHead>
              <TableHead>Qty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {actionsData.map((action, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${
                      action.type === "Production Order" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"
                    }`}
                  >
                    {action.type}
                  </Badge>
                </TableCell>
                <TableCell>{action.title}</TableCell>
                <TableCell>{action.dueDate}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {action.status}
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center">
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center mr-1">
                      <span className="text-white text-xs">🍪</span>
                    </span>
                    {action.item}
                  </div>
                </TableCell>
                <TableCell>{action.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

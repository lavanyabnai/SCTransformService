"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function LinkedAlertsTable() {
  const alertsData = [
    {
      restaurant: "SAN MARCOS-4659",
      daysOfSupply: 6,
      totalCases: 2,
      totalCasesSupplyDays: 1,
      minCasesNeeded: 0,
      status: "Open",
      description: "No Action Taken On Alert Yet",
    },
    {
      restaurant: "CLIFTON-13531",
      daysOfSupply: 13,
      totalCases: 8,
      totalCasesSupplyDays: 1,
      minCasesNeeded: 0,
      status: "Open",
      description: "No Action Taken On Alert Yet",
    },
    {
      restaurant: "HOMESTEAD-3652",
      daysOfSupply: 35,
      totalCases: 1,
      totalCasesSupplyDays: 0,
      minCasesNeeded: 0,
      status: "Open",
      description: "No Action Taken On Alert Yet",
    },
    {
      restaurant: "BOZEMAN-11792",
      daysOfSupply: 2,
      totalCases: 5,
      totalCasesSupplyDays: 2,
      minCasesNeeded: 3,
      status: "Open",
      description: "No Action Taken On Alert Yet",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2">⚠️</span>
            <CardTitle className="text-sm">Linked Allocation Alerts</CardTitle>
          </div>
          <Badge variant="destructive" className="bg-red-100 text-red-700">
            Total Individual Alerts: 20
          </Badge>
        </div>
        <p className="text-xs text-gray-500">
          By evaluating whether to adjust Sales Orders, consider cancelling the ones with No Minimum Cases Needed
          (marked in the table in red) and downsizing the rest to the suggested quantity in green.
        </p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Restaurant</TableHead>
              <TableHead>Days Of Supply</TableHead>
              <TableHead>Total Cases</TableHead>
              <TableHead>Total Cases Supply Days</TableHead>
              <TableHead>Min Cases Needed</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alertsData.map((alert, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-gray-50"}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <span className="mr-2 w-4 h-4 bg-orange-500 rounded text-white text-xs flex items-center justify-center">
                      🏪
                    </span>
                    {alert.restaurant}
                  </div>
                </TableCell>
                <TableCell>{alert.daysOfSupply}</TableCell>
                <TableCell>{alert.totalCases}</TableCell>
                <TableCell>{alert.totalCasesSupplyDays}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      alert.minCasesNeeded === 0 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                    }`}
                  >
                    {alert.minCasesNeeded}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {alert.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-600">{alert.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

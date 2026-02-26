"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Edit, Trash2 } from "lucide-react"

export default function SupplierBreakdown() {
  const supplierData = [
    {
      supplierName: "Gourmet Creations",
      shipFrom: "ALBANY, UT",
      dcs: [
        { name: "ARIZONA", cases: -37, cost: -1289, recommended: 0 },
        { name: "COLORADO", cases: 0, cost: 0, recommended: 0 },
        { name: "EASTVILLE", cases: 0, cost: 0, recommended: 0 },
        { name: "IDAHO", cases: 0, cost: 0, recommended: 0 },
        { name: "MONTANA", cases: 0, cost: 0, recommended: 0 },
        { name: "OREGON", cases: -110, cost: -3834, recommended: 0 },
        { name: "SACRAMENTO", cases: 0, cost: 0, recommended: 0 },
        { name: "UTAH", cases: -199, cost: -6935, recommended: 0 },
      ],
    },
    {
      supplierName: "Gourmet Creations",
      shipFrom: "CLOVIS, MO",
      dcs: [{ name: "", cases: -2048, cost: -66792, recommended: 0 }],
    },
    {
      supplierName: "Gourmet Creations",
      shipFrom: "DAYTON, WI",
      dcs: [{ name: "", cases: -3940, cost: -127503, recommended: 0 }],
    },
    {
      supplierName: "Gourmet Creations",
      shipFrom: "GARY, PA",
      dcs: [{ name: "", cases: -438, cost: -14110, recommended: 0 }],
    },
  ]

  const totalCases = -6772
  const totalCost = -220463

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center">
          <span className="mr-2">🏭</span>
          Supplier Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Supplier Name</TableHead>
              <TableHead>Supplier Ship From</TableHead>
              <TableHead>DC Name</TableHead>
              <TableHead>Cases (Short/Long)</TableHead>
              <TableHead>Cost (Short/Long)</TableHead>
              <TableHead>Recommended Order Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplierData.map((supplier, supplierIndex) =>
              supplier.dcs.map((dc, dcIndex) => (
                <TableRow key={`${supplierIndex}-${dcIndex}`} className="bg-red-50">
                  <TableCell className={dcIndex === 0 ? "font-medium" : ""}>
                    {dcIndex === 0 ? supplier.supplierName : ""}
                  </TableCell>
                  <TableCell className={dcIndex === 0 ? "font-medium" : ""}>
                    {dcIndex === 0 ? supplier.shipFrom : ""}
                  </TableCell>
                  <TableCell className="font-medium">{dc.name}</TableCell>
                  <TableCell className="text-red-600">{dc.cases !== 0 ? dc.cases.toLocaleString() : "0"}</TableCell>
                  <TableCell className="text-red-600">
                    {dc.cost !== 0 ? `$${dc.cost.toLocaleString()}` : "$0"}
                  </TableCell>
                  <TableCell className="flex items-center justify-between">
                    {dc.recommended}
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )),
            )}
            {/* Total Row */}
            <TableRow className="font-bold bg-gray-100 border-t-2">
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-red-600">{totalCases.toLocaleString()}</TableCell>
              <TableCell className="text-red-600">${totalCost.toLocaleString()}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

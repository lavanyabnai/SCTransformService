"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, RefreshCw } from "lucide-react"

interface ConsolidatedReportData {
  id: number
  partNumber: string
  productCategory: string
  productDescription: string
  cv: string
  mfg: string
  mfgPartNumber: string
  unitPrice: number
  supplierName: string
  supplierPartNumber: string
  leadTime: number
  safetyStock: number
  reorderPoint: number
  maxStock: number
  status: string
  weeklyData: (number | string)[]
  rowColor: string
}

// Generate weekly date headers for 2017
const generateWeekHeaders = (): string[] => {
  const headers = []
  const startDate = new Date("2017-01-02") // Starting Monday of 2017

  for (let i = 0; i < 52; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i * 7)
    const month = currentDate.toLocaleDateString("en-US", { month: "short" })
    const day = currentDate.getDate()
    headers.push(`${month} ${day}`)
  }

  return headers
}

const weekHeaders = generateWeekHeaders()

// Sample data with color coding
const consolidatedData: ConsolidatedReportData[] = [
  {
    id: 1,
    partNumber: "S1000-1",
    productCategory: "System",
    productDescription: "System Assembly",
    cv: "A",
    mfg: "MFG001",
    mfgPartNumber: "MFG-S1000",
    unitPrice: 1250.0,
    supplierName: "Supplier A",
    supplierPartNumber: "SUP-S1000",
    leadTime: 14,
    safetyStock: 50,
    reorderPoint: 100,
    maxStock: 500,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 1000) + 100),
    rowColor: "bg-yellow-100",
  },
  {
    id: 2,
    partNumber: "S1000-2",
    productCategory: "System",
    productDescription: "System Component",
    cv: "B",
    mfg: "MFG001",
    mfgPartNumber: "MFG-S1002",
    unitPrice: 850.0,
    supplierName: "Supplier A",
    supplierPartNumber: "SUP-S1002",
    leadTime: 10,
    safetyStock: 30,
    reorderPoint: 75,
    maxStock: 300,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 800) + 50),
    rowColor: "bg-yellow-100",
  },
  {
    id: 3,
    partNumber: "T1000-1",
    productCategory: "Tablet",
    productDescription: "Tablet Device",
    cv: "A",
    mfg: "MFG002",
    mfgPartNumber: "MFG-T1000",
    unitPrice: 450.0,
    supplierName: "Supplier B",
    supplierPartNumber: "SUP-T1000",
    leadTime: 21,
    safetyStock: 100,
    reorderPoint: 200,
    maxStock: 1000,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 1500) + 200),
    rowColor: "bg-green-100",
  },
  {
    id: 4,
    partNumber: "T1000-2",
    productCategory: "Tablet",
    productDescription: "Tablet Accessory",
    cv: "C",
    mfg: "MFG002",
    mfgPartNumber: "MFG-T1002",
    unitPrice: 75.0,
    supplierName: "Supplier B",
    supplierPartNumber: "SUP-T1002",
    leadTime: 7,
    safetyStock: 200,
    reorderPoint: 400,
    maxStock: 2000,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 2000) + 300),
    rowColor: "bg-green-100",
  },
  {
    id: 5,
    partNumber: "L1000-1",
    productCategory: "Laptop",
    productDescription: "Laptop Computer",
    cv: "A",
    mfg: "MFG003",
    mfgPartNumber: "MFG-L1000",
    unitPrice: 850.0,
    supplierName: "Supplier C",
    supplierPartNumber: "SUP-L1000",
    leadTime: 28,
    safetyStock: 50,
    reorderPoint: 100,
    maxStock: 500,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 800) + 100),
    rowColor: "bg-blue-100",
  },
  {
    id: 6,
    partNumber: "L1000-2",
    productCategory: "Laptop",
    productDescription: "Laptop Battery",
    cv: "B",
    mfg: "MFG003",
    mfgPartNumber: "MFG-L1002",
    unitPrice: 120.0,
    supplierName: "Supplier C",
    supplierPartNumber: "SUP-L1002",
    leadTime: 14,
    safetyStock: 150,
    reorderPoint: 300,
    maxStock: 1500,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 1200) + 200),
    rowColor: "bg-blue-100",
  },
  {
    id: 7,
    partNumber: "C1000-1",
    productCategory: "Component",
    productDescription: "Circuit Board",
    cv: "A",
    mfg: "MFG004",
    mfgPartNumber: "MFG-C1000",
    unitPrice: 25.0,
    supplierName: "Supplier D",
    supplierPartNumber: "SUP-C1000",
    leadTime: 35,
    safetyStock: 500,
    reorderPoint: 1000,
    maxStock: 5000,
    status: "Critical",
    weeklyData: Array.from({ length: 52 }, (_, i) => (i < 10 ? "N/A" : Math.floor(Math.random() * 3000) + 500)),
    rowColor: "bg-orange-100",
  },
  {
    id: 8,
    partNumber: "C1000-2",
    productCategory: "Component",
    productDescription: "Memory Module",
    cv: "B",
    mfg: "MFG004",
    mfgPartNumber: "MFG-C1002",
    unitPrice: 85.0,
    supplierName: "Supplier D",
    supplierPartNumber: "SUP-C1002",
    leadTime: 21,
    safetyStock: 200,
    reorderPoint: 400,
    maxStock: 2000,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 1500) + 300),
    rowColor: "bg-orange-100",
  },
  {
    id: 9,
    partNumber: "P1000-1",
    productCategory: "Phone",
    productDescription: "Smartphone",
    cv: "A",
    mfg: "MFG005",
    mfgPartNumber: "MFG-P1000",
    unitPrice: 650.0,
    supplierName: "Supplier E",
    supplierPartNumber: "SUP-P1000",
    leadTime: 42,
    safetyStock: 100,
    reorderPoint: 200,
    maxStock: 1000,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 1200) + 150),
    rowColor: "bg-purple-100",
  },
  {
    id: 10,
    partNumber: "P1000-2",
    productCategory: "Phone",
    productDescription: "Phone Case",
    cv: "C",
    mfg: "MFG005",
    mfgPartNumber: "MFG-P1002",
    unitPrice: 15.0,
    supplierName: "Supplier E",
    supplierPartNumber: "SUP-P1002",
    leadTime: 7,
    safetyStock: 1000,
    reorderPoint: 2000,
    maxStock: 10000,
    status: "Active",
    weeklyData: Array.from({ length: 52 }, (_, _i) => Math.floor(Math.random() * 5000) + 1000),
    rowColor: "bg-purple-100",
  },
]

export default function ConsolidatedReport() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedView, setSelectedView] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredData = consolidatedData.filter((item) => {
    const matchesSearch =
      item.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productDescription.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.productCategory === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Active
          </Badge>
        )
      case "Critical":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-700">
            Critical
          </Badge>
        )
      case "Discontinued":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-700">
            Discontinued
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatValue = (value: number | string): string => {
    if (value === "N/A") return "N/A"
    if (typeof value === "number") {
      return value.toLocaleString()
    }
    return value.toString()
  }

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <CardTitle className="text-2xl font-bold">Consolidated Report</CardTitle>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <Select value={selectedView} onValueChange={setSelectedView}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Select View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Items</SelectItem>
                  <SelectItem value="active">Active Only</SelectItem>
                  <SelectItem value="critical">Critical Only</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="System">System</SelectItem>
                  <SelectItem value="Tablet">Tablet</SelectItem>
                  <SelectItem value="Laptop">Laptop</SelectItem>
                  <SelectItem value="Component">Component</SelectItem>
                  <SelectItem value="Phone">Phone</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                Apply Filter
              </Button>

              <Button variant="outline" size="sm">
                Clear Filter
              </Button>

              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search parts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-40"
                />
              </div>

              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>

              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-500 hover:bg-blue-500">
                  <TableHead className="text-white font-semibold sticky left-0 bg-blue-500 z-10 min-w-[100px]">
                    Part Number
                  </TableHead>
                  <TableHead className="text-white font-semibold sticky left-[100px] bg-blue-500 z-10 min-w-[120px]">
                    Product Category
                  </TableHead>
                  <TableHead className="text-white font-semibold sticky left-[220px] bg-blue-500 z-10 min-w-[200px]">
                    Product Description
                  </TableHead>
                  <TableHead className="text-white font-semibold min-w-[60px]">CV</TableHead>
                  <TableHead className="text-white font-semibold min-w-[80px]">MFG</TableHead>
                  <TableHead className="text-white font-semibold min-w-[120px]">MFG Part Number</TableHead>
                  <TableHead className="text-white font-semibold min-w-[100px]">Unit Price</TableHead>
                  <TableHead className="text-white font-semibold min-w-[120px]">Supplier Name</TableHead>
                  <TableHead className="text-white font-semibold min-w-[120px]">Supplier Part Number</TableHead>
                  <TableHead className="text-white font-semibold min-w-[80px]">Lead Time</TableHead>
                  <TableHead className="text-white font-semibold min-w-[100px]">Safety Stock</TableHead>
                  <TableHead className="text-white font-semibold min-w-[100px]">Reorder Point</TableHead>
                  <TableHead className="text-white font-semibold min-w-[100px]">Max Stock</TableHead>
                  <TableHead className="text-white font-semibold min-w-[80px]">Status</TableHead>

                  {/* Weekly Data Headers */}
                  {weekHeaders.slice(0, 20).map((week, index) => (
                    <TableHead key={index} className="text-white font-semibold text-center min-w-[80px]">
                      {week}
                    </TableHead>
                  ))}
                  <TableHead className="text-white font-semibold text-center min-w-[60px]">...</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id} className={item.rowColor}>
                    <TableCell className="font-medium sticky left-0 bg-inherit z-10">{item.partNumber}</TableCell>
                    <TableCell className="sticky left-[100px] bg-inherit z-10">{item.productCategory}</TableCell>
                    <TableCell className="sticky left-[220px] bg-inherit z-10">{item.productDescription}</TableCell>
                    <TableCell className="text-center">{item.cv}</TableCell>
                    <TableCell>{item.mfg}</TableCell>
                    <TableCell>{item.mfgPartNumber}</TableCell>
                    <TableCell className="text-right">${item.unitPrice.toFixed(2)}</TableCell>
                    <TableCell>{item.supplierName}</TableCell>
                    <TableCell>{item.supplierPartNumber}</TableCell>
                    <TableCell className="text-center">{item.leadTime} days</TableCell>
                    <TableCell className="text-right">{item.safetyStock.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{item.reorderPoint.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{item.maxStock.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>

                    {/* Weekly Data */}
                    {item.weeklyData.slice(0, 20).map((value, index) => (
                      <TableCell key={index} className="text-center">
                        {formatValue(value)}
                      </TableCell>
                    ))}
                    <TableCell className="text-center text-muted-foreground">...</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Color Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-100 border rounded"></div>
              <span className="text-sm">System Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 border rounded"></div>
              <span className="text-sm">Tablet Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 border rounded"></div>
              <span className="text-sm">Laptop Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-100 border rounded"></div>
              <span className="text-sm">Components</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-100 border rounded"></div>
              <span className="text-sm">Phone Products</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

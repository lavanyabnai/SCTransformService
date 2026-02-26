"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Calendar, Package, TrendingUp, Users } from "lucide-react"

interface OrderData {
  id: number
  customerId: string
  numberLine: string
  order: string
  site: string
  type: string
  priority: string
  tranSeq: string
  due: string
  available: string
  late: number
  dueDate: string
  part: string
  siteCode: string
  quantity: number
  onTimeQuantity: number
  onTimePercent: string
  remarks: string
}

const orderData: OrderData[] = [
  {
    id: 1,
    customerId: "C101",
    numberLine: "S1012-P1000-0013",
    order: "S1012-P1000",
    site: "R1001",
    type: "Actual",
    priority: "Med",
    tranSeq: "4.906",
    due: "06-26-17",
    available: "08-07-17",
    late: 42,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 13053,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 2,
    customerId: "C101",
    numberLine: "S1013-P1000-0013",
    order: "S1013-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "4.906",
    due: "06-26-17",
    available: "08-07-17",
    late: 42,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 13053,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 3,
    customerId: "C101",
    numberLine: "S1014-P1000-0013",
    order: "S1014-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "8.326",
    due: "07-03-17",
    available: "08-07-17",
    late: 35,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 13233,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 4,
    customerId: "C101",
    numberLine: "S1015-P1000-0013",
    order: "S1015-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "8.007",
    due: "07-10-17",
    available: "08-07-17",
    late: 28,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 4877,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 5,
    customerId: "C101",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-17-17",
    available: "08-07-17",
    late: 21,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 14577,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 6,
    customerId: "C101",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-24-17",
    available: "08-07-17",
    late: 14,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 14577,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 7,
    customerId: "C101",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-31-17",
    available: "08-07-17",
    late: 7,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 14577,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 8,
    customerId: "C102",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "R1001",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "06-12-17",
    available: "08-07-17",
    late: 56,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 72119,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 9,
    customerId: "C102",
    numberLine: "S1023-P1000-0013",
    order: "S1023-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "5.277",
    due: "06-12-17",
    available: "08-07-17",
    late: 56,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 61033,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 10,
    customerId: "C102",
    numberLine: "S1024-P1000-0013",
    order: "S1024-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "6.693",
    due: "07-04-17",
    available: "08-07-17",
    late: 34,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 43393,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 11,
    customerId: "C102",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-10-17",
    available: "08-07-17",
    late: 28,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 54821,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 12,
    customerId: "C102",
    numberLine: "S1025-P1000-0013",
    order: "S1025-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "8.402",
    due: "07-11-17",
    available: "08-07-17",
    late: 27,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 16961,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 13,
    customerId: "C102",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-17-17",
    available: "08-07-17",
    late: 21,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 54821,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 14,
    customerId: "C102",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-24-17",
    available: "08-07-17",
    late: 14,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 54821,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 15,
    customerId: "C102",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-31-17",
    available: "08-07-17",
    late: 7,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 54821,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 16,
    customerId: "C103",
    numberLine: "S1032-P1000-0013",
    order: "S1032-P1000",
    site: "R1001",
    type: "Actual",
    priority: "Med",
    tranSeq: "4.236",
    due: "06-21-17",
    available: "08-07-17",
    late: 47,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 24431,
    onTimeQuantity: 2410,
    onTimePercent: "99%",
    remarks: "1",
  },
  {
    id: 17,
    customerId: "C103",
    numberLine: "S1033-P1000-0013",
    order: "S1033-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "5.682",
    due: "06-28-17",
    available: "08-07-17",
    late: 40,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 23551,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 18,
    customerId: "C103",
    numberLine: "S1034-P1000-0013",
    order: "S1034-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "7.123",
    due: "07-05-17",
    available: "08-07-17",
    late: 33,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 19533,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 19,
    customerId: "C103",
    numberLine: "S1035-P1000-0013",
    order: "S1035-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "8.833",
    due: "07-12-17",
    available: "08-07-17",
    late: 26,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 5041,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 20,
    customerId: "C103",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-17-17",
    available: "08-07-17",
    late: 21,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 25977,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 21,
    customerId: "C103",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-24-17",
    available: "08-07-17",
    late: 17,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 25977,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 22,
    customerId: "C103",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-31-17",
    available: "08-07-17",
    late: 7,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 25977,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 23,
    customerId: "C111",
    numberLine: "S1110-P1000-0013",
    order: "S1110-P1000",
    site: "R1001",
    type: "Actual",
    priority: "Med",
    tranSeq: "4.186",
    due: "06-19-17",
    available: "06-05-17",
    late: -14,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 15141,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 24,
    customerId: "C111",
    numberLine: "S1111-P1000-0013",
    order: "S1111-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "4.591",
    due: "06-23-17",
    available: "08-07-17",
    late: 45,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 33567,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 25,
    customerId: "C111",
    numberLine: "S1112-P1000-0013",
    order: "S1112-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "6.011",
    due: "06-30-17",
    available: "08-07-17",
    late: 38,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 23137,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 26,
    customerId: "C111",
    numberLine: "S1113-P1000-0013",
    order: "S1113-P1000",
    site: "",
    type: "Actual",
    priority: "Med",
    tranSeq: "7.500",
    due: "07-07-17",
    available: "08-07-17",
    late: 31,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 13793,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 27,
    customerId: "C111",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-10-17",
    available: "08-07-17",
    late: 28,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 46751,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 28,
    customerId: "C111",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-17-17",
    available: "08-07-17",
    late: 21,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 46751,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
  {
    id: 29,
    customerId: "C111",
    numberLine: "Demand Plan",
    order: "Demand Plan",
    site: "",
    type: "Consensus/Forecast",
    priority: "Forecast",
    tranSeq: "0",
    due: "07-24-17",
    available: "08-07-17",
    late: 14,
    dueDate: "P1000",
    part: "R1001",
    siteCode: "R1001",
    quantity: 46751,
    onTimeQuantity: 0,
    onTimePercent: "0%",
    remarks: "1",
  },
]

const sortOptions = [
  { value: "customer", label: "Customer ID" },
  { value: "due", label: "Due Date" },
  { value: "priority", label: "Priority" },
  { value: "late", label: "Days Late" },
  { value: "quantity", label: "Quantity" },
]

const getCellColor = (type: string, priority: string, late: number): string => {
  if (late < 0) return "bg-green-100" // Early delivery
  if (late > 40) return "bg-red-100" // Very late
  if (late > 20) return "bg-yellow-100" // Late
  if (type === "Actual" && priority === "Med") return "bg-blue-50"
  return ""
}

const getLateCellColor = (late: number): string => {
  if (late < 0) return "bg-green-500 text-white" // Early
  if (late > 40) return "bg-red-500 text-white" // Very late
  if (late > 20) return "bg-yellow-400 text-black" // Late
  return ""
}

export default function OrderManagementTable() {
  const [sortBy, setSortBy] = useState("customer")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = orderData.filter(
    (order) =>
      order.customerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.numberLine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.order.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case "customer":
        return a.customerId.localeCompare(b.customerId)
      case "due":
        return new Date(a.due).getTime() - new Date(b.due).getTime()
      case "priority":
        return a.priority.localeCompare(b.priority)
      case "late":
        return b.late - a.late
      case "quantity":
        return b.quantity - a.quantity
      default:
        return 0
    }
  })

  const actualOrders = sortedData.filter((o) => o.type === "Actual").length
  const earlyDeliveries = sortedData.filter((o) => o.late < 0).length
  const lateOrders = sortedData.filter((o) => o.late > 20).length
  const totalQuantity = sortedData.reduce((sum, o) => sum + o.quantity, 0)

  return (
    <div className="w-full space-y-6">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Package className="h-6 w-6" />
                Order Management Dashboard
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Fact Class with ABC Classification of Finished Goods Work in Progress
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Label htmlFor="search" className="text-sm font-medium">
                  Search:
                </Label>
                <Input
                  id="search"
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-40"
                />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="text-sm font-medium">
                  Sort By:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort" className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Actual Orders</p>
                <p className="text-2xl font-bold text-blue-600">{actualOrders}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Early Deliveries</p>
                <p className="text-2xl font-bold text-green-600">{earlyDeliveries}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Late Orders</p>
                <p className="text-2xl font-bold text-red-600">{lateOrders}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Quantity</p>
                <p className="text-2xl font-bold text-gray-600">{totalQuantity.toLocaleString()}</p>
              </div>
              <Package className="h-8 w-8 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Order Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                  <TableHead className="text-primary-foreground font-semibold">#</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Customer ID</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Number/Line</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Order</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Site</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Type</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Priority</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">TranSeq</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Due</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Available</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Days Late</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Past Due</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Part</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Site</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Quantity</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">On Time Qty</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">On Time %</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedData.map((order, index) => (
                  <TableRow key={order.id} className={getCellColor(order.type, order.priority, order.late)}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{order.customerId}</TableCell>
                    <TableCell>{order.numberLine}</TableCell>
                    <TableCell>{order.order}</TableCell>
                    <TableCell>{order.site}</TableCell>
                    <TableCell>
                      <Badge variant={order.type === "Actual" ? "default" : "secondary"}>{order.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={order.priority === "Med" ? "default" : "outline"}>{order.priority}</Badge>
                    </TableCell>
                    <TableCell>{order.tranSeq}</TableCell>
                    <TableCell>{order.due}</TableCell>
                    <TableCell>{order.available}</TableCell>
                    <TableCell className={getLateCellColor(order.late)}>{order.late}</TableCell>
                    <TableCell>{order.dueDate}</TableCell>
                    <TableCell>{order.part}</TableCell>
                    <TableCell>{order.siteCode}</TableCell>
                    <TableCell className="text-right font-medium">{order.quantity.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{order.onTimeQuantity.toLocaleString()}</TableCell>
                    <TableCell className="text-center">{order.onTimePercent}</TableCell>
                    <TableCell>{order.remarks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Legend Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Dashboard Legend & Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Color Coding:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm">Green: Early delivery (negative days late)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                    <span className="text-sm">Yellow: Late delivery (20-40 days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm">Red: Very late delivery (40+ days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-50 border rounded"></div>
                    <span className="text-sm">Blue: Actual medium priority orders</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Badge Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Actual</Badge>
                  <Badge variant="secondary">Consensus/Forecast</Badge>
                  <Badge variant="default">Med Priority</Badge>
                  <Badge variant="outline">Forecast</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Order Types:</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Actual:</strong> Confirmed customer orders with specific delivery dates
                  </div>
                  <div>
                    <strong>Consensus/Forecast:</strong> Demand planning forecasts for future periods
                  </div>
                  <div>
                    <strong>Priority Levels:</strong> Med (Medium), Forecast (Planning priority)
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Key Metrics:</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Days Late:</strong> Calculated difference between due date and available date
                  </div>
                  <div>
                    <strong>On Time %:</strong> Percentage of quantity delivered on schedule
                  </div>
                  <div>
                    <strong>TranSeq:</strong> Transaction sequence number for order tracking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

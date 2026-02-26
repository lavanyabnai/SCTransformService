"use client"

import { useState } from "react"
import { Plus, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { alertsData } from "./alerts-data"

export function FinancialAlertsDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([])

  const filteredAlerts = alertsData.filter(
    (alert) =>
      alert.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSelectAll = () => {
    if (selectedAlerts.length === filteredAlerts.length) {
      setSelectedAlerts([])
    } else {
      setSelectedAlerts(filteredAlerts.map((alert) => alert.id))
    }
  }

  const handleSelectAlert = (id: string) => {
    if (selectedAlerts.includes(id)) {
      setSelectedAlerts(selectedAlerts.filter((alertId) => alertId !== id))
    } else {
      setSelectedAlerts([...selectedAlerts, id])
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "text-amber-500"
      case "Pending":
        return "text-blue-500"
      case "Resolved":
        return "text-green-500"
      case "Backlog":
        return "text-red-500"
      case "Canceled":
        return "text-gray-500"
      default:
        return ""
    }
  }

  const getLabelColor = (label: string) => {
    switch (label) {
      case "Accounts Payable":
        return "bg-purple-100 text-purple-800"
      case "Accounts Receivable":
        return "bg-blue-100 text-blue-800"
      case "Inventory":
        return "bg-pink-100 text-pink-800"
      case "Logistics":
        return "bg-indigo-100 text-indigo-800"
      case "Demand Planning":
        return "bg-violet-100 text-violet-800"
      case "Warehousing":
        return "bg-slate-100 text-slate-800"
      case "Sourcing":
        return "bg-cyan-100 text-cyan-800"
      case "Cash Flow":
        return "bg-emerald-100 text-emerald-800"
      case "Margin":
        return "bg-amber-100 text-amber-800"
      case "Working Capital":
        return "bg-lime-100 text-lime-800"
      case "Tariffs":
        return "bg-rose-100 text-rose-800"
      case "EBITDA":
        return "bg-teal-100 text-teal-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (


    <div className="space-y-4">
      {/* <div className="flex items-center justify-between">
         <h2 className="text-2xl font-semibold">Financial Alerts</h2> 
        <div className="flex items-center gap-2">
          <Button variant="outline">Export</Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Alert
          </Button>
        </div>
      </div> */}

      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Filter SKU, title, or alert details..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Filter <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Alerts</DropdownMenuItem>
            <DropdownMenuItem>In Progress</DropdownMenuItem>
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Resolved</DropdownMenuItem>
            <DropdownMenuItem>Backlog</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border max-w-screen-6xl mx-auto w-full h-screen">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={filteredAlerts.length > 0 && selectedAlerts.length === filteredAlerts.length}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Label</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>DC</TableHead>
              <TableHead>Store</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[300px]">Title</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead className="w-[300px]">Resolution</TableHead>
              <TableHead>Options</TableHead>
              <TableHead>Tasks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAlerts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={11} className="h-24 text-center">
                  No alerts found.
                </TableCell>
              </TableRow>
            ) : (
              filteredAlerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedAlerts.includes(alert.id)}
                      onCheckedChange={() => handleSelectAlert(alert.id)}
                      aria-label={`Select ${alert.sku}`}
                    />
                  </TableCell>
                  <TableCell>
                    <Badge className={getLabelColor(alert.label)}>{alert.label}</Badge>
                  </TableCell>
                  <TableCell>{alert.sku}</TableCell>
                  <TableCell>{alert.dc}</TableCell>
                  <TableCell>{alert.store}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div
                        className={`mr-2 h-2 w-2 rounded-full ${
                          alert.status === "In Progress"
                            ? "bg-amber-500"
                            : alert.status === "Pending"
                              ? "bg-blue-500"
                              : alert.status === "Resolved"
                                ? "bg-green-500"
                                : alert.status === "Backlog"
                                  ? "bg-red-500"
                                  : "bg-gray-500"
                        }`}
                      />
                      <span className={getStatusColor(alert.status)}>{alert.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>{alert.title}</TableCell>
                  <TableCell>{alert.risk}</TableCell>
                  <TableCell>{alert.resolution}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="bg-yellow-50 border border-yellow-500 text-yellow-500">
                      Open Event
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button size="icon" variant="ghost" className="h-8 w-8 bg-blue-500 text-white hover:bg-blue-600">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {selectedAlerts.length} of {filteredAlerts.length} row(s) selected.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

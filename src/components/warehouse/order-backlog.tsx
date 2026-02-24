import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Package, AlertTriangle, Clock } from "lucide-react"

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
    priority: "High",
    status: "At Risk",
    promisedDate: "May 12, 2025",
    delay: "Potential",
  },
]

export default function OrderBacklog() {
  return (
    <div>
      <div className="flex items-center mb-4">
        <Package className="h-5 w-5 text-blue-900 mr-2" />
        <h2 className="text-xl font-semibold text-blue-900">Order Backlog</h2>
      </div>

      <div className="bg-white border rounded-lg">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              <span className="font-medium">237 orders affected (showing top 5 by priority)</span>
            </div>
            <Badge variant="outline" className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              Avg Delay: 36 hours
            </Badge>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Promised Date</TableHead>
              <TableHead>Delay</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      order.priority === "Critical"
                        ? "bg-red-500"
                        : order.priority === "High"
                          ? "bg-orange-500"
                          : "bg-yellow-500"
                    }
                  >
                    {order.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={order.status === "Delayed" ? "destructive" : "outline"}
                    className={order.status === "At Risk" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : ""}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.promisedDate}</TableCell>
                <TableCell
                  className={
                    order.delay === "Expected"
                      ? "text-orange-500 font-medium"
                      : order.delay === "Potential"
                        ? "text-yellow-500 font-medium"
                        : "text-red-500 font-medium"
                  }
                >
                  {order.delay}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="p-4 border-t bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Critical Orders</span>
              <span className="text-lg font-medium">42</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">High Priority Orders</span>
              <span className="text-lg font-medium">85</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Standard Orders</span>
              <span className="text-lg font-medium">110</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

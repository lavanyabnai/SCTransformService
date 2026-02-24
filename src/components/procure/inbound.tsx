import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Truck, AlertTriangle } from "lucide-react"

const shipments = [
  {
    shipment: "OR439-O-1",
    track: "TRK7890123",
    supplier: "Oriental Manufacturing",
    reqDate: "03/24/2025",
    reqQty: "80",
    shippedEtaQty: "80",
    date: "03/24/2025",
    status: "on-time",
  },
  {
    shipment: "OR439-O-2",
    track: "TRK4567890",
    supplier: "Oriental Manufacturing",
    reqDate: "03/26/2025",
    reqQty: "200",
    shippedEtaQty: "120",
    date: "03/26/2025",
    status: "delayed",
  },
  {
    shipment: "OR209-L-1",
    track: "TRK1234567",
    supplier: "Acme Tiles",
    reqDate: "04/02/2025",
    reqQty: "150",
    shippedEtaQty: "150",
    date: "04/02/2025",
    status: "on-time",
  },
]

export default function Inbound() {
  return (
    <div>
      <div className="flex items-center mb-4">
        <Truck className="h-5 w-5 text-blue-900 mr-2" />
        <h2 className="text-xl font-semibold text-blue-900">Inbound Shipments and Orders</h2>
      </div>

      <div className="bg-white border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Shipment</TableHead>
              <TableHead>Tracking</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Required Date</TableHead>
              <TableHead>Required Qty</TableHead>
              <TableHead>Shipped/ETA Qty</TableHead>
              <TableHead>Delivery Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => (
              <TableRow key={shipment.shipment}>
                <TableCell className="font-medium">{shipment.shipment}</TableCell>
                <TableCell>{shipment.track}</TableCell>
                <TableCell>{shipment.supplier}</TableCell>
                <TableCell>{shipment.reqDate}</TableCell>
                <TableCell>{shipment.reqQty}</TableCell>
                <TableCell className={shipment.status === "delayed" ? "text-red-500 font-medium" : ""}>
                  {shipment.shippedEtaQty}
                </TableCell>
                <TableCell>{shipment.date}</TableCell>
                <TableCell>
                  {shipment.status === "on-time" ? (
                    <Badge className="bg-green-500">On Time</Badge>
                  ) : (
                    <Badge variant="destructive" className="flex items-center">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Capacity Issue
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

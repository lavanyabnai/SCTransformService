import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const invoices = [
  {
    shipment: "OR439-O-1",
    track: "1234567890",
    supplier: "Supplier A",
    reqDate: "2021-01-01",
    reqQty: "100",
    shippedEtaQty: "400",
    date: "2021-01-01",
  },
  {
    shipment: "OR439-O-2",
    track: "1234567890",
    supplier: "Supplier A",
    reqDate: "2021-01-01",
    reqQty: "100",
    shippedEtaQty: "100",
    date: "2021-01-01",
  },
  {
    shipment: "OR209-L-1",
    track: "1234567890",
    supplier: "Supplier A",
    reqDate: "2021-01-01",
    reqQty: "100",
    shippedEtaQty: "100",
    date: "2021-01-01",
  },
];

export default function Inbound() {
  return (
    <div>
      <CardTitle className="px-2 py-6 text-xl text-blue-900">
        Inbound Shipments and Orders
      </CardTitle>

      <div className="bg-white border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Shipment</TableHead>
              <TableHead>Track</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Req Date</TableHead>
              <TableHead>Req Qty</TableHead>
              <TableHead>Shipped ETA Qty</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.shipment}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    {invoice.shipment}
                  </div>
                </TableCell>
                <TableCell className="text-center">{invoice.track}</TableCell>
                <TableCell className="text-center">
                  {invoice.supplier}
                </TableCell>
                <TableCell className="text-center">{invoice.reqDate}</TableCell>
                <TableCell className="text-center">{invoice.reqQty}</TableCell>
                <TableCell className="text-center">
                  {invoice.shippedEtaQty}
                </TableCell>
                <TableCell className="text-center">{invoice.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

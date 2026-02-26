import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { FcLineChart } from "react-icons/fc";

const invoices = [
  {
    "shipment": '98.5%',
    "track": <FcLineChart />,
    "supplier": 'ABC Manufacturing,China',

  },
  {
    "shipment": '96.7%',
    "track": <FcLineChart />,
    "supplier": 'XYZ Company,Japan',

  },
  {
    "shipment": '96.4%',
    "track": <FcLineChart />,
    "supplier": 'Johnson Mills,USA',
  },
  {
    "shipment": '91.4%',
    "track": <FcLineChart />,
    "supplier": 'Crawford Supplies,Canada',
   
  },
  {
    "shipment": '89.6%',
    "track": <FcLineChart />,
    "supplier": ' Lee Inc,China',
  }
]

export default function Carrying() {

  return (
  
     <div className=" w-auto p-4 shadow-lg border border-gray-200 text-blue-900 bg-white rounded-xl">
      <h1 className="font-medium text-black">Top 5 Suppliers On Full Time</h1>
  
       
     <div className="bg-white border rounded-lg mt-6">
      <Table >
  <TableBody>
    {invoices.map((invoice) => (
    <TableRow>
      <TableCell className="font-medium">{invoice.shipment}</TableCell>
      <TableCell className="text-center">{invoice.track}</TableCell>
      <TableCell className="text-center">{invoice.supplier}</TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
    </div>
   
   </div>
  )
}
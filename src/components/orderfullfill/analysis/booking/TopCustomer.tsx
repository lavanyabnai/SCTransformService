"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        customer: "Construction",
        bookingSalesAmount: "$435.61M",
        bookingSalesAmountColor: "bg-green-800 text-white",
    },
    {
        customer: "Amerco",
        bookingSalesAmount: "$237.46M",
        bookingSalesAmountColor: "bg-green-700 text-white",
    },
    {
        customer: "Csco",
        bookingSalesAmount: "$188.33M",
        bookingSalesAmountColor: "bg-green-600 text-white",
    },
    {
        customer: "Ariba",
        bookingSalesAmount: "$120.06M",
        bookingSalesAmountColor: "bg-green-500 text-white",
    },
    {
        customer: "Intel",
        bookingSalesAmount: "$120.00M",
        bookingSalesAmountColor: "bg-green-400 text-gray-800",
    },
    {
        customer: "Posco",
        bookingSalesAmount: "$119.18M",
        bookingSalesAmountColor: "bg-green-300 text-gray-800",
    },
    {
        customer: "Marco Inc",
        bookingSalesAmount: "$94.80M",
        bookingSalesAmountColor: "bg-green-200 text-gray-800",
    },
]
const kpi = {
    status: "Below Target",
};

export default function TopCustomer() {
    return (
        <Card>
            <div className="relative rounded-lg">
                <span
                    className={`absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === "Above Target"
                            ? `bg-green-500`
                            : kpi.status === "Below Target"
                                ? `bg-red-500`
                                : kpi.status === "On Target"
                                    ? `bg-yellow-500`
                                    : ""
                        }`}
                ></span>
            </div>
            <CardHeader>
                <CardTitle className='text-3xl font-bold'>Top Customers
                </CardTitle>

            </CardHeader>
            <CardContent>
                <div className="border rounded-lg p-1 h-[340px] overflow-y-auto">
                    <Table>

                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold text-black">Customer</TableHead>
                                <TableHead className="text-right font-bold text-black">Booking Sales Amount</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.customer}>
                                    <TableCell className={`font-medium ${invoice.bookingSalesAmountColor}`}>{invoice.customer}</TableCell>
                                    <TableCell className={`text-right ${invoice.bookingSalesAmountColor}`}>{invoice.bookingSalesAmount}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </div>
            </CardContent>

        </Card>
    )
}

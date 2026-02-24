"use client"
import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'


const action = [
    {
        title: 'Singapore DC',
        slottingAccuracy: 96,
        overtimeHours: 75,
        overtimeHoursPerFTE: 7.2,
        linesProcessedPerFTE: 220,
        otifFulfillmentRate: 97,
        ordersShipped: 430,
        hourlyTruckArrivals: 5,
    },
    {
        title: 'Bangkok DC',
        slottingAccuracy: 94,
        overtimeHours: 92,
        overtimeHoursPerFTE: 8.5,
        linesProcessedPerFTE: 195,
        otifFulfillmentRate: 92,
        ordersShipped: 390,
        hourlyTruckArrivals: 6.5,
    },
    {
        title: 'Jakarta DC',
        slottingAccuracy: 92,
        overtimeHours: 98,
        overtimeHoursPerFTE: 9,
        linesProcessedPerFTE: 190,
        otifFulfillmentRate: 91,
        ordersShipped: 380,
        hourlyTruckArrivals: 7,
    },
    {
        title: 'Manila DC',
        slottingAccuracy: 89,
        overtimeHours: 105,
        overtimeHoursPerFTE: 9.5,
        linesProcessedPerFTE: 185,
        otifFulfillmentRate: 89,
        ordersShipped: 365,
        hourlyTruckArrivals: 7.5,
    },
    {
        title: 'Seoul DC',
        slottingAccuracy: 87,
        overtimeHours: 112,
        overtimeHoursPerFTE: 10,
        linesProcessedPerFTE: 175,
        otifFulfillmentRate: 87,
        ordersShipped: 350,
        hourlyTruckArrivals: 8,
    },
    {
        title: 'Tokyo DC',
        slottingAccuracy: 85,
        overtimeHours: 118,
        overtimeHoursPerFTE: 10.5,
        linesProcessedPerFTE: 165,
        otifFulfillmentRate: 85,
        ordersShipped: 335,
        hourlyTruckArrivals: 8.5,
    },
    {
        title: 'Shanghai DC',
        slottingAccuracy: 84,
        overtimeHours: 124,
        overtimeHoursPerFTE: 11,
        linesProcessedPerFTE: 155,
        otifFulfillmentRate: 84,
        ordersShipped: 320,
        hourlyTruckArrivals: 9,
    },
    {
        title: 'Mumbai DC',
        slottingAccuracy: 83,
        overtimeHours: 130,
        overtimeHoursPerFTE: 11.5,
        linesProcessedPerFTE: 145,
        otifFulfillmentRate: 83,
        ordersShipped: 305,
        hourlyTruckArrivals: 9.5,
    },
    {
        title: 'Delhi DC',
        slottingAccuracy: 82,
        overtimeHours: 134,
        overtimeHoursPerFTE: 12,
        linesProcessedPerFTE: 135,
        otifFulfillmentRate: 82,
        ordersShipped: 290,
        hourlyTruckArrivals: 10,
    },
    {
        title: 'Dhaka DC',
        slottingAccuracy: 81,
        overtimeHours: 137,
        overtimeHoursPerFTE: 12.5,
        linesProcessedPerFTE: 125,
        otifFulfillmentRate: 81,
        ordersShipped: 275,
        hourlyTruckArrivals: 10.5,
    },
    {
        title: 'Bangalore DC',
        slottingAccuracy: 80,
        overtimeHours: 140,
        overtimeHoursPerFTE: 13,
        linesProcessedPerFTE: 115,
        otifFulfillmentRate: 80,
        ordersShipped: 260,
        hourlyTruckArrivals: 11,
    }

]




export default function Recommendations() {
    return (
        <>

            <div className="">
                <div className=" text-blue-900 rounded-lg border">


                    <div className="overflow-y-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                   
                                    <TableHead className='bg-gray-100'>Region</TableHead>
                                    <TableHead className='text-center bg-blue-100'>Slotting Accuracy (%)</TableHead>
                                    <TableHead className='text-center bg-green-100'>Overtime Hours (# of hours)</TableHead>
                                    <TableHead className='text-center bg-yellow-100'>Overtime Hours per FTE (# hours)</TableHead>
                                    <TableHead className='text-center bg-orange-100'>Lines Processed per FTE (#)</TableHead>
                                    <TableHead className='text-center bg-pink-100'>OTIF (%)</TableHead>
                                    <TableHead className='text-center bg-sky-100'>Orders Shipped (#)</TableHead>
                                    <TableHead className='text-center bg-purple-100'>Hourly Truck Arrivals (per hour)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {action.map((invoice) => (
                                    <TableRow key={invoice.title}>
                                        <TableCell className="font-medium text-xs bg-gray-100">
                                            {invoice.title}
                                        </TableCell>
                                        <TableCell className='text-center p-1 bg-blue-100'>
                                            <h1 className='text-blue-500 font-bold '>
                                                {invoice.slottingAccuracy}
                                            </h1>


                                        </TableCell>
                                        <TableCell className='text-center p-1 bg-green-100'>
                                            <h1 className='text-green-500 font-bold'>
                                                {invoice.overtimeHours}
                                            </h1>

                                        </TableCell>
                                        <TableCell className='text-center p-1 bg-yellow-100'>
                                            <h1 className='text-yellow-500 font-bold'>
                                                {invoice.overtimeHoursPerFTE}
                                            </h1>


                                        </TableCell>
                                        <TableCell className='text-center p-1 bg-orange-100'>
                                            <h1 className='text-orange-500 font-bold'>
                                                {invoice.linesProcessedPerFTE}
                                            </h1>



                                        </TableCell>
                                        <TableCell className='text-center p-1 bg-pink-100'>
                                            <h1 className='text-pink-500 font-bold'>
                                                {invoice.otifFulfillmentRate}
                                            </h1>



                                        </TableCell>
                                        <TableCell className='text-center p-1 bg-sky-100'>
                                            <h1 className='text-sky-500 font-bold'>
                                                {invoice.ordersShipped}
                                            </h1>




                                        </TableCell>
                                        <TableCell className='text-center p-1 bg-purple-100'>
                                            <h1 className='text-purple-500 font-bold'>
                                                {invoice.hourlyTruckArrivals}
                                            </h1>




                                        </TableCell>


                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>
        </>
    )
}

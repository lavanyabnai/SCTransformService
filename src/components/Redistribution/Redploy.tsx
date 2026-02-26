'use client'

import React, { useState } from 'react'
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { AgChartsReact } from 'ag-charts-react'
import { generatedDeficitData, generatedInventoryExcess } from './excessDeficit'

// ✅ Import enterprise chart support
import 'ag-charts-enterprise'

// ✅ Use correct types from ag-charts-enterprise
import type { AgChartOptions, AgTreemapSeriesOptions } from 'ag-charts-enterprise'

const inventory = [
    {
        title: 'SKU-775833',
        location: 'Location016',
        deficit: '1.9M',
        percent: 9,
    },
    {
        title: 'SKU-569018',
        location: 'Location017',
        deficit: '0.6M',
        percent: 20,
    },
    {
        title: 'SKU-166046',
        location: 'Location018',
        deficit: '1.8M',
        percent: 58,
    },
    {
        title: 'SKU-144887',
        location: 'Location019',
        deficit: '0.4M',
        percent: 76,
    },
]

const deficit = [...inventory] // same for this example

const dataExcess = generatedInventoryExcess
const dataDeficit = generatedDeficitData

export default function Redploy() {
    const [options] = useState<AgChartOptions>({
        data: dataExcess,
        series: [
            {
                type: 'treemap',
                labelKey: 'title',
                secondaryLabelKey: 'excess',
                sizeKey: 'percent',
                sizeName: 'Excess',
                fills: ['#43A047'],
                group: {
                    label: {
                        fontSize: 18,
                        spacing: 2,
                    },
                    secondaryLabel: {
                        formatter: (params: any) => `£${params.value.toFixed(1)}bn`,
                    },
                },
            } as AgTreemapSeriesOptions,
        ],
    })

    const [options2] = useState<AgChartOptions>({
        data: dataDeficit,
        series: [
            {
                type: 'treemap',
                labelKey: 'title',
                secondaryLabelKey: 'deficit',
                sizeKey: 'percent',
                sizeName: 'Deficit',
                strokes: ['#000'],
                fills: ['#FF5722'],
                group: {
                    label: {
                        fontSize: 18,
                        spacing: 2,
                    },
                    secondaryLabel: {
                        formatter: (params: any) => `£${params.value.toFixed(1)}bn`,
                    },
                },
            } as AgTreemapSeriesOptions,
        ],
    })

    return (
        <div className="bg-white rounded-b-lg border w-full">
            <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4">
                {/* Excess Section */}
                <div className="w-full bg-white rounded-b-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Excess</TableHead>
                                <TableHead>Percent</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {inventory.map((item) => (
                                <TableRow key={item.title}>
                                    <TableCell className="font-medium">{item.title}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.deficit}</TableCell>
                                    <TableCell>
                                        <Progress indicatorColor="bg-green-400" value={item.percent} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="w-full h-[500px] mt-4">
                        <AgChartsReact options={options as AgChartOptions} />
                    </div>
                </div>

                {/* Deficit Section */}
                <div className="w-full bg-white rounded-b-md border mt-8 lg:mt-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Deficit</TableHead>
                                <TableHead>Percent</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {deficit.map((item) => (
                                <TableRow key={item.title}>
                                    <TableCell className="font-medium">{item.title}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.deficit}</TableCell>
                                    <TableCell>
                                        <Progress indicatorColor="bg-red-400" value={item.percent} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="w-full h-[500px] mt-4">
                        <AgChartsReact options={options2 as AgChartOptions} />
                    </div>
                </div>
            </div>
        </div>
    )
}

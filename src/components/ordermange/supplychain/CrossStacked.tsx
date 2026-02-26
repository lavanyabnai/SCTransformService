"use client"
import * as React from 'react';


import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

const chartData = [
    { month: "Q1", desktop: 100, mobile: 123, crossDock: 234, stored: 343 },
    { month: "Q2", desktop: 120, mobile: 67, crossDock: 231, stored: 196 },
    { month: "Q3", desktop: 45, mobile: 124, crossDock: 189, stored: 143 },
    { month: "Q4", desktop: 87, mobile: 154, crossDock: 210, stored: 215 },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-2))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-3))",
    },
    crossDock: {
      label: "Cross-Dock",
      color: "hsl(var(--chart-4))",
    },
    stored: {
      label: "Stored",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig
  
// const [] = [
//     [100, 123, 234, 343],
//     [120, 67, 231, 196],
//     [45, 124, 189, 143],
//     [87, 154, 210, 215]
// ];
export default function CrossStacked() {
    const workspaceId = useParams().workspaceId;  
    return (
    <Card> 
        <CardHeader>
        <CardTitle className='text-2xl font-bold'>Cross-Dock Efficiency
        </CardTitle >
        <CardDescription className='text-md text-black-500 italic'>Percentage of receipts cross-docked vs stored in DC
        </CardDescription>
      </CardHeader>
    <CardContent>
    <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            <Bar dataKey="crossDock" fill="var(--color-crossDock)" radius={4} />
            <Bar dataKey="stored" fill="var(--color-stored)" radius={4} />
          </BarChart>
        </ChartContainer>
    {/* <Chart>
        <ChartTitle text="Units sold" />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories}>
                <ChartCategoryAxisTitle text="Months" />
            </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={firstSeries} />
            <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={secondSeries} />
            <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={thirdSeries} />
            <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={fourthSeries} />
        </ChartSeries>
    </Chart> */}
    </CardContent>
    <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 ">
                 
                 <div className="flex w-0 flex-1">
                   <Link
                     href={`/workspaces/${workspaceId}/putawayAnalysis`}
                     className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-bl-lg"
                   >
                     <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
                       <WrenchScrewdriverIcon
                         className="h-5 w-5"
                         aria-hidden="true"
                       />
                       Analyze
                     </span>
                   </Link>
                 </div>

                 <div className="-ml-px flex flex-1">
                   <Link
                     href='' // Fixed here
                     className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-br-lg"
                   >
                     <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
                       <CircleStackIcon
                         className="h-5 w-5"
                         aria-hidden="true"
                       />
                       Explore Data
                     </span>
                   </Link>
                 </div>

               
             </CardFooter>
    </Card>
);

}

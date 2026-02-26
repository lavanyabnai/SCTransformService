/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import Link from 'next/link';
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';

const chartData = [
    { location: "Store 126", time: 96.3 },
    { location: "Store 241", time: 94.7 },
    { location: "Target", time: 95.0 },
  ];

const chartConfig = {
  time: {
    label: "Time",
    color: "hsl(var(--chart-1))",
  },
  location: {
    label: "Location",
    color: "hsl(var(--chart-2))",
  },
}
const kpi = {

  status: 'Above Target',

}
export default function StoreFulfillBar() {
  // const emptyStyles = { background: '#ef4444' };
  // const progressStyles = { background: '#22c55e' };
  const workspaceId = useParams().workspaceId;  
  return (
    <Card >
      <div className="relative rounded-lg">
        <span
          className={`absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === 'Above Target'
              ? `bg-green-500`
              : kpi.status === 'Below Target'
                ? `bg-red-500`
                : ''
            }`}
        ></span>
      </div>

      <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2">
          <div>
            <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-black">Store Fulfillment</h1>
            </div>
            <h2 className="text-base font-medium text-gray-900">Percentage of customer orders fulfilled from available stock
            </h2>
          </div>
         
        </div>

    
      </CardHeader >
      <CardContent className="px-4 py-2">
      <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="location"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="time" fill="var(--color-time)" radius={4} >
            <LabelList dataKey="time" position="insideTop" fill="white" />
            </Bar>

          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter >

<div className="flex w-full items-start gap-2 text-sm">
  <div className="grid gap-2">
    <div className="flex items-center gap-2 font-medium leading-none">
      Average queue time for appointments is 10 min
    </div>
    <div className="flex items-center gap-2 leading-none text-muted-foreground">
      Jan 12 - Jan 20
    </div>
  </div>
</div>

</CardFooter>
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

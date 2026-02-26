"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
  { browser: "Vendor-1", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Vendor-2", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Vendor-3", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Vendor-4", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Vendor-5", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Vendor-1",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Vendor-2",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Vendor-3",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Vendor-4",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Vendor-5",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function VendoeBar() {
  const workspaceId = useParams().workspaceId;  
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'> Vendor On-Time Delivery
        </CardTitle>
        <CardDescription className='text-md text-black-500 italic'>Percentage of vendor shipments received on schedule
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
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
  )
}

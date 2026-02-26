"use client"

import { Bar, BarChart, CartesianGrid, LabelList, ReferenceLine, XAxis } from "recharts"

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
  { Days: "92", Store: "Store135", fill: "oklch(0.685 0.169 237.323)" },
  { Days: "96", Store: "Store246", fill: "oklch(0.685 0.169 237.323)" },
  { Days: "89", Store: "Store312", fill: "oklch(0.685 0.169 237.323)" },
]

const chartConfig = {
    Store: {
    label: "Store",
  },
  Store135: {
    label: "Store135",
  },
  Store246: {
    label: "Store246",
  },
  Store312: { 
    label: "Store312",
  },
} satisfies ChartConfig

export default function OnshelfBar() {
  const workspaceId = useParams().workspaceId;  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-black">Onshelf Rate</CardTitle>
        <CardDescription className="text-md text-black-500">Percentage of SKUs currently on shelf at store level
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
            dataKey="Store"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ReferenceLine
            y={85}
            strokeDasharray="3 3"
            stroke="hsl(var(--muted-foreground))"
          />
                <Bar dataKey="Days" fill="var(--color-Days)" radius={8} >
                <LabelList
                  position="insideBottom"
                  offset={12}
                  className="fill-white"
                  fontSize={12}
                />
                </Bar>
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

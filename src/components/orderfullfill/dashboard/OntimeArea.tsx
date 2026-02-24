"use client"

import { Area, AreaChart, CartesianGrid, LabelList, XAxis } from "recharts"
import Link from "next/link"
import { useParams } from "next/navigation";
import {
    WrenchScrewdriverIcon,
    CircleStackIcon
  } from '@heroicons/react/24/outline';
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
  { month: "q3", target: 60 },
  { month: "q4", target: 65 },
  { month: "q1", target: 70 },
  { month: "q2", target: 85 },
  { month: "q3", target: 70 },
  { month: "q4", target: 65 },
]

const chartConfig = {
  target: {
    label: "Target",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const kpi = {
  status: "Below Target",
};

export default function OntimeArea() {
  const workspaceId = useParams().workspaceId;  
  return (
    <Card>
       <div className="relative rounded-lg">
          <span
            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
              kpi.status === "Above Target"
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
      <CardTitle className='text-3xl font-bold'>On-Time Shipment
      </CardTitle>
      <CardDescription className='text-2xl font-semibold text-black-500'>65%
      </CardDescription>
      <CardDescription>
     2021 Q4 -11%  QoQ
      </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="target"
              type="linear"
              fill="var(--color-target)"
              fillOpacity={0.4}
              stroke="var(--color-target)"
              dot={{
                fill: "var(--color-target)",
              }}
              activeDot={{
                r: 6,
              }}
          
            >
               <LabelList
                position="insideTop"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Area>
          </AreaChart>
        </ChartContainer>
        </CardContent>
      <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 justify-end">
                 
                 <div className="flex w-0 flex-1">
                   <Link
                     href={`/workspaces/${workspaceId}/fullfillAnalysis`}
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

"use client"


import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
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
import { useParams } from "next/navigation"
import Link from "next/link"
import { CircleStackIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
const chartData = [
  { month: "Q2 2021", time: 78 },
  { month: "Q4 2021", time: 80 },
  { month: " ", time: 81 },
  { month: "Q2 2022", time: 96 },
  { month: " ", time: 90 },
  { month: "Q4 2022", time: 83 },
]

const chartConfig = {
  time: {
    label: "Time",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig
const kpi = {
  status: 'Above Target',
}
export function Ontime() {
  const workspaceId = useParams().workspaceId;
  return (
    <Card>
               <div className="relative rounded-lg">
          <span
            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
              kpi.status === "Above Target"
                ? "bg-green-500"
                : kpi.status === "Below Target"
                ? "bg-red-500"
                : kpi.status === "On Target"
                ? "bg-yellow-500"
                : ""
            }`}
          ></span>
        </div>
      <CardHeader>
        <CardTitle>On-Time Shipment</CardTitle>
        <h2 className="text-4xl font-bold">82%</h2>
      </CardHeader>
      <CardContent className="py-8">
        <ChartContainer config={chartConfig}  >
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="time" fill="var(--color-time)" radius={8} >
            <LabelList
                dataKey="time"
                position="insideTop"
                offset={8}
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
            href={`/workspaces/${workspaceId}/ordertocashAnalysis`}
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-bl-lg"
          >
            <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
              <WrenchScrewdriverIcon className="h-5 w-5" aria-hidden="true" />
              Analyze
            </span>
          </Link>
        </div>

        <div className="-ml-px flex flex-1">
          <Link
            href={`/workspaces/${workspaceId}/ordertocashAnalysis`} // Fixed here
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-br-lg"
          >
            <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
              <CircleStackIcon className="h-5 w-5" aria-hidden="true" />
              Explore Data
            </span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

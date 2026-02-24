"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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
import { useParams } from "next/navigation"
import Link from "next/link"
import { CircleStackIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
const chartData = [
  { month: "Jan", data: 38, data1: 16, data2: 19, },
  { month: "Feb", data: 38, data1: 20, data2: 22, },
  { month: "Mar", data: 38, data1: 22, data2: 42, },
  { month: "Apr", data: 42, data1: 14, data2: 20, },
  { month: "May", data: 58, data1: 16, data2: 24, },
  { month: "Jun", data: 37, data1: 10, data2: 20, },
  { month: "Jul", data: 38, data1: 10, data2: 20, },
  { month: "Aug", data: 40, data1: 10, data2: 20, },
  { month: "Sep", data: 50, data1: 10, data2: 20, },
  { month: "Oct", data: 58, data1: 10, data2: 20, },

];

const chartConfig = {
  data: {
    label: "1-30",
    color: "hsl(var(--chart-1))",
  },
  data1: {
    label: "31-60",
    color: "hsl(var(--chart-2))",
  },
  data2: {
    label: "61+",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
const kpi = {
  status: 'Above Target',
}
export function Open() {
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
        <CardTitle>Open Receivables</CardTitle>
        <CardDescription className="text-4xl font-bold text-amber-900">$92M</CardDescription>
        <CardDescription>
        <span className=" text-amber-900">
          current month
        </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
      <ChartContainer config={chartConfig} >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="data"
              stackId="a"
              fill="var(--color-data)"
              radius={[4, 4, 0, 0]}
            >
            <LabelList
                dataKey="data"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />
            </Bar>
            <Bar
              dataKey="data1"
              stackId="a"
              fill="var(--color-data1)"
              radius={[4, 4, 0, 0]}
            >
            <LabelList
                dataKey="data1"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />
            </Bar>
            <Bar
              dataKey="data2"
              stackId="a"
              fill="var(--color-data2)"
              radius={[4, 4, 0, 0]}
            >
            <LabelList
                dataKey="data2"
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
            href="" // Fixed here
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

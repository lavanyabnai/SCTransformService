"use client"

import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts"

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
import { useParams } from "next/navigation"
import Link from "next/link"
import { CircleStackIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
const chartData = [
  { month: "Q2 2021", dpo: 59, dso: 38 ,dio:82 },
  { month: "Q4 2021", dpo: 61, dso: 37,dio:83 },
  { month: "", dpo: 60, dso: 38 ,dio:83 },
  { month: "Q2 2022", dpo: 62, dso: 39 ,dio:82 },
  { month: "", dpo: 63, dso: 40 ,dio:81 },
  { month: "Q4 2022", dpo: 64, dso: 43 ,dio:80 },
]

const chartConfig = {
  dpo: {
    label: "DPO",
    color: "hsl(var(--chart-1))",
  },
  dso: {
    label: "DSO",
    color: "hsl(var(--chart-2))",
  },
  dio: {
    label: "DIO",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig
const kpi = {
  status: 'On Target',
}
export function Cash() {
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
        <CardTitle>Cash Conversion Cycle(CCC)</CardTitle>
        <CardDescription className="text-4xl font-bold text-amber-900">50</CardDescription >
        <CardDescription>
        <span className=" text-amber-900">
         8% FROM Target
        </span>
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
            <Bar dataKey="dpo" fill="var(--color-dpo)" radius={4} 
            >
            <LabelList
                dataKey="dpo"
                position="insideTop"
                offset={8}
                className="fill-black"
                fontSize={12}
            />
            </Bar>
            <Bar dataKey="dso" fill="var(--color-dso)" radius={4} >
            <LabelList
                dataKey="dso"
                position="insideTop"
                offset={8}
                className="fill-black"
                fontSize={12}
            />
            </Bar>
            <Bar dataKey="dio" fill="var(--color-dio)" radius={4} >
            <LabelList
                dataKey="dio"
                position="insideTop"
                offset={8}
                className="fill-black"
                fontSize={12}
            />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 ">
        <div className="flex w-0 flex-1">
          <Link
              href={`/workspaces/${workspaceId}/ordertocashAnalysis`}// Fixed here
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

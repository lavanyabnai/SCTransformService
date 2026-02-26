"use client"

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
  { days: "Days", Damaged: 3.2, Wrong : 1.5,Changed :1.1 },
  { days: "Days", Damaged: 3.15, Wrong : 1.33,Changed :1.81 },
  { days: "Days", Damaged: 3.46, Wrong : 1.82,Changed :1.65 },
  { days: "Days", Damaged: 3.68, Wrong : 1.24,Changed :1.77 },
  { days: "Days", Damaged: 3.18, Wrong : 1.11,Changed :1.91 },
  { days: "Days", Damaged: 3.6, Wrong : 1.55,Changed :1.76 },
  { days: "Days", Damaged: 3.24, Wrong : 1.7,Changed :1.6 },
]

const chartConfig = {
  Damaged: {
    label: "Damaged",
    color: "hsl(var(--chart-1))",
  },
  Wrong: {
    label: "Wrong",
    color: "hsl(var(--chart-2))",
  },
  Changed: {
    label: "Changed",
    color: "hsl(var(--chart-3))",
  },
  days: {
    label: "Days",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig
const kpi = {

  status: "",
};
export default function ReturnsBars() {
  const workspaceId = useParams().workspaceId;  
  return (
    <Card>
      <div className="relative rounded-lg">
      <span
                  className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                    kpi.status === 'Above Target'
                      ? `bg-green-500`
                      : kpi.status === 'Below Target'
                        ? `bg-red-500`
                        : 'bg-yellow-500'
                  }`}
                ></span>
      </div>
      <CardHeader>
        <CardTitle  className="text-3xl font-bold text-black">Returns Processing Efficiency
        </CardTitle>
        <CardDescription  className="text-md text-black-500"> Average time to process returns and restock or dispose

        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="days"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Damaged" fill="var(--color-Damaged)" radius={4} />
            <Bar dataKey="Wrong" fill="var(--color-Wrong)" radius={4} />
            <Bar dataKey="Changed" fill="var(--color-Changed)" radius={4} />
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
        </div>
      </CardFooter>
    </Card>
  )
}

"use client";

import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts";

import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,

} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useParams } from "next/navigation";
import {
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
const chartData = [
  { month: "Q2 2021", Consumer: 5, Corporate: 16, Partner: 19, Small: 5 },
  { month: "", Consumer: 18, Corporate: 20, Partner: 22, Small: 20 },
  { month: "Q1 2022", Consumer: 22, Corporate: 22, Partner: 42, Small: 38 },
  { month: "", Consumer: 16, Corporate: 14, Partner: 20, Small: 38 },
  { month: "", Consumer: 4, Corporate: 16, Partner: 24, Small: 14 },
  { month: "Q4 2022", Consumer: 10, Corporate: 10, Partner: 20, Small: 10 },
];

const chartConfig = {
  Consumer: {
    label: "Consumer",
    color: "hsl(var(--chart-1))",
  },
  Corporate: {
    label: "Corporate",
    color: "hsl(var(--chart-2))",
  },
  Partner: {
    label: "Partner",
    color: "hsl(var(--chart-3))",
  },
  Small: {
    label: "Small Business",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;
const kpi = {
  status: "On Target",
};
export function OrderGrowth() {
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
      <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2 ">
          <div>
            <h2 className="text-base font-medium text-gray-900">
              Order Growth Rate
            </h2>
            <h1 className="text-4xl font-bold text-black">10%</h1>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-10">
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
              dataKey="Consumer"
              stackId="a"
              fill="var(--color-Consumer)"
              radius={[0, 0, 4, 4]}
            >
            <LabelList
                dataKey="Consumer"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />
            </Bar>
            <Bar
              dataKey="Corporate"
              stackId="a"
              fill="var(--color-Corporate)"
              radius={[4, 4, 0, 0]}
            >
            <LabelList
                dataKey="Corporate"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />
            </Bar>
            <Bar
              dataKey="Partner"
              stackId="a"
              fill="var(--color-Partner)"
              radius={[4, 4, 0, 0]}
            >
            <LabelList
                dataKey="Partner"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />
            </Bar>
            <Bar
              dataKey="Small"
              stackId="a"
              fill="var(--color-Small)"
              radius={[4, 4, 0, 0]}
            >
            <LabelList
                dataKey="Small"
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
            href={`/workspaces/${workspaceId}/ordertocashAnalysis`}// Fixed here
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white rounded-bl-lg"
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
  );
}

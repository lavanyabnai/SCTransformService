"use client";

import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const chartData = [
  { month: "DC-1", consumer:20 , corporate: 30 , partner: 40, small: 15},
  { month: "DC-2", consumer: 40, corporate: 30 , partner: 50, small: 20},
  { month: "DC-3", consumer: 40, corporate: 40 , partner: 60, small: 30},
  { month: "DC-4", consumer: 30, corporate: 20 , partner: 35, small: 20},
  { month: "DC-5", consumer: 15, corporate: 20 , partner: 30, small: 10},
  { month: "DC-6", consumer: 20, corporate: 30 , partner: 25, small: 15},
];

const chartConfig = {
  consumer: {
    label: "Consumer",
    color: "hsl(var(--chart-1))",
  },
  corporate: {
    label: "Corporate",
    color: "hsl(var(--chart-2))",
  },
  partner: {
    label: "Partner",
    color: "hsl(var(--chart-3))",
  },
  small: {
    label: "Small Business",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

const kpi = {
  status: "Below Target",
};

export default function BookingBar() {
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
              : "bg-yellow-500"
          }`}
        ></span>
      </div>
      <CardHeader>
      <CardTitle className='text-3xl font-bold'>Bookings
      </CardTitle>
      <CardDescription className='text-2xl font-semibold text-black-500'>$512.39K
      </CardDescription>
      <CardDescription>
     2021 Q4 -6.78% QoQ
      </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[276px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="consumer"
              stackId="a"
              fill="var(--color-consumer)"
              radius={[0, 0, 4, 4]}
            >
              <LabelList
                position="insideTop"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
            </Bar>
            <Bar
              dataKey="corporate"
              stackId="a"
              fill="var(--color-corporate)"
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                position="insideTop"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
              </Bar>
            <Bar
              dataKey="partner"
              stackId="a"
              fill="var(--color-partner)"
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                position="insideTop"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
            </Bar>
            <Bar
              dataKey="small"
              stackId="a"
              fill="var(--color-small)"
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                position="insideTop"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 justify-end">
        <div className="flex w-0 flex-1">
          <Link
            href={`/workspaces/${workspaceId}/fullfillAnalysis`}
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
  );
}

"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const kpi = {
  status: "On Target",
};

export default function PerfectTrendCol() {
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
        <CardTitle className="text-2xl font-bold">
          {" "}
          DC to Store Lead Time - Criss Cross movement
        </CardTitle>
        <CardDescription className="text-md text-black-500 italic">
          Average time to fulfill store replenishment orders
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-full">
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
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
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
    
    </Card>
  );
}

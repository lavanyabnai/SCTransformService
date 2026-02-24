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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "DC-1", Actual: 186, Target: 80, seattle:50 },
  { month: "DC-2", Actual: 305, Target: 200, seattle:100 },
  { month: "DC-3", Actual: 237, Target: 120, seattle:150 },
];

const chartConfig = {
  Actual: {
    label: "Actual",
    color: "hsl(var(--chart-1))",
  },
  Target: {
    label: "Target",
    color: "hsl(var(--chart-2))",
  },
  seattle: {
    label: "Seattle",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const kpi = {
  status: "Above Target",
};

export default function OrderHoldStack() {
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
        <ChartContainer config={chartConfig}>
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
              dataKey="Actual"
              stackId="a"
              fill="var(--color-Actual)"
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
              dataKey="Target"
              stackId="a"
              fill="var(--color-Target)"
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
              dataKey="seattle"
              stackId="a"
              fill="var(--color-seattle)"
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
    
    </Card>
  );
}

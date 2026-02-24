"use client"

import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
  { month: "Jan", data: 8, data1: 3, data2: 2 },
  { month: "Feb", data: 8, data1: 2, data2: 3 },
  { month: "Mar", data: 8, data1: 3, data2: 4 },
  { month: "Apr", data: 10, data1: 4, data2: 4 },
  { month: "May", data: 13, data1: 5, data2: 3 },
  { month: "Jun", data: 7, data1: 3, data2: 4 },
  { month: "Jul", data: 8, data1: 2, data2: 4 },
  { month: "Aug", data: 8, data1: 3, data2: 3 },
  { month: "Sep", data: 8, data1: 3, data2: 4 },
  { month: "Oct", data: 9, data1: 2, data2: 4 },
  { month: "Nov", data: 11, data1: 5, data2: 3 },
  { month: "Dec", data: 13, data1: 5, data2: 3 },
]

const chartConfig = {
  data: {
    label: "data",
    color: "hsl(var(--chart-1))",
  },
  data1: {
    label: "data1",
    color: "hsl(var(--chart-2))",
  },
  data2: {
    label: "data2",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function Aging() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aging Trend by Buckets</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
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
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="data"
              stackId="a"
              fill="var(--color-data)"
              radius={[0, 0, 4, 4]}
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
    </Card>
  )
}

"use client"


import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
  { browser: "Demand", value: 187, fill: "var(--color-demand)" },
  { browser: "Supply", value: 200, fill: "var(--color-supply)" },
]

const chartConfig = {
  demand: {
    label: "Demand",
    color: "hsl(var(--chart-1))",
  },
  supply: {
    label: "Supply",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig


export function HistoryChart() {
  return (
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-value)" radius={8}>
              <LabelList
                position="insideBottom"
                offset={12}
                className="fill-[--color-label]"
                fontSize={12}
              />
            </Bar>
          
          </BarChart>
        </ChartContainer>
  )
}

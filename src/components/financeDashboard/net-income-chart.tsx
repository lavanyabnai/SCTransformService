"use client"

import { Bar, ComposedChart, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// For a waterfall chart, we'll simulate it using a composed chart
const data = [
  {
    quarter: "Q1 2023",
    value: 1.2,
    fill: "hsl(var(--chart-2))",
  },
  {
    quarter: "Q2 2023",
    value: 0.3,
    fill: "hsl(var(--chart-3))",
  },
  {
    quarter: "Q3 2023",
    value: 0.4,
    fill: "hsl(var(--chart-3))",
  },
  {
    quarter: "Q4 2023",
    value: 0.6,
    fill: "hsl(var(--chart-3))",
  },
  {
    quarter: "Q1 2024",
    value: -0.2,
    fill: "hsl(var(--chart-4))",
  },
]

export function NetIncomeChart() {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Net Income",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="quarter" />
          <YAxis label={{ value: "Net Income ($M)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          {data.map((entry, index) => (
            <Bar key={`bar-${index}`} dataKey="value" fill={entry.fill} radius={[4, 4, 0, 0]} />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

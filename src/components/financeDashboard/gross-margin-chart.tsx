"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    quarter: "Q1 2023",
    margin: 42,
  },
  {
    quarter: "Q2 2023",
    margin: 43.5,
  },
  {
    quarter: "Q3 2023",
    margin: 44.2,
  },
  {
    quarter: "Q4 2023",
    margin: 45.1,
  },
  {
    quarter: "Q1 2024",
    margin: 46.3,
  },
]

export function GrossMarginChart() {
  return (
    <ChartContainer
      config={{
        margin: {
          label: "Gross Margin",
          color: "hsl(var(--chart-7))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis domain={[40, 50]} label={{ value: "Margin (%)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="margin"
            stroke="var(--color-margin)"
            fill="var(--color-margin)"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

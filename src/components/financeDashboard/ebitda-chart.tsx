"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    quarter: "Q1 2023",
    ebitda: 2.1,
  },
  {
    quarter: "Q2 2023",
    ebitda: 2.3,
  },
  {
    quarter: "Q3 2023",
    ebitda: 2.5,
  },
  {
    quarter: "Q4 2023",
    ebitda: 2.8,
  },
  {
    quarter: "Q1 2024",
    ebitda: 3.0,
  },
]

export function EbitdaChart() {
  return (
    <ChartContainer
      config={{
        ebitda: {
          label: "EBITDA",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <YAxis label={{ value: "EBITDA ($M)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="ebitda" stroke="var(--color-ebitda)" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

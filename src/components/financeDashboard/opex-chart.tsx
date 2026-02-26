"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    quarter: "Q1 2023",
    Actual: 3.2,
    Budget: 3.5,
  },
  {
    quarter: "Q2 2023",
    Actual: 3.4,
    Budget: 3.5,
  },
  {
    quarter: "Q3 2023",
    Actual: 3.6,
    Budget: 3.5,
  },
  {
    quarter: "Q4 2023",
    Actual: 3.8,
    Budget: 3.7,
  },
  {
    quarter: "Q1 2024",
    Actual: 3.7,
    Budget: 3.9,
  },
]

export function OpexChart() {
  return (
    <ChartContainer
      config={{
        Actual: {
          label: "Actual",
          color: "hsl(var(--chart-8))",
        },
        Budget: {
          label: "Budget",
          color: "hsl(var(--chart-9))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <YAxis label={{ value: "OPEX ($M)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="Actual" fill="var(--color-Actual)" />
          <Bar dataKey="Budget" fill="var(--color-Budget)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

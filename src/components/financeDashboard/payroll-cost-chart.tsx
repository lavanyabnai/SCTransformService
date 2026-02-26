"use client"

import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    quarter: "Q1 2023",
    actual: 2.1,
    budget: 2.2,
  },
  {
    quarter: "Q2 2023",
    actual: 2.2,
    budget: 2.2,
  },
  {
    quarter: "Q3 2023",
    actual: 2.3,
    budget: 2.3,
  },
  {
    quarter: "Q4 2023",
    actual: 2.4,
    budget: 2.3,
  },
  {
    quarter: "Q1 2024",
    actual: 2.5,
    budget: 2.4,
  },
]

export function PayrollCostChart() {
  return (
    <ChartContainer
      config={{
        actual: {
          label: "Actual",
          color: "hsl(var(--chart-5))",
        },
        budget: {
          label: "Budget",
          color: "hsl(var(--chart-6))",
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis label={{ value: "Payroll Cost ($M)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="actual" fill="var(--color-actual)" />
          <Line type="monotone" dataKey="budget" stroke="var(--color-budget)" strokeWidth={2} dot={{ r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

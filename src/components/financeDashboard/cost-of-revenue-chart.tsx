"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    quarter: "Q1 2023",
    Freight: 0.8,
    Packaging: 0.5,
    Production: 1.2,
  },
  {
    quarter: "Q2 2023",
    Freight: 0.9,
    Packaging: 0.6,
    Production: 1.3,
  },
  {
    quarter: "Q3 2023",
    Freight: 1.0,
    Packaging: 0.6,
    Production: 1.4,
  },
  {
    quarter: "Q4 2023",
    Freight: 1.1,
    Packaging: 0.7,
    Production: 1.5,
  },
  {
    quarter: "Q1 2024",
    Freight: 1.2,
    Packaging: 0.7,
    Production: 1.6,
  },
]

export function CostOfRevenueChart() {
  return (
    <ChartContainer
      config={{
        Freight: {
          label: "Freight",
          color: "hsl(var(--chart-4))",
        },
        Packaging: {
          label: "Packaging",
          color: "hsl(var(--chart-5))",
        },
        Production: {
          label: "Production Support",
          color: "hsl(var(--chart-6))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
        
          stackOffset="sign"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis label={{ value: "Cost ($M)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="Freight" stackId="a" fill="var(--color-Freight)" />
          <Bar dataKey="Packaging" stackId="a" fill="var(--color-Packaging)" />
          <Bar dataKey="Production" stackId="a" fill="var(--color-Production)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

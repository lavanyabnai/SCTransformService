"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    quarter: "Q1 2023",
    Hardwood: 4.2,
    Tile: 2.8,
    Laminate: 1.5,
  },
  {
    quarter: "Q2 2023",
    Hardwood: 4.5,
    Tile: 3.1,
    Laminate: 1.7,
  },
  {
    quarter: "Q3 2023",
    Hardwood: 4.8,
    Tile: 3.3,
    Laminate: 1.9,
  },
  {
    quarter: "Q4 2023",
    Hardwood: 5.2,
    Tile: 3.6,
    Laminate: 2.1,
  },
  {
    quarter: "Q1 2024",
    Hardwood: 5.5,
    Tile: 3.8,
    Laminate: 2.3,
  },
]

export function RevenueChart() {
  return (
    <ChartContainer
      config={{
        Hardwood: {
          label: "Hardwood",
          color: "hsl(var(--chart-1))",
        },
        Tile: {
          label: "Tile",
          color: "hsl(var(--chart-2))",
        },
        Laminate: {
          label: "Laminate",
          color: "hsl(var(--chart-3))",
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
          stackOffset="sign"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis label={{ value: "Revenue ($M)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="Hardwood" stackId="a" fill="var(--color-Hardwood)" />
          <Bar dataKey="Tile" stackId="a" fill="var(--color-Tile)" />
          <Bar dataKey="Laminate" stackId="a" fill="var(--color-Laminate)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

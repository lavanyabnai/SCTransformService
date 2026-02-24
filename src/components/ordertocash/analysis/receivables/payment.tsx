"use client"


import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Net 15", Late: 0.5, Payments: 1.4 },
  { month: "Net 30", Late: 0.8, Payments: 2.4 },
  { month: "Net 45", Late: 0.5, Payments: 1.3 },
]

const chartConfig = {
  Late: {
    label: "Late",
    color: "hsl(var(--chart-1))",
  },
  Payments: {
    label: "Payments",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Payment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Which payment terms have most Late Payments?</CardTitle>
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Late" fill="var(--color-Late)" radius={4} 
            >
            <LabelList
                dataKey="Late"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />  
            </Bar>
            <Bar dataKey="Payments" fill="var(--color-Payments)" radius={4} 
            >
            <LabelList
                dataKey="Payments"
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

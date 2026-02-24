"use client"

import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts"

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
  { month: "Q2 2021", Returned: 2.4, Cancelled: 1.9 },
  { month: "Q4 2021", Returned: 1.6, Cancelled: 2.7 },
  { month: "", Returned: 1.8, Cancelled: 3.1 },
  { month: "Q2 2022", Returned: 1.4, Cancelled: 3.3 },
  { month: "", Returned: 2.0, Cancelled: 3.5 },
  { month: "Q4 2022", Returned:1.1 , Cancelled: 3.7 },
]

const chartConfig = {
  Returned: {
    label: "Returned Qty",
    color: "hsl(var(--chart-1))",
  },
  Cancelled: {
    label: "Cancelled Qty",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Cancellation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cancellation & Return Trent</CardTitle>
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
            <Bar dataKey="Returned" fill="var(--color-Returned)" radius={4} 
            >
            <LabelList
                dataKey="Returned"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />

            </Bar>
            <Bar dataKey="Cancelled" fill="var(--color-Cancelled)" radius={4} 
            >
            <LabelList
                dataKey="Cancelled"
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

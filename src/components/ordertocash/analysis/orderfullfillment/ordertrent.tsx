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
  { month: "Q2 2021", Booking: 380, Open: 110 },
  { month: "Q4 2021", Booking: 280, Open: 100 },
  { month: "", Booking: 310, Open: 110 },
  { month: "Q2 2022", Booking: 270, Open: 120 },
  { month: "", Booking: 380, Open: 140 },
  { month: "Q4 2022", Booking: 250, Open: 240 },
]

const chartConfig = {
  Booking: {
    label: "Booking Sales",
    color: "hsl(var(--chart-1))",
  },
  Open: {
    label: "Open Order",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Ordertrend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Trent</CardTitle>

      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
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
            <Bar dataKey="Booking" fill="var(--color-Booking)" radius={4} 
            >
            <LabelList
                dataKey="Booking"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />
           
            </Bar>
            <Bar dataKey="Open" fill="var(--color-Open)" radius={4} 
            >
            <LabelList
                dataKey="Open"
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

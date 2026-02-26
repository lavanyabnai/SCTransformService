"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { month: "03/22", desktop: 20, mobile: 70 },
  { month: "03/23", desktop: 40, mobile: 50 },
  { month: "03/24", desktop: 50, mobile: 30 },
  { month: "03/25", desktop: 70, mobile: 20 },
  { month: "03/26", desktop: 60, mobile: 10 },
  { month: "03/27", desktop: 30, mobile: 70 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function InvProject() {
  return (
    <Card className="text-blue-900">
    <CardHeader className="space-y-1">
      <CardTitle className="text-xl flex">
        Projected Inventory Vs Projected Demand
      </CardTitle>
    </CardHeader>

    <CardContent className="">
    <ChartContainer config={chartConfig} className="h-[185px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}

            />
            <Line
              dataKey="mobile"
              type="linear"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-mobile)",
              }}
              activeDot={{
                r: 6,
              }}

            />
          </LineChart>
        </ChartContainer>
    </CardContent>
  </Card>
       
   
  )
}

"use client"


import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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
  { month:  "Q2 2021", Austin: 67, Nashville: 41,Seattle:61},
  { month:  "Q4 2021", Austin: 65, Nashville: 60,Seattle:61 },
  { month: "", Austin: 70, Nashville: 60,Seattle:52 },
  { month: "Q2 2022", Austin: 70, Nashville: 95,Seattle:65 },
  { month: "", Austin: 80, Nashville: 95,Seattle:81 },
  { month: "Q4 2022", Austin: 48, Nashville: 75,Seattle:81 },
]

const chartConfig = {
  Austin: {
    label: "Austin",
    color: "hsl(var(--chart-1))",
  },
  Nashville: {
    label: "Nashville",
    color: "hsl(var(--chart-2))",
  },
  Seattle: {
    label: "Seattle",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function OnTimeShipment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>On Time Shipment by Location</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
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
              dataKey="Austin"
              type="monotone"
              stroke="var(--color-Austin)"
              strokeWidth={2}
              dot={false}
            
            >
            <LabelList
                dataKey="Austin"
                position="insideTop"
                offset={8}
                className="fill-black"
                fontSize={12}
            />
            </Line>
            <Line
              dataKey="Nashville"
              type="monotone"
              stroke="var(--color-Nashville)"
              strokeWidth={2}
              dot={false}
            >
            <LabelList
                dataKey="Nashville"
                position="insideTop"
                offset={8}
                className="fill-black"
                fontSize={12}
            />
            </Line>
            <Line
              dataKey="Seattle"
              type="monotone"
              stroke="var(--color-Seattle)"
              strokeWidth={2}
              dot={false}
            >
            <LabelList
                dataKey="Seattle"
                position="insideTop"
                offset={8}
                className="fill-black"
                fontSize={12}
            />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

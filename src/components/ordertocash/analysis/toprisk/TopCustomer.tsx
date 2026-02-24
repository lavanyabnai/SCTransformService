"use client"

import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts"

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
  { Customer: "BitSight", Amount: 14, fill: "oklch(0.901 0.058 230.902)" },
  { Customer: "Boston Dynamics", Amount: 10, fill: "oklch(0.865 0.127 207.078)" },
  { Customer: "Dixon Industries", Amount: 9, fill: "oklch(0.609 0.126 221.723)" },
  { Customer: "Calico Energy", Amount: 7, fill: "oklch(0.956 0.045 203.388)" },
  { Customer: "Carbon Security", Amount: 6.5, fill: "oklch(0.917 0.08 205.041)" },
  { Customer: "Tidemark", Amount:6, fill: "oklch(0.777 0.152 181.912)" },
  { Customer: "Everlaw", Amount: 4.1, fill: "oklch(0.901 0.058 230.902)" },
  { Customer: "Emerald Hotels", Amount: 3.8, fill: "oklch(0.901 0.058 230.902)" },
  { Customer: "LAF Enterprises", Amount: 3.9, fill: "oklch(0.715 0.143 215.221)" },
  { Customer: "Consolidated Services", Amount: 3.5, fill: "oklch(0.855 0.138 181.071)" },
  
]

const chartConfig = {
  Customer: {
    label: "Customer",
    color: "hsl(var(--chart-1))",
  },
  Amount: {
    label: "Amount",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig
export function TopCustomer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Customers with Predictive Risk</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="Customer"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
             
            />
            
            <XAxis dataKey="Amount" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Amount" layout="vertical" radius={5} >
            <LabelList
                dataKey="Customer"
                position="insideLeft"
                offset={8}
                className="fill-white"
                fontSize={12}
              />
              <LabelList
                dataKey="Amount"
                position="insideRight"
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

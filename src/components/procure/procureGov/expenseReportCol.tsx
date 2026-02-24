"use client"


import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Supplier 1", ok: 100, late: 120, earlyQty: 100, earlyDays: 150, pastDue: 130 },
  { month: "Supplier 2", ok: 90, late: 110, earlyQty: 80, earlyDays: 170, pastDue: 50 },
  { month: "Supplier 3", ok: 120, late: 100, earlyQty: 90, earlyDays: 180, pastDue: 70 },
  { month: "Supplier 4", ok: 110, late: 130, earlyQty: 100, earlyDays: 200, pastDue: 60 },
  { month: "Supplier 5", ok: 130, late: 120, earlyQty: 110, earlyDays: 190, pastDue: 80 },
  { month: "Supplier 6", ok: 140, late: 130, earlyQty: 120, earlyDays: 210, pastDue: 90 },
]

const chartConfig = {
  ok: {
    label: "OK",
    color: "hsl(var(--chart-1))",
  },
  late: {
    label: "LATE",
    color: "hsl(var(--chart-2))",
  },
  earlyQty: {
    label: "EARLY (Qty)",
    color: "hsl(var(--chart-3))",
  },
  earlyDays: {
    label: "EARLY (Days)",
    color: "hsl(var(--chart-4))",
  },
  pastDue: {
    label: "Past Due",
    color: "hsl(var(--chart-5))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export default function ExpenseReportCol() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary by Supplier</CardTitle>
     
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='h-[275px] w-full'>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="ok" stackId="a" fill="var(--color-ok)" radius={[4, 0, 0, 4]}>
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="late" stackId="a" fill="var(--color-late)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="earlyQty" stackId="a" fill="var(--color-earlyQty)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="earlyDays" stackId="a" fill="var(--color-earlyDays)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="pastDue" stackId="a" fill="var(--color-pastDue)" radius={[0, 4, 4, 0]}/>
             
          
          </BarChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}

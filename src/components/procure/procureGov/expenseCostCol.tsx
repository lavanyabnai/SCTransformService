
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,

} from '@/components/ui/card';
import {
  ChartContainer,
  ChartLegendContent,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"


const chartData = [
  { month: "Q1", ok:50, late:120, earlyQtr:140, earlyDays:150, pastDue:180 },
  { month: "Q2", ok:70, late:140, earlyQtr:180, earlyDays:190, pastDue:0 },
]


const chartConfig = {
  ok: {
    label: "OK",
    color: "hsl(var(--chart-1))",
  },
  late: {
    label: "Late",
    color: "hsl(var(--chart-2))",
  },
  earlyQtr: {
    label: "Early (Qtr)",
    color: "hsl(var(--chart-3))",
  },
  earlyDays: {
    label: "Early (Days)",
    color: "hsl(var(--chart-4))",
  },
  pastDue: {
    label: "Past Due",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig
const kpi = {
  title: "Yearly",
  value: 1000,
  status: "",
}

export default function ExpenseCostCol() {
  return (
    <>
      <Card  >
        <div className="relative rounded-lg">
          <span
            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === 'Above Target'
              ? `bg-green-500`
              : kpi.status === 'Below Target'
                ? `bg-red-500`
                : ''}`}
          ></span>
        </div><CardHeader className="px-4 py-2">

          <div className="my-2 flex items-baseline gap-2 ">

            <div>
              <h2 className="text-base font-medium text-gray-900">
              PO Goverance Breakdown
              </h2>

            </div>

            {/* <div className="ml-auto  overflow-x-hidden px-2 text-center text-sm font-medium text-gray-700">
    
      <Progress value={kpi.TargetAch}  indicatorColor={`${ kpi.TargetAch > 50? "bg-green-400" : "bg-red-400"}`}  className="ml-auto h-2 w-[50%]" />
     </div> */}
          </div>
        </CardHeader>
        <CardContent className="px-4">
          <ChartContainer config={chartConfig} className='h-[275px] w-full'>

            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
           
              <Bar
                dataKey="ok"
                stackId="a"
                fill="var(--color-ok)"
                radius={[0, 0, 4, 4]}
              >
                <LabelList dataKey="ok" position="insideTop" className='fill-white' />
              </Bar>
              <Bar
                dataKey="late"
                stackId="a"
                fill="var(--color-late)"
                radius={[4, 4, 0, 0]}
              >
                <LabelList dataKey="late" position="insideTop" className='fill-white' />
              </Bar>
              <Bar
                dataKey="earlyQtr"
                stackId="a"
                fill="var(--color-earlyQtr)"
                radius={[4, 4, 0, 0]}
              >
                <LabelList dataKey="earlyQtr" position="insideTop" className='fill-white' />
              </Bar>
              <Bar
                dataKey="earlyDays"
                stackId="a"
                fill="var(--color-earlyDays)"
                radius={[4, 4, 0, 0]}
              >
                <LabelList dataKey="earlyDays" position="insideTop" className='fill-white' />
              </Bar>
              <Bar
                dataKey="pastDue"
                stackId="a"
                fill="var(--color-pastDue)"
                radius={[4, 4, 0, 0]}
              >
                <LabelList dataKey="pastDue" position="insideTop" className='fill-white' />
              </Bar>
            </BarChart>
          </ChartContainer>

        </CardContent>

     
      </Card >
    </>
  );
}

"use client";


import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";


const chartData = [
  { browser: "Holiday", visitors: 600, fill: "var(--color-Holiday)" },
  { browser: "NA", visitors: 300, fill: "var(--color-NA)" },
  { browser: "School", visitors: 200, fill: "var(--color-School)" },
  { browser: "Spring", visitors: 100, fill: "var(--color-Spring)" },
  { browser: "Summer", visitors: 50, fill: "var(--color-Summer)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Holiday: {
    label: "Holiday",
    color: "hsl(var(--chart-1))",
  },
  NA: {
    label: "NA",
    color: "hsl(var(--chart-2))",
  },
  School: {
    label: "School",
    color: "hsl(var(--chart-3))",
  },
  Spring: {
    label: "Spring",
    color: "hsl(var(--chart-4))",
  },
  Summer: {
    label: "Summer",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
export default function OrderLinePie() {
  return (
    <Card>
       
    <CardHeader>
    <CardTitle className='text-2xl font-bold'>Order Line Sub Total by Product Class by Season
      </CardTitle>
      
    </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" >
            <LabelList
                dataKey="visitors"
                className="fill-white"
                stroke="none"
                fontSize={12}
                
              />
              </Pie>
            <ChartLegend
              content={<ChartLegendContent  />

              }
              className="-translate-y-2 flex-wrap gap-2"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    
    </Card>
  );
}

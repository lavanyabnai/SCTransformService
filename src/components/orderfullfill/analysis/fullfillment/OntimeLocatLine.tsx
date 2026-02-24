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
} from "@/components/ui/chart"
import { CartesianGrid, LabelList, Line, LineChart, ReferenceLine, XAxis } from "recharts"
const chartData = [
  { Hours: "Tile", rate: 88 },
  { Hours: "Laminate", rate: 91 },
  { Hours: "Hardwood", rate: 86 }
]

const chartConfig = {
  rate: {
    label: "Rate",
    color: "hsl(var(--chart-1))",
  },

};


export default function OntimeLocatLine() {
  return (
    <>
      <Card>
        <CardHeader className="px-4 py-2">

          <div className="my-2 flex items-baseline gap-2">


            <div>
              
              <h1 className="text-3xl font-bold text-black">Forecast Accuracy</h1>
              <p className="text-md text-black-500 italic">Percentage accuracy of sales forecast vs. actual sales</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <ChartContainer config={chartConfig} className='h-30 w-full'>

            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="Hours"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />

              <ReferenceLine isFront={true} y={83.9} label="Hours" stroke="red" strokeDasharray="3 3" />
              <Line
                dataKey="rate"
                type="linear"
                stroke="var(--color-rate)"
                strokeWidth={2}
                dot={{ fill: "var(--color-rate)" }}
                activeDot={{ r: 6 }}
              >
                <LabelList
                  position="top"
                  offset={8}
                  className="fill-foreground"
                  fontSize={8}
                />
              </Line>

            </LineChart>
          </ChartContainer>

        </CardContent>
       
      </Card >
    </>
  );
}

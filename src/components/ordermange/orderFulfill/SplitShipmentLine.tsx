"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartLegendContent,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
} from "recharts";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';


const chartData = [
  { month: "In-store", desktop: 1.2, mobile: 80 },
  { month: "Home Delivery", desktop: 2.5, mobile: 200 },
  { month: "Special Orders", desktop: 9.8, mobile: 120 },

];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const kpi = {

  status: "",
};

export default function SplitShipmentLine() {
  const workspaceId = useParams().workspaceId;  
  return (
      <Card>
        <div className="relative rounded-lg">
        <span
                  className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                    kpi.status === 'Above Target'
                      ? `bg-green-500`
                      : kpi.status === 'Below Target'
                        ? `bg-red-500`
                        : 'bg-yellow-500'
                  }`}
                ></span>
        </div>
        <CardHeader className="px-4 py-2">
          <div className="my-2 flex items-baseline gap-2">
            <div>
              <div className="flex items-center gap-2">
             
               
              </div>

              <h1  className="text-3xl font-bold text-black">Split Shipment Rate</h1>
              <h2 className="text-base font-medium text-gray-900">
                  {" "}
                  Percentage of orders requiring multiple shipments to fulfill

                 
                </h2>
            </div>
        
          </div>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <ChartContainer config={chartConfig} className="h-30 w-full">
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
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />

              <ReferenceLine
                isFront={true}
                y={97}
                label="Target"
                stroke="red"
                strokeDasharray="3 3"
              />
              <Line
                dataKey="desktop"
                type="linear"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={{ fill: "var(--color-desktop)" }}
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
        <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 ">
                 
                 <div className="flex w-0 flex-1">
                   <Link
                     href={`/workspaces/${workspaceId}/putawayAnalysis`}
                     className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-bl-lg"
                   >
                     <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
                       <WrenchScrewdriverIcon
                         className="h-5 w-5"
                         aria-hidden="true"
                       />
                       Analyze
                     </span>
                   </Link>
                 </div>

                 <div className="-ml-px flex flex-1">
                   <Link
                     href='' // Fixed here
                     className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-br-lg"
                   >
                     <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
                       <CircleStackIcon
                         className="h-5 w-5"
                         aria-hidden="true"
                       />
                       Explore Data
                     </span>
                   </Link>
                 </div>

               
             </CardFooter>
      </Card>
    
  );
}

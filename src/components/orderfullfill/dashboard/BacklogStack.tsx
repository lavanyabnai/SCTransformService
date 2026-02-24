"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const chartData = [
  { month: "DC-1", Austin: 30, Nashville: 20, seattle:10 },
  { month: "DC-2", Austin: 18, Nashville: 12, seattle:10 },
  { month: "DC-3", Austin: 21, Nashville: 10, seattle:19 },
  { month: "DC-4", Austin: 25, Nashville: 15, seattle:20 },
  { month: "DC-5", Austin: 38, Nashville: 22, seattle:20 },

];

const chartConfig = {
  Austin: {
    label: "Austin",
    color: "hsl(var(--chart-1))",
  },
  Nashville: {
    label: "Nashville",
    color: "hsl(var(--chart-2))",
  },
  seattle: {
      label: "Seattle",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const kpi = {
  status: "Above Target",
};

export default function BacklogStack() {
  const workspaceId = useParams().workspaceId;
  return (
    <Card>
       <div className="relative rounded-lg">
          <span
            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
              kpi.status === "Above Target"
                ? `bg-green-500`
                : kpi.status === "Below Target"
                ? `bg-red-500`
                : kpi.status === "On Target"
                ? `bg-yellow-500`
                : ""
            }`}
          ></span>
        </div>
        <CardHeader>
      <CardTitle className='text-3xl font-bold'>Backlog
      </CardTitle>
      <CardDescription className='text-2xl font-semibold text-black-500'>$85.10M
      </CardDescription>
      <CardDescription>
     2021 Q4 +49.53% QoQ
      </CardDescription>
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
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="Austin"
              stackId="a"
              fill="var(--color-Austin)"
              radius={[0, 0, 4, 4]}
            >
              <LabelList
                position="insideTop"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
            </Bar>
            <Bar
              dataKey="Nashville"
              stackId="a"
              fill="var(--color-Nashville)"
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                position="insideTop"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
            </Bar>
            <Bar
              dataKey="seattle"
              stackId="a"
              fill="var(--color-seattle)"
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                position="insideTop"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 justify-end">
                 
                 <div className="flex w-0 flex-1">
                   <Link
                     href={`/workspaces/${workspaceId}/fullfillAnalysis`}
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

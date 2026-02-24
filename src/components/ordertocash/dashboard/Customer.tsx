"use client";

import { Pie, PieChart } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
const chartData = [

  { browser: "Neutral", visitors: 11.81, fill: "oklch(0.704 0.14 18)" },
  { browser: "satisfied", visitors: 24.31, fill: "oklch(0.705 0.213 47.604)" },
  { browser: "Very Satisfied", visitors:4.86 , fill: "oklch(0.704 0.14 1)" },
  { browser: "Very Unsatisfied", visitors: 3.47, fill: "oklch(0.705 0.213 4)" },
  { browser: "Unsatisfied", visitors: 55.56, fill: "oklch(0.704 0.14 182.503)" },

];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
const kpi = {
  status: "Below Target",
};
  export default function Customer() {
  const workspaceId = useParams().workspaceId;  
  return (
    <Card>
       <div className="relative rounded-lg">
          <span
            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
              kpi.status === "Above Target"
                ? "bg-green-500"
                : kpi.status === "Below Target"
                ? "bg-red-500"
                : kpi.status === "On Target"
                ? "bg-yellow-500"
                : ""
            }`}
          ></span>
        </div>
    <CardHeader>
      <CardTitle> Customer Satisfaction
      </CardTitle>
      <CardDescription className='text-4xl font-bold text-brown-500'>
        2.65
        <span className="text-sm text-gray-500">
         -30%YoY
        </span>
      </CardDescription>
    </CardHeader>
      <CardContent>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" >
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      </CardContent>
      <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 ">
        <div className="flex w-0 flex-1">
          <Link
              href={`/workspaces/${workspaceId}/ordertocashAnalysis`}// Fixed here
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-bl-lg"
          >
            <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
              <WrenchScrewdriverIcon className="h-5 w-5" aria-hidden="true" />
              Analyze
            </span>
          </Link>
        </div>

        <div className="-ml-px flex flex-1">
          <Link
            href="" // Fixed here
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-br-lg"
          >
            <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
              <CircleStackIcon className="h-5 w-5" aria-hidden="true" />
              Explore Data
            </span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
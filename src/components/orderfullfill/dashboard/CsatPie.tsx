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
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
const chartData = [
  { browser: "Neutral", visitors: 4.81, fill: "oklch(0.925 0.084 155.995)" },
  { browser: "Satisfied", visitors: 16.35, fill: "oklch(0.437 0.078 188.216)" },
  { browser: "Unsatisfied", visitors:38.46, fill: "oklch(0.666 0.179 58.318)" },
  { browser: "Very Dissatisfied", visitors: 6.73, fill: "oklch(0.715 0.143 215.221)" },
  { browser: "Very Unsatisfied", visitors: 33.65, fill: "oklch(0.938 0.127 124.321)" },
];

const chartConfig = {
  Neutral: {
    label: "Neutral",
    color: "hsl(var(--chart-1))",
  },
  Satisfied: {
    label: "Satisfied",
    color: "hsl(var(--chart-2))",
  },
  Unsatisfied: {
    label: "Unsatisfied",
    color: "hsl(var(--chart-3))",
  },
  VeryDissatisfied: {
    label: "Very Dissatisfied",
    color: "hsl(var(--chart-4))",
  },
    VeryUnsatisfied: {
    label: "Very Unsatisfied",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
const kpi = {
  status: "Below Target",
};
export default function CsatPie() {
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
      <CardTitle className='text-3xl font-bold'>CSAT
      </CardTitle>
      <CardDescription className='text-2xl font-semibold text-black-500'>75%
      </CardDescription>
      <CardDescription>
     2021 Q4 -6% QoQ
      </CardDescription>
    </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
         className="h- "
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
            <ChartLegend
              content={<ChartLegendContent  />}
              className="-translate-y-2 flex-wrap gap-2"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 ">
        <div className="flex w-0 flex-1">
          <Link
            href={`/workspaces/${workspaceId}/fullfillAnalysis`}
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

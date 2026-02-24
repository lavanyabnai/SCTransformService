import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { Treemap, ResponsiveContainer } from "recharts";
const data = [
  {
    name: "axis",
    children: [
      { name: "product defect", size: 50, fill: "oklch(0.685 0.169 237.323)" },
      { name: " Negative feedback", size: 15, fill: "oklch(0.705 0.213 47.604)" },
      { name: "Better price available", size: 15, fill: "oklch(0.705 0.213 47.604)" },
      { name: "Missing or Broken parts", size: 5, fill: "oklch(0.702 0.183 293.541)" },
      { name: "Payment issue", size: 5, fill: "oklch(0.702 0.183 293.541)" },
    ],
  },
];


const kpi = {
  status: "Below Target",
};
export default function Return() {
  const workspaceId = useParams().workspaceId;  
  // const emptyStyles = { background: '#ef4444' };
  // const progressStyles = { background: '#22c55e' };

  return (
    <Card>
      <div className="relative rounded-lg">
        <span
          className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
            kpi.status === "Above Target"
              ? `bg-green-500`
              : kpi.status === "Below Target"
              ? `bg-red-500`
              : "bg-yellow-500"
          }`}
        ></span>
      </div>

      <CardHeader className="px-4 py-2">
        <div className="my-2 flex items-baseline gap-2 ">
          <div>
            <h2 className="text-base font-medium text-gray-900">Return Rate</h2>
            <h1 className="text-4xl font-bold text-black">8%</h1>
          </div>
        </div>
      </CardHeader>
      <CardContent>
     
        <ResponsiveContainer  width="100%" height={240} >
          <Treemap
            data={data}
            dataKey="size"
            aspectRatio={3 / 2}
            stroke="#fff"
            fill="#8884d8"
          />
        </ResponsiveContainer>

      </CardContent>
      <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 ">
        <div className="flex w-0 flex-1">
          <Link
            href={`/workspaces/${workspaceId}/ordertocashAnalysis`} // Fixed here
            className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white rounded-bl-lg"
          >
            <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
              <WrenchScrewdriverIcon className="h-5 w-5" aria-hidden="true" />
              Analyze
            </span>
          </Link>
        </div>

        <div className="-ml-px flex flex-1">
          <Link
            href={`/workspaces/${workspaceId}/ordertocashAnalysis`} // Fixed here
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

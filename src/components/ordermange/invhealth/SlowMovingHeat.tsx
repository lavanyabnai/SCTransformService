/* eslint-disable react/prop-types */
import React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ResponsiveContainer, Treemap } from "recharts";
import Link from 'next/link';
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';



const data = [
  {
    name: "stores",
    children: [
      { name: "Tile (Store 102)", size: 12, fill: '#8884d8', label: "12%" },
      { name: "Vinyl (Store 315)", size: 8, fill: '#8884d8', label: "8%" }
    ],
  },
];


const kpi = {

  status: 'Above Target',

}
export default function SlowMovingHeat() {
  const workspaceId = useParams().workspaceId;  

  return (
    <Card >
      <div className="relative rounded-lg">
        <span
          className={`absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === 'Above Target'
            ? `bg-green-500`
            : kpi.status === 'Below Target'
              ? `bg-red-500`
              : ''
            }`}
        ></span>
      </div>

      <CardHeader className="px-4 py-2">
      <div className="my-2 flex items-baseline gap-2">
          <div>
            <h1 className="text-3xl font-bold text-black">
            Slow-Moving Inventory
            </h1>
            <p className="text-md text-black-500 italic">
            Percentage of inventory with sales velocity below threshold
            </p>
          </div>
        </div>
       
      </CardHeader >
      <CardContent className="px-4 py-2">
        <ResponsiveContainer width="100%" height={240}>
          <Treemap
            data={data}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
          />
        </ResponsiveContainer>



      </CardContent>
      <CardFooter className="py-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Jan 12 - Jan 20
            </div>
         

    </CardFooter>
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
    </Card >
  );
}

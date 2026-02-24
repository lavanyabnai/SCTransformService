/* eslint-disable react/prop-types */
import React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';


import { Treemap, ResponsiveContainer } from "recharts";


const data = [
  {
    name: "axis",
    children: [
      { name: "Axes", size: 130, fill: '#8884d8' },
      { name: "Axis", size: 243, fill: '#8884d8' },
      { name: "AxisGridLine", size: 62, fill: '#8884d8' },
      { name: "AxisLabel", size: 300, fill: '#8884d8' },
      { name: "CartesianAxes", size: 180, fill: '#8884d8' },
    ],
  },

];


const kpi = {

  status: 'Above Target',

}
export default function CancelHeat() {
  // const emptyStyles = { background: '#ef4444' };
  // const progressStyles = { background: '#22c55e' };

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

        <div className="my-2 flex items-baseline gap-2 ">

          <div>
            <h2 className="text-base font-medium text-gray-900">
              Daily Lines Processed per FTE
            </h2>
            <h1 className="text-4xl font-bold text-black">
              185
            </h1>
          </div>
        </div>
      </CardHeader >
      <CardContent className="px-4 py-2">
        <ResponsiveContainer width="100%" height={300}>
          <Treemap
            data={data}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="#fff"
                    />
        </ResponsiveContainer>

      </CardContent>
    

    </Card>
  );
}

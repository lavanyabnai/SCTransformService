import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';
import { Card, CardHeader, CardTitle, CardDescription,CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';

const data = [
    {
        windSpeed: 16.4,
        rainfall: 5.4
    },
    {
        windSpeed: 21.7,
        rainfall: 2
    },
    {
        windSpeed: 25.4,
        rainfall: 3
    },
    {
        windSpeed: 19,
        rainfall: 2
    },
    {
        windSpeed: 10.9,
        rainfall: 1
    },
    {
        windSpeed: 13.6,
        rainfall: 3.2
    },
    {
        windSpeed: 10.9,
        rainfall: 7.4
    },
    {
        windSpeed: 10.9,
        rainfall: 0
    },
    {
        windSpeed: 10.9,
        rainfall: 8.2
    },
    {
        windSpeed: 16.4,
        rainfall: 0
    },
    {
        windSpeed: 16.4,
        rainfall: 1.8
    },
    {
        windSpeed: 13.6,
        rainfall: 0.3
    },
    {
        windSpeed: 29.9,
        rainfall: 0
    },
    {
        windSpeed: 27.1,
        rainfall: 2.3
    },
    {
        windSpeed: 16.4,
        rainfall: 0
    }
];
const kpi = {
  title: "Yearly",
  value: 1000,
  status: "Above Target",
};
export default function LargebulkScartter() {
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
        <CardHeader>
            <CardTitle className="text-3xl font-bold text-black"> Large/Bulky Item Handling Performance
            </CardTitle>
            <CardDescription className="text-md text-black-500">
            Damage rates and delivery times for large flooring orders

            </CardDescription>
        </CardHeader>
        <Chart className='h-[280px]'>
            <ChartTitle text="Wind Speed vs. Rainfall" />
            <ChartSeries>
                <ChartSeriesItem type="scatter" data={data} xField="rainfall" yField="windSpeed" />
        </ChartSeries>
        <ChartXAxis>
            <ChartXAxisItem title={{ text: 'Rainfall [mm]' }} min={-1} max={9} />
        </ChartXAxis>
        <ChartYAxis>
            <ChartYAxisItem title={{ text: 'Wind Speed [km/h]' }} min={8} max={32} />
        </ChartYAxis>
    </Chart>
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

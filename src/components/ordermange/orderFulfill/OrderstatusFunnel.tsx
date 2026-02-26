import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import {
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';
const data = [
    {
        stat: 'Impressions ',
        count: 434823,
        color: '#0e5a7e'
    },
    {
        stat: 'Clicks',
        count: 356854,
        color: '#166f99'
    },
    {
        stat: 'Unique Visitors',
        count: 280022,
        color: '#2185b4'
    },
    {
        stat: 'Downloads',
        count: 190374,
        color: '#319fd2'
    },
    {
        stat: 'Purchases',
        count: 120392,
        color: '#3eaee2'
    }
];


const tooltipRender = (props: any) => {
    if (props.point) {
        return props.point.dataItem.stat;
    }
};
const kpi = {
  title: "Yearly",
  value: 1000,
  status: "Above Target",
};
export default function OrderstatusFunnel () {
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
            <CardTitle className="text-3xl font-bold text-black">Order Status Funnel</CardTitle>
            <CardDescription className="text-md text-black-500"> 
                Percentage of order lifecycle with real-time status visibility
            </CardDescription>
        </CardHeader>
        <CardContent>
    <Chart style={{ margin: '0 auto', width: 300, height: 300 }}>
        <ChartTitle text="Sales funnel" />
        <ChartSeries>
            <ChartSeriesItem type="funnel" data={data} categoryField="stat" field="count" colorField="color">
                <ChartSeriesLabels color="white" background="none" format="N0" />
            </ChartSeriesItem>
        </ChartSeries>
        <ChartTooltip render={tooltipRender} />
        <ChartLegend visible={false} />
    </Chart>
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

"use client";
import { AgChartsReact } from "ag-charts-react";

import {
  topology,
  backgroundtopology,
  capitals,
} from "@/app/data/network/mapData/supplierMap/topology";

import "ag-charts-enterprise";
import { CardContent, Card } from "../ui/card";

export const data = [
  { name: "Alabama", code: "AL", sales: 302289 },
  { name: "Arizona", code: "AZ", sales: 512504 },
  { name: "Arkansas", code: "AR", sales: 176878 },
  { name: "California", code: "CA", sales: 3898158 },
  { name: "Colorado", code: "CO", sales: 525868 },
  { name: "Connecticut", code: "CT", sales: 343186 },
  { name: "Delaware", code: "DE", sales: 94116 },
  { name: "District of Columbia", code: "DC", sales: 176491 },
  { name: "Florida", code: "FL", sales: 1595347 },
  { name: "Georgia", code: "GA", sales: 811294 },
  { name: "Idaho", code: "ID", sales: 119810 },
  { name: "Illinois", code: "IL", sales: 1092246 },
  { name: "Indiana", code: "IN", sales: 501267 },
  { name: "Iowa", code: "IA", sales: 250819 },
  { name: "Kansas", code: "KS", sales: 230388 },
  { name: "Kentucky", code: "KY", sales: 280449 },
  { name: "Louisiana", code: "LA", sales: 313334 },
  { name: "Maine", code: "ME", sales: 91818 },
  { name: "Maryland", code: "MD", sales: 516455 },
  { name: "Massachusetts", code: "MA", sales: 741343 },
  { name: "Michigan", code: "MI", sales: 664452 },
  { name: "Minnesota", code: "MN", sales: 475590 },
  { name: "Mississippi", code: "MS", sales: 146725 },
  { name: "Missouri", code: "MO", sales: 425203 },
  { name: "Montana", code: "MT", sales: 71088 },
  { name: "Nebraska", code: "NE", sales: 181127 },
  { name: "Nevada", code: "NV", sales: 241432 },
  { name: "New Hampshire", code: "NH", sales: 112065 },
  { name: "New Jersey", code: "NJ", sales: 806890 },
  { name: "New Mexico", code: "NM", sales: 131535 },
  { name: "New York", code: "NY", sales: 2168133 },
  { name: "North Carolina", code: "NC", sales: 773365 },
  { name: "North Dakota", code: "ND", sales: 74538 },
  { name: "Ohio", code: "OH", sales: 880871 },
  { name: "Oklahoma", code: "OK", sales: 256974 },
  { name: "Oregon", code: "OR", sales: 319525 },
  { name: "Pennsylvania", code: "PA", sales: 974558 },
  { name: "Rhode Island", code: "RI", sales: 77948 },
  { name: "South Carolina", code: "SC", sales: 325373 },
  { name: "South Dakota", code: "SD", sales: 73005 },
  { name: "Tennessee", code: "TN", sales: 527938 },
  { name: "Texas", code: "TX", sales: 2596144 },
  { name: "Utah", code: "UT", sales: 275048 },
  { name: "Vermont", code: "VT", sales: 43384 },
  { name: "Virginia", code: "VA", sales: 712900 },
  { name: "Washington", code: "WA", sales: 808344 },
  { name: "West Virginia", code: "WV", sales: 100240 },
  { name: "Wisconsin", code: "WI", sales: 417135 },
  { name: "Wyoming", code: "WY", sales: 50743 },
];

const options = {
  data,
  topology,
  series: [
    {
      type: "map-shape-background",
      fillOpacity: 0,
      stroke: "#66879933",
      fill: "#668799",
      topology: backgroundtopology,
    },
    {
      type: "map-shape",
      idKey: "name",
      colorKey: "sales",
      fill: "#668799",
      fillOpacity: 0.5,
      highlightStyle: {
        item: {
          fillOpacity: 1,
        },
      },
      colorRange: ["#bae6fd", "#0ea5e9", "#60a5fa"],
    },

    {
      type: "map-marker",
      topology: capitals,
      data: capitals.features.map((t) => {
        return { name: t.properties.name };
      }),

      idKey: "name",
      shape: "pin",

      size: 10,
      fill: "#7e22ce",
      fillOpacity: 1,
      strokeWidth: 0,
      tooltip: {
        renderer: (
          params: any
        ) => `<div class="ag-chart-tooltip-title" style="background-color: #7e22ce">
      Store
    </div>
    <div class="ag-chart-tooltip-content">
      <a href="/execution/supplier">${params.datum.name} <br> Order Fulfillment Rate: 37.43% <br> Average Lead Time: 2 <br> Product Quality Score: 46.8% <br> Return Rate: 1.57% <br> Production Capacity Utilization: 5.21% <br> Cost per Unit Produced: 39.53</a>
    </div>`,

        interaction: {
          enabled: true,
        },
      },
    },
  ],
};


export default function Map() {
  return (
    <Card>
      <CardContent className="">
        <div className="h-[460px]">
          <AgChartsReact options={options as any} />
        </div>
      </CardContent>
    </Card>
  );
}

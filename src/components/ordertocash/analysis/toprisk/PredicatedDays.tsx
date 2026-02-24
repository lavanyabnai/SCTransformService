import React from "react";

import { AgChartsReact } from "ag-charts-react";
import { Card } from "@/components/ui/card";




export const maleHeightWeight = [
  {
  laf: 200,
    dixon: 350,
    tidemark: 370,
  },

  {
    laf: 250,
    dixon: 360,
    tidemark: 380,
  },
  {
    laf: 290,
    dixon: 370,
    tidemark: 390,
  },  
  {
    laf: 360,
    dixon: 380,
    tidemark: 400,
  },
  

];


export const PredicatedDays = () => {
  const options = {
    title: {
      text: "Top Customers with Predicated Delays (Days)",
    },
    subtitle: {
      text: "by gender",
    },
    series: [
      {
        type: "bubble",
        title: "Male",
        data: maleHeightWeight,
        xKey: "laf",
        xName: "LAF",
        yKey: "dixon",
        yName: "Dixon",
        sizeKey: "tidemark",
        sizeName: "Tidemark",
      },
    ],
    axes: [
      {
        type: "number",
        position: "bottom",
        title: {
          text: "Max Predicated Delay Days",
        },
        label: {
          formatter: (params: any) => {
            return params.value + "";
          },
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Over Due",
        },
        label: {
          formatter: (params: any) => {
            return params.value + "M";
          },
        },
      },
    ],
  };

  return (
    <Card>
      <AgChartsReact options={options as any} />
    </Card>
  );
};

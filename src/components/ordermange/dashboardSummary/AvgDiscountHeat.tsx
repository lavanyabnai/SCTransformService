'use client'

import React from "react";

import { AgChartsReact } from "ag-charts-react";

import "ag-charts-enterprise";

import { Card,CardContent,CardHeader,CardTitle } from "@/components/ui/card";
const transformedData = [
    {
      channel: "CallCenter",
      Agoural: "12.5",  // Average of UK's overdueamount 1 (10) and 6 (15)
      Garden: "16.7",   // Average of UK's overdueamount 2 (15) and 7 (18.4)
      Houndware: "10.5", // Average of UK's overdueamount 3 (15) and 8 (6)
      Infants: "11.0",  // Average of UK's overdueamount 4 (12) and 9 (10)
      Toys: "10.8"      // Average of UK's overdueamount 5 (10) and 10 (11.6)
    },
    {
      channel: "Room",
      Agoural: "-",     // No data assumed for this example
      Garden: "-",
      Houndware: "-",
      Infants: "-",
      Toys: "-"
    },
    {
      channel: "HA",
      Agoural: "15.0",  // US1's overdueamount 1 (15)
      Garden: "14.0",   // US1's overdueamount 2 (14)
      Houndware: "13.0", // US1's overdueamount 3 (13)
      Infants: "10.0",  // US1's overdueamount 4 (10) and 9 (10)
      Toys: "9.0"       // Average of US1's overdueamount 5 (13) and 10 (5)
    },
    {
      channel: "Store",
      Agoural: "10.0",  // France's overdueamount 1 (10) and 6 (3) and 8 (8) - adjusted example
      Garden: "8.3",    // France's overdueamount 2 (9) and 7 (7) and 9 (9)
      Houndware: "8.0", // France's overdueamount 3 (8)
      Infants: "7.0",   // France's overdueamount 4 (7)
      Toys: "8.0"       // France's overdueamount 5 (6) and 10 (10)
    },
    {
      channel: "Web",
      Agoural: "15.0",  // Supremo's overdueamount 1 (15) and 6 (15)
      Garden: "14.5",   // Supremo's overdueamount 2 (14) and 7 (15)
      Houndware: "12.5", // Supremo's overdueamount 3 (13) and 8 (12)
      Infants: "7.5",   // Supremo's overdueamount 4 (5) and 9 (10)
      Toys: "10.0"      // Supremo's overdueamount 5 (15) and 10 (5)
    }
  ];

export default function AvgDiscountHeat () {
    const options = {
        data: transformedData,
        series: [
          {
            type: "heatmap",
            xKey: "channel",
            xName: "Selling Channel",
            yKey: "channel",
            yName: "Selling Channel",
            colorKey: "Garden",
            colorName: "Average Discount",
            colorRange: ["#43a2ca", "#a8ddb5", "#f0f9e8"],
            label: {
              formatter: (params: any) => params.value || '-'
            }
          },
        ],
        axes: [
          {
            type: "category",
            position: "bottom",
            title: { text: "Selling Channel" },
          },
          {
            type: "category",
            position: "left",
            title: { text: "Product Category" },
          },
        ],
        legend: {
          position: "right",
        },
      };
    
      return (
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Average Discount by Selling Channel</CardTitle>
          </CardHeader>
          <CardContent className="h-[500px]">
            <AgChartsReact options={options as any} />
          </CardContent>
        </Card>
      );
    }
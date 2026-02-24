'use client'

import React from "react";

import { AgChartsReact } from "ag-charts-react";

import "ag-charts-enterprise";

import { Card } from "@/components/ui/card";

export function getData() {
    return [
   
      {
        unit: "France Business Unit",
        overdueamount: "1",
        amount: 10,
      },
      {
        unit: "France Business Unit",
        overdueamount: "2",
        amount: 9,
      },
      {
        unit: "France Business Unit",
        overdueamount: "3",
        amount: 8,
      },
      {
        unit: "France Business Unit",
        overdueamount: "4",
        amount: 7,
      },
      {
        unit: "France Business Unit",
        overdueamount: "5",
        amount: 6,
      },
      {
        unit: "France Business Unit",
        overdueamount: "6",
        amount: 3,
      },
      {
        unit: "France Business Unit",
        overdueamount: "7",
        amount: 7,
      },
      {
        unit: "France Business Unit",
        overdueamount: "8",
        amount: 8,
      },
      {
        unit: "France Business Unit",
        overdueamount: "9",
        amount: 9,
      },
      {
        unit: "France Business Unit",
        overdueamount: "10",
        amount: 10,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "1",
        amount: 15,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "2",
        amount: 14,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "3",
        amount: 13,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "4",
        amount: 5,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "5",
        amount: 15,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "6",
        amount: 15,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "7",
        amount: 15,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "8",
        amount: 12,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "9",
        amount: 10,
      },
      {
        unit: "Supremo US Business Unit",
        overdueamount: "10",
        amount: 5,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "1",
        amount: 10,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "2",
        amount: 15,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "3",
        amount: 15,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "4",
        amount: 12,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "5",
        amount: 10,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "6",
        amount: 12,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "7",
        amount: 18.4,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "8",
        amount: 6,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "9",
        amount: 10,
      },
      {
        unit: "UK Business Unit",
        overdueamount: "10",
        amount: 11.6,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "1",
        amount: 15,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "2",
        amount: 14,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "3",
        amount: 13,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "4",
        amount: 10,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "5",
        amount: 13,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "6",
        amount: 15,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "7",
        amount: 15,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "8",
        amount: 7,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "9",
        amount: 10,
      },
      {
        unit: "US1 Business Unit",
        overdueamount: "10",
        amount: 5,
      },
      
    ];
  }
export const ChartExample = () => {
    const options= {
      data: getData(),
      title: {
        text: "Overdue Risk Prediction by Bussiness Unit",
      },
      series: [
        {
          type: "heatmap",
          xKey: "overdueamount",
          xName: "Month",
          yKey: "unit",
          yName: "Unit",
          colorKey: "amount",
          colorName: "Amount",
          colorRange: ["#43a2ca", "#a8ddb5", "#f0f9e8"],
        },
      ],
    };
  
    return (
        <Card>
            <AgChartsReact options={options as any} />
        </Card>
    );
  };
  
  
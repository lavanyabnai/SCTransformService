"use client";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

import OrderLinePie from "./OrderLinePie";
import MetricCard from "./MetricCard";
import OrderTotalBar from "./OrderTotalBar";
import TodayOrderCol from "./TodayOrderCol";
import AvgDiscountHeat from "./AvgDiscountHeat";
// const data = [
//     { text: "C# corner", value: 10 },
//     { text: "Articles", value: 4 },
//     { text: "Profile", value: 3 },
//     { text: "Docs", value: 1 },
//     { text: "Mahesh Chand", value: 7 },
//     { text: "Answers", value: 2 },
//     { text: "Tech", value: 6 },
//     { text: "Tutorials", value: 3 },
//     { text: "AWS", value: 2 },
//     { text: "Azure", value: 2 },
//     { text: "Santosh", value:5 },
//     { text: "Books", value: 4 },
//     { text: "Events", value: 9 },
//     { text: "MVP", value: 8 },
//     { text: "Unit Test", value: 5 },
//     { text: "Introduction", value: 1 },
//     { text: "Featured", value: 1 },
//     { text: "Success", value: 5 },
//     { text: "Microsoft", value: 5 },
//     { text: "Live", value: 8 },
//     { text: "REST", value: 1 },
//     { text: "Profile", value: 4 },
//     { text: "Reputation", value: 4 },
//     { text: "Gold Member", value: 4 },
//     { text: "Web", value: 5 },
//     { text: "Block Chain", value: 5 },
//     { text: "AI", value: 9 },
//   ];
export default function DashboardSummaryTab() {
  return (
    <div>
      <div className="flex justify-between my-2 p-4 rounded-lg border bg-white">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display ">
          Order Management Dashboard
        </h2>
        <div className="flex items-center justify-end">
          <TabsList className="w-full">
            <TabsTrigger value="Week">Week</TabsTrigger>
            <TabsTrigger value="Month">Month</TabsTrigger>
            <TabsTrigger value="Quarter">Quarter</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {/* <OrderCountWord data={data} /> */}
        {/* <OrderCountWord /> */}
        <OrderLinePie />
        <MetricCard />
        <OrderTotalBar />
        <AvgDiscountHeat />
        <TodayOrderCol />
      </div>
    </div>
  );
}

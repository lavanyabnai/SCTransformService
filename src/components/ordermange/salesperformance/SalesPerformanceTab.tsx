"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";

import AverageTransLine from "@/components/ordermange/salesperformance/AverageTransLine";
import ConversionRateLine from "@/components/ordermange/salesperformance/ConversionRateLine";
import SalesFootLine from "@/components/ordermange/salesperformance/SalesFootLine";
import SalesGrowthLine from "@/components/ordermange/salesperformance/SalesGrowthLine";


export default function SalesPerformanceTab() {
  return (
    <div>
      <Tabs defaultValue="daily">
        <div className="my-4 p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display ">
            Sales Performance Review
          </h2>
        </div>
        <TabsContent value="daily">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <SalesGrowthLine />
            <AverageTransLine />
            <ConversionRateLine />
            <SalesFootLine />
           
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

"use client";
import CardLayout from "@/components/CardLayout";
import { kpiService_m } from "@/app/data/dashboard/profitData";

export default function ProfitRoute() {
  return (
    <div>
      <div className="rounded-lg bg-white shadow">
        <div className="flex items-center justify-between p-2 ">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">
              Profit Dashboard
            </h2>
          </div>
        </div>
      </div>

      <CardLayout kpiData={kpiService_m} />
    </div>
  );
}

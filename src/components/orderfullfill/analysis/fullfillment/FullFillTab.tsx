"use client"

import PerfectTrendCol from "@/components/orderfullfill/analysis/fullfillment/PerfectTrendCol";
import OntimeBarLine from "@/components/orderfullfill/analysis/fullfillment/OntimeBarLine";
import OntimeLocatLine from "@/components/orderfullfill/analysis/fullfillment/OntimeLocatLine";
import OrderHoldStack from "@/components/orderfullfill/analysis/fullfillment/OrderHoldStack";

const stats = [
    { name: "Order Hold", stat: "$8.18M" },
    { name: "Perfect Order", stat: "69%" },
    { name: "On-Time Shipment", stat: "65%" },
  ];
  
  
export default function FullFillTab() {
  // Data matching the chart from Jan 2022 to Sep 2022
 

  return (
    <div>
    <dl className="mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.name}
          className="items-center overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-5 shadow sm:p-6"
        >
          <dt className="truncate text-center text-lg font-medium text-gray-500">
            {item.name}
          </dt>
          <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
            {item.stat}
          </dd>
        </div>
      ))}
    </dl>
  <ul className="mx-4 my-4 grid grid-cols-4 gap-4">
   <PerfectTrendCol />
  
  <OntimeBarLine />
  <OntimeLocatLine />

  
   <OrderHoldStack />
  </ul>
    </div>
  )
}


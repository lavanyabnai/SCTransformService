"use client"

import { ResponsiveContainer, Treemap } from "recharts"


const data = [
  {
    name: "Asia",
    children: [
      { name: "Supplier A", size: 1200, value: 1200, exposure: "High" },
      { name: "Supplier B", size: 800, value: 800, exposure: "Medium" },
      { name: "Supplier C", size: 600, value: 600, exposure: "Low" },
      { name: "Supplier D", size: 400, value: 400, exposure: "Low" },
    ],
  },
  {
    name: "Europe",
    children: [
      { name: "Supplier E", size: 900, value: 900, exposure: "Medium" },
      { name: "Supplier F", size: 700, value: 700, exposure: "Medium" },
      { name: "Supplier G", size: 500, value: 500, exposure: "Low" },
    ],
  },
  {
    name: "Americas",
    children: [
      { name: "Supplier H", size: 1000, value: 1000, exposure: "High" },
      { name: "Supplier I", size: 600, value: 600, exposure: "Medium" },
    ],
  },
]

export function SupplierTariffExposureChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap 
          data={data} 
          dataKey="value"
          aspectRatio={4 / 3}
          stroke="#fff" 
          fill="#8884d8"
        />
      </ResponsiveContainer>
    </div>
  )
}

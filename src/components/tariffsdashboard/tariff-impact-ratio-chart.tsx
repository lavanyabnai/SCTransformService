"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Electronics",
    Supplier1: 12,
    Supplier2: 8,
    Supplier3: 5,
  },
  {
    name: "Textiles",
    Supplier1: 15,
    Supplier2: 10,
    Supplier3: 7,
  },
  {
    name: "Automotive",
    Supplier1: 18,
    Supplier2: 12,
    Supplier3: 9,
  },
  {
    name: "Chemicals",
    Supplier1: 10,
    Supplier2: 6,
    Supplier3: 4,
  },
  {
    name: "Machinery",
    Supplier1: 14,
    Supplier2: 9,
    Supplier3: 6,
  },
]

export function TariffImpactRatioChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, "Tariff Impact"]} />
          <Legend />
          <Bar dataKey="Supplier1" stackId="a" fill="#8884d8" name="Asia" />
          <Bar dataKey="Supplier2" stackId="a" fill="#82ca9d" name="Europe" />
          <Bar dataKey="Supplier3" stackId="a" fill="#ffc658" name="Americas" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

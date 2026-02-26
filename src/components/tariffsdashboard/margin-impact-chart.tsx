"use client"

import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    "Tariff Level": 5,
    "Gross Margin": 32,
    "Net Margin": 20,
  },
  {
    name: "Feb",
    "Tariff Level": 5,
    "Gross Margin": 31,
    "Net Margin": 19,
  },
  {
    name: "Mar",
    "Tariff Level": 10,
    "Gross Margin": 28,
    "Net Margin": 16,
  },
  {
    name: "Apr",
    "Tariff Level": 15,
    "Gross Margin": 25,
    "Net Margin": 13,
  },
  {
    name: "May",
    "Tariff Level": 10,
    "Gross Margin": 27,
    "Net Margin": 15,
  },
  {
    name: "Jun",
    "Tariff Level": 5,
    "Gross Margin": 30,
    "Net Margin": 18,
  },
]

export function MarginImpactChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
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
          <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value}%`} />
          <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value, name) => [`${value}%`, name]} />
          <Legend />
          <Bar yAxisId="left" dataKey="Tariff Level" fill="#8884d8" />
          <Line yAxisId="right" type="monotone" dataKey="Gross Margin" stroke="#82ca9d" />
          <Line yAxisId="right" type="monotone" dataKey="Net Margin" stroke="#ffc658" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

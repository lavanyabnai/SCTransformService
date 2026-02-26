"use client"

import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Base",
    value: 1000,
    step: 1000,
    color: "#82ca9d", // Positive value - green
  },
  {
    name: "Tariffs",
    value: 850,
    step: -150,
    color: "#ff7300", // Negative value - orange
  },
  {
    name: "Inventory",
    value: 750,
    step: -100,
    color: "#ff7300", // Negative value - orange
  },
  {
    name: "Financing",
    value: 700,
    step: -50,
    color: "#ff7300", // Negative value - orange
  },
  {
    name: "Price Adj",
    value: 800,
    step: 100,
    color: "#82ca9d", // Positive value - green
  },
  {
    name: "Final",
    value: 800,
    step: 0,
    color: "#82ca9d", // Zero value - green
  },
]

export function CashFlowImpactChart() {
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="step" fill="#8884d8" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

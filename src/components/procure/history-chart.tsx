"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const chartData = [
  { month: "Oct", demand: 180, supply: 175 },
  { month: "Nov", demand: 185, supply: 180 },
  { month: "Dec", demand: 190, supply: 185 },
  { month: "Jan", demand: 195, supply: 190 },
  { month: "Feb", demand: 200, supply: 195 },
  { month: "Mar", demand: 200, supply: 120 },
]

export function HistoryChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="demand" name="Demand" fill="#ef4444" />
        <Bar dataKey="supply" name="Supply" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

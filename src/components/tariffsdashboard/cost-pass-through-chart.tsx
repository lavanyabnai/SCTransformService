"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Electronics",
    Absorbed: 30,
    PassedOn: 70,
  },
  {
    name: "Textiles",
    Absorbed: 40,
    PassedOn: 60,
  },
  {
    name: "Automotive",
    Absorbed: 25,
    PassedOn: 75,
  },
  {
    name: "Chemicals",
    Absorbed: 35,
    PassedOn: 65,
  },
  {
    name: "Machinery",
    Absorbed: 45,
    PassedOn: 55,
  },
]

export function CostPassThroughChart() {
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
          stackOffset="expand"
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend />
          <Bar dataKey="Absorbed" stackId="a" fill="#8884d8" />
          <Bar dataKey="PassedOn" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

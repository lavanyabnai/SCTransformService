"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    quarter: "Q1 2022",
    Electronics: 65,
    Textiles: 45,
    Automotive: 70,
    Chemicals: 55,
    Average: 58.75,
  },
  {
    quarter: "Q2 2022",
    Electronics: 68,
    Textiles: 48,
    Automotive: 72,
    Chemicals: 58,
    Average: 61.5,
  },
  {
    quarter: "Q3 2022",
    Electronics: 70,
    Textiles: 52,
    Automotive: 75,
    Chemicals: 60,
    Average: 64.25,
  },
  {
    quarter: "Q4 2022",
    Electronics: 72,
    Textiles: 55,
    Automotive: 78,
    Chemicals: 62,
    Average: 66.75,
  },
  {
    quarter: "Q1 2023",
    Electronics: 75,
    Textiles: 58,
    Automotive: 80,
    Chemicals: 65,
    Average: 69.5,
  },
]

export function DutyDrawbackChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend />
          <Line type="monotone" dataKey="Electronics" stroke="#8884d8" />
          <Line type="monotone" dataKey="Textiles" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Automotive" stroke="#ffc658" />
          <Line type="monotone" dataKey="Chemicals" stroke="#ff7300" />
          <Line type="monotone" dataKey="Average" stroke="#000" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    month: "Jan",
    "US-China": 8.2,
    "US-EU": 3.1,
    "US-Mexico": 2.5,
  },
  {
    month: "Feb",
    "US-China": 7.8,
    "US-EU": 3.0,
    "US-Mexico": 2.7,
  },
  {
    month: "Mar",
    "US-China": 9.5,
    "US-EU": 3.2,
    "US-Mexico": 2.6,
  },
  {
    month: "Apr",
    "US-China": 10.2,
    "US-EU": 3.5,
    "US-Mexico": 2.8,
  },
  {
    month: "May",
    "US-China": 8.7,
    "US-EU": 3.3,
    "US-Mexico": 3.0,
  },
  {
    month: "Jun",
    "US-China": 7.9,
    "US-EU": 3.4,
    "US-Mexico": 3.2,
  },
]

export function TariffVolatilityChart() {
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
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="US-China" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="US-EU" stroke="#82ca9d" />
          <Line type="monotone" dataKey="US-Mexico" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

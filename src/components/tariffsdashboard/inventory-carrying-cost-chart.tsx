"use client"

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    month: "Jan",
    "Base Cost": 100,
    "Tariff Risk": 20,
    "Storage Cost": 30,
    "Financing Cost": 15,
  },
  {
    month: "Feb",
    "Base Cost": 110,
    "Tariff Risk": 22,
    "Storage Cost": 32,
    "Financing Cost": 16,
  },
  {
    month: "Mar",
    "Base Cost": 120,
    "Tariff Risk": 35,
    "Storage Cost": 34,
    "Financing Cost": 17,
  },
  {
    month: "Apr",
    "Base Cost": 130,
    "Tariff Risk": 45,
    "Storage Cost": 36,
    "Financing Cost": 18,
  },
  {
    month: "May",
    "Base Cost": 140,
    "Tariff Risk": 30,
    "Storage Cost": 38,
    "Financing Cost": 19,
  },
  {
    month: "Jun",
    "Base Cost": 150,
    "Tariff Risk": 25,
    "Storage Cost": 40,
    "Financing Cost": 20,
  },
]

export function InventoryCarryingCostChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
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
          <Area type="monotone" dataKey="Financing Cost" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Storage Cost" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Tariff Risk" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="Base Cost" stackId="1" stroke="#ff8042" fill="#ff8042" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

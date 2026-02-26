"use client"

import { Cell, ResponsiveContainer, Treemap } from "recharts"

// Simplified data structure
const data = [
  {
    name: "Salaries",
    value: 3.2,
  },
  {
    name: "Advertising",
    value: 1.8,
  },
  {
    name: "Marketing",
    value: 1.5,
  },
  {
    name: "Business Insurance",
    value: 0.9,
  },
  {
    name: "Office Expenses",
    value: 0.7,
  },
  {
    name: "Travel",
    value: 0.5,
  },
]

// Colors for the treemap cells
const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--chart-6))",
]

export function OpexAmericasChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={data}
          dataKey="value"
          aspectRatio={4 / 3}
          stroke="#fff"
          // Use a simple string formatter instead of a React component
          nameKey="name"
          // Use a simple string formatter for the tooltip
          isAnimationActive={false}
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Treemap>
      </ResponsiveContainer>

      {/* Add a legend manually */}
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
            <div className="w-3 h-3 mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
            <span className="text-xs">
              {entry.name}: ${entry.value}M
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

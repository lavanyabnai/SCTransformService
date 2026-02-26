"use client"

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"

const data = [
  {
    subject: "Alt. Sourcing",
    A: 85,
    fullMark: 100,
  },
  {
    subject: "Lead Time",
    A: 65,
    fullMark: 100,
  },
  {
    subject: "Cost Buffer",
    A: 70,
    fullMark: 100,
  },
  {
    subject: "Inventory",
    A: 80,
    fullMark: 100,
  },
  {
    subject: "Supplier Diversity",
    A: 60,
    fullMark: 100,
  },
  {
    subject: "Tariff Flexibility",
    A: 75,
    fullMark: 100,
  },
]

export function SupplyChainResilienceChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Resilience" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

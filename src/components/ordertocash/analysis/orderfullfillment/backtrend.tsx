"use client"

import { Area, Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis, LabelList } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function BacklogTrendChart() {
  // Sample data based on the image

  // Expanded data to match the image more closely
  const expandedData = [
    { month: "January 2022", backlog: 350000, index: 42, trend: 43 },
    { month: "February 2022", backlog: 380000, index: 44, trend: 44 },
    { month: "March 2022", backlog: 360000, index: 46, trend: 45 },
    { month: "April 2022", backlog: 320000, index: 48, trend: 46 },
    { month: "May 2022", backlog: 400000, index: 49, trend: 47 },
    { month: "June 2022", backlog: 420000, index: 51, trend: 48 },
    { month: "July 2022", backlog: 420000, index: 53, trend: 49 },
    { month: "August 2022", backlog: 450000, index: 54, trend: 50 },
    { month: "September 2022", backlog: 480000, index: 55, trend: 51 },
    { month: "October 2022", backlog: 600000, index: 58, trend: 52 },
  ]

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Backlog Trend</CardTitle>
      </CardHeader>
      <ChartContainer
        config={{
          backlog: {
            label: "Backlog",
            color: "hsl(22, 80%, 30%)",
          },
          index: {
            label: "Index",
            color: "hsl(40, 100%, 60%)",
          },
          trend: {
            label: "Trend Line",
            color: "hsl(0, 0%, 0%)",
          },
        }}
        className=""
      >
        <ResponsiveContainer>
          <ComposedChart data={expandedData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                // Only show January, April, July, October
                if (
                  value.includes("January") ||
                  value.includes("April") ||
                  value.includes("July") ||
                  value.includes("October")
                ) {
                  return value
                }
                return ""
              }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(value) => `${value / 1000}K`}
              domain={[0, 600000]}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[30, 60]}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
             <LabelList
                dataKey="backlog"
                position="insideLeft"
                offset={8}
                className="fill-white"
                fontSize={12}
              />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => {
                    if (name === "backlog") {
                      return [`${(value as number).toLocaleString()}`, "Backlog"]
                    }
                    return [value, name]
                  }}
                />
              }
            />
            <Bar dataKey="backlog" yAxisId="left" fill="var(--color-backlog)" barSize={30} radius={[2, 2, 0, 0]} 
            >
            </Bar>
            <Area
              dataKey="index"
              yAxisId="right"
              type="monotone"
              fill="var(--color-index)"
              fillOpacity={0.6}
              stroke="var(--color-index)"
              strokeWidth={0}
            />
            <Line
              dataKey="trend"
              yAxisId="right"
              type="monotone"
              stroke="var(--color-trend)"
              strokeDasharray="3 3"
              strokeWidth={2}
              dot={false}
            />

          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  )
}


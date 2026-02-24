"use client"

import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OverdueRisk() {
  // Sample data based on the image

  // Expanded data to match the image more closely
  const expandedData = [
    { month: "1", backlog: 0.2, index: 2, trend: 3 },
    { month: "2", backlog: 0.3, index: 8, trend: 5 },
    { month: "3", backlog: 1.5, index: 38, trend: 8 },
    { month: "4", backlog: 0.1, index: 20, trend: 2 },
    { month: "5", backlog: 0.3, index: 10, trend: 5 },
    { month: "6", backlog: 0.1, index: 10, trend: 4 },
    { month: "7", backlog: 0.4, index: 5, trend: 4 },
    { month: "8", backlog: 0.8, index: 15, trend: 5 },
    { month: "9", backlog: 2.0, index: 30, trend: 5 },
    { month: "10", backlog: 2.5, index: 50, trend: 5 },
  ]

  return (
    <Card>
             <CardHeader>
        <CardTitle>Which payment terms have most Late Payments?</CardTitle>
      </CardHeader>
   <CardContent>
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
        }}
    
      >
        <ResponsiveContainer >
          <ComposedChart data={expandedData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(value) => `${value}M`}
              domain={[0, 2.5]}
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
            <LabelList
                dataKey="backlog"
                position="insideTop"
                offset={8}
                className="fill-white"
                fontSize={12}
            />
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
      </CardContent>
    </Card>
  )
}


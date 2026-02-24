"use client"

import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
const data = [
    { month: "Jan 2022", bookings: 175000, cancellations: 2, backlogs: 4 },
    { month: "Feb 2022", bookings: 175000, cancellations: 1.5, backlogs: 4.5 },
    { month: "Mar 2022", bookings: 190000, cancellations: 1, backlogs: 5 },
    { month: "Apr 2022", bookings: 200000, cancellations: 1.5, backlogs: 6 },
    { month: "May 2022", bookings: 215000, cancellations: 1, backlogs: 3 },
    { month: "Jun 2022", bookings: 250000, cancellations: 2, backlogs: 3.5 },
    { month: "Jul 2022", bookings: 250000, cancellations: 3, backlogs: 4 },
    { month: "Aug 2022", bookings: 155000, cancellations: 3.5, backlogs: 5 },
    { month: "Sep 2022", bookings: 55000, cancellations: 13, backlogs: 12 },
  ]
  
  const chartConfig = {
    bookings: {
      label: "Bookings",
      color: "hsl(180, 40%, 30%)",
    },
    cancellations: {
      label: "Cancellations",
      color: "hsl(174, 70%, 50%)",
    },
    backlogs: {
      label: "Backlogs",
      color: "hsl(40, 100%, 50%)",
    },
  }
export default function BookingBarLine() {
  // Data matching the chart from Jan 2022 to Sep 2022
 

  return (
 
    

    <Card >
      <CardHeader>
        <CardTitle className="text-xl font-bold">Bookings, Cancellations, Backlogs Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <ResponsiveContainer>
            <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={10} />
              <YAxis
                yAxisId="left"
                orientation="left"
                tickFormatter={(value) => `${value / 1000}K`}
                domain={[0, 300000]}
                axisLine={false}
                tickLine={false}
              />
              <YAxis yAxisId="right" orientation="right" domain={[0, 18]} axisLine={false} tickLine={false} />
              <Legend verticalAlign="bottom" iconType="square" wrapperStyle={{ paddingTop: "20px" }} />
              <Bar yAxisId="left" dataKey="bookings" fill="var(--color-bookings)" barSize={30} name="Bookings" />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="cancellations"
                stroke="var(--color-cancellations)"
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Cancellations"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="backlogs"
                stroke="var(--color-backlogs)"
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Backlogs"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
 
  )
}


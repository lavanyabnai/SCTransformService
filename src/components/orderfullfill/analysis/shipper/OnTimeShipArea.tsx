"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const shippingData = [
  {
    month: "Jan",
    Firebird: 90,
    Prestige: 50,
    StarBoard: 70,
  },
  {
    month: "Feb",
    Firebird: 95,
    Prestige: 55,
    StarBoard: 65,
  },
  {
    month: "Mar",
    Firebird: 85,
    Prestige: 60,
    StarBoard: 75,
  },
  {
    month: "Apr",
    Firebird: 90,
    Prestige: 50,
    StarBoard: 60,
  },
  {
    month: "May",
    Firebird: 80,
    Prestige: 45,
    StarBoard: 50,
  },
  {
    month: "Jun",
    Firebird: 75,
    Prestige: 55,
    StarBoard: 40,
  },
  {
    month: "Jul",
    Firebird: 60,
    Prestige: 50,
    StarBoard: 60,
  },
  {
    month: "Aug",
    Firebird: 55,
    Prestige: 65,
    StarBoard: 75,
  },
  {
    month: "Sep",
    Firebird: 60,
    Prestige: 70,
    StarBoard: 95,
  },
];
const chartConfig = {
  Firebird: {
    label: "Firebird",
    color: "hsl(var(--chart-1))",
  },
  Prestige: {
    label: "Prestige",
    color: "hsl(var(--chart-4))",
  },
  StarBoard: {
    label: "StarBoard",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const kpi = {
  status: "Below Target",
};

export default function OnTimeShipArea() {
  return (
    <Card>
      <div className="relative rounded-lg">
        <span
          className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
            kpi.status === "Above Target"
              ? `bg-green-500`
              : kpi.status === "Below Target"
              ? `bg-red-500`
              : kpi.status === "On Target"
              ? `bg-yellow-500`
              : ""
          }`}
        ></span>
      </div>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">65%</CardTitle>
        <CardDescription className="text-lg font-semibold text-black-500 ">
          On-Time Shipment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={shippingData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="Firebird"
              type="monotone"
              fill="var(--color-Firebird)"
              fillOpacity={0.4}
              stroke="var(--color-Firebird)"
              dot={{ fill: "var(--color-Firebird)" }}
              activeDot={{ r: 6 }}
            />
            <Area
              dataKey="Prestige"
              type="monotone"
              fill="var(--color-Prestige)"
              fillOpacity={0.4}
              stroke="var(--color-Prestige)"
              dot={{ fill: "var(--color-Prestige)" }}
              activeDot={{ r: 6 }}
            />
            <Area
              dataKey="StarBoard"
              type="monotone"
              fill="var(--color-StarBoard)"
              fillOpacity={0.4}
              stroke="var(--color-StarBoard)"
              dot={{ fill: "var(--color-StarBoard)" }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

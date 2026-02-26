import { Card, CardHeader, CardTitle, CardDescription, CardContent,  } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, XAxis, YAxis, Bar } from "recharts"
export const pro5Data = [
    {
      categories: "pro1",
      data: 140,
      fill: "#2196F3",
    },
    {
      categories: "pro2",
      data: 0,
      fill: "#bc83ee",
    },
    {
      categories: "pro3",
      data: 0,
      fill: "#ff7668",
    },
    {
      categories: "pro4",
      data: 30,
      fill: "#ffa600",
    },
    {
      categories: "pro5",
      data: 20,
      fill: "#aa46be",
    },
    {
      categories: "pro6",
      data: 10,
      fill: "#59b0f6",
    },
    {
      categories: "pro7",
      data: 8,
      fill: "#cda2f2",
    },
    {
      categories: "pro8",
      data: 0,
      fill: "#ff8fc9",
    },
    {
      categories: "pro9",
      data: 0,
      fill: "#ff988e",
    },
    {
      categories: "pro10",
      data: 0,
      fill: "#ffbc40",
    },
    
  
  
  ];
  const chartConfig4 = {
    pro1: {
      label: "pro1",
    },
    pro2: {
      label: "pro2",
    },
    pro3: {
      label: "pro3",
    },
    pro4: {
      label: "pro4",
    },
    pro5: {
      label: "pro5",
    },
    pro6: {
      label: "pro6",
    },
    pro7: {
      label: "pro7",
    },
    pro8: {
      label: "pro8",
    },
    pro9: {
      label: "pro9",
    },
    pro10: {
      label: "pro10",
    },
    pro11: {
      label: "pro11",
    },
    pro12: {
      label: "pro12",
    },
    pro13: {
      label: "pro13",
    },
    pro14: {
      label: "pro14",
    },
    pro15: {
      label: "pro15",
    },
    pro16: {
      label: "pro16",
    },
    pro17: {
      label: "pro17",
    },
    pro18: {
      label: "pro18",
    },
    pro19: {
      label: "pro19",
    },
    pro20: {
      label: "pro20",
    },
  };
export default function OrderTotalBar() {

  return (
    <Card>
    <CardHeader>
      <CardTitle className='text-2xl font-bold'>Order Total by Hour</CardTitle>
      <CardDescription></CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig4} className="w-full h-full">
        <BarChart
          accessibilityLayer
          data={pro5Data}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="categories"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig4[value as keyof typeof chartConfig4]?.label
            }
          />
          <XAxis dataKey="data" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="data" layout="vertical" radius={5} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>
  )
}


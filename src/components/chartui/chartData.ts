export interface KPIData {
  title: string
  value: number
  status: "Above Target" | "Below Target" | "On Target"
  type: "monotone" | "linear" | "step"| "natural"
  chartType: "bar" | "line" | "area" | "pie"
  chartData: Array<{
    category: string
    data: number
    data2?: number
  }>
}

export const kpiDataArray: KPIData[] = [
  {
    title: "Lines Received",
    value: 1000,
    status: "Above Target",
    chartType: "bar",
    type: "monotone",
    chartData: [
      { category: "17 Jan", data: 73, data2: 42 },
      { category: "18 Jan", data: 209, data2: 67 },
      { category: "19 Jan", data: 214, data2: 85 },
      { category: "20 Jan", data: 180, data2: 31 },
      { category: "21 Jan", data: 240, data2: 98 },
      { category: "22 Jan", data: 120, data2: 14 },
    ],
  },
  {
    title: "Processing Time",
    value: 500,
    status: "Below Target",
    chartType: "line",
    type: "linear",
    chartData: [
      { category: "17 Jan", data: 50, data2: 42 },
      { category: "18 Jan", data: 150, data2: 67 },
      { category: "19 Jan", data: 180, data2: 85 },
      { category: "20 Jan", data: 120, data2: 31 },
      { category: "21 Jan", data: 200, data2: 98 },
      { category: "22 Jan", data: 90, data2: 14 },
    ],
  },
  {
    title: "Efficiency Rate",
    value: 750,
    status: "On Target",
    chartType: "area",
    type: "monotone",
    chartData: [
      { category: "17 Jan", data: 65, data2: 42 },
      { category: "18 Jan", data: 75, data2: 67 },
      { category: "19 Jan", data: 80, data2: 85 },
      { category: "20 Jan", data: 72, data2: 31 },
      { category: "21 Jan", data: 85, data2: 98 },
      { category: "22 Jan", data: 78, data2: 14 },
    ],
  },
  {
    title: "Pie Chart",
    value: 1000,
    status: "Above Target",
    chartType: "pie",
   type: "monotone",
    chartData: [
      { category: "17 Jan", data: 42  },
      { category: "18 Jan",  data: 67 },
      { category: "19 Jan",  data: 85 },
      { category: "20 Jan",  data: 31 },
      { category: "21 Jan",  data: 98 },
      { category: "22 Jan",  data: 14 },
    ],
  },
]

export const chartConfig = {
  data: {
    label: "Data",
    color: "hsl(var(--chart-1))",
    },
    data2: {
    label: "Data2",
    color: "hsl(var(--chart-2))",
        },
}


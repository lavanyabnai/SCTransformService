// "use client"

// import React from "react"
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
// import {
//     Bar,
//     BarChart,
//     Line,
//     LineChart,
//     Area,
//     AreaChart,
//     Pie,
//     PieChart,
//     XAxis,
//     YAxis,
//     ResponsiveContainer,
//     Tooltip,
//     Legend,
// } from "recharts"
// import { TrendingUp, TrendingDown, Minus } from "lucide-react"
// import { type KPIData, kpiDataArray, chartConfig } from "@/components/chartui/chartData"

// export default function MultipleChartTypes() {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {kpiDataArray.map((kpi, index) => (
//                 <StatsColumn key={index} kpi={kpi} />
//             ))}
//         </div>
//     )
// }

// function StatsColumn({ kpi }: { kpi: KPIData }) {
//     const getStatusIcon = (status: string) => {
//         switch (status) {
//             case "Above Target":
//                 return <TrendingUp className="h-4 w-4 text-green-500" />
//             case "Below Target":
//                 return <TrendingDown className="h-4 w-4 text-red-500" />
//             default:
//                 return <Minus className="h-4 w-4 text-yellow-500" />
//         }
//     }

//     const renderChart = () => {
//         const ChartComponent = kpi.chartType === "bar"
//             ? BarChart
//             : kpi.chartType === "line"
//                 ? LineChart
//                 : kpi.chartType === "area"
//                     ? AreaChart
//                     : PieChart;

//         const DataComponent = kpi.chartType === "bar"
//             ? Bar
//             : kpi.chartType === "line"
//                 ? Line
//                 : kpi.chartType === "area"
//                     ? Area
//                     : Pie;

//         return (
//             <ResponsiveContainer width="100%" height={400}>
//                 <ChartComponent data={kpi.chartData}>
//                     <XAxis dataKey="category" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <DataComponent dataKey="data" fill="#8884d8" />
//                     {kpi.chartType !== "pie" && <DataComponent dataKey="data2" fill="#82ca9d" />}
//                 </ChartComponent>
//             </ResponsiveContainer>
//         )
//     }

//     return (
//         <Card>
//             <div className="relative rounded-lg">
//                 <span
//                     className={`absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === "Above Target"
//                         ? `bg-green-500`
//                         : kpi.status === "Below Target"
//                             ? `bg-red-500`
//                             : `bg-yellow-500`
//                         }`}
//                 ></span>
//             </div>
//             <CardHeader className="px-4 py-2">
//                 <div className="my-2 flex items-baseline gap-2">
//                     <div>
//                         <h2 className="text-lg font-medium text-gray-900">
//                             {kpi.title} <span className="text-sm text-gray-500">(per day)</span>
//                         </h2>
//                         <h1 className="text-4xl font-bold text-black">${kpi.value}</h1>
//                     </div>
//                     <div className="ml-auto">{getStatusIcon(kpi.status)}</div>
//                 </div>
//             </CardHeader>
//             <CardContent className="px-4">
//                 <ChartContainer config={chartConfig} className="h-[200px] w-full">
//                     {renderChart()}
//                 </ChartContainer>
//             </CardContent>
//             <CardFooter>
//                 <div className="flex w-full items-start gap-2 text-sm">
//                     <div className="grid gap-2">
//                         <div className="flex items-center gap-2 font-medium leading-none">
//                             Average {kpi.title.toLowerCase()} {getStatusIcon(kpi.status)}
//                         </div>
//                         <div className="flex items-center gap-2 leading-none text-muted-foreground">14 Jan - 22 Jan</div>
//                     </div>
//                 </div>
//             </CardFooter>
//         </Card>
//     )
// }


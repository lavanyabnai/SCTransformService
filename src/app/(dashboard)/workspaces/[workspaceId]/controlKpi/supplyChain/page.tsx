"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle} from "lucide-react"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useParams } from "next/navigation"

// Updated data structures for root cause analysis
const rootCauseData = {
  totalStockouts: 31,
  primaryCauses: [
    {
      id: 1,
      name: "Stocks available at DC, but stocked out at Re-Distributor",
      percentage: 55,
      category: "Poor replenishment (regional distribution)",
      lossType: "Distribution-related loss",
      color: "bg-red-500",
    },
    {
      id: 2,
      name: "No stock available at Distribution Centre",
      percentage: 45,
      category: "Supply chain upstream issues",
      lossType: "Multiple loss types",
      color: "bg-blue-600",
    },
  ],
  secondaryCauses: [
    // Customer and Demand related losses
    {
      id: 7,
      name: "Poor demand planning",
      percentage: 10,
      lossType: "Customer & Demand-related loss",
      module: "M1: Customer and order management, M2: Demand planning and S&OP",
      kpi: "K2: Forecast accuracy, K3: Forecast bias",
      color: "bg-purple-600",
      category: "customer-demand",
    },

    // Distribution related losses
    {
      id: 1,
      name: "Poor replenishment",
      percentage: 1,
      lossType: "Distribution-related loss",
      module: "M4: Inventory and distribution planning",
      kpi: "K6: Dispatch compliance",
      color: "bg-orange-500",
      category: "distribution",
    },
    {
      id: 3,
      name: "Poor dispatch planning from plants to DC",
      percentage: 9,
      lossType: "Distribution-related loss",
      module: "M4: Inventory and distribution planning",
      kpi: "K6: Dispatch compliance",
      color: "bg-red-700",
      category: "distribution",
    },
    {
      id: 4,
      name: "Poor dispatch plan compliance at plants",
      percentage: 8,
      lossType: "Distribution-related loss",
      module: "M4: Inventory and distribution planning",
      kpi: "K6: Dispatch compliance",
      color: "bg-red-600",
      category: "distribution",
    },

    // Supply related losses
    {
      id: 2,
      name: "Poor production scheduling at plants",
      percentage: 4,
      lossType: "Supply-related loss",
      module: "M5: Manufacturing planning",
      kpi: "K7: Production compliance",
      color: "bg-red-600",
      category: "supply",
    },
    {
      id: 5,
      name: "Low production execution at plants",
      percentage: 7,
      lossType: "Supply-related loss",
      module: "M5: Manufacturing planning",
      kpi: "K7: Production compliance",
      color: "bg-red-500",
      category: "supply",
    },
    {
      id: 6,
      name: "Low production plan/capacity at plants",
      percentage: 6,
      lossType: "Supply-related loss",
      module: "M5: Manufacturing planning",
      kpi: "K7: Production compliance",
      color: "bg-red-400",
      category: "supply",
    },
  ],
}

const performanceMetrics = [
  {
    name: "Dispatch Coverage Plan",
    current: 85,
    benchmark: 100,
    target: 95,
    color: "hsl(220, 70%, 50%)",
  },
  {
    name: "Dispatch Compliance",
    current: 70,
    benchmark: 95,
    target: 90,
    color: "hsl(220, 70%, 50%)",
  },
  {
    name: "Production CLIP",
    current: 65,
    benchmark: 99,
    target: 95,
    color: "hsl(220, 70%, 50%)",
  },
  {
    name: "Production Coverage Plan",
    current: 85,
    benchmark: 99,
    target: 95,
    color: "hsl(220, 70%, 50%)",
  },
]

// Update the lossTypes array with better contrast
const lossTypes = [
  {
    id: 1,
    name: "Customer-related loss",
    current: 1,
    baseline: 5,
    color: "bg-blue-500",
    textColor: "text-white",
    module: "M1: Customer and order management",
    kpis: ["K1: Sales SKOT"],
  },
  {
    id: 2,
    name: "Demand-related loss",
    current: 5,
    baseline: 15,
    color: "bg-blue-600",
    textColor: "text-white",
    module: "M2: Demand planning and S&OP",
    kpis: ["K2: Forecast accuracy", "K3: Forecast bias"],
  },
  {
    id: 3,
    name: "Warehouse-related loss",
    current: 0,
    baseline: 5,
    color: "bg-blue-700",
    textColor: "text-white",
    module: "M3: Warehouse planning",
    kpis: ["K4: Warehouse TAT"],
  },
  {
    id: 4,
    name: "Distribution-related loss",
    current: 1,
    baseline: 10,
    color: "bg-blue-800",
    textColor: "text-white",
    module: "M4: Inventory and distribution planning",
    kpis: ["K5: FG Inventory", "K6: Dispatch compliance"],
  },
  {
    id: 5,
    name: "Supply-related loss",
    current: 3,
    baseline: 10,
    color: "bg-blue-900",
    textColor: "text-white",
    module: "M5: Manufacturing planning, M6: Material planning",
    kpis: ["K7: Production compliance", "K8: Frozen period", "K9: Supplier OTIF"],
  },
]

const benefitsData = [
  { metric: "OTIF Performance", baseline: 85, current: 92, target: 95 },
  { metric: "Sales Growth", baseline: 0, current: 3, target: 5 },
  { metric: "Inventory Reduction", baseline: 0, current: -2, target: -5 },
]

const otifTrendData = [
  { month: "Jan", baseline: 85, current: 87 },
  { month: "Feb", baseline: 85, current: 88 },
  { month: "Mar", baseline: 85, current: 89 },
  { month: "Apr", baseline: 85, current: 90 },
  { month: "May", baseline: 85, current: 91 },
  { month: "Jun", baseline: 85, current: 92 },
]

export default function ControlTowerDashboard() {
  const [, setSelectedLossType] = useState<number | null>(null)
  const { workspaceId } = useParams()
  const handleLossTypeClick = (lossType: { id: number; name: string; module: string }) => {
    setSelectedLossType(lossType.id)
    // Placeholder for navigation
    console.log(`Navigate to ${lossType.module} control tower`)
  }

  const totalCurrentLoss = lossTypes.reduce((sum, type) => sum + type.current, 0)
  const totalBaselineLoss = lossTypes.reduce((sum, type) => sum + type.baseline, 0)
  const improvementPercentage = (((totalBaselineLoss - totalCurrentLoss) / totalBaselineLoss) * 100).toFixed(1)

  return (
    <div className="">
      <div className="">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Supply Chain Control Tower</h1>
          <p className="text-lg text-gray-600">Availability Improvement & Loss Avoidance Dashboard</p>
        </div>

        {/* Key Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total OTIF Loss</p>
                  <p className="text-2xl font-bold text-red-600">{totalCurrentLoss}%</p>
                </div>
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Improved by {improvementPercentage}% from baseline</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current OTIF</p>
                  <p className="text-2xl font-bold text-green-600">92%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Target: 95%</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sales Impact</p>
                  <p className="text-2xl font-bold text-blue-600">+3%</p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Target: +5%</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Inventory Optimization</p>
                  <p className="text-2xl font-bold text-purple-600">-2%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Target: -5%</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="loss-tree" className="mt-6 space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="loss-tree">Availability Loss Tree</TabsTrigger>
            <TabsTrigger value="kpis">Supply Chain KPIs</TabsTrigger>
            <TabsTrigger value="benefits">Benefits & Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="loss-tree" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Root Cause Analysis Tree */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      Root Cause Analysis - OTIF Loss
                    </CardTitle>
                    <CardDescription>Hierarchical breakdown of availability loss drivers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Enhanced Main OTIF Loss Card */}
                      <div className="flex justify-center">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-400 rounded-2xl p-8 shadow-lg min-w-[320px]">
                          <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold text-blue-900">OTIF Loss at Last Mile</h3>
                            <div className="relative">
                              <p className="text-7xl font-black text-blue-700 leading-none">
                                {rootCauseData.totalStockouts}%
                              </p>
                              <div className="absolute -top-2 -right-2">
                                <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                                  CRITICAL
                                </div>
                              </div>
                            </div>
                            <p className="text-lg font-semibold text-blue-800">Re-distributor Level</p>
                            <div className="bg-white/50 rounded-lg p-3">
                              <p className="text-sm text-blue-700 font-medium">Supply Chain Impact Zone</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Primary Causes Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {rootCauseData.primaryCauses.map((cause) => (
                          <Card
                            key={cause.id}
                            className="border-3 border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-lg"

                          >
                            <CardContent className="p-6">
                              <div >

                                {/* Main Content Layout */}
                                <div className="flex items-center gap-6">
                                  {/* Large Percentage - Left Aligned */}
                                  <div className="flex-shrink-0">
                                    <div className={`${cause.color} text-white rounded-2xl px-6 py-4 shadow-lg`}>
                                      <span className="text-4xl font-black">{cause.percentage}%</span>
                                    </div>
                                  </div>

                                  {/* Text Content - Right Side */}
                                  <div className="flex-1 space-y-3">
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight">{cause.name}</h4>
                                    <p className="text-sm text-gray-600 font-medium">{cause.category}</p>
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                      <span className="text-xs text-blue-600 font-medium">Primary Loss Driver</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Secondary Causes - Grouped by Loss Type */}
                      <div>
                        <h4 className="text-xl font-bold mb-6 text-gray-800">
                          Key Reasons for Out of Stock in Network
                        </h4>

                        {/* Customer & Demand Related Loss */}
                        <div className="mb-8">
                          <h5 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-3">
                            <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                            Customer & Demand Related OOS
                          </h5>
                          <div className="grid grid-cols-1 gap-4">
                            {rootCauseData.secondaryCauses
                              .filter((cause) => cause.category === "customer-demand")
                              .map((cause) => (

                                <Card
                                  key={cause.id}
                                  className="cursor-pointer transition-all hover:shadow-lg border-2 border-gray-200 hover:border-purple-300"
                                  onClick={() => {
                                    window.location.href = `/workspaces/${workspaceId}/controlKpi/finished-goods`;
                                  }}
                                >
                                  <CardContent className="p-4">
                                    <div className="flex items-center gap-4">
                                      <div
                                        className={`${cause.color} text-white rounded-xl px-4 py-2 text-lg font-bold flex items-center gap-2`}
                                      >
                                        <AlertTriangle className="h-6 w-6" /> {cause.percentage}
                                      </div>
                                      <div className="flex-1">
                                        <h5 className="font-semibold text-base mb-2">{cause.name}</h5>
                                        <p className="text-sm text-gray-600 mb-1">{cause.module}</p>
                                        <p className="text-sm text-purple-600 font-medium">{cause.kpi}</p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>

                              ))}
                          </div>
                        </div>

                        {/* Distribution Related Loss */}
                        <div className="mb-8">
                          <h5 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-3">
                            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            Distribution Related OOS
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {rootCauseData.secondaryCauses
                              .filter((cause) => cause.category === "distribution")
                              .map((cause) => (
                                <Card
                                  key={cause.id}
                                  className="cursor-pointer transition-all hover:shadow-lg border-2 border-gray-200 hover:border-blue-300"
                                  onClick={() => {
                                    window.location.href = `/workspaces/${workspaceId}/controlKpi/demand-balancing`;
                                  }}

                                >
                                  <CardContent className="p-4">
                                    <div className="text-center mb-3">
                                      <div
                                        className={`inline-block ${cause.color} text-white rounded-xl px-3 py-2 text-lg font-bold`}
                                      >
                                        <div className="flex items-center gap-2">
                                          <AlertTriangle className="h-6 w-6" /> {cause.percentage}
                                        </div>
                                      </div>
                                    </div>
                                    <h5 className="font-semibold text-sm mb-3 text-center">{cause.name}</h5>
                                    <div className="space-y-2">
                                      <p className="text-xs text-gray-600 text-center">{cause.module}</p>
                                      <p className="text-xs text-blue-600 text-center font-medium">{cause.kpi}</p>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                          </div>
                        </div>

                        {/* Supply Related Loss */}
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-3">
                            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                            Supply Related OOS
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {rootCauseData.secondaryCauses
                              .filter((cause) => cause.category === "supply")
                              .map((cause) => (
                                <Card
                                  key={cause.id}
                                  className="cursor-pointer transition-all hover:shadow-lg border-2 border-gray-200 hover:border-green-300"
                                  onClick={() => {
                                    window.location.href = `/workspaces/${workspaceId}/controlKpi/supplier-alerts`;
                                  }}
                                >
                                  <CardContent className="p-4">
                                    <div className="text-center mb-3">
                                      <div
                                        className={`inline-block ${cause.color} text-white rounded-xl px-3 py-2 text-lg font-bold`}
                                      >
                                        {cause.percentage}%
                                      </div>
                                    </div>
                                    <h5 className="font-semibold text-sm mb-3 text-center">{cause.name}</h5>
                                    <div className="space-y-2">
                                      <p className="text-xs text-gray-600 text-center">{cause.module}</p>
                                      <p className="text-xs text-green-600 text-center font-medium">{cause.kpi}</p>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Metrics Charts */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Performance Metrics</CardTitle>
                    <CardDescription>Current vs Benchmark</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {performanceMetrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{metric.name}</span>
                            <span className="text-gray-500">{metric.current}%</span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-gray-200 rounded-full h-6">
                              <div
                                className="h-6 rounded-full flex items-center justify-end pr-2"
                                style={{
                                  width: `${metric.current}%`,
                                  backgroundColor: metric.color,
                                }}
                              >
                                <span className="text-white text-xs font-medium">{metric.current}%</span>
                              </div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Current</span>
                              <span>Benchmark: {metric.benchmark}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* L2 Loss Types Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">L2 Loss Types</CardTitle>
                    <CardDescription>Click to navigate to modules</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {lossTypes.map((lossType) => (
                        <Card
                          key={lossType.id}
                          className="cursor-pointer transition-all hover:shadow-md border border-gray-200 hover:border-blue-300"
                          onClick={() => handleLossTypeClick(lossType)}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between mb-2">
                              <Badge className={`${lossType.color} ${lossType.textColor} text-xs`}>
                                L2-{lossType.id}
                              </Badge>
                              <ArrowRight className="h-4 w-4 text-gray-400" />
                            </div>
                            <h5 className="font-medium text-xs mb-2">{lossType.name}</h5>
                            <div className="text-xs text-gray-600">
                              <p>
                                Current: {lossType.current}% | Baseline: {lossType.baseline}%
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="kpis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain KPIs Performance</CardTitle>
                <CardDescription>Baseline vs Current Performance organized by loss type categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Customer & Demand Related KPIs */}
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                      Customer & Demand Related KPIs
                    </h3>
                    <div className="space-y-4 bg-purple-50 p-4 rounded-lg">
                      {[
                        {
                          name: "K1: Sales SKOT",
                          baseline: ">100%",
                          current: ">50%",
                          improvement: true,
                          target: ">90%",
                        },
                        {
                          name: "K2: Forecast accuracy",
                          baseline: "45%",
                          current: ">70%",
                          improvement: true,
                          target: "75%",
                        },
                        {
                          name: "K3: Forecast bias",
                          baseline: "10%",
                          current: "<5%",
                          improvement: true,
                          target: "<3%",
                        },
                      ].map((kpi, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{kpi.name}</h4>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <p className="text-gray-500">Baseline</p>
                              <p className="font-semibold text-red-600">{kpi.baseline}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <div className="text-center">
                              <p className="text-gray-500">Current</p>
                              <p className="font-semibold text-green-600">{kpi.current}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <div className="text-center">
                              <p className="text-gray-500">Target</p>
                              <p className="font-semibold text-blue-600">{kpi.target}</p>
                            </div>
                            {kpi.improvement && <TrendingUp className="h-5 w-5 text-green-500" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Warehouse Related KPIs */}
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                      Warehouse Related KPIs
                    </h3>
                    <div className="space-y-4 bg-orange-50 p-4 rounded-lg">
                      {[
                        {
                          name: "K4: Warehouse TAT",
                          baseline: "10 hrs",
                          current: "<4 hrs",
                          improvement: true,
                          target: "<2 hrs",
                        },
                      ].map((kpi, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{kpi.name}</h4>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <p className="text-gray-500">Baseline</p>
                              <p className="font-semibold text-red-600">{kpi.baseline}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <div className="text-center">
                              <p className="text-gray-500">Current</p>
                              <p className="font-semibold text-green-600">{kpi.current}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <div className="text-center">
                              <p className="text-gray-500">Target</p>
                              <p className="font-semibold text-blue-600">{kpi.target}</p>
                            </div>
                            {kpi.improvement && <TrendingUp className="h-5 w-5 text-green-500" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Distribution Related KPIs */}
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      Distribution Related KPIs
                    </h3>
                    <div className="space-y-4 bg-blue-50 p-4 rounded-lg">
                      {[
                        {
                          name: "K5: FG Inventory",
                          baseline: "8 wks",
                          current: "<4 wks",
                          improvement: true,
                          target: "<3 wks",
                        },
                        {
                          name: "K6: Dispatch compliance",
                          baseline: "80%",
                          current: ">90%",
                          improvement: true,
                          target: ">95%",
                        },
                      ].map((kpi, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{kpi.name}</h4>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <p className="text-gray-500">Baseline</p>
                              <p className="font-semibold text-red-600">{kpi.baseline}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <div className="text-center">
                              <p className="text-gray-500">Current</p>
                              <p className="font-semibold text-green-600">{kpi.current}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <div className="text-center">
                              <p className="text-gray-500">Target</p>
                              <p className="font-semibold text-blue-600">{kpi.target}</p>
                            </div>
                            {kpi.improvement && <TrendingUp className="h-5 w-5 text-green-500" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Supply Related KPIs */}
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                      Supply Related KPIs
                    </h3>
                    <div className="space-y-4 bg-green-50 p-4 rounded-lg">
                      {[
                        {
                          name: "K7: Production compliance",
                          baseline: "75%",
                          current: ">95%",
                          improvement: true,
                          target: ">98%",
                        },
                        {
                          name: "K8: Frozen period",
                          baseline: "1 mth",
                          current: "<1 wk",
                          improvement: true,
                          target: "<3 days",
                        },
                        {
                          name: "K9: Supplier OTIF",
                          baseline: "45%",
                          current: ">85%",
                          improvement: true,
                          target: ">90%",
                        },
                      ].map((kpi, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{kpi.name}</h4>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <p className="text-gray-500">Baseline</p>
                              <p className="font-semibold text-red-600">{kpi.baseline}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <div className="text-center">
                              <p className="text-gray-500">Current</p>
                              <p className="font-semibold text-green-600">{kpi.current}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <div className="text-center">
                              <p className="text-gray-500">Target</p>
                              <p className="font-semibold text-blue-600">{kpi.target}</p>
                            </div>
                            {kpi.improvement && <TrendingUp className="h-5 w-5 text-green-500" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
          <Card>
              <CardHeader>
                <CardTitle>Business Impact Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">+3%</div>
                    <div className="text-sm font-medium text-green-800">Sales Growth</div>
                    <div className="text-xs text-green-600 mt-1">Target: +5%</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                    <div className="text-sm font-medium text-blue-800">OTIF Performance</div>
                    <div className="text-xs text-blue-600 mt-1">Target: 95%</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">-2%</div>
                    <div className="text-sm font-medium text-purple-800">Inventory Reduction</div>
                    <div className="text-xs text-purple-600 mt-1">Target: -5%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>OTIF Performance Trend</CardTitle>
                  <CardDescription>Monthly progression vs baseline</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      baseline: {
                        label: "Baseline",
                        color: "hsl(var(--chart-1))",
                      },
                      current: {
                        label: "Current",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={otifTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[80, 100]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="baseline"
                          stroke="var(--color-baseline)"
                          strokeDasharray="5 5"
                          name="Baseline"
                        />
                        <Line
                          type="monotone"
                          dataKey="current"
                          stroke="var(--color-current)"
                          strokeWidth={3}
                          name="Current Performance"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benefits Summary</CardTitle>
                  <CardDescription>Key performance improvements achieved</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      baseline: {
                        label: "Baseline",
                        color: "hsl(var(--chart-1))",
                      },
                      current: {
                        label: "Current",
                        color: "hsl(var(--chart-2))",
                      },
                      target: {
                        label: "Target",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                    className="h-[300px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={benefitsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="metric" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="baseline" fill="var(--color-baseline)" name="Baseline" />
                        <Bar dataKey="current" fill="var(--color-current)" name="Current" />
                        <Bar dataKey="target" fill="var(--color-target)" name="Target" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>


          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TariffImpactRatioChart } from "@/components/tariffsdashboard/tariff-impact-ratio-chart"
import { TariffVolatilityChart } from "@/components/tariffsdashboard/tariff-volatility-chart"
import { CostPassThroughChart } from "@/components/tariffsdashboard/cost-pass-through-chart"
import { SupplyChainResilienceChart } from "@/components/tariffsdashboard/supply-chain-resilience-chart"
import { MarginImpactChart } from "@/components/tariffsdashboard/margin-impact-chart"
import { InventoryCarryingCostChart } from "@/components/tariffsdashboard/inventory-carrying-cost-chart"
import { SupplierTariffExposureChart } from "@/components/tariffsdashboard/supplier-tariff-exposure-chart"
import { CashFlowImpactChart } from "@/components/tariffsdashboard/cash-flow-impact-chart"
import { DutyDrawbackChart } from "@/components/tariffsdashboard/duty-drawback-chart"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <h1 className="text-2xl font-bold">Tariff Analytics Dashboard</h1>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
            <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Tariff Impact Ratio</CardTitle>
                  <CardDescription>Tariffs as % of landed cost</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <TariffImpactRatioChart />
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Tariff Volatility Index</CardTitle>
                  <CardDescription>Frequency and magnitude of changes</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <TariffVolatilityChart />
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Cost Pass-Through Rate</CardTitle>
                  <CardDescription>Absorbed vs. passed on costs</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <CostPassThroughChart />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Supply Chain Resilience Score</CardTitle>
                  <CardDescription>Multi-dimensional resilience view</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <SupplyChainResilienceChart />
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Margin Impact Analysis</CardTitle>
                  <CardDescription>Margin erosion alongside tariff spikes</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <MarginImpactChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Inventory Carrying Cost</CardTitle>
                  <CardDescription>With tariff risk over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <InventoryCarryingCostChart />
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Cash Flow Impact</CardTitle>
                  <CardDescription>Components affected by tariffs</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <CashFlowImpactChart />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Supplier Tariff Exposure</CardTitle>
                  <CardDescription>By exposure level and region</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <SupplierTariffExposureChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="supply-chain" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Duty Drawback Recovery Rate</CardTitle>
                  <CardDescription>Recovery % over time by product category</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <DutyDrawbackChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

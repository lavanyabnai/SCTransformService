"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RevenueChart } from "@/components/financeDashboard/revenue-chart"
import { CostOfRevenueChart } from "@/components/financeDashboard/cost-of-revenue-chart"
import { GrossMarginChart } from "@/components/financeDashboard/gross-margin-chart"
import { OpexChart } from "@/components/financeDashboard/opex-chart"
import { EbitdaChart } from "@/components/financeDashboard/ebitda-chart"
import { NetIncomeChart } from "@/components/financeDashboard/net-income-chart"
import { PayrollCostChart } from "@/components/financeDashboard/payroll-cost-chart"
import { OpexAmericasChart } from "@/components/financeDashboard/opex-americas-chart"

export default function FinancialDashboard() {
  return (
    <div >
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Financial Dashboard</h1>
        <p className="text-muted-foreground">Key performance indicators and financial metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <h1 className="text-4xl font-bold">$181.2M</h1>
            <CardDescription>Total revenue generated per quarter, segmented by product lines</CardDescription>
            
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        {/* Cost of Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Cost of Revenue</CardTitle>
            <h1 className="text-4xl font-bold">$92.30M</h1>
            <CardDescription>Various COGS components contributing to total cost</CardDescription>
          </CardHeader>
          <CardContent>
            <CostOfRevenueChart />
          </CardContent>
        </Card>

        {/* Gross Margin Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Gross Margin</CardTitle>
            <h1 className="text-4xl font-bold">25%</h1>
            <CardDescription>Profitability before operating expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <GrossMarginChart />
          </CardContent>
        </Card>

        {/* OPEX Chart */}
        <Card>
          <CardHeader>
            <CardTitle>OPEX (Operating Expenses)</CardTitle>
            <h1 className="text-4xl font-bold">$36.10M</h1>
            <CardDescription>Actual vs. budgeted operating expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <OpexChart />
          </CardContent>
        </Card>

        {/* EBITDA Chart */}
        <Card>
          <CardHeader>
            <CardTitle>EBITDA</CardTitle>
            <h1 className="text-4xl font-bold">$10.50M</h1>
            <CardDescription>Earnings Before Interest, Taxes, Depreciation & Amortization</CardDescription>
          </CardHeader>
          <CardContent>
            <EbitdaChart />
          </CardContent>
        </Card>

        {/* Net Income Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Net Income</CardTitle>
            <h1 className="text-4xl font-bold">$7.50M</h1>
            <CardDescription>Overall profitability after all costs</CardDescription>
          </CardHeader>
          <CardContent>
            <NetIncomeChart />
          </CardContent>
        </Card>

        {/* Payroll Cost Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll Cost</CardTitle>
            <h1 className="text-4xl font-bold">$9.43M</h1>
            <CardDescription>Workforce-related spending compared to targets</CardDescription>
          </CardHeader>
          <CardContent>
            <PayrollCostChart />
          </CardContent>
        </Card>

        {/* OPEX Americas Chart */}
        <Card>
          <CardHeader>
            <CardTitle>OPEX (Americas)</CardTitle>
            <h1 className="text-4xl font-bold">$25.36M</h1>
            <CardDescription>Category-level breakdown of operating expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <OpexAmericasChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

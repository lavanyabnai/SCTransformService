import {MultiStackColChartContainer} from '@/app/kendo/charts/stackcol/kendoStackColChart'
import {MultiStackBarChartContainer} from '@/app/kendo/charts/stackbar/kendoStackBarChart'

import {
  expenseCostCategories_m,
  expenseCostSeries_m,
  expenseReportsCategories_m,
  expenseReportsSeries_m,} from '@/app/kendo/rawData/analysis/pogoverAnalysis'




export const kpiService_m = [
  {
    Name: 'PO Goverance Breakdown',
    container: (
      <MultiStackColChartContainer categories={expenseCostCategories_m} series={expenseCostSeries_m} />
    ),
  },

  {
    Name: 'Summary by Supplier',
    container: (
      <MultiStackBarChartContainer categories={expenseReportsCategories_m} series={expenseReportsSeries_m} />
    ),
  },
]


import {MultiStackColChartContainer} from '@/app/kendo/charts/stackcol/kendoStackColChart'

import { discountproductCategories_m,discountproductSeries_m} from '@/app/kendo/rawData/analysis/underAnalysis'




export const kpiService_m = [
  {
    Name: "Demand realization vs. Forecast",
    container: (
      <MultiStackColChartContainer
        categories={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },
];

export const kpiInv_m = [
  {
    Name: "Demand realization vs.Forecast",
    container: (
      <MultiStackColChartContainer
        categories={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),

  },
];


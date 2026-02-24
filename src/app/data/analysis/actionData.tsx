import { MultiBarChartContainer } from "@/app/kendo/charts/bar/kendoBarChart"

import {
  orderTrendCategories_m,
  orderTrendSeries_m,
  discountproductCategories_m,
  discountproductSeries_m
} from '@/app/kendo/rawData/analysis/actionAnalysis';



export const kpiService_m = [
  {
    Name: "Current backorders",
    container: (
      <MultiBarChartContainer
        categories={orderTrendCategories_m}
        series={orderTrendSeries_m}
      />
    ),
  },

];

export const kpiInv_m = [
  {
    Name: "Global Stock",
    container: (
      <MultiBarChartContainer
        categories={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },
 
];


import { MultiColumnChartContainer } from '@/app/kendo/charts/column/kendoColumnChart'
import { MultiLineChartContainer } from '@/app/kendo/charts/line/kendoLineChart'
import { MultiStackColChartContainer } from '@/app/kendo/charts/stackcol/kendoStackColChart'

import {
  serviceCategories_m,
  serviceSeries_m,
  service1Categories_m,
  service1Series_m,
  pastCategories_m,
  pastSeries_m,
  past1Categories_m,
  past1Series_m
} from '@/app/kendo/rawData/analysis/skuAnalysis'


export const kpiService_m = [
  {
    Name: "Service SKU Trends (s1234)",
    sub: "",
    container: (
      <MultiLineChartContainer
        categories={serviceCategories_m}
        series={serviceSeries_m}
      />
    ),
  },

  {
    Name: "",
    container: (
      <MultiColumnChartContainer
        categories={service1Categories_m}
        series={service1Series_m}
      />
    ),
  },
];

export const kpiInv_m = [
  {
    Name: "Past and Project Inventory (s1234)",
    sub: "",
    container: (
      <MultiLineChartContainer
        categories={pastCategories_m}
        series={pastSeries_m}
      />
    ),
  },

  {
    Name: "",
    container: (
      <MultiStackColChartContainer
        categories={past1Categories_m}
        series={past1Series_m}
      />
    ),
  },
];


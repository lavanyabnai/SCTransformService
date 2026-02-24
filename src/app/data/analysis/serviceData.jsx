import {MultiLineChartContainer} from '@/app/kendo/charts/line/kendoLineChart'
import {MultiStackColChartContainer} from '@/app/kendo/charts/stackcol/kendoStackColChart'

import {
  discountproductCategories_m, discountproductSeries_m, cancellationCategories_m, cancellationSeries_m,
invCategories_m,
invSeries_m} from '@/app/kendo/rawData/analysis/serviceAnalysis'




export const kpiChat = [
  {
    Name: "End Customer backorder Performance",
    sub: "Globalorder performance",
    container: (
      <MultiStackColChartContainer
      categories={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },

  {
    Name: "OTIF Performance",
    sub: "OTIF (commit) and OTIF (ship),End Customer order lines committed/shipped,% of total order lines",
    container: (
      <MultiLineChartContainer
        categories={cancellationCategories_m}
        series={cancellationSeries_m}
      />
    ),
  },
];

export const kpiService_m = [
  {
    Name: "End Customer backorder Performance",
    sub: "Globalorder performance",
    container: (
      <MultiStackColChartContainer
        categories={discountproductCategories_m}
        series={discountproductSeries_m}
      />
    ),
  },

  {
    Name: "OTIF Performance",
    sub: "OTIF (commit) and OTIF (ship),End Customer order lines committed/shipped,% of total order lines",
    container: (
      <MultiLineChartContainer
        categories={cancellationCategories_m}
        series={cancellationSeries_m}
      />
    ),
  },
];

export const kpiInv_m = [
  {
    Name: "Inventory Performance",
    sub: "Inventory values per week,$M",
    container: (
      <MultiStackColChartContainer
        categories={invCategories_m}
        series={invSeries_m}
      />
    ),
  },
];

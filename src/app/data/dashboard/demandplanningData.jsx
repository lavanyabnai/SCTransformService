import MultiColumnChartContainer from "@/app/kendo/charts/column/kendoColumnChart";
import MultiLineChartContainer from "@/app/kendo/charts/line/kendoLineChart";



import {
  forecastCategories_m,
forecastSeries_m,
mapeCategories_m,
mapeSeries_m,
} from "@/app/kendo/rawData/dashboard/demandplanningDashboard";




export const kpiService_m = [
  {
    Name: 'Forecast Accuracy',
    Value: '75%',
    Trend: 'up',
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
        category={forecastCategories_m}
        series={forecastSeries_m}
      />
    ),

    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/orderAnalysis',
  },
  {
    Name: 'MAPE',
    Value: '80%',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <MultiLineChartContainer
        category={mapeCategories_m}
        series={mapeSeries_m}
      />
    ),
    status: 'On Track',
    Analyze: '/snop/dashboard/analysis/demandAnalysis',
  },
]
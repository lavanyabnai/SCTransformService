import { BarColorChartContainer } from '@/app/kendo/charts/barColor/kendoBarColorChart'
import {
  pro1Data,
  pro2Data,
  pro3Data,
  pro4Data,
  pro5Data,
  pro6Data,

} from "@/app/kendo/rawData/analysis/skuproAnalysis";

export const kpiService_m = [
  {
    Name: "OTIF at commit, order lines missed",
    sub: "Service metrics by product group",
    container: <BarColorChartContainer seriesData={pro1Data} />,
  },

  {
    Name: "# End-Customer backorder",
    sub: "",
    container: <BarColorChartContainer seriesData={pro2Data} />,
  },

  {
    Name: "$ End-Customer backorders",
    sub: "",
    container: <BarColorChartContainer seriesData={pro3Data} />,
  },
];

export const kpiInv_m = [
  {
    Name: "Shortage in 8 weeks",
    sub: "",
    container: <BarColorChartContainer seriesData={pro4Data} />,
  },

  {
    Name: "# End-Customer backorders",
    sub: "",
    container: <BarColorChartContainer seriesData={pro5Data} />,
  },

  {
    Name: "$ End-Customer backorder",
    sub: "",
    container: <BarColorChartContainer seriesData={pro6Data} />,
  },
];

export const kpiServiceChat_m = [
  {
    Name: 'OTIF at commit, order lines missed',
    sub: 'Number of orders',
    container: <BarColorChartContainer seriesData={pro1Data} />
  },

  {
    Name: '# End-Customer backorder',
    sub: 'Number of orders',
    container: <BarColorChartContainer seriesData={pro2Data} />
  }
]

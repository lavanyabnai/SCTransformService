import WrapperMultiColumnChart from '@/kendo/charts/column/WrapperColumnChart'
import WrapperMultiBarColorChart from '@/app/kendo/charts/barColor/WrapperColorBarChart'



import {
  pro4Data,
  serviceCategories_m,
  serviceSeries_m
} from "@/app/kendo/rawData/analysis/shapedemandAnalysis";






export const kpiService_m = [
  {
    Name: "OTIF at commit, order lines missed",
    sub: "Service metrics by product group",
    container: (
      <WrapperMultiColumnChart
        category={serviceCategories_m}
        series={serviceSeries_m}
      />
    ),
  },
];

export const kpiInv_m = [
  {
    Name: "Shortage in 8 weeks",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro4Data} />, 
  },

  
];


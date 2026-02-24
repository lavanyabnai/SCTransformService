// import WrapperGrid from "@/app/kendo/grid/WrapperGrid";
// import { carData } from "@/app/data/dashboard/carData";

import { PieChartContainer } from "@/app/kendo/charts/pie/kendoPieChart";
import { MultiAreaChartContainer } from "@/app/kendo/charts/area/kendoAreaChart";
import { MultiLineChartContainer } from "@/app/kendo/charts/line/kendoLineChart";
import { MultiColumnChartContainer } from "@/app/kendo/charts/column/kendoColumnChart";
import { MultiBarChartContainer } from "@/app/kendo/charts/bar/kendoBarChart";

import { MultiStackColChartContainer } from "@/app/kendo/charts/stackcol/kendoStackColChart";
import {
  salesCategory_m,
  salesData_m,
  forecastCategories_m,
  forecastSeries_m,
  ontimeCategories_m,
  ontimeSeries_m,
  backlogData_m,
  costCategories_m,
  costSeries_m,
  inventoryCategories_m,
  inventorySeries_m,
  marketingCategories_m,
  marketingSeries_m,
  logisticsCategories_m,
  logisticsSeries_m,
} from "@/app/kendo/rawData/dashboard/overviewDashboard";


export const kpiService_m = [
  {
    Name: "Sales",
    Value: "$2.2B",
    Trend: "up",
    TargetAch: 75,
    container: (
      <MultiStackColChartContainer
      categories={salesCategory_m}
        series={salesData_m}
      />
    ),
    status: "Above Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Forecast Accuracy",
    Value: "75%",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
      categories={forecastCategories_m}
        series={forecastSeries_m}
      />
    ),
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/orderAnalysis",
  },
  {
    Name: "On-Time & In-Full",
    Value: "80%",
    Trend: "down",
    TargetAch: 90,
    // container: <WrapperTripleLineChart category={lineCategories_m} first={TripleLineFirstSeries_m} second={TripleLineSecondSeries_m} third={TripleLineThirdSeries_m}/>,
    container: (
      <MultiLineChartContainer
      categories={ontimeCategories_m}
        series={ontimeSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/ontimeAnalysis",
  },
  {
    Name: "Backlog",
    Value: "$1.2M",
    Trend: "down",
    TargetAch: 50,
    container: <PieChartContainer series={backlogData_m} />,
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/agreementAnalysis",
  },
  {
    Name: "Cost of Goods",
    Value: "$1.2B",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
      categories={costCategories_m}
        series={costSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/costAnalysis",
  },
  {
    Name: "Inventory",
    Value: "$600M",
    Trend: "down",
    TargetAch: 50,
    container: (
      <MultiAreaChartContainer
      categories={inventoryCategories_m}
        series={inventorySeries_m}
      />
    ),
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis",
  },
  {
    Name: "Sales & Marketing",
    Value: "$300M",
    Trend: "up",
    TargetAch: 80,
    container: (
      <MultiBarChartContainer
      categories={marketingCategories_m}
        series={marketingSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/invcostAnalysis",
  },
  {
    Name: "Logistics",
    Value: "$300M",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiLineChartContainer
      categories={logisticsCategories_m}
        series={logisticsSeries_m}
      />
    ),
    status: "Above Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis",
  },
];

export const kpiService_q = [
  {
    Name: "Sales",
    Value: "$2.2B",
    Trend: "up",
    TargetAch: 75,
    container: (
      <MultiStackColChartContainer
      categories={salesCategory_m}
        series={salesData_m}
      />
    ),
    status: "Above Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Forecast Accuracy",
    Value: "75%",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
      categories={forecastCategories_m}
        series={forecastSeries_m}
      />
    ),
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/orderAnalysis",
  },
  {
    Name: "On-Time & In-Full",
    Value: "80%",
    Trend: "down",
    TargetAch: 90,
    // container: <WrapperTripleLineChart category={lineCategories_m} first={TripleLineFirstSeries_m} second={TripleLineSecondSeries_m} third={TripleLineThirdSeries_m}/>,
    container: (
      <MultiLineChartContainer
      categories={ontimeCategories_m}
        series={ontimeSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/ontimeAnalysis",
  },
  {
    Name: "Backlog",
    Value: "$1.2M",
    Trend: "down",
    TargetAch: 50,
    container: <WrapperPieChart series={backlogData_m} />,
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/agreementAnalysis",
  },
  {
    Name: "Cost of Goods",
    Value: "$1.2B",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
      categories={costCategories_m}
        series={costSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/costAnalysis",
  },
  {
    Name: "Inventory",
    Value: "$600M",
    Trend: "down",
    TargetAch: 50,
    container: (
      <MultiAreaChartContainer
      categories={inventoryCategories_m}
        series={inventorySeries_m}
      />
    ),
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis",
  },
  {
    Name: "Sales & Marketing",
    Value: "$300M",
    Trend: "up",
    TargetAch: 80,
    container: (
      <MultiBarChartContainer
      categories={marketingCategories_m}
        series={marketingSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/invcostAnalysis",
  },
  {
    Name: "Logistics",
    Value: "$300M",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiLineChartContainer
      categories={logisticsCategories_m}
        series={logisticsSeries_m}
      />
    ),
    status: "Above Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis",
  },
];

export const kpiService_y = [
  {
    Name: "Sales",
    Value: "$2.2B",
    Trend: "up",
    TargetAch: 75,
    container: (
      <MultiStackColChartContainer
      categories={salesCategory_m}
        series={salesData_m}
      />
    ),
    status: "Above Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Forecast Accuracy",
    Value: "75%",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
      categories={forecastCategories_m}
        series={forecastSeries_m}
      />
    ),
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/orderAnalysis",
  },
  {
    Name: "On-Time & In-Full",
    Value: "80%",
    Trend: "down",
    TargetAch: 90,
    // container: <WrapperTripleLineChart category={lineCategories_m} first={TripleLineFirstSeries_m} second={TripleLineSecondSeries_m} third={TripleLineThirdSeries_m}/>,
    container: (
      <MultiLineChartContainer
      categories={ontimeCategories_m}
        series={ontimeSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/ontimeAnalysis",
  },
  {
    Name: "Backlog",
    Value: "$1.2M",
    Trend: "down",
    TargetAch: 50,
    container: <WrapperPieChart series={backlogData_m} />,
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/agreementAnalysis",
  },
  {
    Name: "Cost of Goods",
    Value: "$1.2B",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
      categories={costCategories_m}
        series={costSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/costAnalysis",
  },
  {
    Name: "Inventory",
    Value: "$600M",
    Trend: "down",
    TargetAch: 50,
    container: (
      <MultiAreaChartContainer
      categories={inventoryCategories_m}
        series={inventorySeries_m}
      />
    ),
    status: "Below Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis",
  },
  {
    Name: "Sales & Marketing",
    Value: "$300M",
    Trend: "up",
    TargetAch: 80,
    container: (
      <MultiBarChartContainer
      categories={marketingCategories_m}
        series={marketingSeries_m}
      />
    ),
    status: "On Track",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/invcostAnalysis",
  },
  {
    Name: "Logistics",
    Value: "$300M",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiLineChartContainer
      categories={logisticsCategories_m}
        series={logisticsSeries_m}
      />
    ),
    status: "Above Target",
    Explore:'', // <WrapperGrid rowData={carData} />,
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis",
  },
];

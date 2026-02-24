import { DonutChartContainer } from "@/app/kendo/charts/donut/kendoDonutChart";

import {MultiColumnChartContainer} from "@/app/kendo/charts/column/kendoColumnChart";
import {MultiBarChartContainer} from "@/app/kendo/charts/bar/kendoBarChart";
import { WaterfallChartContainer } from "@/app/kendo/charts/waterfall/kendoWaterfallChart";
import {MultiStackColChartContainer} from "@/app/kendo/charts/stackcol/kendoStackColChart";

import {
  revenueSeries_m,
  opCategories_m,
  opSeries_m,
  ebitdaCategories_m,
  ebitdaSeries_m,
  costCategories_m,
  costSeries_m,
  payrollSeries_m,
  ebitdaMarginCategories_m,
  ebitdaMarginSeries_m,
  netSeries_m,
  grossCategories_m,
  grossSeries_m,
} from "@/app/kendo/rawData/dashboard/profitDashboard";



export const kpiService_m = [
  {
    Name: "Revenue",
    Value: "$12.74M",
    Trend: "up",
    TargetAch: 75,
    container: <DonutChartContainer series={revenueSeries_m} />,
    status: "Above Target",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/agreementAnalysis",
  },
  {
    Name: "OpEx",
    Value: "$1.47M",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer categories={opCategories_m} series={opSeries_m} />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/perfAnalysis",
  },
  {
    Name: "EBITDA",
    Value: "$14.23M",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiStackColChartContainer
        categories={ebitdaCategories_m}
        series={ebitdaSeries_m}
      />
    ),
    status: "On Track",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/agreementAnalysis",
  },
  {
    Name: "Cost of Revenue",
    Value: "$254.47k",
    Trend: "down",
    TargetAch: 50,
    container: (
      <MultiColumnChartContainer
        categories={costCategories_m}
        series={costSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
  {
    Name: "Payroll Cost",
    Value: "$14.36K",
    Trend: "up",
    TargetAch: 90,
    container: <DonutChartContainer series={payrollSeries_m} />,
    status: "On Track",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/procureAnalysis",
  },
  {
    Name: "EBITDA Margin %",
    Value: "111.69",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
        categories={ebitdaMarginCategories_m}
        series={ebitdaMarginSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/agreementAnalysis",
  },
  {
    Name: "Net Income",
    Value: "$14.23M",
    Trend: "up",
    TargetAch: 77,
    container: <WaterfallChartContainer data={netSeries_m} />,
    status: "On Track",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/procureAnalysis",
  },
  {
    Name: "Gross Margin %",
    Value: "98.00",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiColumnChartContainer
        categories={grossCategories_m}
        series={grossSeries_m}
      />
    ),
    status: "Above Target",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/perfAnalysis",
  },
];

export const kpiService_q = [
  {
    Name: "Revenue",
    Value: "$12.74M",
    Trend: "up",
    TargetAch: 75,
    container: <DonutChartContainer series={revenueSeries_m} />,
    status: "Above Target",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "OpEx",
    Value: "$1.47M",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer categories={opCategories_m} series={opSeries_m} />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "EBITDA",
    Value: "$14.23M",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiStackColChartContainer
        categories={ebitdaCategories_m}
        series={ebitdaSeries_m}
      />
    ),
    status: "On Track",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "Cost of Revenue",
    Value: "$254.47k",
    Trend: "down",
    TargetAch: 50,
    container: (
      <MultiColumnChartContainer
        categories={costCategories_m}
        series={costSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "",
  },
];

export const kpiService_y = [
  {
    Name: "Revenue",
    Value: "$12.74M",
    Trend: "up",
    TargetAch: 75,
    container: <DonutChartContainer series={revenueSeries_m} />,
    status: "Above Target",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "OpEx",
    Value: "$1.47M",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer category={opCategories_m} series={opSeries_m} />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "EBITDA",
    Value: "$14.23M",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiStackColChartContainer
        category={ebitdaCategories_m}
        series={ebitdaSeries_m}
      />
    ),
    status: "On Track",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "Cost of Revenue",
    Value: "$254.47k",
    Trend: "down",
    TargetAch: 50,
    container: (
      <MultiColumnChartContainer
        category={costCategories_m}
        series={costSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "",
  },
];

export const kpiCost_m = [
  {
    Name: "Payroll Cost",
    Value: "$14.36K",
    Trend: "up",
    TargetAch: 90,
    container: <DonutChartContainer series={payrollSeries_m} />,
    status: "On Track",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/procureAnalysis",
  },
  {
    Name: "EBITDA Margin %",
    Value: "111.69",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
        categories={ebitdaMarginCategories_m}
        series={ebitdaMarginSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/agreementAnalysis",
  },
  {
    Name: "Net Income",
    Value: "$14.23M",
    Trend: "up",
    TargetAch: 77,
    container: <WaterfallChartContainer data={netSeries_m} />,
    status: "On Track",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/procureAnalysis",
  },
  {
    Name: "Gross Margin %",
    Value: "98.00",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiColumnChartContainer
        categories={grossCategories_m}
        series={grossSeries_m}
      />
    ),
    status: "Above Target",
    Explore: "",
    Analyze: "/snop/dashboard/analysis/perfAnalysis",
  },
];

export const kpiCost_q = [
  {
    Name: "Payroll Cost",
    Value: "$14.36K",
    Trend: "up",
    TargetAch: 90,
    container: <DonutChartContainer series={payrollSeries_m} />,
    status: "On Track",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "EBITDA Margin %",
    Value: "111.69",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiBarChartContainer
        categories={ebitdaMarginCategories_m}
        series={ebitdaMarginSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "Net Income",
    Value: "$14.23M",
    Trend: "up",
    TargetAch: 77,
    container: <WaterfallChartContainer data={netSeries_m} />,
    status: "On Track",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "Gross Margin %",
    Value: "98.00",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiColumnChartContainer
        categories={grossCategories_m}
        series={grossSeries_m}
      />
    ),
    status: "Above Target",
    Explore: "",
    Analyze: "",
  },
];

export const kpiCost_y = [
  {
    Name: "Payroll Cost",
    Value: "$14.36K",
    Trend: "up",
    TargetAch: 90,
    container: <DonutChartContainer series={payrollSeries_m} />,
    status: "On Track",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "EBITDA Margin %",
    Value: "111.69",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiBarChartContainer
        categories={ebitdaMarginCategories_m}
        series={ebitdaMarginSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "Net Income",
    Value: "$14.23M",
    Trend: "up",
    TargetAch: 77,
    container: <WaterfallChartContainer data={netSeries_m} />,
    status: "On Track",
    Explore: "",
    Analyze: "",
  },
  {
    Name: "Gross Margin %",
    Value: "98.00",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiColumnChartContainer
        categories={grossCategories_m}
        series={grossSeries_m}
      />
    ),
    status: "Above Target",
    Explore: "",
    Analyze: "",
  },
];

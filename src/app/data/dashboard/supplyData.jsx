import {MultiAreaChartContainer} from '@/app/kendo/charts/area/kendoAreaChart';
import {MultiColumnChartContainer} from '@/app/kendo/charts/column/kendoColumnChart';
import {MultiBarChartContainer} from '@/app/kendo/charts/bar/kendoBarChart';
import {PieChartContainer} from '@/app/kendo/charts/pie/kendoPieChart';
import {DonutChartContainer} from '@/app/kendo/charts/donut/kendoDonutChart';

import {
  poamount_m,
  receivedCategories_m,
  receivedSeries_m,
  agreementCategories_m,
  agreementSeries_m,
  savings_m,
  supplierCategories_m,
  supplierSeries_m,
  lateCategories_m,
  lateSeries_m,
  cycleCategories_m,
  cycleSeries_m,
  overdueCategories_m,
  overdueSeries_m
} from '@/app/kendo/rawData/dashboard/supplyDashboard';


export const kpiService_m = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: <DonutChartContainer series={poamount_m} />,
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
  {
    Name: "Received Amount",
    Value: "$113M",
    Trend: "up",
    TargetAch: 94,
    container: (
      <MultiColumnChartContainer
        categories={receivedCategories_m}
        series={receivedSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/supplyAnalysis",
  },
  {
    Name: "Agreement Leakage",
    Value: "$14.89M",
    Trend: "down",
    TargetAch: 0,
    container: (
      <MultiColumnChartContainer
        categories={agreementCategories_m}
        series={agreementSeries_m}
      />
    ),
    status: "On Track",
    Analyze: "/snop/dashboard/analysis/procureAnalysis",
  },
  {
    Name: "Savings Opportunities",
    Value: "$32M",
    Trend: "down",
    TargetAch: 50,
    container: <PieChartContainer series={savings_m} />,
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/savingsAnalysis",
  },
  {
    Name: "Supplier Count",
    Value: "40",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
        categories={supplierCategories_m}
        series={supplierSeries_m}
      />
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/supplyAnalysis",
  },
  {
    Name: "Received Late %",
    Value: "18%",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiAreaChartContainer
        categories={lateCategories_m}
        series={lateSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/spendAnalysis",
  },
  {
    Name: "PR to PO Cycle Time",
    Value: "46.08",
    Trend: "up",
    TargetAch: 77,
    container: (
      <MultiBarChartContainer
        categories={cycleCategories_m}
        series={cycleSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
  {
    Name: "AP OverDue",
    Value: "$51M",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiColumnChartContainer
        categories={overdueCategories_m}
        series={overdueSeries_m}
      />
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/spendAnalysis",
  },
];

export const kpiService_q = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: <PieChartContainer series={poamount_m} />,
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
  {
    Name: "Received Amount",
    Value: "$113M",
    Trend: "up",
    TargetAch: 94,
    container: (
      <MultiColumnChartContainer
        categories={receivedCategories_m}
        series={receivedSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/supplyAnalysis",
  },
  {
    Name: "Agreement Leakage",
    Value: "$14.89M",
    Trend: "down",
    TargetAch: 0,
    container: (
      <MultiColumnChartContainer
        categories={agreementCategories_m}
        series={agreementSeries_m}
      />
    ),
    status: "On Track",
    Analyze: "/snop/dashboard/analysis/procureAnalysis",
  },
  {
    Name: "Savings Opportunities",
    Value: "$32M",
    Trend: "down",
    TargetAch: 50,
    container: <PieChartContainer series={savings_m} />,
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/savingsAnalysis",
  },
  {
    Name: "Supplier Count",
    Value: "40",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
        categories={supplierCategories_m}
        series={supplierSeries_m}
      />
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/supplyAnalysis",
  },
  {
    Name: "Received Late %",
    Value: "18%",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiAreaChartContainer
        categories={lateCategories_m}
        series={lateSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/spendAnalysis",
  },
  {
    Name: "PR to PO Cycle Time",
    Value: "46.08",
    Trend: "up",
    TargetAch: 77,
    container: (
      <MultiBarChartContainer
        categories={cycleCategories_m}
        series={cycleSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
  {
    Name: "AP OverDue",
    Value: "$51M",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiColumnChartContainer
        categories={overdueCategories_m}
        series={overdueSeries_m}
      />
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/spendAnalysis",
  },
];

export const kpiService_y = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: <PieChartContainer series={poamount_m} />,
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
  {
    Name: "Received Amount",
    Value: "$113M",
    Trend: "up",
    TargetAch: 94,
    container: (
      <MultiColumnChartContainer
        categories={receivedCategories_m}
        series={receivedSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/supplyAnalysis",
  },
  {
    Name: "Agreement Leakage",
    Value: "$14.89M",
    Trend: "down",
    TargetAch: 0,
    container: (
      <MultiColumnChartContainer
        categories={agreementCategories_m}
        series={agreementSeries_m}
      />
    ),
    status: "On Track",
    Analyze: "/snop/dashboard/analysis/procureAnalysis",
  },
  {
    Name: "Savings Opportunities",
    Value: "$32M",
    Trend: "down",
    TargetAch: 50,
    container: <PieChartContainer series={savings_m} />,
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/savingsAnalysis",
  },
  {
    Name: "Supplier Count",
    Value: "40",
    Trend: "up",
    TargetAch: 90,
    container: (
      <MultiColumnChartContainer
        categories={supplierCategories_m}
        series={supplierSeries_m}
      />
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/supplyAnalysis",
  },
  {
    Name: "Received Late %",
    Value: "18%",
    Trend: "down",
    TargetAch: 90,
    container: (
      <MultiAreaChartContainer
        categories={lateCategories_m}
        series={lateSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/spendAnalysis",
  },
  {
    Name: "PR to PO Cycle Time",
    Value: "46.08",
    Trend: "up",
    TargetAch: 77,
    container: (
      <MultiBarChartContainer
        categories={cycleCategories_m}
        series={cycleSeries_m}
      />
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis",
  },
  {
    Name: "AP OverDue",
    Value: "$51M",
    Trend: "up",
    TargetAch: 95,
    container: (
      <MultiColumnChartContainer
        categories={overdueCategories_m}
        series={overdueSeries_m}
      />
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/spendAnalysis",
  },
];

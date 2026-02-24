import {MultiColumnChartContainer} from '@/app/kendo/charts/column/kendoColumnChart'
import {MultiStackColChartContainer} from '@/app/kendo/charts/stackcol/kendoStackColChart'
import {WaterfallChartContainer} from '@/app/kendo/charts/waterfall/kendoWaterfallChart';

import {
  expenseCostCategories_m,
  expenseCostSeries_m,
  expenseReportsCategories_m,
  expenseReportsSeries_m,
  totalExpenseData,
  businessCategories_m,
  businessSeries_m} from '@/app/kendo/rawData/analysis/expenseAnalysis'




export const kpiService_m = [
  {
    Name: 'Total Expense by Cost Center Name,Category',
    container: <MultiStackColChartContainer categories={ expenseCostCategories_m} series={expenseCostSeries_m} />,
  },
  {
    Name: 'Total Expense, # of Expense Reports by Qtr',
    container: <WaterfallChartContainer data={totalExpenseData} /> , 

  },
  {
    Name: 'Total Expense by Category,Merchant Name',
    container:<MultiColumnChartContainer categories={expenseReportsCategories_m} series={expenseReportsSeries_m}/>  ,
    
  },
  {
    Name:'# of Violations by Reason,Business Unit',
    container: <MultiStackColChartContainer categories={ businessCategories_m} series={businessSeries_m} />,
  },
]

export const kpiService_q = [
  {
    Name: 'Total Expense by Cost Center Name,Category',
    container: <MultiStackColChartContainer categories={ expenseCostCategories_m} series={expenseCostSeries_m} />,
  },
  {
    Name: 'Total Expense, # of Expense Reports by Qtr',
    container: <WaterfallChartContainer data={totalExpenseData} /> , 

  },
  {
    Name: 'Total Expense by Category,Merchant Name',
    container:<MultiColumnChartContainer categories={expenseReportsCategories_m} series={expenseReportsSeries_m}/>  ,
    
  },
  {
    Name:'# of Violations by Reason,Business Unit',
    container: <MultiStackColChartContainer categories={ businessCategories_m} series={businessSeries_m} />,
  },
]

export const kpiService_y = [
  {
    Name: 'Total Expense by Cost Center Name,Category',
    container: <MultiStackColChartContainer categories={ expenseCostCategories_m} series={expenseCostSeries_m} />,
  },
  {
    Name: 'Total Expense, # of Expense Reports by Qtr',
    container: <WaterfallChartContainer data={totalExpenseData} /> , 

  },
  {
    Name: 'Total Expense by Category,Merchant Name',
    container:<MultiColumnChartContainer categories={expenseReportsCategories_m} series={expenseReportsSeries_m}/>  ,
    
  },
  {
    Name:'# of Violations by Reason,Business Unit',
    container: <MultiStackColChartContainer categories={ businessCategories_m} series={businessSeries_m} />,
  },
]

export const kpiCost_m = [
  {
    Name: 'Total Expense by Cost Center Name,Category',
    container: <MultiStackColChartContainer categories={ expenseCostCategories_m} series={expenseCostSeries_m} />,
  },
  {
    Name: 'Total Expense, # of Expense Reports by Qtr',
    container: <WaterfallChartContainer data={totalExpenseData} /> , 

  },
  {
    Name: 'Total Expense by Category,Merchant Name',
    container:<MultiColumnChartContainer categories={expenseReportsCategories_m} series={expenseReportsSeries_m}/>  ,
    
  },
  {
    Name:'# of Violations by Reason,Business Unit',
    container: <MultiStackColChartContainer categories={ businessCategories_m} series={businessSeries_m} />,
  },
]

export const kpiCost_q = [
  {
    Name: 'Total Expense by Cost Center Name,Category',
    container: <MultiStackColChartContainer categories={ expenseCostCategories_m} series={expenseCostSeries_m} />,
  },
  {
    Name: 'Total Expense, # of Expense Reports by Qtr',
    container: <WaterfallChartContainer data={totalExpenseData} /> , 

  },
  {
    Name: 'Total Expense by Category,Merchant Name',
    container:<MultiColumnChartContainer categories={expenseReportsCategories_m} series={expenseReportsSeries_m}/>  ,
    
  },
  {
    Name:'# of Violations by Reason,Business Unit',
    container: <MultiStackColChartContainer categories={ businessCategories_m} series={businessSeries_m} />,
  },
]

export const kpiCost_y = [
  {
    Name: 'Total Expense by Cost Center Name,Category',
    container: <MultiStackColChartContainer categories={ expenseCostCategories_m} series={expenseCostSeries_m} />,
  },
  {
    Name: 'Total Expense, # of Expense Reports by Qtr',
    container: <WaterfallChartContainer data={totalExpenseData} /> , 

  },
  {
    Name: 'Total Expense by Category,Merchant Name',
    container:<MultiColumnChartContainer categories={expenseReportsCategories_m} series={expenseReportsSeries_m}/>  ,
    
  },
  {
    Name:'# of Violations by Reason,Business Unit',
    container: <MultiStackColChartContainer categories={ businessCategories_m} series={businessSeries_m} />,
  },
]

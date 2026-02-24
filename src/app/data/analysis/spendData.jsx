import { MultiColumnChartContainer} from '@/app/kendo/charts/column/kendoColumnChart'
import {MultiStackColChartContainer} from '@/app/kendo/charts/stackcol/kendoStackColChart'
import {WaterfallChartContainer} from '@/app/kendo/charts/waterfall/kendoWaterfallChart'
import {DonutChartContainer} from '@/app/kendo/charts/donut/kendoDonutChart'
import {PieChartContainer} from '@/app/kendo/charts/pie/kendoPieChart'
import {MultiBarChartContainer} from '@/app/kendo/charts/bar/kendoBarChart'
import {spendtopData,spendBusinessCategories_m,spendBusinessSeries_m,spendTrendCategories_m,spendTrendSeries_m,spendOffData} from '@/app/kendo/rawData/analysis/spendAnalysis'




export const kpiService_m = [
  {
    Name: 'Spend by Top 10 Supplier',
    container: <WaterfallChartContainer data={spendtopData} />,
  },
  {
    Name: 'Spend by Business Unit',
    container: <MultiColumnChartContainer categories={spendBusinessCategories_m} series={spendBusinessSeries_m} />, 

  },
  {
    Name: 'Spend Trend by Top Level Categories',
    container: <MultiStackColChartContainer categories={spendTrendCategories_m} series={spendTrendSeries_m} /> ,
    
  },
  {
    Name:'Spend and Off-Contract by Category',
    container: <WaterfallChartContainer data={spendOffData} />,
  },
]

export const kpiService_q = [
  {
    Name: 'Spend by Top 10 Supplier',
    container: <PieChartContainer series={spendtopData} />,
  },
  {
    Name: 'Spend by Business Unit',
    container: <MultiBarChartContainer categories={spendBusinessCategories_m} series={spendBusinessSeries_m} />, 

  },
  {
    Name: 'Spend Trend by Top Level Categories',
    container: <MultiStackColChartContainer categories={spendTrendCategories_m} series={spendTrendSeries_m} /> ,
    
  },
  {
    Name:'Spend and Off-Contract by Category',
    container: <DonutChartContainer series={spendOffData} />,
  },
]

export const kpiService_y = [
  {
    Name: 'Spend by Top 10 Supplier',
    container: <PieChartContainer series={spendtopData} />,
  },
  {
    Name: 'Spend by Business Unit',
    container: <MultiBarChartContainer categories={spendBusinessCategories_m} series={spendBusinessSeries_m} />, 

  },
  {
    Name: 'Spend Trend by Top Level Categories',
    container: <MultiStackColChartContainer categories={spendTrendCategories_m} series={spendTrendSeries_m} /> ,
    
  },
  {
    Name:'Spend and Off-Contract by Category',
    container: <DonutChartContainer series={spendOffData} />,
  },
]

export const kpiCost_m = [
  {
    Name: 'Spend by Top 10 Supplier',
    container: <PieChartContainer series={spendtopData} />,
  },
  {
    Name: 'Spend by Business Unit',
    container: <MultiBarChartContainer categories={spendBusinessCategories_m} series={spendBusinessSeries_m} />, 

  },
  {
    Name: 'Spend Trend by Top Level Categories',
    container: <MultiStackColChartContainer categories={spendTrendCategories_m} series={spendTrendSeries_m} /> ,
    
  },
  {
    Name:'Spend and Off-Contract by Category',
    container: <DonutChartContainer series={spendOffData} />,
  },

]

export const kpiCost_q = [
  {
    Name: 'Spend by Top 10 Supplier',
    container: <PieChartContainer series={spendtopData} />,
  },
  {
    Name: 'Spend by Business Unit',
    container: <MultiBarChartContainer categories={spendBusinessCategories_m} series={spendBusinessSeries_m} />, 

  },
  {
    Name: 'Spend Trend by Top Level Categories',
    container: <MultiStackColChartContainer categories={spendTrendCategories_m} series={spendTrendSeries_m} /> ,
    
  },
  {
    Name:'Spend and Off-Contract by Category',
    container: <DonutChartContainer series={spendOffData} />,
  },
]

export const kpiCost_y = [
  {
    Name: 'Spend by Top 10 Supplier',
    container: <PieChartContainer series={spendtopData} />,
  },
  {
    Name: 'Spend by Business Unit',
    container: <MultiBarChartContainer categories={spendBusinessCategories_m} series={spendBusinessSeries_m} />, 

  },
  {
    Name: 'Spend Trend by Top Level Categories',
    container: <MultiStackColChartContainer categories={spendTrendCategories_m} series={spendTrendSeries_m} /> ,
    
  },
  {
    Name:'Spend and Off-Contract by Category',
    container: <DonutChartContainer series={spendOffData} />,
  },
]

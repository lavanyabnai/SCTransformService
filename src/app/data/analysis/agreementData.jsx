import {MultiColumnChartContainer} from '@/app/kendo/charts/column/kendoColumnChart'
import {PieChartContainer} from  '@/app/kendo/charts/pie/kendoPieChart'
import {DonutChartContainer} from '@/app/kendo/charts/donut/kendoDonutChart'
import {MultiStackColChartContainer} from '@/app/kendo/charts/stackcol/kendoStackColChart'
import {WaterfallChartContainer} from '@/app/kendo/charts/waterfall/kendoWaterfallChart'

import {
  leakageTrendCategories_m,
  leakageTrendSeries_m,
  amountCategories_m,
  amountSeries_m,
  typeCategoryData,
  supplierCategoryData
} from '@/app/kendo/rawData/analysis/agreementAnalysis';



export const kpiService_m = [
  {
    Name: 'Agreement Leakage Trend by Category',
    container: <MultiStackColChartContainer categories={leakageTrendCategories_m} series={leakageTrendSeries_m} />,
  },
  {
    Name: 'Agreement Amount/Utilization for Items & Supplier',
    container: <MultiColumnChartContainer categories={amountCategories_m} series={amountSeries_m} />, 

  },
  {
    Name: 'Agreement Amount by Agreement Type',
    container: <WaterfallChartContainer data={typeCategoryData} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <WaterfallChartContainer data={supplierCategoryData} />,
  },
]

export const kpiService_q = [
  {
    Name: 'Agreement Leakage Trend by Category',
    container: <MultiStackColChartContainer categories={leakageTrendCategories_m} series={leakageTrendSeries_m} />,
  },
  {
    Name: 'Agreement Amount/Utilization for Items & Supplier',
    container: <MultiColumnChartContainer categories={amountCategories_m} series={amountSeries_m} />, 

  },
  {
    Name: 'Agreement Amount by Agreement Type',
    container: <DonutChartContainer series={typeCategoryData} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <PieChartContainer series={typeCategoryData} />,
  },
]

export const kpiService_y = [
  {
    Name: 'Agreement Leakage Trend by Category',
    container: <MultiStackColChartContainer categories={leakageTrendCategories_m} series={leakageTrendSeries_m} />,
  },
  {
    Name: 'Agreement Amount/Utilization for Items & Supplier',
    container: <MultiColumnChartContainer categories={amountCategories_m} series={amountSeries_m} />, 

  },
  {
    Name: 'Agreement Amount by Agreement Type',
    container: <DonutChartContainer series={typeCategoryData} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <PieChartContainer series={typeCategoryData} />,
  },
]

export const kpiCost_m = [
  {
    Name: 'Agreement Leakage Trend by Category',
    container: <MultiStackColChartContainer categories={leakageTrendCategories_m} series={leakageTrendSeries_m} />,
  },
  {
    Name: 'Agreement Amount/Utilization for Items & Supplier',
    container: <MultiColumnChartContainer categories={amountCategories_m} series={amountSeries_m} />, 

  },
  {
    Name: 'Agreement Amount by Agreement Type',
    container: <DonutChartContainer series={typeCategoryData} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <PieChartContainer series={typeCategoryData} />,
  },
]

export const kpiCost_q = [
  {
    Name: 'Agreement Leakage Trend by Category',
    container: <MultiStackColChartContainer categories={leakageTrendCategories_m} series={leakageTrendSeries_m} />,
  },
  {
    Name: 'Agreement Amount/Utilization for Items & Supplier',
    container: <MultiColumnChartContainer categories={amountCategories_m} series={amountSeries_m} />, 

  },
  {
    Name: 'Agreement Amount by Agreement Type',
    container: <DonutChartContainer series={typeCategoryData} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <PieChartContainer series={typeCategoryData} />,
  },
]

export const kpiCost_y = [
  {
    Name: 'Agreement Leakage Trend by Category',
    container: <MultiStackColChartContainer categories={leakageTrendCategories_m} series={leakageTrendSeries_m} />,
  },
  {
    Name: 'Agreement Amount/Utilization for Items & Supplier',
    container: <MultiColumnChartContainer categories={amountCategories_m} series={amountSeries_m} />, 

  },
  {
    Name: 'Agreement Amount by Agreement Type',
    container: <DonutChartContainer series={typeCategoryData} /> ,
    
  },
  {
    Name:'Tier-1 Suppliers',
    container: <PieChartContainer series={typeCategoryData} />,
  },
]

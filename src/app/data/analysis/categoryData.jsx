import {MultiBarChartContainer} from '@/app/kendo/charts/bar/kendoBarChart'
import {ScatterBubbleChartContainer} from '@/app/kendo/charts/bubble/kendoScatterBubbleChart'
import {itemCategories_m,
  itemSeries_m,
  supplierCategories_m,
  supplierSeries_m,
  unitSeries_m,
  itemSupplierCategories_m,
  itemSupplierSeries_m} from '@/app/kendo/rawData/analysis/categoryAnalysis'


export const kpiService_m = [
  {
    Name: 'Contract,Off-Contract by Item',
    container: <MultiBarChartContainer categories={itemCategories_m} series={itemSeries_m}/>,
  },
  {
    Name: 'Contract,Off-Contract by Suppliers',
    container: <MultiBarChartContainer categories={supplierCategories_m} series={supplierSeries_m}/> ,
    
  },
  {
    Name: 'Qty, Unit Price by Item, Off-Contract',
    container: <ScatterBubbleChartContainer  data={unitSeries_m}/>, 
  },
  
  {
    Name:'Item,Suppliers Analysis',
    container: <MultiBarChartContainer categories={itemSupplierCategories_m} series={itemSupplierSeries_m}/>,
  },
]

export const kpiService_q = [
  {
    Name: 'Contract,Off-Contract by Item',
    container: <MultiBarChartContainer categories={itemCategories_m} series={itemSeries_m}/>,
  },
  {
    Name: 'Contract,Off-Contract by Suppliers',
    container: <MultiBarChartContainer categories={supplierCategories_m} series={supplierSeries_m}/> ,
    
  },
  {
    Name: 'Qty, Unit Price by Item, Off-Contract',
    container: <ScatterBubbleChartContainer  data={unitSeries_m}/>, 
  },
  
  {
    Name:'Item,Suppliers Analysis',
    container: <MultiBarChartContainer categories={itemSupplierCategories_m} series={itemSupplierSeries_m}/>,
  },
]

export const kpiService_y = [
  {
    Name: 'Contract,Off-Contract by Item',
    container: <MultiBarChartContainer categories={itemCategories_m} series={itemSeries_m}/>,
  },
  {
    Name: 'Contract,Off-Contract by Suppliers',
    container: <MultiBarChartContainer categories={supplierCategories_m} series={supplierSeries_m}/> ,
    
  },
  {
    Name: 'Qty, Unit Price by Item, Off-Contract',
    container: <ScatterBubbleChartContainer  data={unitSeries_m}/>, 
  },
  
  {
    Name:'Item,Suppliers Analysis',
    container: <MultiBarChartContainer categories={itemSupplierCategories_m} series={itemSupplierSeries_m}/>,
  },
]

export const kpiCost_m = [
  {
    Name: 'Contract,Off-Contract by Item',
    container: <MultiBarChartContainer categories={itemCategories_m} series={itemSeries_m}/>,
  },
  {
    Name: 'Contract,Off-Contract by Suppliers',
    container: <MultiBarChartContainer categories={supplierCategories_m} series={supplierSeries_m}/> ,
    
  },
  {
    Name: 'Qty, Unit Price by Item, Off-Contract',
    container: <ScatterBubbleChartContainer  data={unitSeries_m}/>, 
  },
  
  {
    Name:'Item,Suppliers Analysis',
    container: <MultiBarChartContainer categories={itemSupplierCategories_m} series={itemSupplierSeries_m}/>,
  },
]

export const kpiCost_q = [
  {
    Name: 'Contract,Off-Contract by Item',
    container: <MultiBarChartContainer categories={itemCategories_m} series={itemSeries_m}/>,
  },
  {
    Name: 'Contract,Off-Contract by Suppliers',
    container: <MultiBarChartContainer categories={supplierCategories_m} series={supplierSeries_m}/> ,
    
  },
  {
    Name: 'Qty, Unit Price by Item, Off-Contract',
    container: <ScatterBubbleChartContainer  data={unitSeries_m}/>, 
  },
  
  {
    Name:'Item,Suppliers Analysis',
    container: <MultiBarChartContainer categories={itemSupplierCategories_m} series={itemSupplierSeries_m}/>,
  },
]

export const kpiCost_y = [
  {
    Name: 'Contract,Off-Contract by Item',
    container: <MultiBarChartContainer categories={itemCategories_m} series={itemSeries_m}/>,
  },
  {
    Name: 'Contract,Off-Contract by Suppliers',
    container: <MultiBarChartContainer categories={supplierCategories_m} series={supplierSeries_m}/> ,
    
  },
  {
    Name: 'Qty, Unit Price by Item, Off-Contract',
    container: <ScatterBubbleChartContainer  data={unitSeries_m}/>, 
  },
  
  {
    Name:'Item,Suppliers Analysis',
    container: <MultiBarChartContainer categories={itemSupplierCategories_m} series={itemSupplierSeries_m}/>,
  },
]

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartLegend,
    ChartCategoryAxisItem,
  } from "@progress/kendo-react-charts";
  import "hammerjs";
  
// eslint-disable-next-line react/prop-types
export function MultiStackColChartContainer({categories,series}){
 return (
   <Chart style={{ height: 250 }}>
       <ChartLegend position="top" orientation="horizontal" />
       <ChartCategoryAxis>
         <ChartCategoryAxisItem categories={categories}/>
       </ChartCategoryAxis>
       <ChartSeries  >
       {series.map((s) => (
       <ChartSeriesItem name={s.name} data={s.data} type="column" stack={true} key={s.name} tooltip={{visible:true}} labels={{visible:true} }/>
       ))}
       </ChartSeries>
        </Chart>
    )
  }


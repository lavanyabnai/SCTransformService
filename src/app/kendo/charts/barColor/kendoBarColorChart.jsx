/* eslint-disable react/prop-types */
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,

} from "@progress/kendo-react-charts";
import "hammerjs";


export function BarColorChartContainer({ seriesData }) {
  return (

    <Chart style={{ height: 250 }}>
      <ChartSeries>
        <ChartSeriesItem
          data={seriesData}
          type="bar"
          field="data"
          categoryField="categories"
        />
      </ChartSeries>
    </Chart>
  );
}


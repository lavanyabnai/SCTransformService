
import WrapperWaterfallChart from '~/kendo/charts/waterfall/WrapperWaterfallChart'
import WrapperMultiStackColChart from '~/kendo/charts/stackcol/WrapperStackColChart'

import {lateCategories_m,
  lateSeries_m,
  reasonSeries_m} from '~/kendo/rawData/analysis/ontimeAnalysis'


export const kpiService_m = [
  {
    Name:'Late Deliveries by Month',
    container: <WrapperMultiStackColChart category={lateCategories_m} series={lateSeries_m} />,
  },
  {
    Name: 'Reason for Late Deliveries',
    container: <WrapperWaterfallChart data={reasonSeries_m} />, 
  }
]

export const kpiService_q = [
  {
    Name:'Late Deliveries by Month',
    container: <WrapperMultiStackColChart category={lateCategories_m} series={lateSeries_m} />,
  },
  {
    Name: 'Reason for Late Deliveries',
    container: <WrapperWaterfallChart data={reasonSeries_m} />, 
  }
]

export const kpiService_y = [
  {
    Name:'Late Deliveries by Month',
    container: <WrapperMultiStackColChart category={lateCategories_m} series={lateSeries_m} />,
  },
  {
    Name: 'Reason for Late Deliveries',
    container: <WrapperWaterfallChart data={reasonSeries_m} />, 
  }
]

export const kpiCost_m = [
  {
    Name:'Late Deliveries by Month',
    container: <WrapperMultiStackColChart category={lateCategories_m} series={lateSeries_m} />,
  },
  {
    Name: 'Reason for Late Deliveries',
    container: <WrapperWaterfallChart data={reasonSeries_m} />, 
  }
]

export const kpiCost_q = [
  {
    Name:'Late Deliveries by Month',
    container: <WrapperMultiStackColChart category={lateCategories_m} series={lateSeries_m} />,
  },
  {
    Name: 'Reason for Late Deliveries',
    container: <WrapperWaterfallChart data={reasonSeries_m} />, 
  }
]

export const kpiCost_y = [
  {
    Name:'Late Deliveries by Month',
    container: <WrapperMultiStackColChart category={lateCategories_m} series={lateSeries_m} />,
  },
  {
    Name: 'Reason for Late Deliveries',
    container: <WrapperWaterfallChart data={reasonSeries_m} />, 
  }
]

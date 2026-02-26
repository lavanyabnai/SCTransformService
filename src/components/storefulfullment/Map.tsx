import React from 'react'
import { AgChartsReact } from 'ag-charts-react'

import { data } from '@/app/data/agMap/usmap/data'
import { topology, backgroundtopology, capitals } from '@/app/data/agMap/usmap/topology'
import 'ag-charts-enterprise' // Import AgCharts Enterprise if needed
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const options = {

  data,
  topology,
  series: [
    {
      type: 'map-shape-background',
      fillOpacity: 0,
      stroke: '#66879933',
      fill: '#668799',
      topology: backgroundtopology,
    },
    {
      type: 'map-shape',
      idKey: 'name',
      colorKey: 'sales',
      fill: '#668799',
      fillOpacity: 0.5,
      highlightStyle: {
        item: {
          fillOpacity: 1,
        },
      },
      colorRange: ['#bae6fd', '#0ea5e9', '#60a5fa'],
    },


    {
      type: 'map-marker',
      topology: capitals,
      data: capitals.features.map((t) => {
        return { name: t.properties.name }
      }),
      title: 'CIRCLE MARKERS',
      idKey: 'name',
      size: 6,
      fill: '#546E7A',
      fillOpacity: 1,
      strokeWidth: 0,
      tooltip: {
        renderer: (params: any) => ({
          title: params.title,
          content: `Name: ${params.datum.name}`,
        }),
      },
    },
    {
      type: 'map-marker',
      legendItemName: 'Markers',
      title: 'DC Locations',
      
      data: [
        { name: 'New York', long: -73.9249, lat: 40.6943 },
        { name: 'Los Angeles', long: -118.4068, lat: 34.1141 },
        { name: 'Chicago', long: -87.6866, lat: 41.8375 },
        { long: -80.2101, lat: 25.784, name: 'Miami' },
        { long: -95.3885, lat: 29.786, name: 'Houston' },
        { long: -96.7667, lat: 32.7935, name: 'Dallas' },
        { long: -122.3244, lat: 47.6211, name: 'Seattle' },
        { name: 'Wyoming', long: -109.080842, lat: 45.002073 },
      ],
      latitudeKey: 'lat',
      longitudeKey: 'long',

      labelName: 'Name',
      label: { enabled: false },
      shape: 'pin',
      //     type MarkerShape =
      //   'circle'
      // | 'cross'
      // | 'diamond'
      // | 'heart'
      // | 'plus'
      // | 'pin'
      // | 'square'
      // | 'star'
      // | 'triangle'
      // | any;
      size: 20,
      fill: '#EF5450',
      fillOpacity: 1,
      strokeWidth: 0,
      tooltip: {
        renderer: (
          params: any
        ) => `<div class="ag-chart-tooltip-title" style="background-color: #fb923c">
      Service
    </div>
    <div class="ag-chart-tooltip-content">
        <a ">${params.datum.name} <br> Fill Rate <br> Back Order </a>
    </div>`,

        interaction: {
          enabled: true,
        },
      },
    },
  ],
}

export default function Map() {
  return (
      <>
      <Card>
          <CardHeader>
          <CardTitle>Map</CardTitle>
      </CardHeader>
      <CardContent>
              <AgChartsReact options={options as AgChartOptions} />
          </CardContent>
          </Card>
          </>
  )
}



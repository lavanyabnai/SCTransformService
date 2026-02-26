"use client"

import React, {
  useCallback,
  useState,
  useMemo,
  useRef,
} from 'react'
import { AgGridReact } from 'ag-grid-react' // AG Grid Component
import { CellClassParams, GridReadyEvent, ValueGetterParams, ValueFormatterParams } from 'ag-grid-enterprise'
import { SampleData } from './inventoryProjectionData'


const cellStyle = (params: CellClassParams) => {
  // console.log(params)
  const color = numberToColor(params)
  return {
    backgroundColor: color,
  }
}

const numberToColor = (params: CellClassParams) => {
  console.log(`params`, params)

  if (params.value > 90) {
    return '#aaffaa'
  }
  if (params.value > 70) {
    return '#fef9c3'
  }
  return '#ffaaaa'
}





export default function InventoryProjectionTable() {
  const gridRef = useRef<AgGridReact>(null)
  const rowData = SampleData
  const [, setGridApi] = useState<any>(null)

  const getRowId = useCallback((params: { data: { id: string } }) => {
    return params.data.id
  }, [])

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      editable: true,
      flex: 1,
      minWidth: 100,
      floatingFilter: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
    }),
    []
  )

  const columnDefs = [
    {
      headerName: 'Product Location Storage Unit',
      marryChildren: true,
      children: [
        {
          field: 'SKU',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
        {
          field: 'Location',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
        {
          field: 'FillRateImpact',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
        {
          field: 'RevenueImpact',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
      ],
    },
    {
      headerName: 'InventoryProjections',
      marryChildren: true,

      children: [
        {
          headerName: 'Total Week',
          valueGetter: (p: ValueGetterParams) => {
            return Math.floor(
              p.data['Week 1'] +
              p.data['Week 2'] +
              p.data['Week 3'] +
              p.data['Week 4'] +
              p.data['Week 5'] +
              p.data['Week 6'] +
              p.data['Week 7'] +
              p.data['Week 8'] +
              p.data['Week 9'] +
              p.data['Week 10'] +
              p.data['Week 11'] +
              p.data['Week 12']
            ).toLocaleString()
          },

          type: 'numericColumn',
          columnGroupShow: 'open',
        },
        {
          field: 'Week 1',
          filter: 'agNumberColumnFilter',
          cellClass: 'rag-red',
          // cellRenderer: ragRenderer,
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 2',
          filter: 'agNumberColumnFilter',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'closed',
        },

        {
          field: 'Week 3',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 4',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 5',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 6',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 7',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 8',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 9',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 10',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 11',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 12',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p: ValueFormatterParams) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
      ],
    },
  ]

  const onGridReady = useCallback((event: GridReadyEvent) => {
    setGridApi(event.api)
    loadData()
  }, [])

  const loadData = useCallback(() => {
    // fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
    // fetcher.load('/rInventoryProjection') // Adjust endpoint as necessary
  }, [])

  

  return (
    <div className="ag-theme-quartz h-[750px] w-full">
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData as any}
        onGridReady={onGridReady as any}
        domLayout="autoHeight"
        getRowId={getRowId}
        enableRangeSelection={true}
        groupDisplayType="groupRows"
        enableCharts={true}
        sideBar={true}
        groupDefaultExpanded={3}
        suppressBrowserResizeObserver={true}
      />
    </div>
  )
}
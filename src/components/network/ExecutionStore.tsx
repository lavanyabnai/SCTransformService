"use client"

import React, {
  useCallback,

  useMemo,

} from 'react'
import { AgGridReact } from 'ag-grid-react' // AG Grid Component
import {generatedData} from './rExecutionStore'

const ragCellClassRules = {
    'rag-green-outer': (params: any) => params.value === 2008,
    'rag-blue-outer': (params: any) => params.value === 2004,
    'rag-red-outer': (params: any) => params.value === 2000,
}



const ragRenderer = (params: any) => {
    return <span className="rag-element">{params.value}</span>
}

// const numberParser = (params: ValueParserParams) => {
//   const newValue = params.newValue
//   console.log(`newValue`, newValue)
//   let valueAsNumber
//   if (newValue === null || newValue === undefined || newValue === '') {
//     valueAsNumber = null
//   } else {
//     valueAsNumber = parseFloat(params.newValue)
//   }
//   return valueAsNumber
// }

export default function ExecutionStore() {
 
  const rowData= generatedData


  const getRowId = useCallback((params: any) => {
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
          field: 'storeName',
          colId: 'Store Name',
          filter: 'agTextColumnFilter',
          flex: 2,
          rowGroup: true,
          hide: true,
        },

        {
          field: 'storeType',
          colId: 'Store Type',
          filter: 'agTextColumnFilter',
          flex: 2,
          rowGroup: true,
          hide: true,
        },
        {
          field: 'location',
          headerName: 'Location',
          filter: 'agTextColumnFilter',
          flex: 2,

          rowGroup: true,
          hide: true,
          // pinned: 'left',
          // lockPinned: true,

          // pivot: true,
        },
        {
          field: 'measure',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
      ],
    },
    {
      headerName: 'Daily Value',
      marryChildren: true,

      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p: any) => {
            return Math.floor(
              p.data['Day_1'] +
                p.data['Day_2'] +
                p.data['Day_3'] +
                p.data['Day_4'] +
                p.data['Day_5'] +
                p.data['Day_6'] +
                p.data['Day_7']
            ).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'open',
        },
        {
          field: 'Day_1',
          headerName: 'Day 1',
          filter: 'agNumberColumnFilter',
          cellClass: 'rag-blue',
          valueFormatter: (p: any) => {
            return Math.floor(p.value).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'closed',
        },
        {
          field: 'Day_2',
          headerName: 'Day 2',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p: any) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          cellClassRules: ragCellClassRules,
          cellRenderer: ragRenderer,
        },
        {
          field: 'Day_3',
          headerName: 'Day 3',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p: any) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Day_4',
          headerName: 'Day 4',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p: any) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Day_5',
          headerName: 'Day 5',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p: any) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Day_6',
          headerName: 'Day 6',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p: any) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Day_7',
          headerName: 'Day 7',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p: any) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
      ],
    },
  ]

 
  return (
    <div className="ag-theme-quartz" style={{ height: '100%', width: '100%' }}>

        <AgGridReact
     
          columnDefs={columnDefs as any}
          defaultColDef={defaultColDef}
          rowData={rowData}
         
          domLayout="autoHeight"
          getRowId={getRowId}
          enableRangeSelection={true}
          groupDisplayType="groupRows"
          enableCharts={true}
          sideBar={true}
          groupDefaultExpanded={3}
          suppressBrowserResizeObserver={true}
          // autoGroupColumnDef={autoGroupColumnDef}
          // groupHideOpenParents={true}
          // pagination={pagination}
          // paginationPageSize={paginationPageSize}
          // paginationPageSizeSelector={paginationPageSizeSelector}
          // rowClassRules={rowClassRules}
          // rowSelection="multiple"
          // rowHeight={50}
          // rowBuffer={0}
          // rowModelType="clientSide"
          // enableRangeSelection={true}
          // isRowSelectable={isRowSelectable}
          // pagination={true}
          // paginationPageSize={10}
          // suppressPaginationPanel={false}
          // groupDisplayType="groupRows"
          // pivotMode={true}
          // onCellValueChanged={onCellValueChanged}
          // rowGroupPanelShow="always"
        />

    </div>
  )
}

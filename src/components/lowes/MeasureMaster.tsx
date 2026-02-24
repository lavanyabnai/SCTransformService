"use client"
import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component

import "ag-grid-enterprise"; // Required for AG Grid Enterprise features

export default function MeasureMaster() {
  //   const demand = useFetcher();
  // const fetcher = useFetcher();
  const [rowData] = useState([]);
  const [] = useState(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), [])
  
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])

  const defaultColDef = {
    sortable: true,
    filter: true,
    // floatingFilter: true,
    resizable: true,
    editable: true,
    flex: 2,
    minWidth: 100,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    initialWidth: 200,
    // enableRowGroup: true,
    // headerCheckboxSelection: true,
  }

  const columnDefs = [
    // {
    //   field: 'measure_id',
    //   headerName: 'Measure & Format',
    //   valueGetter: p => p.data.measure_type + ' ' + p.data.number_format,
    // },
    {
      field: 'measure_id',
      headerName: 'Measure ID',
      filter: 'agNumberColumnFilter',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      pinned:true,
      // rowGroup: true,
    },
    {
      field: 'measure_code',
      filter: 'agTextColumnFilter',
      // rowGroup: true,
    },
    {
      field: 'measure_description',
      filter: 'agTextColumnFilter',
      // rowGroup: true,
    },
    {
      field: 'measure_type',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'number_format',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'column_name',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'rw_flag',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'computation_type',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'expression',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'aggregation',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'disaggregation',
      filter: 'agTextColumnFilter',
    },
  ]

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={'ag-theme-quartz'}>
        <form method="post">
          <AgGridReact
            columnDefs={columnDefs as any}
            defaultColDef={defaultColDef}
            rowData={rowData}
            // onGridReady={onGridReady}
            pagination={true}
            paginationPageSize={20}
            suppressPaginationPanel={false}
            domLayout="autoHeight"
            sideBar={true}
            enableCharts={true}
            // onCellValueChanged={onCellValueChanged}
            // rowGroupPanelShow="always"
            rowSelection="multiple"
            enableRangeSelection={true}
            // floatingFilter={true}
          />
        </form>
      </div>
    </div>
  )
}

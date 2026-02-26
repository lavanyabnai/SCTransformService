import React, {
  useCallback,
  useState,
  useMemo,
} from 'react'
import { AgGridReact } from 'ag-grid-react' // AG Grid Component

import {generatedCarrierData} from '@/components/network/rExecutionCarrierData'






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

export default function ExecutionCarrier() {
  const rowData = generatedCarrierData
  const [] = useState(null)

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


  // const onGridReady = useCallback((params) => {
  //   setGridApi(params.api)
  //   loadData()
  // }, [])

  // // Function to load data
  // const loadData = useCallback(() => {
  //   // fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
  //   fetcher.load('/rExecutionCarrier') // Adjust endpoint as necessary
  // }, [fetcher])

  // // Effect to update row data when fetcher data changes
  // useEffect(() => {
  //   if (fetcher.data) {
  //     setRowData(fetcher.data.data)
  //   }
  // }, [fetcher.data])

  return (
    <div className="ag-theme-quartz" style={{ height: '100%', width: '100%' }}>
    
        <AgGridReact
          // ref={gridRef}
          // columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          // onGridReady={onGridReady}
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

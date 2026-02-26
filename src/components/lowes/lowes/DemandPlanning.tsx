"use client"
import {
  useCallback,
  useMemo,
  useRef,
} from 'react'
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react' // AG Grid Component

import { CellClassParams, CellClassRules, ValueParserParams } from 'ag-grid-enterprise'
import { data } from "@/components/lowes/rDemandPlanning"

const ragCellClassRules: CellClassRules = {
  'rag-green-outer': (params) => params.value === 2008,
  'rag-blue-outer': (params) => params.value === 2004,
  'rag-red-outer': (params) => params.value === 2000,
}


          // const cellClass = (params: CellClassParams) => {
          //   return params.value === 'Swimming' ? 'rag-green' : 'rag-blue'
          // }

// const numberToColor = (params: number) => {
//   if (typeof params === 'object' && typeof params.data === 'object' && params.data.measures === 'Target Plan (Revenue)') {
//     return '#fff0'
//   }
//   if (typeof params === 'object' && typeof params.data === 'object' && params.data.measures === 'Financial Forecast (Revenue)') {
//     return '#fff'
//   }
//   if (typeof params === 'object' && typeof params.data === 'object' && params.data.measures === 'POS (Revenue)') {
//     if ((params as any).value < 100) {
//       return '#ffaaaa'
//     }
//     if ((params as any).value < 750) {
//       return '#aaaaff'
//     }
//     return '#aaffaa'
//   }
//   if (typeof params === 'object' && typeof params.data === 'object' && params.data.measures === 'Achievement Rate') {
//     if (params.value < 75) {
//       return '#ffaaaa'
//     }
//     if (params.value < 90) {
//       return '#fef9c3'
//     }
//     return '#aaffaa'
//   }
//   if (typeof params === 'object' && typeof params.data === 'object' && params.data.measures === 'Weighted Sales Price') {
//     if (params.value < 100) {
//       return '#ffaaaa'
//     }
//     if (params.value < 750) {
//       return '#aaaaff'
//     }
//     return '#aaffaa'
//   }
// }


const ragRenderer = (params: CustomCellRendererProps) => {
  return <span className="rag-element">{params.value}</span>
}

const numberParser = (params: ValueParserParams) => {
  const newValue = params.newValue
  // console.log(`newValue`, newValue)
  let valueAsNumber
  if (newValue === null || newValue === undefined || newValue === '') {
    valueAsNumber = null
  } else {
    valueAsNumber = parseFloat(params.newValue)
  }
  return valueAsNumber
}

export default function LevelMasterBack() {
  const rowData = data;
  const gridRef = useRef<AgGridReact>(null);

  const numberToColor = (params: {data: any; value: number}) => {
    // console.log(`params`, params)
    if (params.data.measures === 'Target Plan (Revenue)' || params.data.measures === 'Financial Forecast (Revenue)' || params.data.measures === 'POS (Revenue)' || params.data.measures === 'Weighted Sales Price') {
      return ''
    }
    if (params.data.measure === 'Achievement Rate') {
      if (params.value < 75) {
        return '#ffaaaa'
      }
      if (params.value < 90) {
        return '#fef9c3'
      }
      return '#aaffaa'
    }
   
  }


  const cellStyle = (params: CellClassParams) => {
    const color = numberToColor(params)
    return {
      backgroundColor: color,
    }
  }
  
  
  // const isRowSelectable = useCallback((node) => node.data.value > count, [count])
  const getRowId = useCallback((params: any) => {
    // console.log(`paramsgetRowId`, params)
    return params.data.id
  }, [])

  // const autoGroupColumnDef = useMemo<ColDef>(() => {
  //   return {
  //     minWidth: 200,
  //     filterValueGetter: (params: ValueGetterParams) => {
  //       if (params.node) {
  //         const colGettingGrouped = params.colDef.showRowGroup + ''
  //         return params.api.getValue(colGettingGrouped, params.node)
  //       }
  //     },
  //   }
  // }, [])

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      // filter: true,
      // resizable: true,
      editable: true,
      flex: 1,
      minWidth: 100,
      // enableRowGroup: true,
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
          field: 'customer',
          colId: 'customer',
          filter: 'agTextColumnFilter',

          // checkboxSelection: true,
          // headerCheckboxSelection: true,
          // showRowGroup: 'customer',
          flex: 2,
          // pinned: 'left',
          // lockPinned: true,
          // cellStyle: { fontWeight: 'bold' },

          rowGroup: true,
          hide: true,
          // pivot: true,
        },

        {
          field: 'site',
          colId: 'site',
          filter: 'agTextColumnFilter',
          flex: 2,
          rowGroup: true,
          hide: true,
          // pinned: 'left',
          // lockPinned: true,

          // pivot: true,
        },
        {
          field: 'item',
          headerName: 'Item',
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

          // pinned: 'left',
          // lockPinned: true,

          // pivot: true,
        },
      ],
    },
    {
      headerName: '2024Q1',
      marryChildren: true,

      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p: any) => {
            // console.log(`p`, p)
            return Math.floor(
              p.data['2024-Jan'] + p.data['2024-Feb'] + p.data['2024-Mar']
            ).toLocaleString()
          },

          type: 'numericColumn',
          columnGroupShow: 'open',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-Jan',
          headerName: 'Jan',
          filter: 'agNumberColumnFilter',
          cellClass: 'rag-blue',
          valueFormatter: (p: { value: number }) => {
            // console.log(`p`, p)
            return Math.floor(p.value).toLocaleString()
          },

          // cellClassRules: {
          //   // apply green to electric cars
          //   'rag-green': (params) =>
          //     params.data.customer === 'Best Buy' &&
          //     params.data.measures === 'Target Plan (Revenue)',
          // },
          type: 'numericColumn',
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-Feb',
          headerName: 'Feb',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p: { value: number }) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          cellClassRules: ragCellClassRules,
          cellRenderer: ragRenderer,
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-Mar',
          headerName: 'Mar',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p: { value: number }) => {
            // console.log(`p`, p)
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
      ],
    },
    {
      headerName: '2024Q2',
      marryChildren: true,
      flex: 2,
      showRowGroup: '2024',
      cellRenderer: 'agGroupCellRenderer',

      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p: { data: { [x: string]: any } }) => {
            // console.log(`p`, p)
            return (
              '£' +
              Math.floor(
                p.data['2024-Apr'] + p.data['2024-May'] + p.data['2024-Jun']
              ).toLocaleString()
            )
          },
          cellStyle: cellStyle,
          type: 'numericColumn',
          columnGroupShow: 'open',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-Apr',
          headerName: 'Apr',
          filter: 'agNumberColumnFilter',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p: { value: number }) => {
            return Math.floor(p.value).toLocaleString()
          },
          // cellClassRules: {
          //   // apply green to electric cars
          //   'rag-green': (params) =>
          //     params.data.customer === 'Best Buy' &&
          //     params.data.measures === 'Target Plan (Revenue)',
          // },
          type: 'numericColumn',
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-May',
          headerName: 'May',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p: { value: number }) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-Jun',
          headerName: 'Jun',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p: { value: number }) => {
            // console.log(`p`, p)
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
      ],
    },
    {
      headerName: '2024Q3',
      marryChildren: true,
      flex: 2,
      showRowGroup: '2024',
      cellRenderer: 'agGroupCellRenderer',

      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p: { data: { [x: string]: any } }) => {
            // console.log(`p`, p)
            return (
              '£' +
              Math.floor(
                p.data['2024-Jul'] + p.data['2024-Aug'] + p.data['2024-Sep']
              ).toLocaleString()
            )
          },

          type: 'numericColumn',
          columnGroupShow: 'open',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-Jul',
          headerName: 'Jul',
          filter: 'agNumberColumnFilter',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p: { value: number }) => {
            // console.log(`p`, p)
            return Math.floor(p.value).toLocaleString()
          },
          // cellClassRules: {
          //   // apply green to electric cars
          //   'rag-green': (params) =>
          //     params.data.customer === 'Best Buy' &&
          //     params.data.measures === 'Target Plan (Revenue)',
          // },
          type: 'numericColumn',
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-Aug',
          headerName: 'Aug',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p: { value: number }) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2024-Sep',
          headerName: 'Sep',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p: { value: number }) => {
            // console.log(`p`, p)
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
      ],
    },
  ]

  // const onGridReady = useCallback((params) => {
  //   // console.log(`paramsOn`, params)
  //   setGridApi(params.api)
  //   loadData()
  // }, [])

  // Function to load data
  // const loadData = useCallback(() => {
  //   // fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
  //   fetcher.load('/rDemandPlanning') // Adjust endpoint as necessary
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
          ref={gridRef}
          columnDefs={columnDefs}
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

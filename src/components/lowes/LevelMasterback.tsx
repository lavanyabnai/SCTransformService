import React, {
  useCallback,
  useState,
  useMemo,
  useRef,
} from 'react'
import { AgGridReact } from 'ag-grid-react' // AG Grid Component
// import { Form, useFetcher } from '@remix-run/react'
// Optional Theme applied to the grid
import 'ag-grid-enterprise' // Required for AG Grid Enterprise features
import '~/styles/aggrid.css'




// const rowClassRules = {
//   // apply red to Ford cars
//   'rag-red': (params) => params.data.customer === 'San Jose',
// }

export default function LevelMasterBack() {
  //   const demand = useFetcher();
  const gridRef = useRef<AgGridReact>(null)
  // const fetcher = useFetcher()
  const [rowData] = useState([])
  const [] = useState(null)
  const [] = useState(0)

  const pagination = true
  const paginationPageSize = 10
  const paginationPageSizeSelector = [10, 50, 100]
  // const isRowSelectable = useCallback((node) => node.data.value > count, [count])
  const getRowId = useCallback((params: any) => {
    // console.log(`paramsgetRowId`, params)
    return params.data.id
  }, [])



  
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      // filter: true,
      // resizable: true,
      editable: true,
      flex: 1,
      minWidth: 100,
      // enableRowGroup: true,
      // floatingFilter: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
    }),
    []
  )

  const columnDefs = [
    // {
    //   field: 'company',
    //   // Add component to column via cellRenderer
    //   cellRenderer: memo(CompanyLogoRenderer),
    // },
    // {
    //   headerName: 'successful',
    //   width: 120,De
    //   cellRenderer: memo(MissionResultRenderer),
    //   filter: 'agBooleanColumnFilter',
    // },
    // { field: 'button', cellRenderer: memo(CustomButtonComponent) },

    {
      headerName: 'Product Location Storage Unit',
      marryChildren: true,

      children: [
        {
          field: 'customer',
          colId: 'customer',
          filter: 'agNumberColumnFilter',
          checkboxSelection: true,
          headerCheckboxSelection: true,
          showRowGroup: 'customer',
          flex: 1,
          // pinned: 'left',
          // lockPinned: true,
          // cellStyle: { fontWeight: 'bold' },
          cellClassRules: {
            // apply green to electric cars
            'rag-green': (params: any) => params.value === 'Best Buy',
          },
          rowGroup: true,
          hide: false,
          // pivot: true,
        },

        {
          field: 'site',
          colId: 'site',
          filter: 'agTextColumnFilter',
          flex: 1,
          rowGroup: true,
          hide: false,
          // pinned: 'left',
          // lockPinned: true,

          // pivot: true,
        },

        {
          field: 'measures',
          colId: 'measures',
          filter: 'agTextColumnFilter',
          flex: 1,
          // pinned: 'left',
          // lockPinned: true,

          // pivot: true,
        },
      ],
    },
    {
      headerName: '2008',
      marryChildren: true,
      flex: 2,
      showRowGroup: '2008',
      cellRenderer: 'agGroupCellRenderer',

      children: [
        {
          headerName: 'TotalnEW',
          colId: 'total',
          valueGetter: (p: any) => {
            // console.log(`p`, p)
            return (
              '£' +
              Math.floor(
                p.data['2008Q1'] + p.data['2008Q2'] + p.data['2008Q3']
              ).toLocaleString()
            )
          },

          type: 'numericColumn',
          columnGroupShow: 'open',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2008Q1',
          colId: '2008Q1',
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
          valueFormatter: (p: any) => {
            // console.log(`p`, p)
            return '£' + Math.floor(p.value).toLocaleString()
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
          field: '2008Q2',
          colId: '2008Q2',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          aggFunc: 'sum',

          valueFormatter: (p: any) => {
            console.log(`p`, p)
            return '£' + Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2008Q3',
          colId: '2008Q3',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueFormatter: (p: any) => {
            // console.log(`p`, p)
            return '£' + Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
      ],
    },
  ]

  // const onCellValueChanged = useCallback(
  //   (event) => {
  //     if (!event.newValue || event.newValue === event.oldValue) {
  //       return; // Do nothing if the value hasn't changed
  //     }
  //     console.log("Cell value changed:", event);

  //     const formData = new FormData();
  //     formData.append("customer", event.data.customer);
  //     formData.append("sku", event.data.sku);
  //     formData.append("site", event.data.site);
  //     formData.append("bucket", event.data.bucket);
  //     formData.append("field", event.colDef.field);
  //     formData.append("newValue", event.newValue);

  //     // Use fetcher to submit the changes to your Remix action
  //     fetcher.submit(formData, {
  //       method: "post",
  //       action: "/demandPage",
  //       // encType: "application/json",
  //     });
  //   },
  //   [fetcher]
  // ); // Include `fetcher` in the dependency array

  // Load data when the grid is ready
  // const onGridReady = useCallback((params: any) => {
  //   console.log(`paramsOn`, params)
  //   setGridApi(params.api)
  //   loadData()
  // }, [])

  // Function to load data
  // const loadData = useCallback(() => {
  //   // fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
  //   fetcher.load('/rLevelMasterbck') // Adjust endpoint as necessary
  // }, [fetcher])

  // Effect to update row data when fetcher data changes
  // useEffect(() => {
  //   if (fetcher.data) {
  //     console.log(`fetcher ${fetcher.data.data}`)
  //     setRowData(fetcher.data.data)
  //   }
  // }, [fetcher.data])

  return (
    <div className="ag-theme-quartz" style={{ height: '100%', width: '100%' }}>
      <form>
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          // onGridReady={onGridReady }
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          // rowClassRules={rowClassRules}
          rowSelection="multiple"
          rowHeight={50}
          rowBuffer={0}
          rowModelType="clientSide"
          enableRangeSelection={true}
          // isRowSelectable={isRowSelectable}
          // pagination={true}
          // paginationPageSize={10}
          suppressPaginationPanel={false}
          domLayout="autoHeight"
          getRowId={getRowId}
          groupDisplayType="groupRows"
          enableCharts={true}
          sideBar={true}
          // pivotMode={true}
          // onCellValueChanged={onCellValueChanged}
          // rowGroupPanelShow="always"
        />
      </form>
    </div>
  )
}

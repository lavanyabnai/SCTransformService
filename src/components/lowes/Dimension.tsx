import React, {  useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
// import { useFetcher } from "@remix-run/react";

export default function GridReact() {
  const [rowData] = useState([]);
  const [] = useState(null);
  // const fetcher = useFetcher();

  const defaultColDef = {
    sortable: true,
    resizable: true,
    editable: true,
    flex: 1,
    minWidth: 100,
    enableRowGroup: true,
  };

  const columnDefs = [
    {
      field: "customer",
      filter: "agTextColumnFilter",
    },
    {
      field: "site",
      filter: "agTextColumnFilter",
    },
    {
      field: "sku",
      filter: "agNumberColumnFilter",
    },
    {
      field: "bucket",
      filter: "agNumberColumnFilter",
    },
    {
      field: "order_id",
      filter: "agTextColumnFilter",
    },
    {
      field: "booking_id",
      filter: "agTextColumnFilter",
    },
    {
      field: "selling_price",
      filter: "agNumberColumnFilter",
      valueFormatter: (params: any) =>
        typeof params.value === "number" ? `$${params.value.toFixed(2)}` : null,
      valueParser: (params: any) => parseFloat(params.newValue) || null,
    },
  ];

  // const onCellValueChanged = useCallback(
  //   (event: any) => {
  //     if (!event.newValue || event.newValue === event.oldValue) {
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("customer", event.data.customer);
  //     formData.append("sku", event.data.sku);
  //     formData.append("site", event.data.site);
  //     formData.append("bucket", event.data.bucket);
  //     formData.append("field", event.colDef.field);
  //     formData.append("newValue", event.newValue);
  //   },
  //   [fetcher]
  // );
  //     fetcher.submit(formData, {
  //       method: "post",
  //       action: "/demandPage",
  //     });
  //   },
  //   [fetcher]
  // );

  // const onGridReady = useCallback((params: any) => {
  //   setGridApi(params.api);
  //   loadData();
  // }, []);

  // const loadData = useCallback(() => {
  //   fetcher.load("/demandPage?page=1&limit=100");
  // }, [fetcher]);

  // useEffect(() => {
  //   if (fetcher.data) {
  //     setRowData(fetcher.data.data);
  //   }
  // }, [fetcher.data]);

  return (
    <div className="ag-theme-quartz" style={{ height: "100%", width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs as any}
        defaultColDef={defaultColDef}
        rowData={rowData}
        // onGridReady={onGridReady}
        pagination={true}
        paginationPageSize={12}
        suppressPaginationPanel={false}
        domLayout="autoHeight"
        // onCellValueChanged={onCellValueChanged}
        rowGroupPanelShow="always"
      />
    </div>
  );
}
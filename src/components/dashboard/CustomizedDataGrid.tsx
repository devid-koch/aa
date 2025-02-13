/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomizedDataGrid({
  Data,
  Columns,
  totalRows,
  loading
}) {

  const handlePageChange = (item) => {
    console.log("pageChange", item);
  }

  const handleSizeChange = (item) => {
    console.log(item);
  }

  return (
    <DataGrid
      autoHeight
      loading={ loading }
      rows={ Data }
      columns={ Columns }
      getRowId={ (row) => row.id }
      getRowClassName={ (params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      initialState={ {
        pagination: { paginationModel: { pageSize: 10 } },
      } }
      disableColumnResize
      pageSizeOptions={ [10, 20, 50] }
      disableRowSelectionOnClick
      paginationMode="server"
      rowCount={ totalRows }
      onPageSizeChange={ (newPage) => handlePageChange(newPage) }
      onPageChange={ (newPage) => handlePageChange(newPage) }
      density="compact"
      slotProps={ {
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: "outlined",
              size: "small",
            },
            columnInputProps: {
              variant: "outlined",
              size: "small",
              sx: { mt: "auto" },
            },
            operatorInputProps: {
              variant: "outlined",
              size: "small",
              sx: { mt: "auto" },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: "outlined",
                size: "small",
              },
            },
          },
        },
      } }
    />
  );
}

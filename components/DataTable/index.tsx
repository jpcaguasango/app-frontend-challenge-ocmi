"use client";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IProps {
  rows: Array<any>;
  columns: GridColDef[];
  updateRows?: (x: any) => void;
}

export default function DataTable({
  rows,
  columns,
  updateRows = () => {},
}: IProps) {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        processRowUpdate={(newRows) => {
          () => updateRows(newRows);
        }}
      />
    </div>
  );
}

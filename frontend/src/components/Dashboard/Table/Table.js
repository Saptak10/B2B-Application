import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import { getData } from "../../../services/RecordAPI";
import { columns } from "./columns"

  export default function Table({ selectedRows, selectRow }) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await getData());
  }, []);

  const rows = data;

  return (
    <div style={{ height: 650, width: "100%", position: "sticky" }}>
      <Box
        sx={{
          height: 650,
          width: 1,
          "& .super-app-theme--header": {
            backgroundColor: "#283d4a",
            color: "white",
          },
          backgroundColor: "#2D4250",
        }}
      >
        <DataGrid
          getRowId={(row) => row.sl_no}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          selectionModel={selectedRows.map((e) => e.sl_no)}
          onSelectionModelChange={(ids) => {
            selectRow(rows.filter((e) => ids.indexOf(e.sl_no) !== -1));
          }}
          sx={{
            "& .MuiToolbar-root": {
              color: "white",
            },
            border: "none",
            backgroundColor: "#293C4A",
            color: "white",
            "& .MuiDataGrid-columnSeparator--sideRight": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "white",

              textOverflow: "clip",
              whiteSpace: "break-spaces",
              lineHeight: 1,
            },
          }}
        />
      </Box>
    </div>
  );
}
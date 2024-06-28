"use client";
import { getState } from "@/app/helpers/states";
import { GridColDef } from "@mui/x-data-grid";

export const getEmployeesDataColumns = (): GridColDef[] => [
  { headerName: "ID", field: "id", sortable: true },
  { headerName: "Documento", field: "document", sortable: true, width: 120 },
  { headerName: "Nombre", field: "name", sortable: true, width: 150 },
  {
    headerName: "Salario",
    field: "paymentAmount",
    sortable: true,
    width: 130,
  },
  {
    headerName: "Tipo de Pago",
    field: "paymentType",
    width: 150,
    valueGetter: (value, row) => getState(row.paymentType),
  },
  {
    headerName: "Fecha de Creación",
    field: "created_at",
    sortable: true,
    width: 130,
  },
  {
    headerName: "Fecha Actualización",
    field: "updated_at",
    sortable: true,
    width: 130,
  },
];

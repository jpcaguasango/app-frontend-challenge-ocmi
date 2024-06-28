"use client";
import { GridColDef } from "@mui/x-data-grid";
import { getState } from "@/app/helpers/states";

export const getTimesheetsDataColumns = (): GridColDef[] => [
  { headerName: "ID", field: "id", sortable: true },
  { headerName: "Nombre", field: "name", sortable: true, width: 150 },
  {
    headerName: "Fecha de Cheque",
    field: "checkDate",
    sortable: true,
    width: 130,
  },
  {
    headerName: "Inicio Periodo Pago",
    field: "startPaymentPeriod",
    width: 130,
  },
  { headerName: "Fin Periodo Pago", field: "endPaymentPeriod", width: 130 },
  {
    headerName: "Salario Bruto",
    field: "grossWages",
    sortable: true,
    width: 130,
  },
  {
    headerName: "Estado",
    field: "state",
    width: 150,
    valueGetter: (value, row) => getState(row.state),
  },
];

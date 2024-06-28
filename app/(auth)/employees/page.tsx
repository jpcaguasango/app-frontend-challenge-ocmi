"use client";
import { useGetAllEmployees } from "@/services/EmployeeService";
import { Typography } from "@mui/material";
import { getEmployeesDataColumns } from "./handle";
import DataTable from "@/components/DataTable";

const EmployeesPage = () => {
  const { data = [] } = useGetAllEmployees();
  const columns = getEmployeesDataColumns();

  return (
    <>
      <div className="mb-8">
        <Typography variant="h3" color="initial">
          Empleados
        </Typography>
      </div>

      <DataTable rows={data} columns={columns} />
    </>
  );
};

export default EmployeesPage;

"use client";
import { useGetAllTimesheets } from "@/services/TimesheetService";
import { getTimesheetsDataColumns } from "./handle";
import DataTable from "@/components/DataTable";
import Typography from "@mui/material/Typography";

const TimesheetsPage = () => {
  const { data = [] } = useGetAllTimesheets();
  const columns = getTimesheetsDataColumns();

  return (
    <>
      <div className="mb-8">
        <Typography variant="h3" color="initial">
          Timesheets
        </Typography>
      </div>

      <DataTable rows={data} columns={columns} />
    </>
  );
};

export default TimesheetsPage;

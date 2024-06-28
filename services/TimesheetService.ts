"use client";
import { QUERY_IDENTIFIERS } from "@/settings/identifiers";
import { useQuery } from "@tanstack/react-query";
import { useAuthAxios } from "@/hooks/useAuthAxios";

const { getTimesheets } = QUERY_IDENTIFIERS;

export const useGetAllTimesheets = () => {
  const { AxiosAuth } = useAuthAxios();

  return useQuery({
    queryKey: [getTimesheets],
    queryFn: async () => {
      try {
        const { data } = await AxiosAuth.get("/timesheets");
        return data.data;
      } catch (error: any) {
        console.log(error.response.data);
      }
    },
  });
};

"use client";
import { QUERY_IDENTIFIERS } from "@/settings/identifiers";
import { useQuery } from "@tanstack/react-query";
import { useAuthAxios } from "@/hooks/useAuthAxios";

const { getEmployees } = QUERY_IDENTIFIERS;

export const useGetAllEmployees = () => {
  const { AxiosAuth } = useAuthAxios();

  return useQuery({
    queryKey: [getEmployees],
    queryFn: async () => {
      try {
        const { data } = await AxiosAuth.get("/employees");
        return data.data;
      } catch (error: any) {
        console.log(error.response.data);
      }
    },
  });
};

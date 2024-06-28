"use client";
import { useAuthAxios } from "@/hooks/useAuthAxios";
import { useAppDispatch } from "@/store";
import { setAuthUser } from "@/store/actions/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { QUERY_IDENTIFIERS } from "@/settings/identifiers";

const { getAuthLogout } = QUERY_IDENTIFIERS;

interface IFormLogin {
  username: string;
  password: string;
}

export const useAuthLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { AxiosAuth } = useAuthAxios();

  return useMutation({
    mutationFn: async (credentials: IFormLogin) => {
      let authUser = { token: null, user: null };

      try {
        const { data } = await AxiosAuth.post("/auth/login", credentials);
        authUser = data.data;
      } catch (error: any) {
        console.log(error.response.data);
      }

      dispatch(setAuthUser(authUser));

      if (authUser.token) router.push("/clients");
    },
  });
};

export const useAuthLogout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { AxiosAuth } = useAuthAxios();

  return useMutation({
    mutationFn: async () => {
      try {
        const { status } = await AxiosAuth.get("/auth/logout");

        if (status === 200) {
          dispatch(setAuthUser({ token: null, user: null }));
          router.push("/login");
        }
      } catch (error: any) {
        console.log(error.response.data);
      }
    },
  });
};

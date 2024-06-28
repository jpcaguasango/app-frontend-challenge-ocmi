"use client";
import useAuth from "@/hooks/useAuth";
import axios from "axios";

export const useAuthAxios = () => {
  const { token } = useAuth();

  const instance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
  });

  instance.interceptors.request.use(async (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return { AxiosAuth: instance };
};

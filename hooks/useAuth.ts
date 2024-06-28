"use client";
import { useSelector } from "react-redux";

const useAuth = () => {
  const { user, token } = useSelector((state: any) => state.auth);

  return {
    user,
    token,
    getUsername: user?.name,
    isAuth: !!token,
  };
};

export default useAuth;

"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import * as React from "react";

const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) router.push("/login");
    else router.push("/clients");
  }, [isAuth, router]);

  return <>{children}</>;
};

export default Authenticated;

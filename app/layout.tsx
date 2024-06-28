"use client";
import Authenticated from "@/middleware/authenticated";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ReduxClientProvider from "@/providers/ReduxClientProvider";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Poppins } from "next/font/google";
import * as React from "react";
import "./globals.css";
import theme from "./theme";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <ReduxClientProvider>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ReactQueryProvider>
              <Authenticated>
                <body className={poppins.className}>{children}</body>
              </Authenticated>
            </ReactQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </ReduxClientProvider>
    </html>
  );
}

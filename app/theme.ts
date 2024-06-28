"use client";
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const theme = createTheme({
  typography: {
    fontFamily: `${poppins}`,
  },
  palette: {
    primary: {
      main: "#6d28d9", // color principal
    },
    secondary: {
      main: "#dc004e", // color secundario
    },
    error: {
      main: "#f44336", // color de error
    },
    warning: {
      main: "#ffa726", // color de advertencia
    },
    info: {
      main: "#2196f3", // color de información
    },
    success: {
      main: "#4caf50", // color de éxito
    },
    background: {
      default: "#f5f5f5", // color de fondo por defecto
    },
  },
});

export default theme;

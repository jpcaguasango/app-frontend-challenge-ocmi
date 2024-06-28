"use client";
export const getState = (key: string): string => {
  switch (key) {
    case "pending":
      return "Pendiente";

    case "rejected":
      return "Rechazado";

    case "success":
      return "Exitoso";

    case "perHour":
      return "Por Hora";

    case "salary":
      return "Salario";

    default:
      return "";
  }
};

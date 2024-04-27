"use client";

import { AuthContextProvider } from "@/hooks/auth-context";
import { createTheme } from "@/theme";
import { ThemeProvider } from "@mui/material";

export default function Provider({ children }: { children: React.ReactNode }) {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeProvider>
  );
}

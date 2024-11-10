"use client";

import { NextUIProvider } from "@nextui-org/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import * as React from "react";
import { Toaster } from "sonner";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

// Create a client
const queryClient = new QueryClient();

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={router.push}>
        <Toaster position="top-center" richColors />
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

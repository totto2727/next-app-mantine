"use client";

import { rtlCache } from "./cache";
import { MantineProvider } from "@mantine/core";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      {children}
    </MantineProvider>
  );
}

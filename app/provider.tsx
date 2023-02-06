"use client";

import { MantineProvider } from "@mantine/core";
import { rtlCache } from "./cache";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
      emotionCache={rtlCache}
    >
      {children}
    </MantineProvider>
  );
}

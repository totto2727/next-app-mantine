import RootLayoutView from "./appshell";
import { RootProvider } from "./provider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <head />
      <body>
        <RootProvider>
          <RootLayoutView>{children}</RootLayoutView>
        </RootProvider>
      </body>
    </html>
  );
}

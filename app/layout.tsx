import RootStyleRegistry from "./emotion";
import { cookies } from "next/headers";
import RootLayoutView from "./appshell";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const themeColor =
    cookieStore.get("mantine-color-scheme")?.value === "light"
      ? "light"
      : "dark";
  return (
    <html lang="jp">
      <head />
      <body>
        <RootStyleRegistry themeColor={themeColor}>
          <RootLayoutView>{children}</RootLayoutView>
        </RootStyleRegistry>
      </body>
    </html>
  );
}

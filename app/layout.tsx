"use client";
import "../tachyons.css";
import PageContextProvider from "../provider/PageContextProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <PageContextProvider>{children}</PageContextProvider>
      </body>
    </html>
  );
}

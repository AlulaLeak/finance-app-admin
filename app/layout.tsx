"use client";
import "../tachyons.css";
import PageContextProvider from "../provider/PageContextProvider";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <SessionProvider>
          <PageContextProvider>{children}</PageContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

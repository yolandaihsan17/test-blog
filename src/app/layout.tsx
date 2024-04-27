import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Sat Nusapersada",
  description: "This website is created by Nextjs for Sat Nusapersada test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sat Nusapersada</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

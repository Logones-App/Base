import type { Metadata } from "next";
import LayoutClient from "./layoutClient";

export const metadata: Metadata = {
  title: "Wnex Starterkit",
  description: "Admin dashboard template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
      <LayoutClient />
      {children}
    
    </body>
    </html>
  );
}

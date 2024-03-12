import "~/styles/globals.css";

import { Inter } from "next/font/google";

import Header from "~/utils/layout/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-screen font-sans ${inter.variable} bg-base-color`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}

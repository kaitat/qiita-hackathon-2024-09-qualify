import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrelineScript } from "./_dependencies/PrelineScript";
import "./globals.css";
import { HeaderLayout } from "#/components/HeaderLayout";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "マンホールは大体円型PJ",
  description: "マンホールは大体円型なPJです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <HeaderLayout />
        <main className="bg-violet-50">
          <div className="mx-auto max-w-md bg-slate-100 min-h-svh relative">
            {children}
          </div>
        </main>
        <PrelineScript />
      </body>
    </html>
  );
}

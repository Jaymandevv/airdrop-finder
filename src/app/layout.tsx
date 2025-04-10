import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryClientProvider from "@/components/query/ReactQueryClientProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airdrop Finder",
  description: "Web app for airdrop finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body>
          <div className={`antialiased h-screen max-w-[1200px] mx-auto`}>{children}</div>
          <Toaster />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}

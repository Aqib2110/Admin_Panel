import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./Compoments/ClientLayoutWrapper";
import { getServerSession } from "next-auth";
import ContextProvider from "./Compoments/ContextProvider";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Modern and elegant admin panel built with Nextjs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  console.log(session);
  return (
    <html lang="en" >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <ContextProvider>
     <ClientLayoutWrapper session={session}>
        {children}
     </ClientLayoutWrapper>
     </ContextProvider>
</body>

    </html>
  );
}


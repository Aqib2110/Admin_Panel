// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import MyLayout from "./Compoments/MyLayout";
// import { getServerSession } from "next-auth";
// import SessionProviderWrapper from "./Compoments/SessionProviderWrapper";
// import ClientLayoutWrapper from "./Compoments/ClientLayoutWrapper";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Admin Panel",
//   description: "Modern and elegant admin panel built with Nextjs",
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const session = await getServerSession();

//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <SessionProviderWrapper session={session}>
//         <MyLayout>
//           {children}
//         </MyLayout>
//         </SessionProviderWrapper>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./Compoments/ClientLayoutWrapper";
import { getServerSession } from "next-auth";

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

  return (
    <html lang="en">
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <ClientLayoutWrapper session={session}> */}
                  <ClientLayoutWrapper>

          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}


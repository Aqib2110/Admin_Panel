"use client";

import React from "react";
import MyLayout from "./MyLayout";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
interface Props {
  children: React.ReactNode;
  session?: Session | null;
}

const ClientLayoutWrapper = ({ children, session }: Props) => {

  return (
    <SessionProvider session={session}>
      <MyLayout>{children}</MyLayout>
    </SessionProvider>
  );
};

export default ClientLayoutWrapper;

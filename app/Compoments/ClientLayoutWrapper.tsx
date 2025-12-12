"use client";

import React from "react";
import MyLayout from "./MyLayout";
import SessionProviderWrapper from "./SessionProviderWrapper";
import type { Session } from "next-auth";

interface Props {
  children: React.ReactNode;
  session?: Session | null;
}

const ClientLayoutWrapper = ({ children, session }: Props) => {

  return (
    <SessionProviderWrapper session={session}>
      <MyLayout>{children}</MyLayout>
    // </SessionProviderWrapper>
  );
};

export default ClientLayoutWrapper;

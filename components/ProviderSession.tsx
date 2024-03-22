"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const ProviderSession = ({ session, children }: any) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default ProviderSession;

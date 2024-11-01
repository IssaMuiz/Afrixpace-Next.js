"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "@/data";

const Provider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}) => {
  return (
    <div>
      <SessionProvider session={session}>{children}</SessionProvider>
    </div>
  );
};

export default Provider;

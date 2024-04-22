import { SessionProvider } from "next-auth/react";
import React, { type ReactNode } from "react";

type NextAuthProviderProps = {
  children: ReactNode;
};

const AuthSessionProvider: React.FC<NextAuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthSessionProvider;

"use client";

import NextTopLoader from "nextjs-toploader";
import React from "react";
import ThemeToggleBtn from "~/components/ui/theme-toggle-btn";
import AuthSessionProvider from "./next-auth";
import ReactQueryProvider from "./react-query";
import ThemeProvider from "./theme-provider";

import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthSessionProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          {children}
          <NextTopLoader color="#8a3282" showSpinner={false} />
          <ThemeToggleBtn />
        </ThemeProvider>
      </ReactQueryProvider>
      <Toaster />
    </AuthSessionProvider>
  );
};

export default Providers;

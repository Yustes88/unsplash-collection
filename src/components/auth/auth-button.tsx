"use client";
import React from "react";
import { Button } from "~/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import AuthLoading from "./auth-loading";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthBtn = () => {
  const { status } = useSession();
  const router = useRouter();

  const signOutHandle = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.replace(data.url);
    toast.success("Successfully signed out.");
  };

  return (
    <div className="w-full px-6 md:px-0">
      {status === "unauthenticated" && (
        <Button className="w-full" onClick={() => signIn("google")}>
          Sign in
        </Button>
      )}
      {status === "authenticated" && (
        <Button className="w-full" onClick={signOutHandle}>
          Logout
        </Button>
      )}
      {status === "loading" && <AuthLoading />}
    </div>
  );
};

export default AuthBtn;

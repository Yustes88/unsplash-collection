"use client";
import React from "react";
import { Button } from "~/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import AuthLoading from "./auth-loading";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const AuthBtn = () => {
  const { status, data } = useSession();
  const router = useRouter();

  const getUserFallback = () => {
    if (data && data.user && data.user.name) {
      const userName = data.user.name;
      const userArray = userName.split(" ");
      if (userArray && userArray.length > 0) {
        return `${userArray[0]![0]}${userArray[1]![0]}`.toUpperCase();
      }
    }
  };

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
        <div className="flex items-center justify-center ">
          {data && data.user && data.user.name && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={data.user.image!} />
                  <AvatarFallback>{getUserFallback()}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="space-y-0">
                    <h2 className="text-sm capitalize italic">
                      {data?.user.name}
                    </h2>
                    <h3 className="text-xs font-normal text-muted-foreground">
                      {data?.user.email}
                    </h3>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/user/collections">My Collections</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/user/create/collection">Create Collection</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOutHandle}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}
      {status === "loading" && <AuthLoading />}
    </div>
  );
};

export default AuthBtn;

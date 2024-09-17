"use client";

import { ReactNode, useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { getTokenExpiryDate } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

interface AuthProviderProps {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const router = useRouter();
  const pathName = usePathname();

  const { 
    user,
    setAuth, 
    clearAuth, 
    isAuthenticated, 
    accessToken, 
    refreshToken, 
  } = useAuthStore();

  useEffect(() => {
    if(isAuthenticated && user) {
      if(user.role === "ADMIN" && pathName.startsWith("/dasboard")) {
        return;
      }
  
      if(user.role === "USER" && pathName.startsWith("/dashboard")) {
        router.replace("/");
      }
    } else if(!isAuthenticated && !user) {
      router.replace("/sign-in");
    }
  }, [isAuthenticated, user]);

  return (
    <>
      {children}
    </>
  );
};
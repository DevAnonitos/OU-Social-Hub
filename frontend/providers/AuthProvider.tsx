"use client";

import { ReactNode, useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";

interface AuthProviderProps {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const router = useRouter();

  const { 
    setAuth, 
    clearAuth, 
    isAuthenticated, 
    accessToken, 
    refreshToken 
  } = useAuthStore();

  return (
    <>
      {children}
    </>
  )
};
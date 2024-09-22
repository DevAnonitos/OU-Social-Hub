"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter, usePathname } from "next/navigation";
import LoaderSpinner from "@/components/Shared/LoaderSpinner";

interface AuthProviderProps {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const router = useRouter();
  const pathName = usePathname();

  const { 
    user,
    isAuthenticated, 
  } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (!loading) return;

      if (!isAuthenticated) {
        if (pathName.startsWith("/dashboard")) {
          setIsAuthorized(false);
          router.replace("/");
          return;
        }
      }

      if (user) {
        if (user.role === "ADMIN" && pathName.startsWith("/dashboard")) {
          setIsAuthorized(true);
        } else if (user.role === "USER" && pathName.startsWith("/dashboard")) {
          alert("You are not authorized to access admin routes.");
          router.replace("/");
          setIsAuthorized(false);
        } else {
          setIsAuthorized(true);
        }
      }

      setLoading(false);
    };

    checkAuth();
  }, [isAuthenticated, user, pathName, router, loading, isAuthorized]);

  if (loading) {
    return <LoaderSpinner />; 
  }

  if (!isAuthorized) {
    return null; 
  }
  return (
    <>
      {children}
    </>
  );
};
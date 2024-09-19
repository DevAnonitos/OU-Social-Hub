import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const getTokenExpiryDate = (token: string): number | null => {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    if (decoded.exp) {
      return decoded.exp * 1000; 
    }
    return null;
  } catch (error) {
    return null;
  }
};


export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};



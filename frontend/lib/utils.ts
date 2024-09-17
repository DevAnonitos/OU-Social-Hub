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



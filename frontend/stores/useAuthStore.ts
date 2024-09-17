import { create } from 'zustand';
import { persist, PersistOptions } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: { 
    id: string; 
    username: string; 
    role: string; 
  } | null;
  isAuthenticated: boolean;
  setAuth: (
    accessToken: string, 
    refreshToken: string, 
    user: { id: string; username: string; role: string },
  ) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      isAuthenticated: false,
      setAuth: (accessToken, refreshToken, user) => {
        set({ accessToken, refreshToken, user, isAuthenticated: true });
      },
      clearAuth: () => {
        set({ accessToken: null, refreshToken: null, user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage', 
      getStorage: () => sessionStorage, 
    } as PersistOptions<AuthState>
  )
);
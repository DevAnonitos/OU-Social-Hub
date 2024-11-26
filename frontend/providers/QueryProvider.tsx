"use client";

import React from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { 
  QueryClientProvider,
  QueryClient, 
  QueryCache, 
  MutationCache, 
} from "@tanstack/react-query";

interface Props {
    children: React.ReactNode,
};

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});

const QueryProvider: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default QueryProvider;
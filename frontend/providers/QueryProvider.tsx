"use client";

import React from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface props {
    children: React.ReactNode,
};

const queryClient = new QueryClient();

const QueryProvider = ({ children }: props) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
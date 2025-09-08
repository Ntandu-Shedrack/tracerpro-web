"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext<{ loading: boolean }>({ loading: true });

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mark loading false once hydrated
    const timer = setTimeout(() => setLoading(false), 500); // adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

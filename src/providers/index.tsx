import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/services/reactQuery/query-client";

import { AuthProvider } from "@/contexts/AuthContext";
import { MayorsSurveyResultsProvider } from "@/contexts/MayorsSurveyResultsContext";

export function GlobalProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <MayorsSurveyResultsProvider>
          {children}
        </MayorsSurveyResultsProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

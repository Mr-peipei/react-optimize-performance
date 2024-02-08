import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

export const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>dummy</div>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

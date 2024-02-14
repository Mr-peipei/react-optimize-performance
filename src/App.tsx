import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
// import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 3000,
    },
  },
});

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
// });

export const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>dummy</div>}>
      {/* <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      > */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
      {/* </PersistQueryClientProvider> */}
    </ErrorBoundary>
  );
};

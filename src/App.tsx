import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

export const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>dummy</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

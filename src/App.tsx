import { ErrorBoundary } from "react-error-boundary";

export const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>dummy</div>}>
      <div>test</div>
    </ErrorBoundary>
  );
};

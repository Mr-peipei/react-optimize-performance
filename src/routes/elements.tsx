import { Suspense, lazy, ElementType } from "react";
import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => () =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const HomePage = Loadable(lazy(() => import("../pages/home/HomePage")));
export const TopPage = Loadable(lazy(() => import("../pages/top/TopPage")));
export const AlwaysSuspensePage = Loadable(
  lazy(() => import("../pages/suspense/AlwaysSuspensePage"))
);
export const SuspenseLoadingPage = Loadable(
  lazy(() => import("../pages/suspense/SuspenseLoadingPage"))
);
export const SuspenseWithAxiosPage = Loadable(
  lazy(() => import("../pages/suspense/SuspenseWithAxiosPage"))
);
export const OptimizedFormikFormPage = Loadable(
  lazy(() => import("../pages/form/OptimizedFormikFormPage"))
);
export const ListPage = Loadable(lazy(() => import("../pages/list/ListPage")));
export const OptimizedListPage = Loadable(
  lazy(() => import("../pages/list/OptimizedListPage"))
);

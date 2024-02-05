import { Suspense, lazy, ElementType } from "react";
// import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => () =>
  (
    <Suspense fallback={<div />}>
      <Component />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const HomePage = Loadable(lazy(() => import("../pages/home/HomePage")));
export const TopPage = Loadable(lazy(() => import("../pages/top/TopPage")));

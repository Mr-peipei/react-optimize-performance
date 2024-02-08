import { useRoutes } from "react-router-dom";
import {
  AlwaysSuspensePage,
  HomePage,
  SuspenseLoadingPage,
  TopPage,
} from "./elements";
import MainLayout from "../layout";
import { paths } from "./paths";
import { LegacyLoadingPage } from "../pages/suspense/LegacyLoadingPage";

export default function Router() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        { element: <TopPage />, index: true },
        { path: paths.home, element: <HomePage /> },
        { path: paths.suspense.always, element: <AlwaysSuspensePage /> },
        { path: paths.suspense.legacy, element: <LegacyLoadingPage /> },
        { path: paths.suspense.new, element: <SuspenseLoadingPage /> },
      ],
    },
  ]);
}

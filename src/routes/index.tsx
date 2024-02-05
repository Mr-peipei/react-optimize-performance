import { useRoutes } from "react-router-dom";
import { AlwaysSuspensePage, HomePage, TopPage } from "./elements";
import MainLayout from "../layout";
import { paths } from "./paths";

export default function Router() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        { element: <TopPage />, index: true },
        { path: paths.home, element: <HomePage /> },
        { path: paths.suspense.always, element: <AlwaysSuspensePage /> },
      ],
    },
  ]);
}

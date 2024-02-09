import { useRoutes } from "react-router-dom";
import { TopPage } from "./elements";
import MainLayout from "../layout";
import { paths } from "./paths";
import { elements } from "./datasets";

export default function Router() {
  const e = elements.map((item) => {
    return { path: paths[item.path], element: item.element };
  });
  return useRoutes([
    {
      element: <MainLayout />,
      children: [{ element: <TopPage />, index: true }, ...e],
    },
  ]);
}

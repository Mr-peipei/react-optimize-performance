import { FormikFormPage } from "../pages/form/FormikFormPage";
import { LegacyLoadingPage } from "../pages/suspense/LegacyLoadingPage";
import {
  AlwaysSuspensePage,
  HomePage,
  OptimizedFormikFormPage,
  SuspenseLoadingPage,
  SuspenseWithAxiosPage,
  TopPage,
} from "./elements";
import { PathType } from "./paths";

type ComponentDataset = {
  path: PathType;
  element: React.ReactNode;
  title: string;
};

export const elements: ComponentDataset[] = [
  {
    path: "top",
    element: <TopPage />,
    title: "トップページ",
  },
  {
    path: "home",
    element: <HomePage />,
    title: "ホームページ",
  },
  {
    path: "suspense_always",
    element: <AlwaysSuspensePage />,
    title: "Suspenseが回っている",
  },
  {
    path: "suspense_legacy",
    element: <LegacyLoadingPage />,
    title: "Suspense使わない",
  },
  {
    path: "suspense_new",
    element: <SuspenseLoadingPage />,
    title: "Suspense使う",
  },
  {
    path: "suspense_axios",
    element: <SuspenseWithAxiosPage />,
    title: "Suspense + Axios",
  },
  { path: "form_formik", element: <FormikFormPage />, title: "Formikフォーム" },
  {
    path: "optimized_form_formik",
    element: <OptimizedFormikFormPage />,
    title: "分割後のFormikフォーム",
  },
];

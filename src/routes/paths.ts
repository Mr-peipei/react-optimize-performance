export const paths = {
  top: "/",
  home: "/home",
  suspense_always: "/suspense/always",
  suspense_legacy: "/suspense/legacy",
  suspense_new: "/suspense/new",
  suspense_axios: "/suspense/axios",
  form_formik: "/form/formik",
  optimized_form_formik: "/optimized-form/formik",
};

export type PathType = keyof typeof paths;

import { Outlet, useLocation } from "react-router-dom";

// const pathsOnDark = ["/career/landing", "/travel/landing"];

// const spacingLayout = [
//   ...pathsOnDark,
//   "/",
//   "/e-learning/landing",
//   "/marketing/landing",
// ];

// ----------------------------------------------------------------------

export default function MainLayout() {
  // const { pathname } = useLocation();

  // const actionPage = (arr: string[]) => arr.some((path) => pathname === path);

  return (
    // <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
    //   <Header headerOnDark={actionPage(pathsOnDark)} />

    //   <Box
    //     component="main"
    //     sx={{
    //       flexGrow: 1,
    //     }}
    //   >
    //     {!actionPage(spacingLayout) && <Spacing />}
    <Outlet />
    //   </Box>

    //   <Footer />
    // </Box>
  );
}

// ----------------------------------------------------------------------

// function Spacing() {
//   return (
//     <Box
//       sx={{
//         height: { xs: HEADER.H_MOBILE, md: HEADER.H_MAIN_DESKTOP },
//       }}
//     />
//   );
// }

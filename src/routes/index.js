import { lazy } from "react";
import { MY_TESTS_ROUTE, BALANCE_ROUTE, PROFILE_ROUTE } from "@utils/consts";

const Tests = lazy(() =>
  import("../pages/Tests/Tests").then((module) => module)
);

const Balance = lazy(() =>
  import("../pages/Balance/Balance").then((module) => module)
);

const Profile = lazy(() =>
  import("../pages/Porfile/Profile").then((module) => module)
);

export const privateRoutes = [
  {
    path: MY_TESTS_ROUTE,
    Component: Tests,
  },
  {
    path: BALANCE_ROUTE,
    Component: Balance,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
];

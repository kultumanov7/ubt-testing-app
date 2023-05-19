import { env } from "../../configs";

const MY_TESTS_ROUTE = "/";
const AUTH_ROUTE = "/auth";
const BALANCE_ROUTE = "/balance";
const SETTINGS_ROUTE = "/settings";
const PROFILE_ROUTE = "/profile";
const EXAM_PAGE_ROUTE = "/my-tests/:id";
const CATALOG_ROUTE = "/catalog";
const BLOG_ROUTE = "https://smartestprep.kz/blog";
const RESOURCES_ROUTE = "/resources";
const STP_OPEN_SIDE =
  env === "production"
    ? "https://prep.smartestprep.com"
    : "https://prep.dev-smartestprep.com";

export {
  MY_TESTS_ROUTE,
  CATALOG_ROUTE,
  RESOURCES_ROUTE,
  BLOG_ROUTE,
  SETTINGS_ROUTE,
  PROFILE_ROUTE,
  STP_OPEN_SIDE,
  AUTH_ROUTE,
  BALANCE_ROUTE,
  EXAM_PAGE_ROUTE,
};

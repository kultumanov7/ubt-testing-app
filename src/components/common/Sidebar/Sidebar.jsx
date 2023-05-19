import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Icon, List, CustomLink } from "@components/common";
import classNames from "classnames";
import { useTranslate } from "@helpers/hooks";
import {
  MY_TESTS_ROUTE,
  BALANCE_ROUTE,
  PROFILE_ROUTE,
} from "../../../utils/consts";
import "./Sidebar.scss";

export default function Sidebar() {
  const { pathname } = useLocation();
  const { t } = useTranslate();
  const links = useMemo(
    () => [
      {
        id: 1,
        route: MY_TESTS_ROUTE,
        icon: "dashboard",
        name: t("SIDEBAR.MY_TESTS"),
      },
      {
        id: 2,
        route: BALANCE_ROUTE,
        icon: "university-visit",
        name: t("SIDEBAR.BALANCE"),
      },
      {
        id: 3,
        route: PROFILE_ROUTE,
        icon: "profile-v2",
        name: t("SIDEBAR.PROFILE"),
      },
    ],
    [t]
  );

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <List
          className="sidebar__list"
          items={links}
          renderItem={({ id, route, icon, name, isDivider }) => (
            <li key={id} className="sidebar__item">
              <CustomLink
                to={route}
                className={classNames("sidebar__link", {
                  "sidebar__link--selected": pathname === route,
                })}
              >
                <Icon
                  className={classNames("icon", {
                    "icon--white": pathname === route,
                  })}
                  name={icon}
                />
                <p
                  className={classNames("sidebar__text", {
                    "sidebar__text--selected": pathname === route,
                  })}
                >
                  {name}
                </p>
              </CustomLink>
            </li>
          )}
        />
      </nav>
    </aside>
  );
}

import { useMemo, memo } from "react";
import { CustomLink, List } from "@components/common";
import { HeaderLanguageToggle, HeaderProfile } from "@components/feature";
import { useTranslate } from "@helpers/hooks";
import "./HeaderMenu.scss";

export default memo(function HeaderMenu() {
  const { t } = useTranslate();
  const navs = useMemo(
    () => [
      {
        id: 1,
        component: (
          <CustomLink
            className={"menu__link"}
            isExternal={true}
            to={"http://smartestprep.kz/blog"}
            target={"_blank"}
            rel={"noreferrer noopener"}
          >
            {t("HEADER.BLOG")}
          </CustomLink>
        ),
      },
      {
        id: 2,
        component: (
          <CustomLink
            className={"menu__link"}
            isExternal={false}
            to={"resources"}
            rel={"noreferrer noopener"}
          >
            {t("HEADER.USEFUL_RESOURCES")}
          </CustomLink>
        ),
      },
      { id: 3, component: <HeaderLanguageToggle /> },
      { id: 4, component: <HeaderProfile /> },
    ],
    [t]
  );
  return (
    <List
      className={"header__menu"}
      items={navs}
      renderItem={(nav) => (
        <li key={nav.id} className={"menu__item"}>
          {nav.component}
        </li>
      )}
    />
  );
});

import { useMemo, useState, memo } from "react";
import { useSelector } from "react-redux";
import { useOutsideClick, useTranslate } from "@helpers/hooks";
import { SETTINGS_ROUTE, STP_OPEN_SIDE } from "@utils/consts";
import { logout } from "@utils/functions";
import { CustomLink, Icon, Image, List } from "@components/common";
import "./HeaderProfile.scss";

export default memo(function HeaderProfile() {
  const { t } = useTranslate(),
    [isProfileOpen, setIsProfileOpen] = useState(false),
    { profile } = useSelector((state) => state.profile),
    ref = useOutsideClick(() => setIsProfileOpen(false)),
    links = useMemo(
      () => [
        { id: 1, name: t("HEADER.PROFILE.MY_PROFILE"), route: SETTINGS_ROUTE },
        {
          id: 2,
          name: t("HEADER.PROFILE.HELP"),
          route: `${STP_OPEN_SIDE}/faq/`,
          target: "_blank",
          rel: "noreferrer noopener",
          isExternal: true,
        },
        {
          id: 3,
          name: t("HEADER.PROFILE.LOGOUT"),
          route: `${STP_OPEN_SIDE}/auth/`,
          icon: "logout",
          isExternal: true,
          handleClick: logout,
        },
      ],
      [t]
    );

  const onToggleDropdown = (e) => {
    e.stopPropagation();
    setIsProfileOpen((isProfileOpen) => !isProfileOpen);
  };

  return (
    <div className={"header__settings"} onClick={onToggleDropdown} ref={ref}>
      {profile.profile_photo ? (
        <Image src={profile.profile_photo} className="header__photo" />
      ) : (
        <div className="header__photo">
          <p className="header__photo--placeholder">
            {profile.name && profile.name[0]}
            {profile.surname && profile.surname[0]}
          </p>
        </div>
      )}
      <div className={"settings__title"}>
        {isProfileOpen && (
          <List
            className={"settings__dropdown"}
            items={links}
            renderItem={(link) => (
              <li key={link.id} className={"settings__item"}>
                {link.icon && <Icon name={link.icon} />}
                <CustomLink
                  className={"settings__link"}
                  isExternal={link.isExternal}
                  to={link.route}
                  target={link.target}
                  rel={link.rel}
                  onClick={link.handleClick}
                >
                  {link.name}
                </CustomLink>
              </li>
            )}
          />
        )}
      </div>
    </div>
  );
});

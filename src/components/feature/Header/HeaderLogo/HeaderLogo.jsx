import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { MY_TESTS_ROUTE } from "@utils/consts";
import { Icon } from "@components/common";
import "./HeaderLogo.scss";

export default memo(function HeaderLogo({ setIsMenuOpen }) {
  const navigate = useNavigate();

  const routeToDashboard = () => {
    setIsMenuOpen(false);
    navigate(MY_TESTS_ROUTE);
  };
  return (
    <Icon
      className={"header__logo"}
      name={"logo"}
      handleClick={routeToDashboard}
    />
  );
});

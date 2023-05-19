import { useEffect, useState, memo } from "react";
import { useWindowSize } from "@helpers/hooks";
import { HeaderLogo, HeaderMenu } from "@components/feature";
import "./Header.scss";

export default memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false),
    windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 1023) {
      setIsMenuOpen(false);
    }
  }, [windowSize]);
  return (
    <header className={"header"}>
      <nav className={"header__nav"}>
        <HeaderLogo setIsMenuOpen={setIsMenuOpen} />
        <HeaderMenu />
      </nav>
    </header>
  );
});

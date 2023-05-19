import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAction } from "@helpers/hooks";
import { accessToken } from "@api/xhr/axios/axios";
import {
  ACCESS_LANG,
  ACCESS_LOCALE,
  ACCESS_REDIRECT,
  ACCESS_TOKEN,
  CATALOG_ROUTE,
  PROFILE_ROUTE,
  STP_OPEN_SIDE,
  AUTH_ROUTE,
} from "@utils/consts";
import { parseJwt } from "@utils/functions";
import { AppLoader } from "@components/common";
import { AuthRouter } from "@components/feature";

export default function WithAuth({ children }) {
  const { pathname } = useLocation(),
    { profile } = useSelector((state) => state.profile),
    { fetchProfile, fetchStudentProfile } = useAction(),
    isLogged = useMemo(() => !!accessToken, []),
    [isAuth, setIsAuth] = useState(isLogged);

  useEffect(() => {
    const locationArr = pathname.split("/");
    const findTokenIndex = locationArr.findIndex(
      (item) => item === ACCESS_TOKEN
    );
    const findRedirectIndex = locationArr.findIndex(
      (item) => item === ACCESS_REDIRECT
    );
    const findLocaleIndex = locationArr.findIndex(
      (item) => item === ACCESS_LOCALE
    );
    if (locationArr.includes(ACCESS_TOKEN)) {
      const accessToken = locationArr[findTokenIndex + 1];
      const accessLang = locationArr[findLocaleIndex + 1];
      const accessRedirect = locationArr[findRedirectIndex + 1];
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(ACCESS_LANG, accessLang);
      setIsAuth(true);

      if (accessRedirect === "true") {
        window.location.href = CATALOG_ROUTE;
      } else {
        window.location.href = PROFILE_ROUTE;
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (isAuth) {
      try {
        const { user_id: userId } = parseJwt(
          localStorage.getItem(ACCESS_TOKEN)
        );
        fetchStudentProfile(userId);
      } catch (e) {
        localStorage.removeItem(ACCESS_TOKEN);
        // window.location.href = `${STP_OPEN_SIDE}/auth`;
        window.location.href = AUTH_ROUTE;
      }
    }
  }, [isAuth]);

  // if (!isAuth) {
  //     // window.location.href = `${STP_OPEN_SIDE}/auth`;
  //     // window.location.href = `http://127.0.0.1:5173/auth`;
  //     localStorage.removeItem(ACCESS_TOKEN);
  // }
  return (
    <>{isAuth ? <> {profile ? children : <AppLoader />} </> : <AuthRouter />}</>
  );
}

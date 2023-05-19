import { useEffect, useState } from "react";
import { useTranslate } from "@helpers/hooks";
import { Icon } from "@components/common";
import "./HeaderLanguageToggle.scss";

const HeaderLanguageToggle = () => {
  const { i18n } = useTranslate();
  const lastValue = localStorage.getItem("lang") === "en" ? false : true;
  const [isChecked, setIsChecked] = useState(lastValue);

  // useEffect(() => {
  //   if (localStorage.getItem("lang") === "ru") {
  //     localStorage.setItem("lang", i18n.language);
  //     return new Promise(() => i18n.changeLanguage(i18n.language));
  //   } else {
  //     localStorage.setItem("lang", "en");
  //     return new Promise(() => i18n.changeLanguage("en"));
  //   }
  // }, [i18n]);

  const saveLang = async (lang) => {
    localStorage.setItem("lang", lang);
    await i18n.changeLanguage(lang);
  };

  const handleLang = (e) => {
    setIsChecked(e.target.checked);
    isChecked ? saveLang("en") : saveLang("ru");
  };

  return (
    <div className="switch-button">
      <input
        checked={isChecked}
        className="switch-button-checkbox"
        type="checkbox"
        onChange={handleLang}
      />
      <label className="switch-button-label">
        <span
          className={`switch-button-label-span${
            isChecked ? "-left" : "-left-checked"
          }`}
        >
          {!isChecked ? <Icon name="checkmark" className="checkmark" /> : ""}
          Eng
        </span>
        <span
          className={`switch-button-label-span${
            isChecked ? "-right-checked" : "-right"
          }`}
        >
          {isChecked ? <Icon name="checkmark" className="checkmark" /> : ""}Рус
        </span>
      </label>
    </div>
  );
};

export default HeaderLanguageToggle;

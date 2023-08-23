import React, { useState } from "react";
import { useDispatch } from "react-redux";

import language_icon from "src/assets/headerImg/global.png";
import jp_icon from "src/assets/headerImg/jp-flag-icon.svg";
import us_icon from "src/assets/headerImg/us-flag-icon.svg";
import { switchLang } from "src/redux/actions";

import "./SwitchLang.scss";
import { LANGUAGES } from "../../utils/constant";

function SwitchLang() {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  window.addEventListener("mouseup", function (e) {
    let menuToggle = this.document.querySelector(".language-menuToggle");
    if (e.target !== menuToggle && e.target.parentNode !== menuToggle) {
      if (isActive === true) {
        setIsActive(false);
      }
    }
  });

  const handleClickActive = () => {
    setIsActive(!isActive);
  };

  const handleClickLanguage = (language) => {
    dispatch(switchLang(language));
  };

  return (
    <div className="language-menu">
      <div className="language-navigation">
        <div
          className={
            isActive === false
              ? "language-menuToggle "
              : "language-menuToggle active"
          }
          onClick={handleClickActive}
        >
          <img className="main-icon" src={language_icon} alt="languages" />
        </div>
        <div className="language-menu">
          <ul className="language-list">
            <li className="language-item">
              <button
                className="btn-lang"
                onClick={() => handleClickLanguage(LANGUAGES.EN)}
              >
                <img className="img-lang" src={us_icon} alt="us" />
              </button>
            </li>
            <li className="language-item">
              <button
                className="btn-lang"
                onClick={() => handleClickLanguage(LANGUAGES.JA)}
              >
                <img className="img-lang" src={jp_icon} alt="jp" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SwitchLang;

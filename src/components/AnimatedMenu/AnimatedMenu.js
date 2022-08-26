import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import language_icon from './img/global.png';
import jp_icon from './img/jp-flag-icon.svg';
import us_icon from './img/us-flag-icon.svg';
import { changeLanguageApp } from '../../redux/actions/actions';
import './AnimatedMenu.scss';
import { LANGUAGES } from '../../utils/constant';

function AnimatedMenu() {
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();

    window.addEventListener('mouseup', function (e) {
        let menuToggle = this.document.querySelector('.animated-menuToggle');
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
        dispatch(changeLanguageApp(language));
    };

    return (
        <div className="animated-menu">
            <div className="animated-navigation">
                <div
                    className={
                        isActive === false
                            ? 'animated-menuToggle '
                            : 'animated-menuToggle active'
                    }
                    onClick={handleClickActive}
                >
                    <img className="main-icon" src={language_icon} alt="languages" />
                </div>
                <div className="animated-menu">
                    <ul className="animated-list">
                        <li className="animated-item">
                            <button
                                className="btn-lang"
                                onClick={() => handleClickLanguage(LANGUAGES.JP)}
                            >
                                <img className="img-lang" src={jp_icon} alt="jp" />
                            </button>
                        </li>
                        <li className="animated-item">
                            <button
                                className="btn-lang"
                                onClick={() => handleClickLanguage(LANGUAGES.EN)}
                            >
                                <img className="img-lang" src={us_icon} alt="us" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AnimatedMenu;

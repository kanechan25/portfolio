import React, { useEffect, useState } from 'react';
import lightBtn from 'src/assets/headerImg/light-btn.svg';
import darkBtn from 'src/assets/headerImg/dark-btn.svg';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from 'src/redux/actions';
import { themeSelector } from 'src/redux/selectors';

const Themetoggle = () => {
    const currentTheme = useSelector(themeSelector);
    const [theme, settheme] = useState(currentTheme);
    const dispatch = useDispatch();

    const themetoggle = () => {
        dispatch(toggleTheme(!currentTheme));
        settheme(theme === !currentTheme);
        document.body.classList.toggle('darkmode');
    };

    useEffect(() => {
        settheme(currentTheme);
    }, [currentTheme]);

    return (
        <button className="nav_darkmode" onClick={themetoggle}>
            {theme ? (
                <img className="lightThemeBtn" src={lightBtn} alt="light" />
            ) : (
                <img className="darkThemeBtn" src={darkBtn} alt="dark" />
            )}
        </button>
    );
};

export default Themetoggle;

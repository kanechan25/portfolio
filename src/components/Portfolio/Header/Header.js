import React from 'react';

import Themetoggle from '../../../components/Darkmode/Darkmode';
import SwitchLang from '../../SwitchLang.js/SwitchLang';
import portrait_header from '../../../assets/img/avatar/portrait_2020.jpg';
import './Header.scss';

const Header = () => {
    return (
        <header className="header container">
            <div className="header-wrapper">
                <div className="home-header">
                    <a href="/">
                        <span className="text-header"></span>
                        <img
                            className="portrait-header"
                            src={portrait_header}
                            alt="portrait"
                        />
                    </a>
                </div>
                <div className="theme-toggle">
                    <Themetoggle />
                </div>
                <div className="animated-menu">
                    <SwitchLang />
                </div>
            </div>
        </header>
    );
};

export default Header;

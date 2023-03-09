import React, { useContext } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Portfolio/Header/Header';
import Footer from './components/Portfolio/Footer/Footer';
import { SlugPath } from './App';

const GeneralLayout = ({ children }) => {
    const slugValue = useContext(SlugPath);

    return (
        <div className="generalLayout">
            <div className="headerLayout">
                <Header />
            </div>
            <div className="bodyPage">{children}</div>
            <NavMenu slug={slugValue} />
            <Footer />
        </div>
    );
};

export default GeneralLayout;

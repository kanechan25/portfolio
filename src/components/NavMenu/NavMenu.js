import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/constant";

import "./NavMenu.scss";

function NavMenu({ slug }) {
  useEffect(() => {
    let navList = document.querySelectorAll(".nav-list");
    slugActive();
    navList.forEach((item) => {
      item.addEventListener("click", activeLink);
    });
    function activeLink() {
      navList.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    function slugActive() {
      navList.forEach((item) => item.classList.remove("active"));
      navList[slug - 1].classList.add("active");
    }
  }, [slug]);

  return (
    <div className="nav-menu">
      <div className="navigation">
        <ul>
          <li className="nav-list">
            <Link to={routes.HOME} className="alink">
              <span className="nav-icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className="nav-list">
            <Link to={routes.SKILLS} className="alink">
              <span className="nav-icon">
                <i className="fas fa-tools"></i>
              </span>
              <span className="nav-text">Skills</span>
            </Link>
          </li>
          <li className="nav-list">
            <Link to={routes.EXPERIENCE} className="alink">
              <span className="nav-icon">
                <i className="fas fa-briefcase"></i>
              </span>
              <span className="nav-text">Experience</span>
            </Link>
          </li>
          <li className="nav-list">
            <Link to={routes.PROJECTS} className="alink">
              <span className="nav-icon">
                <i className="fas fa-tasks-alt"></i>
              </span>
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          {/* <li className="nav-list">
            <Link to={routes.ABOUT} className="alink">
              <span className="nav-icon">
                <i className="fas fa-address-book"></i>
              </span>
              <span className="nav-text">About</span>
            </Link>
          </li> */}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}
export default NavMenu;

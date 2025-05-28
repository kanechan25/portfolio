import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-wrapper row">
        <span className="copyright">© {new Date().getFullYear()} Kane Chan</span>
      </div>
    </footer>
  );
};

export default Footer;

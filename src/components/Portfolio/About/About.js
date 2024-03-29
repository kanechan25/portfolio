import React from "react";
import { FormattedMessage } from "react-intl";

import Aboutme from "../Home/Aboutme/Aboutme";
import "./About.scss";

const About = () => {
  const avatar =
    "https://raw.githubusercontent.com/kanechan25/portfolio/main/src/assets/img/about/avatars.jpg";

  return (
    <div id="about" className="aboutContainer container">
      <div className="headerContainer">
        <div className="aboutHeader">
          <svg
            id="Layer_1"
            className="aboutHeaderIcon"
            enableBackground="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <path d="M360.8,6h-236C87.6,6,57.4,36.2,57.4,73.4v25.5h29.4c3.7-3.6,8.8-5.9,14.5-5.9c11.4,0,20.7,9.3,20.7,20.7   c0,11.4-9.3,20.7-20.7,20.7c-5.6,0-10.7-2.3-14.5-5.9H57.4v65.3h29.4c3.7-3.6,8.8-5.9,14.5-5.9c11.4,0,20.7,9.3,20.7,20.7   c0,11.4-9.3,20.7-20.7,20.7c-5.6,0-10.7-2.3-14.5-5.9H57.4v65.3h29.4c3.7-3.6,8.8-5.9,14.5-5.9c11.4,0,20.7,9.3,20.7,20.7   c0,11.4-9.3,20.7-20.7,20.7c-5.6,0-10.7-2.3-14.5-5.9H57.4v65.3h29.4c3.7-3.6,8.8-5.9,14.5-5.9c11.4,0,20.7,9.3,20.7,20.7   c0,11.4-9.3,20.7-20.7,20.7c-5.6,0-10.7-2.3-14.5-5.9H57.4v25.5c0,37.2,30.2,67.4,67.4,67.4h236c37.2,0,67.4-30.2,67.4-67.4V73.4   C428.2,36.2,398,6,360.8,6z M292.8,369.7c-15.3-1.4-30.1-6.8-43.7-14.2c-28.8-15.7-87.3-132-82.7-164.5   c2.2-15.3,6.6-30.4,14.7-43.5c12.6-20.5,44.2-45,65.6-20.7c7.5,8.6,10.6,20.2,12.2,31.5c1.4,9.7,1.8,19.9-2.2,28.8   c-4,8.9-13.7,15.8-23.3,13.8c-5.5-1.2-11.4-5-16.3-2.3c-3.5,2-4.6,6.5-5.1,10.5c-2.6,19.8,32.3,89.3,49.8,99   c3.5,2,7.8,3.8,11.5,2.2c5.2-2.3,5.5-9.3,7.9-14.4c4.1-8.9,15.5-12.5,25-10.4c9.5,2.1,17.5,8.5,24.4,15.4c8.1,8,15.6,17.4,18,28.5   C355.3,361.2,316.8,371.9,292.8,369.7z" />
              <path
                d="M444.4,84.1h-11.2v54.7h11.2c3.7,0,7.2,1,10.2,2.8V94.3C454.6,88.6,450,84.1,444.4,84.1z"
                id="XMLID_4_"
              />
              <path
                d="M444.4,148.8h-11.2v54.7h11.2c3.7,0,7.2,1,10.2,2.8v-47.3C454.6,153.3,450,148.8,444.4,148.8z"
                id="XMLID_3_"
              />
              <path
                d="M444.4,213.4h-11.2v54.7h11.2c3.7,0,7.2,1,10.2,2.8v-47.3C454.6,218,450,213.4,444.4,213.4z"
                id="XMLID_2_"
              />
              <path
                d="M444.4,278.1h-11.2v54.7h11.2c3.7,0,7.2,1,10.2,2.8v-47.3C454.6,282.6,450,278.1,444.4,278.1z"
                id="XMLID_1_"
              />
            </g>
          </svg>

          <p className="aboutHeaderTitle">
            <FormattedMessage id="about.aboutheader" />
          </p>
        </div>
        <div className="aboutDivider"></div>
      </div>
      <div className="aboutContentContainer row">
        <Aboutme welcome={false} portrait={avatar} />
        <div className="detail-about">
          <ul className="left-detail">
            <li>
              &#183; <FormattedMessage id="about.detail1" />
            </li>
            <li>
              &#183; <FormattedMessage id="about.detail2" />
            </li>
          </ul>
          <div className="soft-skills">
            <div className="heading-soft-skill">
              <FormattedMessage id="about.softheader" />
            </div>
            <div className="container">
              <div className="row">
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem1" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem2" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem3" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem4" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem5" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem6" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem7" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem8" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem9" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem10" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem11" />
                </div>
                <div className="soft-item col-md-3 col-sm-4 col-6">
                  <FormattedMessage id="about.softitem12" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="thank-you">
          <FormattedMessage id="about.thanks" />
        </div>
      </div>
    </div>
  );
};

export default About;

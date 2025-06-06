import React from "react";

import { FormattedMessage } from "react-intl";
import ExprnBoard from "./ExprnBoard/ExprnBoard";
import {
  // exprn2016,
  exprn2018,
  exprn2019,
  exprn2021,
  exprn2023,
  exprn2024,
  exprnFreelance,
} from "./ExprnBoard/ExprnData";
import "./Experience.scss";

const Experience = () => {
  return (
    <div id="exprn" className="exprnContainer">
      <div className="headerContainer">
        <div className="exprnHeader">
          <svg
            className="exprnHeaderIcon"
            enableBackground="new 0 0 512 512"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <path d="M418.5,250v21c0,4.7-3.9,8.6-8.6,8.6h-33.2c-4.7,0-8.6-3.9-8.6-8.6v-8L256,292l-108.4-28v7   c0,4.7-3.9,8.6-8.6,8.6h-33.2c-4.7,0-8.6-3.9-8.6-8.6v-20l-80.9-21.5v169.3c0,24.4,20.4,45.4,47.7,45.4h383.9   c27.3,0,47.4-21.1,47.4-45.4V229.5L418.5,250z" />
              <path d="M448,468H64.1c-27.3,0-47.6-11-47.6-35.4v25.7c0,24.4,20.4,42.7,47.7,42.7h383.9   c27.3,0,47.4-18.4,47.4-42.8v-25.7C495.5,456.9,475.2,468,448,468z" />
              <path d="M459.4,108.5H52.6c-28.9,0-52.5,21.1-52.5,47v47l97.3,25.2v-11.9c0-4.7,3.9-8.6,8.6-8.6h33.2   c4.7,0,8.6,3.9,8.6,8.6v24.9l108.4,28l112.2-29v-23.9c0-4.7,3.9-8.6,8.6-8.6h33.2c4.7,0,8.6,3.9,8.6,8.6v10.9l93.5-24.2v-47   C512,129.6,488.3,108.5,459.4,108.5z" />
              <path d="M156.7,92V71.4c0-18.6,15.2-33.9,33.9-33.9h130.7c18.6,0,33.9,15.2,33.9,33.9V92h34.7V58.7   c0-27.1-21-48.7-48.1-48.7H170.5C143.4,10,122,31.4,122,58.5v33.3L156.7,92z" />
            </g>
          </svg>
          <p className="exprnHeaderTitle">
            <FormattedMessage id="exprn.exprnheader" />
          </p>
        </div>
        <div className="exprnDivider"></div>
      </div>
      <div className="exprnContent container">
        <div className="mainContainer row">
          <div className="main-pole col-md-1">
            <div className="head-pole"></div>
            <div className="body-pole"></div>
            <div className="footer-pole"></div>
          </div>
          <div className="main-board col-md-11">
            <ExprnBoard data={exprn2024} />
            <ExprnBoard data={exprn2023} />
            {/* <ExprnBoard data={exprn2021} /> */}
            <ExprnBoard data={exprn2019} />
            <ExprnBoard data={exprn2018} />
            {/* <ExprnBoard data={exprn2016} /> */}
            <ExprnBoard data={exprnFreelance} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

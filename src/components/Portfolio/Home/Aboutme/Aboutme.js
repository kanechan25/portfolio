import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import linkedin from "../../../../assets/img/media/linkedin.svg";
import github from "../../../../assets/img/media/github.svg";
import youtube from "../../../../assets/img/media/youtube.svg";
import ktResume from "../../../../files/Tran_Van_Khoa_FE.pdf";
import "./Aboutme.scss";
import { FormattedMessage } from "react-intl";

const Aboutme = ({ welcome, portrait }, props) => {
  return (
    <div className="leftContainer">
      {welcome === true ? (
        <div className="nameContainer">
          <p className="subText top">Welcome to</p>
          <p className="homeName">
            KANE CHAN
            <span> 'S</span>
          </p>
          <p className="subText bottom">Portfolio</p>
        </div>
      ) : null}

      <div className="contentContainer">
        <img className="portrait-home" src={portrait} alt="portrait" />
        <div className="info">
          <a href="mailto:kt.itengineer@gmail.com">
            <span className="email">
              <FormattedMessage id="about.email" />: kt.itengineer@gmail.com
            </span>
          </a>
          <div className="media">
            <a
              href="https://github.com/kanechan25"
              target="__blank"
              rel="noopener noreferrer"
            >
              <img className="mediaIcon github" src={github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/khoatran2593/"
              target="__blank"
              rel="noopener noreferrer"
            >
              <img
                className="mediaIcon linkedIn"
                src={linkedin}
                alt="portrait"
              />
            </a>
            <a
              href="https://www.youtube.com/c/CE2Dev"
              target="__blank"
              rel="noopener noreferrer"
            >
              <img className="mediaIcon youtube" src={youtube} alt="youtube" />
            </a>
            <Link
              className="resume"
              to={ktResume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="about.resume" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Aboutme);

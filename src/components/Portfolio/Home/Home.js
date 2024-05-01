import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import "./Home.scss";
import Aboutme from "./Aboutme/Aboutme";

const Home = (props) => {
  const avatar =
    "https://raw.githubusercontent.com/kanechan25/portfolio/main/src/assets/img/about/avatars.jpg";

  return (
    <div className="homeContainer container">
      <div className="row">
        <div className="leftContainer col-md-6 col-12">
          <Aboutme welcome={true} portrait={avatar} />
          <div className="descContainer">
            <p>
              &#183; <FormattedMessage id="home.desc1" />
            </p>
            <p>
              &#183; <FormattedMessage id="home.desc2" />
            </p>
            <p>
              &#183; <FormattedMessage id="home.desc3" />
            </p>
            <p>
              &#183; <FormattedMessage id="home.desc4" />
            </p>
          </div>
        </div>
        <div className="rightContainer col-md-6 col-12">
          <iframe
            id="introduceVideo"
            className="introduceVideo"
            src="https://www.youtube.com/embed/K1HJgS9wZB4?autoplay=0&mute=1&controls=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);

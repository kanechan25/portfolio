import React from 'react';
import { connect } from 'react-redux';

import './Home.scss';
import Aboutme from './Aboutme/Aboutme';

const Home = (props) => {
    const avatar =
        'https://raw.githubusercontent.com/kanechan25/portfolio/main/src/assets/img/avatar/portrait_2015.jpg';

    return (
        <div className="homeContainer container">
            <div className="row">
                <div className="leftContainer col-md-6 col-12">
                    <Aboutme welcome={true} portrait={avatar} />
                    <div className="descContainer">
                        <p>&#183; I have been officially a Developer for almost 3 years.</p>
                        <p>
                            &#183; I used to be a windows desktop app developer. Now I am a
                            full-stack web developer.
                        </p>
                        <p>
                            &#183; The most outstanding advantages: self-study ability, having
                            high adaptability and working under intense pressure.
                        </p>
                    </div>
                </div>
                <div className="rightContainer col-md-6 col-12">
                    <iframe
                        id="introduceVideo"
                        className="introduceVideo"
                        src="https://www.youtube.com/embed/K1HJgS9wZB4"
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

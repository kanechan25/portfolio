import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import {
  languageData,
  frameworkData,
  databaseData,
  relevantData,
} from "../../../components/Portfolio/Skills/SkillData";
import "./Skills.scss";
import vnFlag from "../../../assets/img/skills/languages/vn-flag-icon.svg";
import usFlag from "../../../assets/img/skills/languages/us-flag-icon.svg";
import jpFlag from "../../../assets/img/skills/languages/jp-flag-icon.svg";

const Skills = (props) => {
  const programLanguageData = languageData.sort((a, b) => a.id - b.id);
  return (
    <div id="skill" className="skillContainer container">
      <div className="headerContainer">
        <div className="header">
          <svg
            className="headerIcon"
            fill="currentColor"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
          >
            <g>
              <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                <path d="M4222.4,4998.2c-196-90.9-232.4-187.9-232.4-616.3v-331.4l-93-14.2c-258.7-38.4-727.5-218.2-1056.9-406.2l-228.4-131.4l-246.5,240.5c-218.3,214.2-254.6,242.5-347.6,264.7c-149.5,36.4-248.6,4-390-125.3c-442.6-404.2-507.2-489-507.2-654.7c0-153.6,44.5-226.3,291-470.8c117.2-115.2,214.2-220.3,214.2-228.3c0-10.1-40.4-84.9-90.9-163.7c-198-319.3-369.8-751.7-462.8-1166l-10.1-50.5l-343.5-2c-329.4-2-347.6-4-430.4-52.5c-52.5-30.3-107.1-84.9-137.4-139.4c-48.5-84.9-50.5-97-50.5-491.1c0-454.7,6.1-480.9,157.6-604.2l78.8-62.6l359.7-6.1l359.7-6.1l34.4-155.6c78.8-349.6,254.6-780,456.7-1107.4l80.8-135.4l-232.4-234.4c-127.3-129.3-242.5-260.7-252.6-293c-28.3-70.7-28.3-216.2-2-289c26.3-66.7,529.5-582,616.3-626.5c32.3-18.2,105.1-32.3,161.7-34.4c141.5-2,236.4,60.6,483,309.2l200.1,202.1l82.9-58.6c260.7-177.8,713.3-375.9,1071-464.8l224.3-56.6l10.1-341.5c10.1-359.7,22.2-410.2,125.3-505.2c99-92.9,171.8-107.1,561.8-107.1c390,0,462.8,14.2,561.8,107.1c101,95,113.2,145.5,125.3,505.2l10.1,341.5l224.3,56.6c206.1,52.5,582,187.9,618.4,220.3c8.1,8.1-177.8,208.1-416.3,444.6L5370.3-2012l-169.7-36.4c-214.2-46.5-784.1-52.5-998.3-10.1c-485,95-929.6,325.3-1285.2,664.8c-396.1,375.9-640.6,814.4-757.8,1358c-52.5,238.5-52.5,749.7-2,990.2c117.2,547.6,355.7,972,763.9,1362c495.1,470.9,1071,699.2,1764.2,699.2c1232.7,0,2297.6-899.3,2509.8-2121.8c46.5-272.8,32.3-767.9-32.3-1028.6l-44.5-189.9L7538.6-745c373.9-373.8,424.4-418.3,446.6-388c48.5,64.7,187.9,448.6,246.5,677l58.6,228.3l351.6,10.1c363.7,10.1,424.4,24.3,503.2,113.2c90.9,103.1,99,151.6,99,567.9c0,450.6-8.1,487-149.6,602.2l-76.8,60.6l-363.7,10.1l-365.8,10.1l-56.6,212.2c-99,377.9-258.7,753.8-450.7,1050.8l-70.7,111.1l230.4,234.4c238.4,240.5,293,325.4,293,456.7c-2,135.4-64.7,228.3-345.5,503.2c-210.2,208.1-289,270.8-351.6,289c-192,52.5-256.6,20.2-545.6-262.7c-135.4-131.3-252.6-240.5-260.7-240.5c-8.1,0-54.5,28.3-105.1,62.7c-244.5,167.7-810.4,400.1-1133.7,464.8l-127.3,26.3v315.3c0,345.6-16.2,432.5-95,527.4c-103.1,121.3-173.8,139.4-592.1,139.4C4355.8,5036.6,4291.1,5030.5,4222.4,4998.2z" />
                <path d="M4485.1,1924.5c-181.9-28.3-272.8-58.6-272.8-97c0-18.2,155.6-190,345.6-377.9c210.2-208.1,359.7-375.9,384-424.4c52.5-111.2,50.5-295-4-406.2c-22.2-48.5-127.3-167.7-242.5-278.9c-171.8-165.7-216.2-198-313.2-226.3c-129.3-36.4-234.4-28.3-347.6,32.3c-42.4,20.2-220.3,183.9-398.1,361.7c-177.8,179.9-337.5,325.4-357.7,325.4c-74.8,0-103.1-444.6-46.5-717.4c88.9-420.3,408.2-818.4,806.3-1010.4c216.2-103.1,369.8-135.4,719.4-149.6c513.3-24.2,276.9,167.7,2364.3-1911.7c1994.5-1988.5,1845-1859.1,2142.1-1859.1c365.8,2,634.5,270.8,634.5,636.5c0,301.1,109.1,177.8-1843,2121.9C6429.2-437.8,6316-320.6,6251.3-187.2l-68.7,141.5l-12.1,394.1c-14.2,438.5-38.4,553.7-175.8,816.4c-90.9,173.8-327.4,428.4-503.2,537.5C5190.4,1894.2,4820.6,1975,4485.1,1924.5z M9415.9-3933.8c113.2-70.7,163.7-246.5,103.1-359.7c-16.2-34.4-60.6-86.9-97-117.2c-58.6-48.5-76.8-54.6-183.9-46.5s-129.3,16.2-187.9,80.8c-115.2,127.3-115.2,268.8-2,392C9143.1-3879.2,9296.7-3859,9415.9-3933.8z" />
              </g>
            </g>
          </svg>
          <p className="headerTitle">
            <FormattedMessage id="skill.skillheader" />
          </p>
        </div>
        <div className="divider"></div>
      </div>
      <div className="skillContentContainer">
        <div className="contentSkill row">
          <div className="content_left col-sm-4 col-12">
            <div className="colTitle">
              <FormattedMessage id="skill.title1" />
            </div>
            <p className="colSubTitle">
              <FormattedMessage id="skill.subtitle1" />
            </p>
            {programLanguageData.map((item, index) => (
              <div className="badge" key={index}>
                <img
                  className="skillbadge"
                  src={item.img}
                  alt=""
                  style={{ backgroundColor: item.colorBadge }}
                />
                <p
                  className="skillEntry"
                  style={{ backgroundColor: item.colorEntry }}
                >
                  {item.name}
                </p>
              </div>
            ))}
            <p className="colSubTitle">
              <FormattedMessage id="skill.subtitle2" />
            </p>
            <p className="skillEntry subSkill">
              <img className="flag" src={vnFlag} alt="vn" />
              <FormattedMessage id="skill.subskill1" />
            </p>
            <p className="skillEntry subSkill">
              <img className="flag" src={usFlag} alt="us" />
              <FormattedMessage id="skill.subskill2" />
            </p>
            <p className="skillEntry subSkill">
              <img className="flag" src={jpFlag} alt="jp" />
              <FormattedMessage id="skill.subskill3" />
            </p>
          </div>
          <div className="content_mid col-sm-4 col-12">
            <div className="colTitle">
              <FormattedMessage id="skill.title2" />
            </div>
            <p className="colSubTitle">
              <FormattedMessage id="skill.subtitle3" />
            </p>
            {frameworkData.map((item, index) => (
              <div className="badge" key={index}>
                <img
                  className="skillbadge"
                  src={item.img}
                  alt=""
                  style={{ backgroundColor: item.colorBadge }}
                />
                <p
                  className="skillEntry"
                  style={{ backgroundColor: item.colorEntry }}
                >
                  {item.name}
                </p>
              </div>
            ))}
            <p className="colSubTitle">
              <FormattedMessage id="skill.subtitle4" />
            </p>
            {databaseData.map((item, index) => (
              <div className="badge" key={index}>
                <img
                  className="skillbadge"
                  src={item.img}
                  alt=""
                  style={{ backgroundColor: item.colorBadge }}
                />
                <p
                  className="skillEntry"
                  style={{ backgroundColor: item.colorEntry }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="content_right col-sm-4 col-12">
            <div className="colTitle">
              <FormattedMessage id="skill.title3" />
            </div>
            <p className="colSubTitle">
              <FormattedMessage id="skill.subtitle5" />
            </p>
            {relevantData.map((item, index) => (
              <div className="badge" key={index}>
                <img
                  className="skillbadge"
                  src={item.img}
                  alt=""
                  style={{ backgroundColor: item.colorBadge }}
                />
                <p
                  className="skillEntry"
                  style={{ backgroundColor: item.colorEntry }}
                >
                  {item.name}
                </p>
              </div>
            ))}
            <p className="colSubTitle">
              <FormattedMessage id="skill.subtitle6" />
            </p>
            <p className="skillEntry subSkill">
              <FormattedMessage id="skill.subskill4" />
            </p>
            <p className="skillEntry subSkill">
              <FormattedMessage id="skill.subskill5" />
            </p>
            <p className="skillEntry subSkill">
              <FormattedMessage id="skill.subskill6" />
            </p>
            <p className="skillEntry subSkill">
              <FormattedMessage id="skill.subskill7" />
            </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Skills);

import React from "react";

import "./ExprnBoard.scss";

const ExprnBoard = ({ data }) => {
  return (
    <div className="exprnBoard container">
      <div className="boardStructure row">
        <div className="barBoard col-md-3 col-sm-5 col-5">
          <div className="joinNode"></div>
          <div className="exprnTime">{data.time}</div>
          <div className="exprnWork">
            {data.logo && (
              <img
                className={
                  data.id === 1 || data.id === 5
                    ? "img-company-c"
                    : "img-company"
                }
                src={data.logo}
                alt={data.company}
              />
            )}
          </div>
          <div className="sub-bar"></div>
        </div>

        <div className="exprnMonitor col-md-9 col-sm-12 col-12">
          <div className="monitorScreen container">
            <div className=" heading row">
              <div className="heading-project col-xl-3 col-md-2 col-4">
                Jobs
              </div>
              <div className="heading-role col-xl-9 col-md-10 col-8">
                My Responsibity
              </div>
            </div>
            {data.exprn.map((exprn, index) => (
              <div className="row" key={index}>
                <div className="col-project col-xl-3 col-md-2 col-4">
                  {exprn.project}
                </div>
                <div className="col-role col-xl-9 col-md-10 col-8">
                  {exprn.role.map((role, index) => (
                    <ul key={index}>
                      <li>
                        <span className="role-item">
                          {index !== 0 ? ` \u2022 ${role}` : role}
                        </span>
                      </li>
                    </ul>
                  ))}
                  {exprn.referLink && (
                    <a
                      className="role-link-item"
                      href={exprn.referLink}
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      {`\u2022 ${exprn.project} link`}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExprnBoard;

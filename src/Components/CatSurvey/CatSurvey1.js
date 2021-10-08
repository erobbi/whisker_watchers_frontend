import React from "react";
import { Link } from "react-router-dom";
import maxcat from "../../Images/max_portrait.png";

export default function CatSurvey1() {
  return (
    <div>
      <div className="orangeBackground">
        <div className="survey">
          <div className="survey_content">
            <div className="survey_content_inner">
              <div className="survey_conatent_main">
                <img src={maxcat} className="maxcat" />
                <h1 className="survey_headers">
                  <span>
                    Welcome to the new <em>Whisker Watchers</em> assessment.
                  </span>
                  <br />
                  <span>Let's get to know your cat.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <footer className="survey1_footer_background">
          <div className="survey_footer">
            <div className="survey_button_box">
              <div className="survey_button_box_inner">
                <Link to="/catsurvey/2">
                  <button className="primary_button">Next</button>
                </Link>
                {/* <Link to="/catsurveyalt/">
                  <button className="primary_button">Next</button>
                </Link> */}
                <Link to="/signup">
                  <a class="skip_survey_button">I'm ready to sign up</a>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

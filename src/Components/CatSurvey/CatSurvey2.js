import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CatSurvey2() {
  const [isNeutered, setIsNeutered] = useState("");

  return (
    <div>
      <div className="lightOrangeBackground">
        <div className="survey2">
          <div className="surveyNav">
            <Link to="/catsurvey/1">
              <button className="secondary_button_disabled">Back</button>
            </Link>
            <div className="questionNum">Question 1 of 3</div>
          </div>
          <div claName="questionBox">
            <span class="questions">Is your cat spayed/neutered?</span>
          </div>
          <div classname="optionsFlexContainerasfd">
            <div classname="optionsFlexContainer">
              <input
                id="1"
                type="radio"
                value="true"
                name="neutered"
                onChange={(e) => setIsNeutered(true)}
              />
              <label for="1" className="labelStyle">
                Yes
              </label>
            </div>
            <div>
              <input
                id="2"
                type="radio"
                value="false"
                name="neutered"
                onChange={(e) => setIsNeutered(false)}
              />
              <label for="2" className="labelStyle">
                No
              </label>
            </div>
            <br />
          </div>
          <div className="survey_footer">
            <div className="survey_button_box">
              <div className="survey_button_box_inner">
                <Link to="/catsurvey/3">
                  <button className="primary_button">Next</button>
                </Link>
                <Link to="/signup">
                  <a class="skip_survey_button">I'm ready to sign up</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

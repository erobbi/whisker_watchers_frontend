import React from 'react'
import { Link } from 'react-router-dom'
import CatCalculator from './CatCalculator';

export default function CatSurveyAlt() {
    return (
      <div>
        <div className="lightOrangeBackground">
          <div className="survey2">
            <div className="surveyNav">
              <Link to="/catsurvey/1">
                <button className="secondary_button_disabled">Back</button>
              </Link>
            </div>
            <div claName="questionBox">
              {/* <span class="questions">What is your cats current weight?</span> */}
            </div>
            <div classname="optionsFlexContainerasfd">
              <CatCalculator />
            </div>
            <div className="survey_footer">
              <div className="survey_button_box">
                <div className="survey_button_box_inner">
                  {/* <button className="primary_button">Learn More</button>
                  <Link to="/signup">
                    <a class="skip_survey_button">I'm ready to sign up</a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

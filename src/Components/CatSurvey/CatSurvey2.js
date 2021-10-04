import React, {useState} from "react";

export default function CatSurvey2() {
    const [isNeutered, setIsNeutered] = useState("");


  return (
    <div>
      <div className="lightOrangeBackground">
        <div className="survey2">
          <div className="surveyNav">
            <div>
              <button>Back</button>
            </div>
            <div className="questionNum">Question 1 of 3</div>
          </div>
          <div claName="questionBox">
            <span class="questions">Is your cat spayed/neutered?</span>
          </div>
          <div classname="options">
            <input
              className="inputStyle"
              type="radio"
              value="true"
              name="neutered"
              onChange={(e) => setIsNeutered(true)}
            />
            <label for="true" className="labelStyle">
              Yes
            </label>
            <input
              className="inputStyle"
              type="radio"
              value="false"
              name="neutered"
              onChange={(e) => setIsNeutered(false)}
            />
            <label for="false" className="labelStyle">
              No
            </label>
            <br />
            <br />
          </div>
          <div className="survey_button_box_inner">
            <button className="primary_button">Next</button>
            <a class="skip_survey_button">I'm ready to sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

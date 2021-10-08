import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import catBCSchart from "../../Images/catBCSchart.png";

export default function CatSurvey2() {
  const [pageNum, setPageNum] = useState(1);
  const [currentWeight, setCurrentWeight] = useState("");
  const [isNeutered, setIsNeutered] = useState("");
  const [BCS, setBCS] = useState(5);
  const [calculatedValues, setCalculatedValues] = useState({});
  const [hasResult, setHasResult] = useState(false);

  const BCSMarks = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  };

  function handleReset() {
    setHasResult(false);
    setCalculatedValues({});
    setCurrentWeight("");
    setIsNeutered("");
    setBCS("");
  }

  function handleSubmit(e) {
    e.preventDefault(e);

    fetch("/catcalculator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentWeight,
        isNeutered,
        BCS,
      }),
    })
      .then((res) => res.json())
      .then((obj) => {
        setCalculatedValues(obj);
        setHasResult(true);
      });
  }

  function Results() {
    return (
      <div>
        <h2>Cat Calculator Results</h2>
        <h3>{calculatedValues[0].message}</h3>
        <h3>{calculatedValues[0].messageCalories}</h3>
        <h3>Let's get your cat on the right footing.</h3>
        <Link to="/signup">
          <div style={{ padding: "10px" }}>
            <button className="primary_button">Take Action</button>
          </div>
        </Link>
        <div style={{ padding: "10px" }}>
          <Link to="/catsurvey/1">
            <button className="secondary_button_disabled">Try Again</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="lightOrangeBackground">
        <div className="survey2">
          <div className="surveyNav">
            {Object.keys(calculatedValues).length > 0 ? null : (
              <>
                {pageNum > 1 ? (
                  <button
                    onClick={() => setPageNum(pageNum - 1)}
                    className="secondary_button_disabled"
                  >
                    Back
                  </button>
                ) : (
                  <Link to="/catsurvey/1">
                    <button className="secondary_button_disabled">Back</button>
                  </Link>
                )}
                <div className="questionNum">Question {pageNum} of 3</div>
              </>
            )}
          </div>
          {Object.keys(calculatedValues).length > 0 ? (
            <Results />
          ) : (
            <>
              {pageNum == 1 ? (
                <>
                  <div claName="questionBox">
                    <span class="questions">Is your cat spayed/neutered?</span>
                  </div>
                  <div classname="standardFlexBox">
                    <div>
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
                </>
              ) : null}
              {pageNum == 2 ? (
                <>
                  <div claName="questionBox">
                    <span class="questions">
                      What is your cat's current weight?
                    </span>
                  </div>
                  <div classname="optionsFlexContainerasfd">
                    <div classname="optionsFlexContainer">
                      <form className="ui form">
                        <div classname="field">
                          <input
                            name="CurrentWeight"
                            type="number"
                            placeholder="Pet Weight (lbs)"
                            value={currentWeight}
                            onChange={(e) => {
                              setCurrentWeight(e.target.value);
                            }}
                          />
                        </div>
                      </form>
                    </div>
                    <br />
                  </div>
                </>
              ) : null}

              {pageNum == 3 ? (
                <>
                  <div claName="questionBox">
                    <div className="standardMargin">
                      <span class="questions">
                        What is your cat's Body Condition Score (BCS)?
                      </span>
                    </div>
                    <br />
                  </div>
                  <div classname="optionsFlexContainerasfd">
                    <div classname="optionsFlexContainer">
                      <div className="slider">
                        <img
                          className="bcschart"
                          src={catBCSchart}
                          alt="cat body condition score chart"
                          id="bcsChart"
                        />
                        <br />
                        <br />
                        <Slider
                          defaultValue={5}
                          min={1}
                          max={9}
                          step={0.5}
                          onChange={(e) => setBCS(e)}
                          marks={BCSMarks}
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <br />
                  </div>
                </>
              ) : null}
            </>
          )}

          {Object.keys(calculatedValues).length > 0 ? (
            <div className="survey_footer">
              <div className="survey_button_box">
                <div className="survey_button_box_inner"></div>
              </div>
            </div>
          ) : (
            <div className="survey_footer">
              <div className="survey_button_box">
                <div className="survey_button_box_inner">
                  {pageNum == 3 ? (
                    <button onClick={handleSubmit} className="primary_button">
                      Submit
                    </button>
                  ) : (
                    <button
                      onClick={() => setPageNum(pageNum + 1)}
                      className="primary_button"
                    >
                      Next
                    </button>
                  )}
                  <Link to="/signup">
                    <a class="skip_survey_button">I'm ready to sign up</a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

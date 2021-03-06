import React from "react";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import catBCSchart from "../../Images/catBCSchart.png";
import { Link } from "react-router-dom";

export default function CatCalculator({
  loggedIn,
  setLoggedIn,
  user,
  setUser,
}) {
  const [currentWeight, setCurrentWeight] = useState("");
  const [isNeutered, setIsNeutered] = useState("");
  const [BCS, setBCS] = useState("");
  const [idealPetWeight, setIdealPetWeight] = useState("");
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
    setIdealPetWeight("");
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
        idealPetWeight,
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
          <button className="secondary_button_disabled" onClick={handleReset}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="standardFlexBox">
        <div className="calculatorFlexBox">

          {Object.keys(calculatedValues).length > 0 ? (
            <Results />
            ) : (
              <div>
              <h2>Cat Calculator</h2>
              <form className="ui form" onSubmit={handleSubmit}>
                <div classname="field">
                  <label>Question 1: What is your cat's current weight?</label>
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
                <br />
                <div className="ui form">
                  <label>Question 2: Is your cat spayed/neutered? </label>
                  <br />
                  <input
                    type="radio"
                    value="true"
                    name="neutered"
                    onChange={(e) => setIsNeutered(true)}
                  />
                  <label for="true">Yes</label>
                  <input
                    type="radio"
                    value="false"
                    name="neutered"
                    onChange={(e) => setIsNeutered(false)}
                  />
                  <label for="false">No</label>
                </div>
                <br />

                {/* slider here using rc-slider  https://react-component.github.io/slider/?path=/story/rc-slider--handle */}
                <div className="slider">
                  <div>
                    Question 3: What is your cat's Body Condition Score (BCS)?
                  </div>
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
                <br />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Ideal Pet Weight (optional)"
                  id="idealPetWeight"
                  value={idealPetWeight}
                  onChange={(e) => setIdealPetWeight(e.target.value)}
                />
                <br />
                <br />
                <div style={{ padding: "20px" }}>
                  <button className="primary_button" type="submit">
                    Calculate
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import catBCSchart from "../Images/catBCSchart.jpg";

export default function CatCalculator() {
  const [currentWeight, setCurrentWeight] = useState("");
  const [isNeutered, setIsNeutered] = useState("");
  const [BCS, setBCS] = useState("");
  const [idealPetWeight, setIdealPetWeight] = useState("");
  
  const [showBCSChart, setShowBCSChart] = useState(false);
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
    setHasResult(false)
    setCalculatedValues({})
    setCurrentWeight("");
    setIsNeutered("");
    setBCS("");
    setIdealPetWeight("");
    setShowBCSChart(false)
    console.log("reset");
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
        setCalculatedValues(obj)
        setHasResult(true)
      })
  }


  return (
    <div>
      <div>Cat Calculator</div>

      <form onSubmit={handleSubmit}>
        <input
          name="CurrentWeight"
          type="number"
          placeholder="Pet Weight (lbs)"
          value={currentWeight}
          onChange={(e) => {
            setCurrentWeight(e.target.value);
          }}
        />
        <br />
        <br />
        <div>Is your cat spayed/neutered?</div>
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
        <br />
        <br />

        {/* slider here using rc-slider  https://react-component.github.io/slider/?path=/story/rc-slider--handle 
          materialUI also has a nice slider https://mui.com/components/slider/#discrete-sliders */}
        <div className="slider">
          <div>Body Condition Score</div>
          <button onClick={() => setShowBCSChart(!showBCSChart)}>Help</button>
          {showBCSChart ? (
            <img
              src={catBCSchart}
              alt="cat body condition score chart"
              id="bcsChart"
            />
          ) : null}
          <Slider
            defaultValue={5}
            min={1}
            max={9}
            step={0.5}
            onChange={(e) => setBCS(e)}
            marks={BCSMarks}
            style={{ width: "100%" }}
          />
          {/* <Range /> */}
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
        <button type="submit">Calculate</button>
      </form>

      <br />
      <button onClick={handleReset}>Reset</button>

      {Object.keys(calculatedValues).length > 0 ? (
      <div>
        <div>Result:</div>
        <div>{calculatedValues[0].message}</div>
        <div>Suggestion:</div>
        <div>Reduce your cats daily intake to {calculatedValues[0].suggestedCalories}</div>
      </div> )
      : null}
    </div>
  );
}

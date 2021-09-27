import React from 'react'
import { useState } from 'react'
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default function CatCalculator() {
    const [petWeight, setPetWeight] = useState("");
    const [isNeutered, setIsNeutered] = useState("");
    const [BCS, setBCS] = useState("");
    const [idealPetWeight, setIdealPetWeight] = useState("");

    const BCSMarks = {1: "1", 
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9"}

    function handleSubmit(e) {
        e.preventDefault(e);
        console.log('submitted')
        console.log({petWeight})
        console.log({isNeutered})
        console.log({BCS})
        console.log({ idealPetWeight })
    }
    return (
      <div>
        <div>Cat Calculator</div>

        <form onSubmit={handleSubmit}>
          <input
            name="petWeight"
            type="number"
            placeholder="Pet Weight (lbs)"
            value={petWeight}
            onChange={(e) => {
              setPetWeight(e.target.value);
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
            <Slider
              defaultValue={5}
              min={1}
              max={9}
              step={1}
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
      </div>
    );
}

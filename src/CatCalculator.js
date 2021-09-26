import React from 'react'
import { useState } from 'react'

export default function CatCalculator() {
    const [petWeight, setPetWeight] = useState("");
    const [isNeutered, setIsNeutered] = useState(true);
    const [bodyConditionScore, setBodyConditionScore] = useState("");
    const [idealPetWeight, setIdealPetWeight] = useState("");


    function handleSubmit(e) {
        e.preventDefault(e);
        console.log('submitted')
    }
    return (
      <div>
        <div>Cat Calculator</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pet Weight (lbs)"
            id="petWeight"
            value={petWeight}
            onchange={(e) => setPetWeight(e.target.value)}
          />
          <br />
          <br />
          <div>Is your cat spayed/neutered?</div>
          <input
            type="radio"
            value="true"
            name="neutered"
            onchange={(e) => setIsNeutered(true)}
          />
          <label for="true">Yes</label>
          <input
            type="radio"
            value="false"
            name="neutered"
            onchange={(e) => setIsNeutered(false)}
          />
          <label for="false">No</label>
          <br />
          <br />{" "}
          <input
            type="text"
            placeholder="Ideal Pet Weight (optional)"
            id="idealPetWeight"
            value={idealPetWeight}
            onchange={(e) => setIdealPetWeight(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
}

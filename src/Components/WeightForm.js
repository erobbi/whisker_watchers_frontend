import React, { useState } from "react";

export default function WeightForm({ id }) {
  const [weightEntry, setWeightEntry] = useState("");
  const [errors, setErrors] = useState([]);

  function handleWeightSubmit(e) {
    e.preventDefault(e);
    const cat_id = id;
    fetch("/weights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight: weightEntry,
        cat_id,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setWeightEntry("");
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <form className="ui form" onSubmit={handleWeightSubmit}>
        <input
          type="text"
          placeholder="latest weight (in pounds)"
          id="weightEntry"
          value={weightEntry}
          onChange={(e) => setWeightEntry(e.target.value)}
        />
        <div className="standardMargin">
          <button className="primary_button" type="submit">Add Weight</button>
        </div>
      </form>
    </div>
  );
}

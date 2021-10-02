import React, { useState } from "react";

export default function WeightForm({ cat, viewAddWeight, setViewAddWeight }) {
  const [weightEntry, setWeightEntry] = useState("");
  const [errors, setErrors] = useState([]);

  function handleWeightSubmit(e) {
    e.preventDefault(e);
    const cat_id = cat.id;
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
          console.log(data);
          setWeightEntry("");
          setViewAddWeight(!viewAddWeight);
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <form onSubmit={handleWeightSubmit}>
        <input
          type="text"
          placeholder="latest weight (in pounds)"
          id="weightEntry"
          value={weightEntry}
          onChange={(e) => setWeightEntry(e.target.value)}
        />
        <button type="submit">Add Weight</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import WeightRender from "./WeightRender";

export default function CatRender({ cat, cats, setCats }) {
  const [weightEntry, setWeightEntry] = useState("");
  const [errors, setErrors] = useState([]);
  const [viewWeightRender, setViewWeightRender] = useState(false);
  const [viewAddWeight, setViewAddWeight] = useState(false);

  function handleCatClick(e) {
    e.preventDefault();
    if (viewWeightRender == false) {
      setViewWeightRender(true);
    } else {
      setViewWeightRender(false);
    }
  }

  function handleDeleteClick(id) {
    fetch(`/cats/${id}`, {
      method: "DELETE",
    });
    const remainingCats = [...cats].filter((cat) => cat.id != id);
    setCats(remainingCats);
  }

  function WeightForm() {
    function handleWeightSubmit(e) {
      e.preventDefault();
      const cat_id = cat.id;
      fetch("/weights/", {
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
            setViewAddWeight(false);
          });
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });
    }
    return (
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
    );
  }

  return (
    <div>
      <img id={cat.id} className="catAvatar" src={cat.cat_url} />
      <div id={cat.id}>
        {cat.name} Age: {cat.age}
      </div>
      <button id={cat.id} onClick={handleCatClick}>
        View
      </button>
      <button id={cat.id} onClick={() => handleDeleteClick(cat.id)}>
        Delete
      </button>
      <br />
      <br />
      {viewWeightRender ? (
        <WeightRender
          cat_id={cat.id}
          viewWeightRender={viewWeightRender}
          setViewWeightRender={setViewWeightRender}
        />
      ) : null}
    <button id={cat.id} onClick={() => setViewAddWeight(!viewAddWeight)}>Add Weight</button>
     {viewAddWeight ? <WeightForm /> : null}
      <br />
      <br />
      <br />
    </div>
  );
}

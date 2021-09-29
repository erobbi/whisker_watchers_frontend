import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WeightTracker() {
  const [cats, setCats] = useState({});
  const [catsFetched, setCatsFetched] = useState(false);
  const [weightEntry, setWeightEntry] = useState("");
  const [showWeightUpdater, setShowWeightUpdater] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState("");
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch("/cats").then((res) => {
      if (res.ok) {
        res.json().then((cats) => {
          setCats(cats);
          setCatsFetched(true);
        });
      }
    });
  }, []);

  function handleCatClick(e) {
    e.preventDefault();
    console.log(e.target.id);
  }

  function handleAddWeight(e) {
    e.preventDefault();
    console.log(e.target.id);
  }

  function handleWeightSubmit(e) {
    e.preventDefault()
    fetch("/weights/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            weight: weightEntry,
            cat_id: selectedCatId,
        }),
    })
    .then(res => {
        if (res.ok) {
            res.json().then((data) => {
                setSelectedCatId(0)
                setWeightEntry("")
            })
        } else {
            res.json().then((err) => setErrors(err.errors))
        }
    })
}

function handleDeleteClick(id){
    fetch(`/cats/${id}`, {
        method: 'DELETE'
    })
    const remainingCats = [...cats].filter(cat => cat.id != id)
    setCats(remainingCats)
}

  function WeightForm() {
    return (
      <form onSubmit={handleWeightSubmit}>
        <input
          type="text"
          placeholder="latest weight (in pounds)"
          id="weightEntry"
          value={weightEntry}
          onChange={(e) => setWeightEntry(e.target.value)}
        />
        <select
          value={selectedCatId}
          onChange={(e) => setSelectedCatId(e.target.value)}
        >
          <option key={0} value={0}>
            Select Cat
          </option>
          {cats.map((cat) => {
            return (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            );
          })}
        </select>
        <button type="submit">Add Weight</button>
      </form>
    );
  }

  return (
    <div>
      <div>Weight Tracker</div>
      <br />
      <br />
      {catsFetched ? (
        <>
          <div>Your Pets:</div>
          {cats.map((cat) => {
            return (
              <>
                <Link
                  to={`/cats/${cat.id}`}
                  id={cat.id}
                  onClick={handleCatClick}
                >
                  {cat.name} Age: {cat.age}
                </Link>
                <button id={cat.id} onClick={() => handleDeleteClick(cat.id)}>Delete</button>
                <br />
              </>
            );
          })}
        </>
      ) : (
        <div>You have not entered any pets.</div>
      )}
      <br />
      <br />
      {catsFetched ? <WeightForm /> : null}
      <br />
      <br />

      <Link to="/new_pet">Add new Pet</Link>
    </div>
  );
}

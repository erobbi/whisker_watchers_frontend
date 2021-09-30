import WeightRender from "./WeightRender";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WeightTracker({ user }) {
  const [cats, setCats] = useState({});
  const [catsFetched, setCatsFetched] = useState(false);
  const [weightEntry, setWeightEntry] = useState("");
  const [selectedCatId, setSelectedCatId] = useState("");
  const [viewWeightRender, setViewWeightRender] = useState(false);
  const [viewCatId, setViewCatId] = useState("");
  const [errors, setErrors] = useState([]);

  console.log(user.cats);
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
    if (viewWeightRender == false) {
      setViewCatId(e.target.id);
      setViewWeightRender(true);
    } else {
      setViewCatId("");
      setViewWeightRender(false);
    }
  }

  function handleWeightSubmit(e) {
    e.preventDefault();
    fetch("/weights/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight: weightEntry,
        cat_id: selectedCatId,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setSelectedCatId(0);
          setWeightEntry("");
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleDeleteClick(id) {
    fetch(`/cats/${id}`, {
      method: "DELETE",
    });
    const remainingCats = [...cats].filter((cat) => cat.id != id);
    setCats(remainingCats);
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
          {Object.keys(user.cats).length > 0 ? (
            <>
              {user.cats.map((cat) => {
                return (
                  <>
                    <img id={cat.id} className="catAvatar" src={cat.cat_url} />
                    <div id={cat.id}>
                      {cat.name} Age: {cat.age}
                    </div>
                    <button id={cat.id} onClick={handleCatClick}>
                      View
                    </button>
                    <button
                      id={cat.id}
                      onClick={() => handleDeleteClick(cat.id)}
                    >
                      Delete
                    </button>
                    <br />
                    <br />
                  </>
                );
              })}
              <WeightForm />
            </>
          ) : (
            <div>You have not added any cats.</div>
          )}
        </>
      ) : (
        <div>You have not entered any pets.</div>
      )}
      <br />
      <br />
      {viewWeightRender ? (
        <WeightRender
          cat_id={viewCatId}
          viewWeightRender={viewWeightRender}
          setViewWeightRender={setViewWeightRender}
        />
      ) : null}
      <br />
      <br />

      <Link to="/new_pet">Add new Pet</Link>
    </div>
  );
}

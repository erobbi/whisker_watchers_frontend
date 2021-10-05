import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import WeightRender from "./WeightRender";
import WeightForm from "./WeightForm";

export default function CatRender({ cat, cats, setCats }) {
  const [viewWeightRender, setViewWeightRender] = useState(false);
  const [viewAddWeight, setViewAddWeight] = useState(false);
  let catId = useParams();
  const [viewDeleteConfirmation, setViewDeleteConfirmation] = useState(false);


  function handleDeleteClick(id) {
    fetch(`/cats/${id}`, {
      method: "DELETE",
    });
    const remainingCats = [...cats].filter((cat) => cat.id !== id);
    setCats(remainingCats);
  }

  

  return (
    <div className="petcard">
      <Link to={`/cats/${cat.id}`}>
        <img id={cat.id} className="catAvatar" src={cat.cat_url} />
      </Link>
      <p id={cat.id}>
        <h3>{cat.name}</h3> Age: {cat.age}
      </p>
      <Link to={`/cats/${cat.id}`}>View Stats</Link>
      <br />
      {viewDeleteConfirmation ? <button id={cat.id} onClick={() => setViewDeleteConfirmation(!viewDeleteConfirmation)}>
       Cancel Delete
      </button> :  <button id={cat.id} onClick={() => setViewDeleteConfirmation(!viewDeleteConfirmation)}>
        Delete
      </button>}
      {viewDeleteConfirmation ? <button id={cat.id} onClick={() => handleDeleteClick(cat.id)}>
        Confirm Deletion
      </button> : null }
      <br />
      <button
        id={cat.id}
        onClick={() => {
          setViewAddWeight(!viewAddWeight);
        }}
      >
        Add Weight
      </button>
      {viewAddWeight ? (
        <WeightForm
          cat={cat}
          viewAddWeight={viewAddWeight}
          setViewAddWeight={setViewAddWeight}
        />
      ) : null}
    </div>
  );
}

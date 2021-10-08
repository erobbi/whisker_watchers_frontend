import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import WeightRender from "./WeightRender";
import WeightForm from "./WeightForm";
import noAvatar from "../Images/anonymousCat.jpg";

export default function CatRender({ cat, cats, setCats }) {
  const [viewWeightRender, setViewWeightRender] = useState(false);
  const [viewAddWeight, setViewAddWeight] = useState(false);
  const [viewDeleteConfirmation, setViewDeleteConfirmation] = useState(false);
  let catId = useParams();

  return (
    <div className="petcard">
      <Link to={`/cats/${cat.id}`}>
        {cat.cat_url.length > 3 ? (
            <img id={cat.id} className="catAvatar" src={cat.cat_url} />
        ) : (
            <img id={cat.id} className="catAvatar" src={noAvatar} />
        )}
      </Link>
      <p id={cat.id}>
        <h3>{cat.name}</h3> Age: {cat.age}
      </p>
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

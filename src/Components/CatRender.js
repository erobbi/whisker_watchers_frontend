import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import WeightRender from "./WeightRender";
import WeightForm from "./WeightForm";

export default function CatRender({ cat, cats, setCats }) {
  const [viewWeightRender, setViewWeightRender] = useState(false);
  const [viewAddWeight, setViewAddWeight] = useState(false);
  let catId = useParams();
  const [selectedCatId, setSelectedCatId] = useState("");


  function handleDeleteClick(id) {
    fetch(`/cats/${id}`, {
      method: "DELETE",
    });
    const remainingCats = [...cats].filter((cat) => cat.id !== id);
    setCats(remainingCats);
  }

  

  return (
    <div>
      <Link to={`/cats/${cat.id}`}>
        <img id={cat.id} className="catAvatar" src={cat.cat_url} />
      </Link>
      <div id={cat.id}>
        {cat.name} Age: {cat.age}
      </div>
      <Link to={`/cats/${cat.id}`}>View Stats</Link>
      <br />
      <button id={cat.id} onClick={() => setViewWeightRender(!viewWeightRender)}>
        View
      </button>
      <button id={cat.id} onClick={() => handleDeleteClick(cat.id)}>
        Delete
      </button>
      <br />
      {viewWeightRender ? (
        <WeightRender
          cat_id={cat.id}
          viewWeightRender={viewWeightRender}
          setViewWeightRender={setViewWeightRender}
        />
      ) : null}
      <button id={cat.id} onClick={() => {setViewAddWeight(!viewAddWeight)}}>
        Add Weight
      </button>
      {viewAddWeight ? <WeightForm
          cat={cat}
          viewAddWeight={viewAddWeight}
          setViewAddWeight={setViewAddWeight}/> : null}
      <br />
      <br />
      <br />
    </div>
  );
}

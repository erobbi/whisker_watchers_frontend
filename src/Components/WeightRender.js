import React, { useState, useEffect } from "react";
import WeightEntry from "./WeightEntry";

export default function WeightRender({ cat_id, viewWeightRender, setViewWeightRender }) {
  const [cat, setCat] = useState({});
  const [catFetched, setCatFetched] = useState(false);

  useEffect(() => {
    fetch(`/cats/${cat_id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCat(data);
          setCatFetched(true);
        });
      }
    });
  }, [cat_id]);
  return (
    <div>
      {catFetched ? (
        <div>
          <div>WeightRender</div>
          <div>{cat.name}</div>
          <div>Weights:</div>
          {cat.weights.map((entry) => {
            return <WeightEntry entry={entry} />
          })}
        </div>
      ) : null}
    </div>
  );
}

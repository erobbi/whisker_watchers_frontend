import React, { useState, useEffect } from "react";

export default function WeightRender({ cat_id, viewWeightRender, setViewWeightRender }) {
  console.log(cat_id);
  const [cat, setCat] = useState({});
  const [catFetched, setCatFetched] = useState(false);
  useEffect(() => {
    fetch(`/cats/${cat_id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCat(data);
          setCatFetched(true);
          console.log({cat})
        });
      }
    });
  }, []);
  return (
    <div>
      {catFetched ? (
        <div>
          <div>WeightRender</div>
          <div>{cat.name}</div>
          <div>Weights:</div>
          {cat.weights.map((entry) => {
            return <div>{entry.weight} lbs on {entry.created_at}</div>;
          })}
          {/* <button onClick={setViewWeightRender(!viewWeightRender)}>Close</button> */}
        </div>
      ) : null}
    </div>
  );
}

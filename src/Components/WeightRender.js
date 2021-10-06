import React, { useState, useEffect } from "react";
import WeightEntry from "./WeightEntry";

export default function WeightRender({cat_id, viewWeightRender, setViewWeightRender }) {
  const [cat, setCat] = useState([]);
  const [catFetched, setCatFetched] = useState(false);
  const [errors, setErrors]=useState([])
  useEffect(() => {
    fetch(`/cats/${cat_id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCat(data);
          setCatFetched(true);
        });
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    });
  }, []);

  return (
    <div>
      {cat ? (
        <div>
          <h4>Weights:</h4>
          {cat.weights ? (<>{cat.weights.map((entry) => {
            return <WeightEntry entry={entry} />
          })}</>) : null}
        </div>
      ) : null}
      {errors
        ? errors.map((err) => (
            <h3 style={{ color: "red" }} key={err}>
              {err}
            </h3>
          ))
        : null}
    </div>
  );
}

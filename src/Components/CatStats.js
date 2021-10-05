import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import WeightChart from "./WeightChart";
import WeightForm from "./WeightForm";
import WeightRender from "./WeightRender";

export default function CatStats() {
  const { id } = useParams();
  const [cat, setCat] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const [reRender, setReRender] = useState(0)

  useEffect(() => {
    fetch(`/cats/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((cat) => {
          setCat(cat);
          setIsLoaded(true);
          history.push(`/cats/${id}`);
        });
      }
    });
  }, []);

  return (
    <div className="standardBackground">
        <h2>Cat Stats for {cat.name}</h2>
        <h3>Current weight: {cat.current_weight} lbs</h3>
      <div className="catStats">
        <div>
          <WeightChart isLoaded={isLoaded} cat={cat} reRender={reRender}/>
        </div>
        <div>
          <WeightRender cat_id={id} />
          <br />
          <br />
          <WeightForm id={id} reRender={reRender} setReRender={setReRender} />
        </div>
      </div>
    </div>
  );
}

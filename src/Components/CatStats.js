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
  const [currentWeight, setCurrentWeight] = useState();
  
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
      {isLoaded ? (
        <div>
          <h2>Cat Stats for {cat.name}</h2>
          <h4>BCS: {cat.bcs}</h4>
          <h4>Current weight: {cat.currentWeight} lbs</h4>
          <h4>Goal weight: {cat.goalWeight} lbs</h4>
          <h4>Current Calories Per Day: {cat.caloriesPerDay} kCal</h4>
          <h4>Suggested Calories Per Day: {cat.suggestedCaloriesPerDay} kCal</h4>

          <div className="catStats">
            <div>
              <WeightChart isLoaded={isLoaded} cat={cat} reRender={reRender} />
            </div>
            <div>
              <WeightRender cat_id={id} />
              <br />
              <br />
              <WeightForm
                id={id}
                reRender={reRender}
                setReRender={setReRender}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

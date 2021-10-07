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
  const [reRender, setReRender] = useState(0);
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
        <div style={{ padding: "20px" }}>
          <div>
            <h2>Cat Stats for {cat.name}</h2>
            <img id={cat.id} className="catAvatarSmall" src={cat.cat_url} />
          </div>
          <div className="catStats">
            <div className="catStatsBox">
              <div className="textFlexContainer">
                <p className="catStatsText">Goal Weight: </p>
                <p className="catStatsText">{cat.goalWeight} lbs</p>
              </div>
              <div className="textFlexContainer">
                <p className="catStatsText">Current Weight: </p>
                <p className="catStatsText">{cat.currentWeight} lbs</p>
              </div>
              <div className="textFlexContainer">
                <p className="catStatsText">Body Condition Score:</p>
                <p className="catStatsText">{cat.bcs}</p>
              </div>
              <div className="textFlexContainer">
                <p className="catStatsText">Current Calories/Day:</p>
                <p className="catStatsText">{cat.caloriesPerDay} Cal</p>
              </div>
              <div className="textFlexContainer">
                <p className="catStatsText">Suggested Calories/Day:</p>
                <p className="catStatsText">
                  {cat.suggestedCaloriesPerDay} Cal
                </p>
              </div>
              <WeightForm
                id={id}
                reRender={reRender}
                setReRender={setReRender}
              />
            </div>
            <div className="catStatsBox">
              <WeightChart isLoaded={isLoaded} cat={cat} reRender={reRender} />
            </div>
          </div>
          {/* <div>
            <WeightRender cat_id={id} />
            <br />
            <br />
            <WeightForm id={id} reRender={reRender} setReRender={setReRender} />
          </div> */}
        </div>
      ) : null}
    </div>
  );
}

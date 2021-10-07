import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import WeightChart from "./WeightChart";
import WeightForm from "./WeightForm";
import WeightRender from "./WeightRender";
import noAvatar from "../Images/anonymousCat.jpg";


export default function CatStats() {
  const { id } = useParams();
  const [cat, setCat] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const [reRender, setReRender] = useState(0);
  const [currentWeight, setCurrentWeight] = useState();
  const [viewWeightRender, setViewWeightRender] = useState(false);
  const [viewAddWeight, setViewAddWeight] = useState(false);
  const [viewDeleteConfirmation, setViewDeleteConfirmation] = useState(false);
  const [hasWeights, setHasWeights] = useState(false);

  useEffect(() => {
    fetch(`/cats/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((cat) => {
          setCat(cat);
          setIsLoaded(true);
          history.push(`/cats/${id}`);
          if (cat.weights.length > 0) {
            setHasWeights(true);
          }
        });
      }
    });
  }, []);

  function handleDeleteClick(id) {
    fetch(`/cats/${id}`, {
      method: "DELETE",
    });
    history.push("/yourpets");
    // const remainingCats = [...cats].filter((cat) => cat.id !== id);
    // setCats(remainingCats);
  }

  return (
    <div className="standardBackground">
      {isLoaded ? (
        <div style={{ padding: "20px" }}>
          <div>
            <h2>Cat Stats for {cat.name}</h2>
            {cat.cat_url.length > 3 ? (
              <img id={cat.id} className="catAvatar" src={cat.cat_url} />
            ) : (
              <img id={cat.id} className="catAvatar" src={noAvatar} />
            )}
          </div>
          {hasWeights ? (
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
              </div>
              <div className="catStatsBox">
                <WeightChart
                  isLoaded={isLoaded}
                  cat={cat}
                  reRender={reRender}
                />
              </div>
            </div>
          ) : (
            <p>You have not added any weights!</p>
          )}
          <div className="catStatsFlexContainer">
            <div className="standardMargin">
              <WeightForm
                id={id}
                reRender={reRender}
                setReRender={setReRender}
              />
            </div>
            <div className="standardMargin">
              {viewDeleteConfirmation ? (
                <button
                  id={cat.id}
                  onClick={() =>
                    setViewDeleteConfirmation(!viewDeleteConfirmation)
                  }
                >
                  Cancel Delete
                </button>
              ) : (
                <button
                  id={cat.id}
                  onClick={() =>
                    setViewDeleteConfirmation(!viewDeleteConfirmation)
                  }
                >
                  Delete Cat
                </button>
              )}
              {viewDeleteConfirmation ? (
                <button id={cat.id} onClick={() => handleDeleteClick(cat.id)}>
                  Confirm Deletion
                </button>
              ) : null}
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

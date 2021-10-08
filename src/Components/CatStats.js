import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import WeightChart from "./WeightChart";
import WeightForm from "./WeightForm";
import WeightRender from "./WeightRender";
import noAvatar from "../Images/anonymousCat.jpg";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CatStats() {
  const { id } = useParams();
  const [cat, setCat] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const [currentWeight, setCurrentWeight] = useState();
  const [viewWeightRender, setViewWeightRender] = useState(false);
  const [viewAddWeight, setViewAddWeight] = useState(false);
  const [viewDeleteConfirmation, setViewDeleteConfirmation] = useState(false);
  const [hasWeights, setHasWeights] = useState(false);

  const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(!open);
    };

    const handleClose = () => {
      setOpen(false);
    };

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
                <WeightChart isLoaded={isLoaded} cat={cat} />
              </div>
            </div>
          ) : (
            <p>You have not added any weights!</p>
          )}
          <div className="catStatsFlexContainer">
            <div className="standardMargin">
              <WeightForm id={id} />
            </div>
            <div className="standardMargin">
              <WeightRender cat_id={id} />
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
                  className="secondary_button_disabled"
                  id={cat.id}
                  onClick={() =>
                    // setViewDeleteConfirmation(!viewDeleteConfirmation)
                    setOpen(!open)
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
          <div></div>
        </div>
      ) : null}
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are You Sure?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you really want to delete {cat.name}? This process cannot be
              undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              className="secondary_button_disabled"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="primary_button"
              onClick={() => handleDeleteClick(cat.id)}
            >
              Delete
            </button>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
}

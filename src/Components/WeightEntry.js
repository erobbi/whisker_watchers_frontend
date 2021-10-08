import React, { useState, useEffect } from "react";
import EditWeightForm from "./EditWeightForm";
import edit_button from "../Images/icons8-edit-24.png";


export default function WeightEntry({ entry }) {
  const [viewUpdateWeight, setViewUpdateWeight] = useState(false);
  const [weight, setWeight] = useState(entry.weight);
  return (
    <div>
      {viewUpdateWeight ? (
        <EditWeightForm
          id={entry.id}
          weight={weight}
          setWeight={setWeight}
          viewUpdateWeight={viewUpdateWeight}
          setViewUpdateWeight={setViewUpdateWeight}
        />
      ) : (
        <div className="standardFlexBox">
          <div>
            {entry.formattedDate}: {weight} lbs
          </div>
          <div>
            <img
              id={entry.id}
              src={edit_button}
              onClick={() => setViewUpdateWeight(!viewUpdateWeight)}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
}

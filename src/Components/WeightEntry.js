import React, { useState, useEffect } from "react";
import EditWeightForm from './EditWeightForm'

export default function WeightEntry({ entry }) {
  const [viewUpdateWeight, setViewUpdateWeight] = useState(false);
  const [weight, setWeight] = useState(entry.weight)

  return (
    <div>
      <div>
        {weight} lbs on {entry.created_at}
      </div>
      <button
        id={entry.id}
        onClick={() => setViewUpdateWeight(!viewUpdateWeight)}
      >
        Edit
      </button>
      {viewUpdateWeight ? (
        <EditWeightForm
          id = {entry.id}
          weight={weight}
          setWeight={setWeight}
          viewUpdateWeight={viewUpdateWeight}
          setViewUpdateWeight={setViewUpdateWeight}
        />
      ) : null}
    </div>
  );
}

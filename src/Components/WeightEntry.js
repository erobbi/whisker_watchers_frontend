import React, { useState, useEffect } from "react";

export default function WeightEntry({ entry }) {
  const [viewUpdateWeight, setViewUpdateWeight] = useState(false);
  const [updatedWeight, setUpdatedWeight] = useState(entry.weight);

  function EditWeightForm() {
    function handleEditSubmit(e) {
      e.preventDefault();
      const id = e.target.id;
      fetch(`/weights/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          weight: updatedWeight
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
          });
        }
      });
    }
    return (
      <form onSumbit={handleEditSubmit}>
        <input
          type="text"
          id={entry.id}
          value={updatedWeight}
          onChange={(e) => setUpdatedWeight(e.target.value)}
        />
        <button type="submit">Update Weight</button>
      </form>
    );
  }
  return (
    <div>
      <div>
        {entry.weight} lbs on {entry.created_at}
      </div>
      <button id={entry.id} onClick={() => setViewUpdateWeight(!viewUpdateWeight)}>Edit</button>
      {viewUpdateWeight ? <EditWeightForm /> : null}

    </div>
  );
}

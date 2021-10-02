import React, {useState} from "react";

export default function EditWeightForm({ id, weight, setWeight, viewUpdateWeight, setViewUpdateWeight }) {
  const [updatedWeight, setUpdatedWeight] = useState(weight);
  function handleEditSubmit(e) {
    e.preventDefault();
    fetch(`/weights/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight: updatedWeight,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
            setWeight(data.weight)
          setViewUpdateWeight(!viewUpdateWeight)
        });
      }
    });
  }
  return (
    <form onSubmit={handleEditSubmit}>
      <input
        type="text"
        id="updatedWeight"
        value={updatedWeight}
        onChange={(e) => setUpdatedWeight(e.target.value)}
      />
      <button type="submit">Update Weight</button>
    </form>
  );
}

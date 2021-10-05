import React from 'react'

export default function Results() {
    return (
      <div>
        <h2>Results</h2>
        <br />
        <div>{calculatedValues[0].message}</div>
        <br />
        <div>{calculatedValues[0].messageCalories}</div>
        <button className="secondary_button_disabled" onClick={handleReset}>
          Reset
        </button>
      </div>
    );
}

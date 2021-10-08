import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import catBCSchart from "../Images/catBCSchart.png";

export default function NewPetForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cat_url, setCat_url] = useState("");
  const [caloriesPerDay, setCaloriesPerDay] = useState("");
  const ages = Array.from(Array(31).keys());
  const [isNeutered, setIsNeutered] = useState("");

  ages.shift();
  const [errors, setErrors] = useState([]);
  const [weight, setWeight] = useState("");
  const [bcs, setBcs] = useState(5);
  const history = useHistory();

  const BCSMarks = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        cat_url,
        caloriesPerDay,
        bcs,
        weight,
        isNeutered,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((cat) => {
          history.push("/weight_tracker");
          const cat_id = cat.id;
          fetch("/weights", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              weight,
              cat_id,
            }),
          }).then((res) => {
            if (res.ok) {
              res.json().then((data) => {
                history.push("/yourpets");
              });
            } else {
              res.json().then((err) => setErrors(err.errors));
            }
          });
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="standardBackground">
      <h2>New Pet Form</h2>
      <div className="standardFlexBox">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="standardFlexBox">
            <div style={{ width: "10vw" }}>
              <div className="field">
                <label>Pet Name</label>
                <input
                  type="text"
                  placeholder="pet name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Age</label>
                <select value={age} onChange={(e) => setAge(e.target.value)}>
                  <option key={0} value={"Age"}>
                    Age
                  </option>
                  {ages.map((age) => {
                    return (
                      <option key={age} value={age}>
                        {age}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="field">
                <label>Link to Cute Cat Picture</label>
                <input
                  type="text"
                  placeholder="Cat image URL"
                  id="cat_url"
                  value={cat_url}
                  onChange={(e) => setCat_url(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Current Estimated Calories/Day</label>
                <input
                  type="text"
                  placeholder="calories per day (in Cal)"
                  id="caloriesPerDay"
                  value={caloriesPerDay}
                  onChange={(e) => setCaloriesPerDay(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Current Weight</label>
                <input
                  type="text"
                  placeholder="Weight (in lbs)"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
          </div>
          <br />

          <div className="ui form">
            <label>
              <b>Is your cat spayed/neutered?</b>
            </label>
            <br />
            <input
              type="radio"
              value="true"
              name="neutered"
              onChange={(e) => setIsNeutered(true)}
            />
            <label for="true">Yes</label>
            <input
              type="radio"
              value="false"
              name="neutered"
              onChange={(e) => setIsNeutered(false)}
            />
            <label for="false">No</label>
          </div>
          <br />
          <div className="field">
            <label>Body Condition Score (BCS)</label>
            <img
              className="bcschart"
              src={catBCSchart}
              alt="cat body condition score chart"
              id="bcsChart"
            />
            <Slider
              defaultValue={5}
              min={1}
              max={9}
              step={0.5}
              onChange={(e) => setBcs(e)}
              marks={BCSMarks}
              style={{ width: "100%" }}
            />
            <br />
          </div>
          <button className="primary_button" type="submit">
            Add Pet
          </button>
        </form>
      </div>
    </div>
  );
}

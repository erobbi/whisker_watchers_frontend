import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function NewPetForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(""); 
    const [cat_url, setCat_url] = useState("");
    const [food_per_day, setFood_per_day] = useState("");
    const ages = Array.from(Array(31).keys())
    ages.shift()
    const [errors, setErrors] = useState([]);
    const [weight, setWeight] = useState("");
    const history = useHistory();

    function handleSubmit(e){
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
                food_per_day,
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((cat)=>{
                    history.push("/weight_tracker")
                    console.log(cat)
                    const cat_id=cat.id
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
                            });
                          } else {
                            res.json().then((err) => setErrors(err.errors));
                          }
                        });
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
      <div>
        <div>New Pet Form</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="pet name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
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
          <br />
          <br />
          <input
            type="text"
            placeholder="Cat image URL"
            id="cat_url"
            value={cat_url}
            onChange={(e) => setCat_url(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="food per day (in cups)"
            id="food_per_day"
            value={food_per_day}
            onChange={(e) => setFood_per_day(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Weight (in lbs)"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
}

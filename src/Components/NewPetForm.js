import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function NewPetForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(""); 
    const ages = Array.from(Array(31).keys())
    ages.shift()
    const [errors, setErrors] = useState([]);
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
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((cat)=>{
                    history.push("/weight_tracker")
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
            <br/>
            <br/>
            <select value={age} onChange={e => setAge(e.target.value)}>
                <option key={0} value ={"Age"}>Age</option>
                {ages.map((age) => {
                    return <option key={age} value={age}>{age}</option>
                })}
            </select>
                <br/>
                <br/>
                <button type="submit">Add Pet</button>
        </form>
      </div>
    );
}

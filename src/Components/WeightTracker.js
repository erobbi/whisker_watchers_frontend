import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function WeightTracker() {
    const [cats, setCats] = useState({});
    const [catsFetched, setCatsFetched] = useState(false);

    useEffect(() => {
    fetch("/cats")
        .then((res) => {
            if (res.ok) {
                res.json().then((cats) => {
                    setCats(cats)
                    setCatsFetched(true)
                })
            }
        })
    }, []);

    return (
      <div>
        <div>Weight Tracker</div>
        <br/>
        <br/>
        { catsFetched ? (
            <>
            <div>Your Pets:</div>
            {cats.map((cat) => {
                {console.log(cat.name)}
                return <div>{cat.name} Age: {cat.age}</div>
            })}
        </>
        ) :
        <div>You have not entered any pets.</div>
    }
    <br/>
    <br/>
    <Link to='/new_pet'>Add new Pet</Link>


      </div>
    );
}

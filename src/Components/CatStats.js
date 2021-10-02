import React, { useState, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom';

export default function CatStats() {
    const { id } = useParams();
    const [cat, setCat] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory();


      useEffect(() => {
        fetch(`/cats/${id}`).then((r) => {
          if (r.ok) {
            r.json().then((cat) => {
              setCat(cat);
              setIsLoaded(true);
              history.push(`/cats/${id}`);
            });
          }
        });
      }, [id]);
    return (
        <div>
            <div>Cat Stats for {cat.name}</div>
            <div>Current weight is {cat.current_weight} lbs</div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function CatStats() {
    const { id } = useParams();
    const [cat, setCat] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)

      useEffect(() => {
        fetch(`/cats/${id}`).then((r) => {
          if (r.ok) {
            r.json().then((cat) => {
              setCat(cat);
              setIsLoaded(true);
            });
          }
        });
      }, [id]);
    return (
        <div>
            <div>Cat Stats for {cat.name}</div>
            <div>Current Weight: {cat.current_weight} lbs</div>
        </div>
    )
}

import CatRender from "./CatRender";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WeightTracker({ user }) {
  const [cats, setCats] = useState({});
  const [catsFetched, setCatsFetched] = useState(false);

  useEffect(() => {
    fetch("/cats").then((res) => {
      if (res.ok) {
        res.json().then((cats) => {
          setCats(cats);
          setCatsFetched(true);
          console.log(cats);
        });
      }
    });
  }, []);

  return (
    <div>
      <div>Weight Tracker</div>
      <br />
      <br />
      {catsFetched ? (
        <>
          <div>Your Pets:</div>
          {cats.map((cat) => {
            return (
              <CatRender key={cat.id} cat={cat} cats={cats} setCats={setCats} />
            );
          })}
        </>
      ) : (<div>You have not entered any pets.</div>
      )}
      <br />
      <br />
      <Link to="/new_pet">Add New Pet</Link>
      <br />
      <br />
      <br />
    </div>
  );
}

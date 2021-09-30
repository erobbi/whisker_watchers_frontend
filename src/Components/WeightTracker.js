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
          {Object.keys(user.cats).length > 0 ? (
            <>
              {user.cats.map((cat) => {
                return (
                  <CatRender cat={cat} cats={cats} setCats={setCats} />
                );
              })}
            </>
          ) : (
            <div>You have not added any cats.</div>
          )}
        </>
      ) : (
        <div>You have not entered any pets.</div>
      )}
      <br />
      <br />
      <br />

      <Link to="/new_pet">Add new Pet</Link>
      <br />
      <br />
    </div>
  );
}

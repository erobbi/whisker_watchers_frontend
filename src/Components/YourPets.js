import CatRender from "./CatRender";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function YourPets({ user }) {
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
    <div className="standardBackground">
      <h2 style={{ padding: "10px" }}>Your Pets</h2>
      {catsFetched ? (
        <div className="catMargins">
          {Object.keys(cats).length > 0 ? (
            <p>Click on a cat to view their stats.</p>
          ) : (
            <p>You have not added any cats.</p>
          )}

          <div className="catFlexBox">
            {cats.map((cat) => {
              return (
                <CatRender
                  key={cat.id}
                  cat={cat}
                  cats={cats}
                  setCats={setCats}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div>You have not entered any pets.</div>
      )}
      <br />
      <br />
      <Link to="/new_pet">
        <button className="primary_button">Add New Pet</button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
}

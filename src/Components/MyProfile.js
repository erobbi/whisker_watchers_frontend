import React, { useState } from "react";

export default function MyProfile({ user, setUser }) {
    const [showNameUpdater, setShowNameUpdater] = useState(false);
    const [showAvatarUpdater, setShowAvatarUpdater] = useState(false);

    function NameUpdater() {
        const [name, setName] = useState(user.name)
        function handleSubmit(e) {
            e.preventDefault();
            console.log(user)
            fetch(`users/1`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name
                }),
            })
            .then((res) => res.json())
            .then((user) => {
                setUser(user)
                setShowNameUpdater(false)
            })
            
        }

        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder={name}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
  return (
    <div>
      {user ? (
        <>
          <div>Profile Updater</div>
          <h2>Name: {user.name}</h2>
          <button onClick={() => setShowNameUpdater(!showNameUpdater)}>Update Name</button>
          {showNameUpdater ? (<NameUpdater/>) : null}
          <h3>Avatar:</h3>
          {user.avatar_url ? (
            <img src={user.avatar_url} alt="avatar" className="avatar" />
          ) : (
            <h3>You do not have an avatar.</h3>
          )}
          <br />

            <h3>You have {user.total_cats} cats.</h3>
        </>
      ) : null}
    </div>
  );
}

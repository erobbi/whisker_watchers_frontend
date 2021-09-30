import React, { useState } from "react";

export default function MyProfile({ user, setUser }) {
  const [showNameUpdater, setShowNameUpdater] = useState(false);
  const [showUsernameUpdater, setShowUsernameUpdater] = useState(false);
  const [showAvatarUpdater, setShowAvatarUpdater] = useState(false);

  function NameUpdater() {
    const [name, setName] = useState(user.name);
    function handleSubmit(e) {
      e.preventDefault();
      console.log(user);
      fetch(`users/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          setUser(user);
          setShowNameUpdater(false);
        });
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }

  function UsernameUpdater() {
    const [username, setUsername] = useState(user.username);
    function handleSubmit(e) {
      e.preventDefault();
      console.log(user);
      fetch(`users/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          setUser(user);
          setShowUsernameUpdater(false);
        });
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={username}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }

  function AvatarUpdater() {
    const [avatar_url, setAvatar_url] = useState(user.avatar_url);
    function handleSubmit(e) {
      e.preventDefault();
      console.log(user);
      fetch(`users/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar_url,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          setUser(user);
          setShowAvatarUpdater(false);
        });
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={avatar_url}
          value={avatar_url}
          onChange={(e) => setAvatar_url(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }

  return (
    <div>
      {user ? (
        <>
          <h2>Name: {user.name}</h2>
          <button onClick={() => setShowNameUpdater(!showNameUpdater)}>
            Update Name
          </button>
          {showNameUpdater ? <NameUpdater /> : null}
          <h2>Username: {user.username}</h2>
          <button onClick={() => setShowUsernameUpdater(!showUsernameUpdater)}>
            Update Username
          </button>
          {showUsernameUpdater ? <UsernameUpdater /> : null}
          <h3>Avatar:</h3>
          {user.avatar_url ? (
            <img src={user.avatar_url} alt="avatar" className="avatar" />
          ) : (
            <h3>You do not have an avatar.</h3>
          )}
          <br />
          <button onClick={() => setShowAvatarUpdater(!showAvatarUpdater)}>
            Update Avatar
          </button>
          {showAvatarUpdater ? <AvatarUpdater /> : null}
          <br />

          <h3>You have {user.total_cats} cats.</h3>
          <h5>Is that really enough?</h5>
        </>
      ) : null}
    </div>
  );
}

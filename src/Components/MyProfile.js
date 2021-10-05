import React, { useState } from "react";
import edit_button from '../Images/icons8-edit-24.png'

export default function MyProfile({ user, setUser }) {
  const [showNameUpdater, setShowNameUpdater] = useState(false);
  const [showUsernameUpdater, setShowUsernameUpdater] = useState(false);
  const [showAvatarUpdater, setShowAvatarUpdater] = useState(false);

  function NameUpdater() {
    const [name, setName] = useState(user.name);
    function handleSubmit(e) {
      e.preventDefault();
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
    <div className="standardBackground">
      {user ? (
        <div className="profileFlexContainer">
          <div className="profileFlexBox">
            <div className="standardFlexBox">
              {showNameUpdater ? (
                <NameUpdater />
              ) : (
                <h2>Welcome, {user.name}</h2>
              )}
              <div>
                <img
                  src={edit_button}
                  onClick={() => setShowNameUpdater(!showNameUpdater)}
                />
              </div>
            </div>
          </div>
          <div className="profileFlexBox">
            <div className="standardFlexBox">
              {showUsernameUpdater ? (
                <UsernameUpdater />
              ) : (
                <h2>Username: {user.username}</h2>
              )}
              <div>
                <img
                  src={edit_button}
                  onClick={() => setShowUsernameUpdater(!showUsernameUpdater)}
                />
              </div>
            </div>
          </div>
          <div className="profileFlexBox">
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
          </div>
          <div className="profileFlexBox">
            <h3>You have {user.total_cats} cats.</h3>
            <h5>Is that really enough?</h5>
          </div>
        </div>
      ) : null}
    </div>
  );
}

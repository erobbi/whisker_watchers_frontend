import "../App.css";
import MainContainer from "./MainContainer";
import TopBar from "./TopBar";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          setLoggedIn(true);
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <TopBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} />
      <MainContainer setUser={setUser} />
    </div>
  );
}

export default App;

import "./App.css";
import Login from "./Login";
import Logout from "./Logout"
import { useState, useEffect } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react";

function App() {
  const [user, setUser] = useState({});
  console.log({user})
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Login setUser={setUser}/>
      <Logout setUser={setUser}/>
    </div>
  );
}

export default App;

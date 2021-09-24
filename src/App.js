import "./App.css";
import MainContainer from "./MainContainer";
import TopBar from "./TopBar";
import { useState, useEffect } from "react";

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
      <TopBar setUser={setUser} />
      <MainContainer setUser={setUser} />
    </div>
  );
}

export default App;

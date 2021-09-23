import './App.css';
import Login from './Login';
import { useState } from "react";


function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

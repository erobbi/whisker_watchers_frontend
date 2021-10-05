import React from 'react'
import Error from './Error';
import Login from "./Login";
import Logout from "./Logout";
import { Route, Switch } from 'react-router-dom';
import CatCalculator from './CatSurvey/CatCalculator';
import DogCalculator from './DogCalculator';
import Signup from './Signup';
import YourPets from './YourPets';
import NewPetForm from './NewPetForm';
import CatStats from './CatStats';
import MyProfile from './MyProfile';
import HomePage from './HomePage';
import CatSurvey1 from './CatSurvey/CatSurvey1';
import CatSurvey2 from './CatSurvey/CatSurvey2';
import NavBar from "./NavBar";

export default function MainContainer({ user, setUser, loggedIn, setLoggedIn }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            user={user}
            setUser={setUser}
          />
        </Route>
        <Route exact path="/login">
          <NavBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            user={user}
          />
          <Login setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route exact path="/logout">
          <Logout setUser={setUser} setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/yourpets">
          <NavBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            user={user}
          />
          <YourPets
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            user={user}
            setUser={setUser}
          />
        </Route>
        <Route path="/cats/:id">
          <NavBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            user={user}
          />
          <CatStats user={user} />
        </Route>
        <Route exact path="/catSurvey/1">
          <CatSurvey1 />
        </Route>
        <Route exact path="/catSurvey/2">
          <CatSurvey2 />
        </Route>
        <Route exact path="/cat_calculator">
          <NavBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            user={user}
          />
          <CatCalculator
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            user={user}
            setUser={setUser}
          />
        </Route>
        <Route exact path="/signup">
          <NavBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            user={user}
          />
          <Signup setUser={setUser} />
        </Route>
        <Route exact path="/new_pet">
          <NavBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            user={user}
          />
          <NewPetForm
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            user={user}
            setUser={setUser}
          />
        </Route>
        <Route exact path="/user">
          <MyProfile user={user} setUser={setUser} />
        </Route>
        <Route>
          <NavBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            user={user}
          />
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

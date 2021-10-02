import React from 'react'
import Error from './Error';
import Login from "./Login";
import Logout from "./Logout";
import { Route, Switch } from 'react-router-dom';
import CatCalculator from './CatCalculator';
import DogCalculator from './DogCalculator';
import Signup from './Signup';
import YourPets from './YourPets';
import NewPetForm from './NewPetForm';
import CatStats from './CatStats';
import MyProfile from './MyProfile';
import HomePage from './HomePage';

export default function MainContainer({ user, setUser, setLoggedIn }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/logout">
          <Logout setUser={setUser} setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/yourpets">
          <YourPets user={user} />
        </Route>
        <Route path="/cats/:id">
          <CatStats user={user} />
        </Route>
        <Route exact path="/cat_calculator">
          <CatCalculator />
        </Route>
        <Route exact path="/dog_calculator">
          <DogCalculator />
        </Route>
        <Route exact path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route exact path="/new_pet">
          <NewPetForm />
        </Route>
        <Route exact path="/user">
          <MyProfile user={user} setUser={setUser} />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

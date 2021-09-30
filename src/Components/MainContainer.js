import React from 'react'
import Login from "./Login";
import Logout from "./Logout";
import { Route, Switch } from 'react-router-dom';
import CatCalculator from './CatCalculator';
import DogCalculator from './DogCalculator';
import Signup from './Signup';
import WeightTracker from './WeightTracker';
import NewPetForm from './NewPetForm';
import CatRender from './CatRender';
import MyProfile from './MyProfile';

export default function MainContainer({ user, setUser, setLoggedIn }) {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login setUser={setUser} setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/logout">
          <Logout setUser={setUser} setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/weight_tracker">
          <WeightTracker user={user} />
        </Route>
        <Route path="/cat/:id">
          <CatRender />
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
      </Switch>
    </div>
  );
}

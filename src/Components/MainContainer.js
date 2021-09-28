import React from 'react'
import Login from "./Login";
import Logout from "./Logout";
import { Route, Switch } from 'react-router-dom';
import CatCalculator from './CatCalculator';
import DogCalculator from './DogCalculator';
import Signup from './Signup';
import WeightTracker from './WeightTracker';

export default function MainContainer({setUser}) {
    return (
      <div>
        <Switch>
          <Route exact path="/login">
            <br />
            <Login setUser={setUser} />
            <br />
            <Logout setUser={setUser} />
          </Route>
          <Route exact path="/weight_tracker">
            <WeightTracker />
          </Route>
          <Route exact path="/cat_calculator">
            <CatCalculator />
          </Route>
          <Route exact path="/dog_calculator">
            <DogCalculator />
          </Route>
          <Route exact path="/signup">
            <Signup setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    );
}

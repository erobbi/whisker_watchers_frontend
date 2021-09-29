import React from 'react'
import Login from "./Login";
import { Route, Switch } from 'react-router-dom';
import CatCalculator from './CatCalculator';
import DogCalculator from './DogCalculator';
import Signup from './Signup';
import WeightTracker from './WeightTracker';
import NewPetForm from './NewPetForm';
import CatRender from './CatRender';

export default function MainContainer({user, setUser}) {
    return (
      <div>
        <Switch>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/weight_tracker">
            <WeightTracker user={user}/>
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
            <Signup setUser={setUser}/>
          </Route>
          <Route exact path="/new_pet">
            <NewPetForm />
          </Route>
        </Switch>
      </div>
    );
}

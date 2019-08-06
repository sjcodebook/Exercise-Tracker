import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import ExercisesList from './components/exercises-list';
import EditExercise from './components/edit-exercise';
import CreateExercise from './components/create-exercise';
import CreateUser from './components/create-user';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className='container'>
            <Navbar />
            <Switch>
              <Route path='/' exact component={ExercisesList} />
              <Route path='/edit/:id' component={EditExercise} />
              <Route path='/create' component={CreateExercise} />
              <Route path='/user' component={CreateUser} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;

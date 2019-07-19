import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import GoalPlan from './container/GoalPlan';
import FixedGoal from './container/FixedGoal';
import NextFixedGoal from './container/NextFixedGoal'

function App() {
  return (
    <div className="App">
    <Router>
    <Route exact path="/" component={GoalPlan}/>
    <Route exact path="/fixed-goal" component={FixedGoal}/>
    <Route exact path="/next-fixed-goal" component={NextFixedGoal}/>
    </Router>

      
    </div>
  );
}

export default App;

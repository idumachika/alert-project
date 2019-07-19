import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import GoalPlan from './container/GoalPlan';
import FixedGoal from './container/FixedGoal';
import NextFixedGoal from './container/NextFixedGoal';
import GoalWithDrawal from './container/GoalWithdrawal';


function App() {
  return (
    <div className="App">
    <Router>
    <Route exact path="/" component={GoalPlan}/>
    <Route exact path="/fixed-goal" component={FixedGoal}/>
    <Route exact path="/next-fixed-goal" component={NextFixedGoal}/>
    <Route exact path="/goal-with-drawal" component={GoalWithDrawal}/>

    </Router>

      
    </div>
  );
}

export default App;

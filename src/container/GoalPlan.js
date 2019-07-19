import React, { Component } from 'react';
import {Link } from 'react-router-dom'


export default class GoalPlan extends Component {
    render() {
        return (
            <div className="goal-container" >
           
                    <h1 className="select-plan">SELECT A GOAL PLAN</h1>

                    <div className="row">
                    <Link to="/fixed-goal"> <div className="fixed-goal">
                    <img src=''/>
                    <p className="flex-text">Flex Plan</p>
                    <p className="info-text2">Save daily, weekly or monthly towards
                    a target amount, earn 10% interest annualy. No withdrawals allowed</p>
                    </div>
                    </Link>
                    <div className="flex-goal">
                    <img src=''/>
                    <p className="plan-text"> Fixed Plan</p>
                    <p className="info-text">Save daily, weekly or monthly towards a target amount, earn 10% interest. Widthdrawal up to 50% of your  savings once every 30 days.</p>
                    </div>

                    <div className="stash-goal">
                    <img src=''/>
                    <p className="plan-text">Stash Plan</p>
                    <p className="info-text">Save whatever you want whenever you want and earn 10% interest with the option to withdraw your interest on monthly basis</p>

                    </div>
                    
                    </div>

             </div>
                
        )
    }
}

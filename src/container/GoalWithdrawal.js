import React, { Component } from 'react';
import InputGroup from '../component/InputGroup';
import TextFieldGroup from '../component/TextFieldGroup';
import SelectGroup from '../component/SelectListGroup';
import {Link} from 'react-router-dom';

export default class FixedGoal extends Component {
    render() {
        const options2 = [
            { label: 'ALAT Account (02345419878) - N56,876.54', value: 0 },
            { label: 'ALAT Account (02345419878) - N56,876.54', value: 'monthly(N100,000)' },
            { label: 'ALAT Account (02345419878) - N56,876.54', value: 'monthly(N100,000)' },
            { label: 'ALAT Account (02345419878) - N56,876.54', value: 'monthly(N100,000)' },
            { label: 'ALAT Account (02345419878) - N56,876.54', value: 'Manager' },
            { label: 'ALAT Account (02345419878) - N56,876.54)', value: 'monthly(N100,000)' },
            { label: 'ALAT Account (02345419878) - N56,876.54', value: 'monthly(N100,000)' },
            { label: 'ALAT Account (02345419878) - N56,876.54', value: 'Intern' },
            { label: 'ALAT Account (02345419878) - N56,876.54', value: 'Other' }
          ];
        return (
    <div className="fixed-control-form">
        <h5>Goal Withdrawal</h5>
        <div className="header"></div>
        <div className="form-container">
        <div className="alat-user">
        </div>
    <form>
    
    <div className="form-group">
        <label className="label-text">How much would you like to withdraw</label>
        <input type="text" className="form-control"  placeholder="Dubai Goal"/>
    </div>
      
    <div className="form-group">
        <label className="label-text">Where would you like to withdraw to?</label>
        <SelectGroup type="text" className="form-control" options={options2} placeholder="Dubai Goal"/>
    </div>
    
        <Link to="/next-fixed-goal">
        <button className="btn-wema" type="submit">Withdraw</button>
        </Link>
    </form>
    </div>
    </div>
        )
    }
}


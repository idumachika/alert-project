import React, { Component } from 'react';
import InputGroup from '../component/InputGroup';
import TextFieldGroup from '../component/TextFieldGroup';
import SelectGroup from '../component/SelectListGroup';
import {Link}from 'react-router-dom';

export default class NextFixedGoal extends Component {
    render() {
        const options = [
            { label: 'monthly(N100,000', value: 0 },
            { label: 'monthly(N100,000)', value: 'monthly(N100,000)' },
            { label: 'monthly(N100,000)', value: 'monthly(N100,000)' },
            { label: 'monthly(N100,000)', value: 'monthly(N100,000)' },
            { label: 'monthly(N100,000)', value: 'Manager' },
            { label: 'monthly(N100,000)', value: 'monthly(N100,000)' },
            { label: 'monthly(N100,000)', value: 'monthly(N100,000)' },
            { label: 'monthly(N100,000)', value: 'Intern' },
            { label: 'monthly(N100,000)', value: 'Other' }
          ];
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
    <div className="fixed-control-container">
        <h5>Create Fixed Account</h5>
        <div className="header"></div>
        <div className="form-container">
        <div className="header-info">
        <p className="header-info">To achieve your target of <span style={{color:'#AB2656'}}>N1,000,000 <span>by</span>  Dec 12,2018</span></p>
        </div>
    <form>
    
   
    <div className="form-row">
    <div className="form-group col-md-6">
        <label className="label-text">You will have to save</label>
        <input type="text" className="form-control"  placeholder="N100,000"/>
    </div>
    <div className="form-group col-md-6">
        <label className="label-text">How often would  you save</label>
        <SelectGroup type="text" className="form-control"  options={options} placeholder="October 31, 2017"/>
    </div>
    </div>
    <div className="form-group">
    <label className="label-text">Select account to debit</label>
    <SelectGroup type="text" className="form-control"  options={options2}  placeholder="Dubai Goal"/>
    </div>

        <Link to="/goal-with-drawal">
        <button className="btn-wema" type="submit">Next</button>
        </Link>
    </form>
    </div>
    </div>
        )
    }
}

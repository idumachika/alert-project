import React, { Component } from 'react';
import InputGroup from '../component/InputGroup';
import TextFieldGroup from '../component/TextFieldGroup';
import SelectGroup from '../component/SelectListGroup';
import {Link} from 'react-router-dom';

export default class FixedGoal extends Component {
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
        return (
    <div className="fixed-control-form">
        <h5>Create Fixed Account</h5>
        <div className="header"></div>
        <div className="form-container">
        <div className="header-info">
        <p className="header-info">Save daily, weekly or monthly towards a target amount, earn <span style={{color:"#AB2656"}}> 10% interest p.a </span> No withdrawal allowed and you will lose your interest if you dont meet your target</p>
        </div>
    <form>
    
    <div className="form-group">
        <label className="label-text">Give your goal a name</label>
        <input type="text" className="form-control"  placeholder="Dubai Goal"/>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6">
        <label className="label-text">When would you like to start</label>
        <input type="text" className="form-control"  placeholder="October 31, 2017"/>
    </div>
    <div className="form-group col-md-6">
        <label className="label-text">When do you want to achieve this</label>
        <input type="text" className="form-control" placeholder="October 31, 2017"/>
    </div>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6">
        <label className="label-text">How much would you like to save</label>
        <input type="text" className="form-control"  placeholder="1000"/>
    </div>
    <div className="form-group col-md-6">
        <label className="label-text">How often do you want to save</label>
        <SelectGroup 
        placeholder="monthly(N100,000)"
        options={options}/>
    </div>
    
    </div>
        <Link to="/next-fixed-goal">
        <button className="btn-wema" type="submit">Next</button>
        </Link>
    </form>
    </div>
    </div>
        )
    }
}

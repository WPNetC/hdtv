import React, { Component } from 'react';

class ClientFilter extends Component {
 render() {
    return<div>
        <div className="row">
            <div className="col-xs-12 col-md-4 filter">
                <h5>Cut Off (Hrs)</h5>
                <input className="filter--input filter--input__text" type="number" />
            </div>
            <div className="col-xs-12 col-md-4 filter">
                <h5>Refresh (Mins)</h5>
                <input className="filter--input filter--input__text" type="number" />
            </div>
            <div className="col-xs-12 col-md-4 filter">
                <h5>Order</h5>
                <select className="filter--input filter--input__ddl">
                    <option value="asc">Asc</option>
                    <option value="asc">Desc</option>
                </select>
            </div>
        </div>
        <button className="btn btn--filter text-center">Go</button>
    </div>;
 }
}

export default ClientFilter;
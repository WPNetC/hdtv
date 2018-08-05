import React, { Component } from 'react';

class ClientFilter extends Component {
    constructor() {
        super();
        this.state = {
            cutOff: 3,
            refresh: 5,
            sort: 0
        };
    }

    render() {
        return <div>
            <div className="row">
                <div className="col-xs-12 col-md-4 filter">
                    <h5>Cut Off (Hrs)</h5>
                    <input className="filter--input filter--input__text js-cutoff" type="number" value={this.state.cutOff} onChange={e => this.updateInputValue(e, "cutOff")} />
                </div>
                <div className="col-xs-12 col-md-4 filter">
                    <h5>Refresh (Mins)</h5>
                    <input className="filter--input filter--input__text js-refresh" type="number" value={this.state.refresh} onChange={e => this.updateInputValue(e, "refresh")} />
                </div>
                <div className="col-xs-12 col-md-4 filter">
                    <h5>Order</h5>
                    <select className="filter--input filter--input__ddl js-order" value={this.state.query} onChange={e => this.updateInputValue(e, "sort")}>
                        <option value="0">Asc</option>
                        <option value="1">Desc</option>
                    </select>
                </div>
            </div>
            <button className="btn btn--filter text-center" onClick={() => this.filter()}>Go</button>
        </div>;
    }

    filter() {
        this.props.callback(this.state);
    }

    updateInputValue(evt, name) {
        if (name === 'cutOff') {
            this.setState({
                cutOff: evt.target.value
            });
        } else if (name === 'refresh') {
            this.setState({
                refresh: evt.target.value
            });
        } else if (name === 'sort') {
            this.setState({
                sort: evt.target.value
            });
        }
    }
}

export default ClientFilter;
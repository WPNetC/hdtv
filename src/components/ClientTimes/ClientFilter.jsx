import React, { Component } from 'react';

class ClientFilter extends Component {
    constructor() {
        super();
        this.state = {
            cutOff: 3,
            refresh: 5
        };
    }

    render() {
        return <div>
            <div className="row">
                <div className="col-xs-12 col-md-6 filter">
                    <h5>Cut Off (Hrs)</h5>
                    <input className="filter--input filter--input__text js-cutoff" type="number" step="0.25" value={this.state.cutOff} onChange={e => this.updateInputValue(e, "cutOff")} />
                </div>
                <div className="col-xs-12 col-md-6 filter">
                    <h5>Refresh (Mins)</h5>
                    <input className="filter--input filter--input__text js-refresh" type="number" min="1" value={this.state.refresh} onChange={e => this.updateInputValue(e, "refresh")} />
                </div>
            </div>
            <button className="btn btn--filter text-center" onClick={() => this.filter()}>Go</button>
        </div>;
    }

    filter() {
        this.props.filterCallback(this.state);
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
        }
    }
}

export default ClientFilter;
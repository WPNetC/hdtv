import React, { Component } from 'react';

class ClientRows extends Component {
    render() {
        return <div className="row client--results">
            {this.props.data.map((result) =>
                <div key={result.name} className={"col-xs-12 col-md-12 client tb tb--" + (
                    result.timeRemaining < -1 ? "extreme" :
                    result.timeRemaining < 0 ? "overrun" :
                    result.timeRemaining < 1 ? "warning__over" :
                    result.timeRemaining < 1.25 ? "warning" :
                    "good")}>                    
                    <h3>{result.name}</h3>
                    <div className="timebank--container">
                        <span className="timebank--item">
                            <h4 className="timebank--label">TimeBank</h4>
                            <h5 className="timebank--value">{result.timeBank}</h5>
                        </span>
                        <span className="timebank--item">
                            <h4 className="timebank--label">Used</h4>
                            <h5 className="timebank--value">{result.timeUsed}</h5>
                        </span>
                        <span className="timebank--item">
                            <h4 className="timebank--label">Remaining</h4>
                            <h5 className="timebank--value">{result.timeRemaining}</h5>
                        </span>
                        <span className="timebank--item">
                            <h4 className="timebank--label">%</h4>
                            <h5 className="timebank--value">{result.percentLeft}</h5>
                        </span>
                    </div>
                </div>
            )}
        </div>;
    }
}

export default ClientRows;
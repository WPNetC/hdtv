import React, { Component } from 'react';
import ClientFilter from './ClientFilter.jsx';

class ClientTimes extends Component {
    constructor() {
        super(null);
        this.state = {
            time: new Date().getTime(),
            count: 0,
            cutOff: 3,
            refresh: 5,
            view: this.clientRows(this.getData())
        }

        this.update();
    }

    getData() {
        //TODO: Add real data service
        return [
            {
                logo: '',
                name: 'Comapny 1',
                timeBank: 32,
                timeUsed: 16,
                timeRemaining: 16,
                percentLeft: 50
            },
            {
                logo: '',
                name: 'Comapny 2',
                timeBank: 50,
                timeUsed: 55,
                timeRemaining: -5,
                percentLeft: -10
            },
            {
                logo: '',
                name: 'Comapny 3',
                timeBank: 16,
                timeUsed: 4,
                timeRemaining: 12,
                percentLeft: 75
            },
            {
                logo: '',
                name: 'Comapny 4',
                timeBank: 50,
                timeUsed: 49,
                timeRemaining: 1,
                percentLeft: 2
            },
            {
                logo: '',
                name: 'Comapny 5',
                timeBank: 8,
                timeUsed: 6,
                timeRemaining: 2,
                percentLeft: 25
            }
        ];
    }

    render() {
        return (
            <div>
                <h2 class="text-right">Last Update: {this.state.time}</h2>
                <div className="container">
                    {this.state.view}
                    <hr/>
                    <ClientFilter />
                </div>
            </div>
        );
    }

    clientRows(results) {
        return <div className="row client--results">
            {results.map(result =>
                <div className={"col-xs-12 col-md-12 client tb--" + (result.timeRemaining < 0 ? "overrun" : result.timeRemaining < 1.25 ? "warning" : "good" )}>
                    <img className="client--logo" src={result.logo} alt="img" />
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

    update() {
        var data = this.getData();
        var date = new Date();
        this.setState({
            time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            view: this.clientRows(data)
        });
        setTimeout(() => {
            this.update();
        }, 2000);
    }
}

export default ClientTimes;
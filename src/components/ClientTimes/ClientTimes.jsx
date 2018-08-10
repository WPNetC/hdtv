import React, { Component } from 'react';
import ClientRows from './ClientRows.jsx';
import ClientFilter from './ClientFilter.jsx';
import { filter, sort } from './filterService';
import { getAll, getWithLessTimeRemaining, getWithMoreTimeRemaining } from './dbService';

class ClientTimes extends Component {
    constructor() {
        super();
        this.filterCallback = this.filterCallback.bind(this);
        this.getData = this.getData.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            time: new Date().getTime(),
            data: [],
            filterObj: {
                cutOff: 3,
                refresh: 5,
                sort: 0
            }
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.update(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    filterCallback(filterParams) {
        this.setState({
            filterObj: filterParams
        });
        this.update();
    }

    getData(callback) {
        //TODO: Add real data service
        getAll((data) => {
            const result = data || [{
                name: 'Test company',
                timeBank: 8,
                timeUsed: 7.5,
                timeRemaining: 0.5,
                percentLeft: 25
            }];

            callback(result);
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-right">Last Update: {this.state.time}</h2>
                <div className="container">
                    <ClientFilter callback={this.filterCallback} />
                    <hr />
                    <ClientRows data={this.state.data} />
                </div>
            </div>
        );
    }

    update() {
        this.getData((data) => {
            var filtered = filter(data, 'cutOff', this.state.filterObj.cutOff);
            var date = new Date();
            console.log(filtered);
            this.setState({
                time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                data: filtered.length > 0 ? filtered : data
            });
            data = null;
            date = null;
            filtered = null;
        });
    }
}

export default ClientTimes;
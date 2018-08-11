import React, { Component } from 'react';
import ClientRows from './ClientRows.jsx';
import ClientFilter from './ClientFilter.jsx';
import { filter, sort } from './filterService';
import { getAll, getWithLessTimeRemaining, getWithMoreTimeRemaining } from './dbService';

class ClientTimes extends Component {
    constructor() {
        super();

        /* This seems to help prevent methods being called in scope of child elements */
        this.filterCallback = this.filterCallback.bind(this);
        this.getDate = this.getDate.bind(this);
        this.sortCallback = this.sortCallback.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            time: this.getDate(),
            data: [],
            filterObj: {
                cutOff: 3,
                refresh: 5
            },
            sortObj: null
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.update(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    filterCallback(filterState) {
        if (!filterState) {
            return;
        }
        this.setState({
            filterObj: filterState
        });
        // Check if filterState requests a change in refresh rate
        const changeInt = this.state.filterObj.refresh != filterState.refresh;
        if(changeInt) {
            const i = filterState.refresh * 60 * 1000;
            clearInterval(this.interval);
            this.interval = setInterval(() => this.update(), i);
            console.log('Refresh period now: ' + i);
        }
        this.update();
    }

    getDate() {
        var date = new Date();
        return `${date.getHours().toString().length == 1 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds().toString().length == 1 ? '0' + date.getSeconds() : date.getSeconds()}`;
    }

    render() {
        return (
            <div>
                <h2 className="text-right">Last Update: {this.state.time}</h2>
                <div className="container">
                    <ClientFilter filterCallback={this.filterCallback} />
                    <hr />
                    <ClientRows data={this.state.data} sortCallback={this.sortCallback} />
                </div>
            </div>
        );
    }

    sortCallback(sortParams) {
        if (!sortParams) {
            return;
        }
        this.setState({
            sortObj: sortParams
        });
        this.update();
    }

    update() {
        getAll((data) => {
            var result = filter(data, this.state.filterObj);
            result = sort(result, this.state.sortObj);

            this.setState({
                time: this.getDate(),
                data: result
            });

            data = null;
            result = null;
        });
    }
}

export default ClientTimes;
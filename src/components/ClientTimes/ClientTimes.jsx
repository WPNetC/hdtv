import React, { Component } from 'react';
import ClientRows from './ClientRows.jsx';
import ClientFilter from './ClientFilter.jsx';
import { filter, sort } from './filterService';
import { getAll } from './dbService';

class ClientTimes extends Component {
    constructor() {
        super();
        this.filterCallback = this.filterCallback.bind(this);
        this.getData = this.getData.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            time: new Date().getTime(),
            data: this.getData(),
            filterObj: {
                cutOff: 3,
                refresh: 5,
                sort: 0
            }
        }
    }

    filterCallback(filterParams) {
        this.setState({
            filterObj: filterParams
        });
        console.log(filterParams);
    }

    getData() {
        //TODO: Add real data service

        getAll((data) => {
            alert(data);
        });

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
            },
            {
                logo: '',
                name: 'Comapny 6',
                timeBank: 8,
                timeUsed: 7.5,
                timeRemaining: 0.5,
                percentLeft: 25
            }
        ];
    }

    render() {
        this.update(true);
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

    update(isInit) {
        if (!isInit) {
            var data = this.getData();
            var filtered = filter(data, 'cutOff', this.state.filterObj.cutOff);
            var date = new Date();
            this.setState({
                time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                data: filtered
            });
            data = null;
            date = null;
            filtered = null;
        }
        setTimeout(() => {
            this.update(false);
        }, 5000);
    }
}

export default ClientTimes;
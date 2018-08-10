import React, { Component } from 'react';
import $ from 'jquery';

class ClientRows extends Component {
    sort(name) {
        if (!name || name === '') return;

        let obj = {
            column: name || 'none',
            dir: 'asc'
        };

        $('[class^=js-icon]').each(function () {
            if ($(this)[0].className.indexOf(name) === -1) {
                $(this).html('');
            }
        });

        const $elem = $('.js-icon-' + name);
        if ($elem) {
            if ($elem.html().length > 0) {
                if ($elem.html().indexOf('arrow-up') != -1) {
                    $elem.html('<i class="fa fa-arrow-down"></i>');
                    obj.dir = 'desc';
                } else {
                    $elem.html('<i class="fa fa-arrow-up"></i>');
                }
            } else {
                $elem.html('<i class="fa fa-arrow-up"></i>');
            }
        }

        this.props.sortCallback(obj);
    }

    render() {
        return <div className="row client--results">
            <div className="col-xs-12 col-md-12">
                <div className="timebank--container">
                    <div className="timebank--header" onClick={() => { this.sort('name') }}>
                        <h4 className="timebank--label">Name <span className="js-icon-name"></span></h4>
                    </div>
                    <div className="timebank--header" onClick={() => { this.sort('bank') }}>
                        <h4 className="timebank--label">TimeBank <span className="js-icon-bank"></span></h4>
                    </div>
                    <div className="timebank--header" onClick={() => { this.sort('used') }}>
                        <h4 className="timebank--label">Used <span className="js-icon-used"></span></h4>
                    </div>
                    <div className="timebank--header" onClick={() => { this.sort('remain') }}>
                        <h4 className="timebank--label">Remaining <span className="js-icon-remain"></span></h4>
                    </div>
                    <div className="timebank--header" onClick={() => { this.sort('pct') }}>
                        <h4 className="timebank--label">% <span className="js-icon-pct"></span></h4>
                    </div>
                </div>
            </div>
            {this.props.data.map((result) =>
                <div key={result.id} id={result.id} className={"col-xs-12 col-md-12 client tb tb--" + (
                    result.timeRemaining < -1 ? "extreme" :
                        result.timeRemaining < 0 ? "overrun" :
                            result.timeRemaining < 1 ? "warning__over" :
                                result.timeRemaining < 1.25 ? "warning" :
                                    "good")}>
                    <div className="timebank--container">
                        <span className="timebank--value">
                            {result.name}
                        </span>
                        <span className="timebank--value">
                            {result.timeBank}
                        </span>
                        <span className="timebank--value">
                            {result.timeUsed}
                        </span>
                        <span className="timebank--value">
                            {result.timeRemaining}
                        </span>
                        <span className="timebank--value">
                            {result.percentLeft}
                        </span>
                    </div>
                </div>
            )}
        </div>;
    }
}

export default ClientRows;
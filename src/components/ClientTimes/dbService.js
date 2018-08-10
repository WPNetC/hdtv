import $ from 'jquery';
const debugData = [{
    name: 'c1',
    timeBank: 50,
    timeUsed: 25,
    timeRemaining: 25,
    percentLeft: 50
}, {
    name: 'c2',
    timeBank: 10,
    timeUsed: 9,
    timeRemaining: 1,
    percentLeft: 10
}, {
    name: 'c3',
    timeBank: 10,
    timeUsed: 8,
    timeRemaining: 2,
    percentLeft: 20
}, {
    name: 'c4',
    timeBank: 10,
    timeUsed: 11,
    timeRemaining: -1,
    percentLeft: -10
}, {
    name: 'c5',
    timeBank: 10,
    timeUsed: 9.5,
    timeRemaining: 0.5,
    percentLeft: 5
}];

const getAll = (callback) => {
    $.get('/api/db.php?c=all', (data) => {
        let parsed = {};
        try {
            parsed = JSON.parse(data);
        } catch(ex) {
            parsed = debugData;
        }
        callback(parsed);
    });
}

const getWithLessTimeRemaining = (num, callback) => {
    $.get('/api/db.php?c=ltr&n=' + num, (data) => {
        callback(JSON.parse(data));
    });
}

const getWithMoreTimeRemaining = (num, callback) => {
    $.get('/api/db.php?c=mtr&n=' + num, (data) => {
        callback(JSON.parse(data));
    });
}

module.exports = {
    getAll: getAll,
    getWithLessTimeRemaining: getWithLessTimeRemaining,
    getWithMoreTimeRemaining: getWithMoreTimeRemaining
}
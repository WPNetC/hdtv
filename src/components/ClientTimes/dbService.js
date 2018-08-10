import $ from 'jquery';

const newGuid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const debugData = [{
    id: newGuid(),
    name: 'client name number 1',
    timeBank: 50,
    timeUsed: 25,
    timeRemaining: 25,
    percentLeft: 50
}, {
    id: newGuid(),
    name: 'client with a longer name',
    timeBank: 10,
    timeUsed: 9,
    timeRemaining: 1,
    percentLeft: 10
}, {
    id: newGuid(),
    name: 'c3',
    timeBank: 10,
    timeUsed: 8,
    timeRemaining: 2,
    percentLeft: 20
}, {
    id: newGuid(),
    name: 'this is really quite a long name',
    timeBank: 10,
    timeUsed: 11,
    timeRemaining: -1,
    percentLeft: -10
}, {
    id: newGuid(),
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
        } catch (ex) {
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
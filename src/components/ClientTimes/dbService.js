import $ from 'jquery';

const getAll = (callback) => {
    $.get('/api/db.php?c=all', (data) => {
        callback(data);
    });
}

const getWithLessTimeRemaining = (num, callback) => {
    $.get('/api/db.php?c=ltr&n='+num, (data) => {
        callback(data);
    });
}

const getWithMoreTimeRemaining = (num, callback) => {
    $.get('/api/db.php?c=mtr&n='+num, (data) => {
        callback(data);
    });
}

module.exports = {
    getAll: getAll,
    getWithLessTimeRemaining: getWithLessTimeRemaining,
    getWithMoreTimeRemaining: getWithMoreTimeRemaining
}
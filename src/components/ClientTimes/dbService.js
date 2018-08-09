import $ from 'jquery';

const getAll = (callback) => {
    $.get('/api/db.php?c=all', (data) => {
        callback(data);
    });
}

module.exports = {
    getAll: getAll
}
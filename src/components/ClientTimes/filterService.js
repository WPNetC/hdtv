const filterData = (data, colName, val) => {
    var result = [];
    for (let idx = 0; idx < data.length; idx++) {
        const element = data[idx];
        if (colName === 'cutOff' && element.timeRemaining <= val) {
            result.push(element);
        }

    }
    data = null;
    return result;
};

const sortName = (data, direction) => {
    if (direction === 0) {

    } else {

    }
};

const sortTimeTotal = (data, direction) => {
    if (direction === 0) {

    } else {

    }
};

const sortTimeUsed = (data, direction) => {
    if (direction === 0) {

    } else {

    }
};

const sortTimeRemain = (data, direction) => {
    if (direction === 0) {

    } else {

    }
};

const sortTimePercent = (data, direction) => {
    if (direction === 0) {

    } else {

    }
};

export const filter = filterData;
export const sort = {
    name: sortName,
    percent: sortTimePercent,
    remain: sortTimeRemain,
    total: sortTimeTotal,
    user: sortTimeUsed
};
const filterData = (data, colName, val) => {
    var result = [];
    if (data && data.length) {
        for (let idx = 0; idx < data.length; idx++) {
            const element = data[idx];
            if (colName === 'cutOff' && element.timeRemaining <= val) {
                result.push(element);
            }

        }
        data = null;
    }
    return result;
};

const sortName = (data, direction) => {
    var result = [];
    if (data && data.length) {
        if (direction === 0) {

        } else {

        }
        data = null;
    }
    return result;
};

const sortTimeTotal = (data, direction) => {
    var result = [];
    if (data && data.length) {
        if (direction === 0) {

        } else {

        }
        data = null;
    }
    return result;
};

const sortTimeUsed = (data, direction) => {
    var result = [];
    if (data && data.length) {
        if (direction === 0) {

        } else {

        }
        data = null;
    }
    return result;
};

const sortTimeRemain = (data, direction) => {
    var result = [];
    if (data && data.length) {
        if (direction === 0) {

        } else {

        }
        data = null;
    }
    return result;
};

const sortTimePercent = (data, direction) => {
    var result = [];
    if (data && data.length) {
        if (direction === 0) {

        } else {

        }
        data = null;
    }
    return result;
};

export const filter = filterData;
export const sort = {
    name: sortName,
    percent: sortTimePercent,
    remain: sortTimeRemain,
    total: sortTimeTotal,
    user: sortTimeUsed
};
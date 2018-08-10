const filterData = (data, filterParams) => {
    var result = [];
    if (data && data.length) {
        for (let idx = 0; idx < data.length; idx++) {
            const element = data[idx];
            if (element.timeRemaining <= filterParams.cutOff) {
                result.push(element);
            }
        }
        data = null;
    }
    return result;
};

const sortData = (data, sortParams) => {
    if (!sortParams || !sortParams.column) return data;

    switch (sortParams.column) {
        case 'name':
            return sortName(data, sortParams.dir);
        case 'bank':
            return sortTimeTotal(data, sortParams.dir);
        case 'used':
            return sortTimeUsed(data, sortParams.dir);
        case 'remain':
            return sortTimeRemain(data, sortParams.dir);
        case 'pct':
            return sortTimePercent(data, sortParams.dir);

        default:
            break;
    }
};

const sortName = (data, direction) => {
    var result = data;
    if (result && result.length) {
        if (direction === 'asc') {
            result = data.sort((a,b) => {
                return (a.name > b.name) - (a.name < b.name);
            });
        } else {
            result = data.sort((a,b) => {
                return (b.name > a.name) - (b.name < a.name);
            });
        }
        data = null;
    }
    return result;
};

const sortTimeTotal = (data, direction) => {
    var result = data;
    if (result && result.length) {
        if (direction === 'asc') {
            result = data.sort((a,b) => {
                var d = a.timeBank - b.timeBank;
                if(d === 0) {
                    d = (a.name > b.name) - (a.name < b.name);
                }
                return d;
            });
        } else {
            result = data.sort((a,b) => {
                var d = b.timeBank - a.timeBank;
                if(d === 0) {
                    d = (a.name > b.name) - (a.name < b.name);
                }
                return d;
            });
        }
        data = null;
    }
    return result;
};

const sortTimeUsed = (data, direction) => {
    var result = data;
    if (result && result.length) {
        if (direction === 'asc') {
            result = data.sort((a,b) => {
                var d = a.timeUsed - b.timeUsed;
                if(d === 0) {
                    d = (a.name > b.name) - (a.name < b.name);
                }
                return d;
            });
        } else {
            result = data.sort((a,b) => {
                var d = b.timeUsed - a.timeUsed;
                if(d === 0) {
                    d = (a.name > b.name) - (a.name < b.name);
                }
                return d;
            });
        }
        data = null;
    }
    return result;
};

const sortTimeRemain = (data, direction) => {
    var result = data;
    if (result && result.length) {
        if (direction === 'asc') {
            result = data.sort((a,b) => {
                var d = a.timeRemaining - b.timeRemaining;
                if(d === 0) {
                    d = (a.name > b.name) - (a.name < b.name);
                }
                return d;
            });
        } else {
            result = data.sort((a,b) => {
                var d = b.timeRemaining - a.timeRemaining;
                if(d === 0) {
                    d = (a.name > b.name) - (a.name < b.name);
                }
                return d;
            });
        }
        data = null;
    }
    return result;
};

const sortTimePercent = (data, direction) => {
    var result = data;
    if (result && result.length) {
        if (direction === 'asc') {
            result = data.sort((a,b) => {
                var d = a.percentLeft - b.percentLeft;
                if(d === 0) {
                    d = (a.name > b.name) - (a.name < b.name);
                }
                return d;
            });
        } else {
            result = data.sort((a,b) => {
                var d = b.percentLeft - a.percentLeft;
                if(d === 0) {
                    d = (a.name > b.name) - (a.name < b.name);
                }
                return d;
            });
        }
        data = null;
    }
    return result;
};

export const filter = filterData;
export const sort = sortData;

function invert(obj) {
    let result = {};
    for (let prop in obj) {
        result[obj[prop]] = prop;
    }
    return result;
}

module.exports = invert;
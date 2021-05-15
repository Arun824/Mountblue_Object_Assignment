

function mapObject(testObject, cb) {
    let obj = {};
    for (let properties in testObject) {
        obj[properties] = cb(testObject[properties]);
    }
    return obj;

}

module.exports = mapObject;


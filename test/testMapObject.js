const mapObject = require("./../mapObject.js");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function cb(values) {
    return values;
}

console.log(mapObject(testObject, cb));
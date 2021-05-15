

function defaults(obj, defaultProps = { name2: 'Arun' }) {

    for (let prop1 in obj) {
        for (let prop2 in defaultProps) {
            if (prop1 == prop2) {
                obj[prop1] = defaultProps[prop2];
            }
        }
    }
    return obj;
}

module.exports = defaults;
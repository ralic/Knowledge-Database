
// polyfill Object.getPrototypeOf

if (typeof Object.getPrototypeOf === 'undefined') {
    Object.getPrototypeOf = function (obj) {
        var t = typeof obj;
        if (!obj || (t !== 'object' && t !== 'function')) {
            throw new TypeError('not and object');
        }
        return obj.__proto__;
    };
}

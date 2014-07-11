(function () {

    /**
     * @Function fn : Function execute every interval time
     * @int delay   : Function execute delay time (ms)
     * @int count   : The number of execution time
     * @boolean immediately : Whether execute immediately
     * @Object options
     *     initCallback : Function execute before interval start
     *     doneCallback : Function execute after interval terminate
     */
    var interval = function (fn, delay, count, immediately, options) {
        var setInterval = window.setInterval,
            clearInterval = window.clearInterval,
            iteration = 0,
            id;

        count = count || 0;
        immediately = (immediately !== true && immediately !== false) ? false : immediately; // this will cause some delay
        options = options || {};

        if (options.initCallback && options.initCallback.constructor === Function) {
            options.initCallback();
        }

        if (immediately) {
            fn();
        }

        id = setInterval(function () {

            fn();
            iteration++;

            if (count > 0 && iteration >= count) {
                clearInterval(id);

                if (options.doneCallback && options.doneCallback.constructor === Function) {
                    options.doneCallback();
                }
            }

        }, delay);

    };

    window.interval = interval;
    
})();
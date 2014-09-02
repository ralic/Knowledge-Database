
var Kitten = require('../schema');

var deleteF = function (req, res, next) {

    Kitten.remove({ name: req.params.name }, function (err) {

        res.send({
            Content: req.params.name + ' kitty deleted'
        });
    });

    return next();
};

module.exports = deleteF;
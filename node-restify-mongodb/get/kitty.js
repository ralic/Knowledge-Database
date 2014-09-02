
var Kitten = require('../schema');

var kitty = function (req, res, next) {

    var output = [];

    Kitten.find({ name: /.*/ }, function (err, kittens) {
        if (err) return console.error(err);

        kittens.forEach(function (kit) {
            output.push({
                name: kit.name,
                age: kit.age
            });
        });
        res.send(output);
    });

    return next();
}

module.exports = kitty;
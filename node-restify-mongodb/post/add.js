var Kitten = require('../schema');

function create(req, res, next) {

    Kitten.create({ name: req.params.name, age: req.params.age }, function (err, kittens) {
        if (err) return console.error(err);

        res.send({
            Content: req.params.name + ' kitty add successfully!'
        });
    });

    return next();

};

module.exports = create;
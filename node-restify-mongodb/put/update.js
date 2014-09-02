var Kitten = require('../schema');

function update(req, res, next) {


    Kitten.update({ name: req.params.name }, { name: req.params.newName }, { multi: true }, function (err, numberAffected, raw) {
        if (err) return console.error(err);

        res.send({
            Content: req.params.name + ' Success update'
        });
    });

    return next();

};

module.exports = update;
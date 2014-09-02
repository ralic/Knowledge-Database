var mongoose = require('mongoose');

var kittySchema, Kitten;

// ==================
// Schema
// ==================

// kitty schema
kittySchema = mongoose.Schema({
    name: { type: String, default: 'cute kitty'},
    age: { type: Number, min: 0}
});

// ==================
// Model (compile schema)
// ==================

// kitty model
Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
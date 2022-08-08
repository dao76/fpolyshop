const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const newsSchema = new Schema({
    id: { type: ObjectId },
    tennew: { type: String },
    mieuta: { type: String },
    image: { type: String },

});

module.exports = mongoose.model('new', newsSchema);
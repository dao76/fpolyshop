const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const phoneSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    price : {type: Number}
});

module.exports = mongoose.model('phone', phoneSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const khachhangSchema = new Schema({
    id: { type: ObjectId },
    email: { type: String },
    phone: { type: String },
    name: { type: String },
});

module.exports = mongoose.model('khachang', khachhangSchema);
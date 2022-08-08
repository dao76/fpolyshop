const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId },
    tenduan: { type: String },
    mieuta: { type: String },
    image: { type: String },
    tenthuongmai: { type: String },
    quymo: { type: String },
    dientichtb: { type: String },
    chudautu: { type: String },
    nhaphattrien: { type: String },
    vitri: { type: String },
    giaban: { type: String },
    anhlienquan: { type: String },
    anhlienquan1: { type: String },
    anhlienquan2: { type: String },
});

module.exports = mongoose.model('product', productSchema);
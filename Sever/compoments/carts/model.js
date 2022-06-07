const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cartSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    price: { type: Number },
    quantity: { type :Number},
    category_id: { type: Schema.Types.ObjectId, ref: 'category' },
    image: { type: String }
    
    
});

module.exports = mongoose.model('cart', cartSchema);
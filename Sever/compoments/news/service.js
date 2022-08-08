

const newmodel = require('./model');
exports.getnews = async () => {
    // return data;
    return newmodel.find({}, 'id tennew mieuta image').limit(6).sort({ _id: -1 })
};
exports.getAllNews = async () => {
    // return data;
    return newmodel.find({}, 'id tennew mieuta image').sort({ _id: -1 })
};
exports.getNewById = async (id) => {
    const news = await newmodel.findOne({ '_id': id })
    return news
}
exports.insert = async (news) => {
    const p = new newmodel(news);
    await p.save();

}
exports.update = async (id, news) => {

    await newmodel.findOneAndUpdate(id, news);
}


exports.delete = async (id) => {
    await productmodel.findByIdAndDelete(id);

}




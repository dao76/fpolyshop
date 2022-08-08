const newService = require('../news/service');



exports.getnews = async () => {
    try {
        let news = await newService.getnews();
        news = news.map((item, index) => {
            item = {
                _id: item._id,
                tennew: item.tennew,
                mieuta: item.mieuta,
                image: item.image,
                index: index + 1
            }
            return item;
        })

        return news;
    } catch (error) {
        return []
    }
}
exports.getAll = async () => {
    try {
        let news = await newService.getAllNews();
        news = news.map((item, index) => {
            item = {
                _id: item._id,
                tennew: item.tennew,
                mieuta: item.mieuta,
                image: item.image,

                index: index + 1
            }
            return item;
        })

        return news;
    } catch (error) {
        return []
    }
}



exports.insert = async (news) => {
    await newService.insert(news);

}
exports.update = async (id, news) => {
    try {
        await newService.update(id, news);

    } catch (error) {

    }
}
exports.delete = async (id) => {
    try {
        await newService.delete(id);

    } catch (error) {

    }
}
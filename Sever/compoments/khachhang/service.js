var khachModal = require('./model')

exports.insert = async (khach) => {
    const p = new khachModal(khach);
    return await p.save();
}
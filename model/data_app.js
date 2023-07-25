const mongoose = require('mongoose');

const format_data_aplikasi = new mongoose.Schema({
    videoID: {
        type: String,
        required: true
    },
    URLthumbnail: {
        type: String,
        required: true
    },
    products: [{
        productID: String,
        productLink: String,
        productTitle: String,
        productPrice: Number
    }],
    comments: [{userName: String,
                userComment: String,
                timestamp: String}]
});

const data_aplikasi = mongoose.model("db_aplikasi", format_data_aplikasi);

module.exports = data_aplikasi;
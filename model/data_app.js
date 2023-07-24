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
    comments: [{userName: String,
                userComment: String,
                timestamp: String}]
});

const data_aplikasi = mongoose.model("db_aplikasi", format_data_aplikasi);

module.exports = data_aplikasi;
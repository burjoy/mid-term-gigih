const mongoose = require('mongoose');

const data_aplikasi = new mongoose.Schema({
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
                timestamp: Date}]
});

module.exports = data_aplikasi;
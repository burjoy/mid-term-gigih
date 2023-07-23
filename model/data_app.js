const mongoose = require('mongoose');

const data_aplikasi = new mongoose.Schema({
    videoID: {
        type: String,
        required: true
    },
    URLthumbnail: {
        type: String,
        required: true
    }
});

export default data_aplikasi
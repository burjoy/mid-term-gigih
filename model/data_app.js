const mongoose = require('mongoose');

const format_data_video = new mongoose.Schema({
    videoData: [{
        videoID: String,
        URLthumbnail: String
    }]})

const format_komen_video = mongoose.Schema({
        videoID: String,
        comments: [{
            username: String,
            comment: String,
            timestamp: String
        }]
    });

const format_product_video = mongoose.Schema({
    videoID: String,
   products: [{
        productID: String,
        productLink: String,
        productTitle: String,
        productPrice: Number
    }]
})

const data_video = mongoose.model("data_video", format_data_video, "data_video");
const data_komen_video = mongoose.model("data_komen_video", format_komen_video, "data_komen_video");
const data_product_video = mongoose.model("data_product_video", format_product_video, "data_produk_video");

module.exports = {data_video, data_komen_video, data_product_video};
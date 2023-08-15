const { data_video, data_product_video } = require('../models/data_app');
const videoView = require('../views/videoView');

// Controller function to handle the route for fetching all videos
async function getAllVideos(req, res) {
  try {
    const result = await data_video.find({});
    const videoData = result.map(object_video => ({
      "videoID": object_video.videoID,
      "URLthumbnail": object_video.videoData[0].URLthumbnail,
      "title": object_video.videoData[0].title
    }));
    videoView.renderVideoData(res, videoData);
  } catch (error) {
    res.json(error);
  }
}

// Controller function to handle the route for fetching a video by its ID
async function getProduct(req, res) {
  try {
    const id = req.params.id;
    const result = await data_product_video.findOne({ videoID: id });
    const productData = result.products.map(object_product => ({
      "productID": object_product.productID,
      "productLink": object_product.productLink,
      "productTitle": object_product.productTitle,
      "productPrice": object_product.productPrice
    }));
    videoView.renderProduct(res, productData);
  } catch (error) {
    res.json(error);
  }
}

module.exports = {
  getAllVideos,
  getProduct,
};

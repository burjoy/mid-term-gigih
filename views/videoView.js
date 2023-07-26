// View function to render video data response
function renderVideoData(res, videoData) {
    res.json(videoData);
  }
  
  // View function to render video product data response
  function renderProduct(res, productData) {
    res.json(productData);
  }
  
  // View function to render comments response
  function renderComments(res, comments) {
    res.json(comments);
  }
  
  module.exports = {
    renderVideoData,
    renderProduct,
    renderComments,
  };
  
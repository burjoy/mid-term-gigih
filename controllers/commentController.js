const { data_komen_video } = require('../models/data_app');
const commentView = require('../views/videoView');

// Controller function to handle the route for fetching comments by video ID
async function getComments(req, res) {
  try {
    const id = req.params.id;
    const result = await data_komen_video.findOne({ "videoID": id });
    commentView.renderComments(res, result.comments);
  } catch (error) {
    res.json(error);
  }
}

// Controller function to handle the route for posting a new comment
async function postComment(req, res) {
  try {
    const ID = req.params.id;
    const { Name, Comment } = req.body;
    if (!Name || !Comment) {
      res.status(400).send("Client side error: Lack of parameters");
    } else {
      // Update the comments in the database
      data_komen_video.findOneAndUpdate({ "videoID": ID },
        {
          $push: {
            "comments": [{
              "username": Name,
              "comment": Comment,
              "timestamp": new Date().toString()
            }]
          }
        },
        { new: true }
      )
        .then(updatedDoc => {
          console.log("Document Updated Successfully");
        })
        .catch(error => {
          console.error("Error Occurred:", error);
        });

      // Fetch and return the updated comments after posting
      commentView.renderPostComments(res, result);
    }
  } catch (error) {
    console.log(error);
    res.send("Gagal");
  }
}

module.exports = {
  getComments,
  postComment,
};

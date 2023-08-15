const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const videoController = require('./controllers/videoController');
const commentController = require('./controllers/commentController');
const videoView = require('./views/videoView');

require('dotenv').config();

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.LINK_MONGODB_ATLAS)
  .then((response) => {
    console.log("Berhasil konek ke database");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.use(cors());

// Routes for video data
app.get('/', videoController.getAllVideos); 

app.get('/video/:id', videoController.getProduct); 

// Routes for comments
app.get('/video/:id/comments', commentController.getComments); 

app.post('/video/:id/comments/post', commentController.postComment); 

app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
// const mongoose = require('mongoose');
const data_app = require('./model/data_app');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// mongoose.connect('mongodb://127.0.0.1/app_db')
// .then((response) => {
//     console.log("Berhasil konek ke database");
// })
// .catch((err) => {
//     console.log(`Error: ${err}`);
// })

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const data = await data_app.find({});
        res.json([data.URLthumbnail, data.videoID]);
    } catch (error) {
        res.json(error);
    }
})

app.get('/video/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await data_app.findOne({videoID: id});
        res.json([result.productID, result.productLink, result.productTitle, result.productPrice]);
    } catch (error) {
        res.json(error);
    }
})

app.get('/video/:id/comments', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await data_app.findOne({videoID: id});
        res.json(result.userName, result.userComment, result.userTimeStamp); //ide: bikin komen 1 vid kedalem array of object, 1 object isinya data komen dari 1 user
    } catch (error) {
        res.json(error);
    }
})

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
})
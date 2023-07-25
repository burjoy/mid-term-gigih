const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const data_app = require('./model/data_app');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1/app_db')
.then((response) => {
    console.log("Berhasil konek ke database");
})
.catch((err) => {
    console.log(`Error: ${err}`);
})

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const result = await data_app.find({});
        const videoData = result.map(object_video => ({
            "videoID": object_video.videoID,
            "URLthumbnail": object_video.URLthumbnail
        }));
        res.json(videoData);
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
        res.json(result.comments); //ide: bikin komen 1 vid kedalem array of object, 1 object isinya data komen dari 1 user
    } catch (error) {
        res.json(error);
    }
})

app.post('/video/:id/comments', async (req, res) => {
    try {
        const ID = req.params.id;
        const {Name, Comment} = req.body;
        if (!Name || !Comment){
            res.status(400).send("Client side error: :Lack of parameters");
        }
        else{
            data_app.findOneAndUpdate({"videoID": ID}, 
            {$push: {"comments": [{
                "userName":Name, 
                "userComment":Comment, 
                "timestamp": new Date().toString()}]}}, {new: true})
            .then(updatedDoc => {
                console.log("Document Updated Successfully");
            })
            .catch(error => {
                console.error("Error Occurred:", error);
            });
            const result = await data_app.findOne({videoID: ID});
            console.log(result);
            res.status(200).send(result);
        }
    } catch (error) {
        console.log(error);
        res.send("Gagal");
    }
})

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
})
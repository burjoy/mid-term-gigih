const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const {data_video, data_komen_video, data_product_video} = require('./model/data_app');
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
        const result = await data_video.findOne();
        const videoData = result.videoData.map(object_video => ({
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
        const result = await data_product_video.findOne({videoID: id});
        const productData = result.products.map(object_product => ({
            "productID": object_product.productID,
            "productLink": object_product.productLink,
            "productTitle": object_product.productTitle,
            "productPrice": object_product.productPrice
        }))
        res.json(productData);
    } catch (error) {
        res.json(error);
    }
})

app.get('/video/:id/comments', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await data_komen_video.find({"videoID": id});
        res.json(result); //ide: bikin komen 1 vid kedalem array of object, 1 object isinya data komen dari 1 user
    } catch (error) {
        res.json(error);
    }
})

app.post('/video/:id/comments/post', async (req, res) => {
    try {
        const ID = req.params.id;
        const {Name, Comment} = req.body;
        if (!Name || !Comment){
            res.status(400).send("Client side error: :Lack of parameters");
        }
        else{
            data_komen_video.findOneAndUpdate({"videoID": ID}, 
            {$push: {"comments": [{
                "username":Name, 
                "comment":Comment, 
                "timestamp": new Date().toString()}]}}, {new: true})
            .then(updatedDoc => {
                console.log("Document Updated Successfully");
            })
            .catch(error => {
                console.error("Error Occurred:", error);
            });
            const result = await data_komen_video.findOne({videoID: ID});
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
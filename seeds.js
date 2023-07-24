const mongoose = require('mongoose');
const data_app = require('./model/data_app');

mongoose.connect('mongodb://127.0.0.1/app_db')
.then((response) => {
    console.log("Berhasil konek ke database");
})
.catch((err) => {
    console.log(`Error: ${err}`);
})

const seedApp = [
    {
        videoID: "kqtD5dpn9C8",
        URLthumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/default.jpg",
        comments: [
            {
                userName: "Bapuks",
                userComment: "Test Comment aje ye",
                timestamp: new Date().toString()
            },
            {
                userName: "Anjay",
                userComment: "Test comment kedua",
                timestamp: new Date().toString()
            },
            {
                userName: "Bajai",
                userComment: "Test comment ketiga",
                timestamp: new Date().toString()
            }
        ]
    },

    {
        videoID: "rfscVS0vtbw",
        URLthumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/default.jpg",
        comments: [
            {
                userName: "Bapuks",
                userComment: "Test Comment aje ye",
                timestamp: new Date().toString()
            },
            {
                userName: "Anjay",
                userComment: "Test comment kedua",
                timestamp: new Date().toString()
            },
            {
                userName: "Bajai",
                userComment: "Test comment ketiga",
                timestamp: new Date().toString()
            }
        ]
    },

    {
        videoID: "XKHEtdqhLK8",
        URLthumbnail: "https://i.ytimg.com/vi/XKHEtdqhLK8/default.jpg",
        comments: [
            {
                userName: "Bapuks",
                userComment: "Test Comment aje ye",
                timestamp: new Date().toString()
            },
            {
                userName: "Anjay",
                userComment: "Test comment kedua",
                timestamp: new Date().toString()
            },
            {
                userName: "Bajai",
                userComment: "Test comment ketiga",
                timestamp: new Date().toString()
            }
        ]
    }
];

data_app.insertMany(seedApp).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
})
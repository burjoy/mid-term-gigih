const mongoose = require('mongoose');
const {data_video, data_komen_video, data_product_video} = require('./models/data_app');

mongoose.connect('mongodb://127.0.0.1/app_db')
.then((response) => {
    console.log("Berhasil konek ke database");
})
.catch((err) => {
    console.log(`Error: ${err}`);
})

const seedDataVideo = {
        videoData: [{
            videoID: "kqtD5dpn9C8",
            URLthumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/default.jpg",
            },
            {
                videoID: "rfscVS0vtbw",
                URLthumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/default.jpg",
            },
            {
                videoID: "XKHEtdqhLK8",
                URLthumbnail: "https://i.ytimg.com/vi/XKHEtdqhLK8/default.jpg",
            }]
        };
        
const seedKomenVideo =  [
            {
                videoID: "kqtD5dpn9C8",
                comments: [{
                    username: "Anjay",
                    comment: "Test Comment",
                    timestamp: new Date().toString()
            },
            ]
        },
        {
            videoID: "rfscVS0vtbw",
            comments: [{
                username: "Anjay",
                comment: "Test Comment",
                timestamp: new Date().toString()
            },
            ]
        },
        {
            videoID: "XKHEtdqhLK8",
            comments: [{
                username: "Anjay",
                comment: "Test Comment",
                timestamp: new Date().toString()
            },
            ]
        }
        
    ];

const seedProductVideo = [{
    videoID: "XKHEtdqhLK8",
    products: [{
        productID: 1,
        productLink: "http://linkasal.com",
        productTitle: "Test Barang uhuy",
        productPrice: 500000
        }]
    },
    {
        videoID: "rfscVS0vtbw",
        products: [{
            productID: 10,
            productLink: "http://linkasal.com",
            productTitle: "Test Barang uhuy",
            productPrice: 500000
            }]
    },
    {
        videoID: "kqtD5dpn9C8",
        products: [{
            productID: 100,
            productLink: "http://linkasal.com",
            productTitle: "Test Barang uhuy",
            productPrice: 500000
            }]
    }
]

data_video.insertMany(seedDataVideo).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});

data_komen_video.insertMany(seedKomenVideo).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});

data_product_video.insertMany(seedProductVideo).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});
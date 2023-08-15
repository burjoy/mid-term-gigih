const mongoose = require('mongoose');
const {data_video, data_komen_video, data_product_video} = require('./server/models/data_app');

require('dotenv').config();

mongoose.connect(process.env.LINK_MONGODB_ATLAS)
.then((response) => {
    console.log("Berhasil konek ke database");
})
.catch((err) => {
    console.log(`Error: ${err}`);
})

const seedDataVideo = 
        [{
            videoID: "kqtD5dpn9C8",
            videoData: [
                {
                    URLthumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/hqdefault.jpg",
                    title: "Python for Beginners - Learn Python in 1 Hour",
                }
            ]
            },
            {
                videoID: "rfscVS0vtbw",
                videoData: [
                    {
                        URLthumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg",
                        title: "Learn Python - Full Course for Beginners [Tutorial]",
                    }
                ]
            },
            {
                videoID: "mMv6OSuitWw",
                videoData: [
                    {
                        URLthumbnail: "https://i.ytimg.com/vi/mMv6OSuitWw/hqdefault.jpg",
                        title: "Python 101: Learn the 5 Must-Know Concepts",
                    }
                ]
            },
            {
                videoID: "x7X9w_GIm1s",
                videoData: [
                    {
                        URLthumbnail: "https://i.ytimg.com/vi/x7X9w_GIm1s/hqdefault.jpg",
                        title: "Python in 100 Seconds",
                    }
                ]
            },
            {
                videoID: "nLRL_NcnK-4",
                videoData: [
                    {
                        URLthumbnail: "https://i.ytimg.com/vi/nLRL_NcnK-4/hqdefault.jpg",
                        title: "Harvard CS50s Introduction to Programming with Python - Full University Course",
                    }
                ]
            },
            {
                videoID: "8DvywoWv6fI",
                videoData: [
                    {
                        URLthumbnail: "https://i.ytimg.com/vi/8DvywoWv6fI/hqdefault.jpg",
                        title: "Python for Everybody - Full University Python Course"
                    }
                ]
            },
            {
                videoID: "PkZNo7MFNFg",
                videoData: [
                    {
                        URLthumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
                        title: "Learn JavaScript - Full Course for Beginners"
                    }
                ]
            },
            {
                videoID: "DHjqpvDnNGE",
                videoData: [
                    {
                        URLthumbnail: "https://i.ytimg.com/vi/DHjqpvDnNGE/hqdefault.jpg",
                        title: "JavaScript in 100 Seconds"
                    }
                ]
            }
        ];
        
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
            videoID: "mMv6OSuitWw",
            comments: [{
                username: "Anjay",
                comment: "Test Comment",
                timestamp: new Date().toString()
            },
            ]
        }
        
    ];

const seedProductVideo = [{
    videoID: "mMv6OSuitWw",
    products: [{
        productID: 1,
        productLink: "https://lh3.googleusercontent.com/-G20tVv7BUn8/YWE9qe_6IgI/AAAAAAAAZoI/bpOtkVFu-ZYwG3qoMK4eBKq6PXatdjaOgCLcBGAsYHQ/s16000/MSI%2BGF63%2BThin%2B11SC%2B080ID%2BLaptophia.JPG",
        productTitle: "MSI GF63 Thin 11SC-080ID i5-11400H 8GB 512GB GTX1650 4GB W10",
        productPrice: 9399000
        },
    {
        productID: 2,
        productLink: "https://images.tokopedia.net/img/cache/500-square/product-1/2020/4/15/batch-upload/batch-upload_98ca9741-6ae4-4c38-a4fe-6223d55546f5.jpg",
        productTitle: "Fundamental of Python for Machine Learning",
        productPrice: 200000
    },
    {
        productID: 3,
        productLink: "https://cdn.gramedia.com/uploads/items/9786230026218_Cov_Belajar_Sendiri_Mengolah_Data_dengan_Python_dan_Pandas.jpg",
        productTitle: "Belajar sendiri mengolah data dengan Python dan Pandas",
        productPrice: 58500
    }]
    },
    {
        videoID: "rfscVS0vtbw",
        products: [{
            productID: 10,
            productLink: "https://www.itgaleri.com/wp-content/uploads/2023/01/FA506IHRB-R565B6T-O111-1.jpg",
            productTitle: "ASUS TUF A15",
            productPrice: 11479000
            },
            {
            productID: 1,
            productLink: "https://lh3.googleusercontent.com/-G20tVv7BUn8/YWE9qe_6IgI/AAAAAAAAZoI/bpOtkVFu-ZYwG3qoMK4eBKq6PXatdjaOgCLcBGAsYHQ/s16000/MSI%2BGF63%2BThin%2B11SC%2B080ID%2BLaptophia.JPG",
            productTitle: "MSI GF63 Thin 11SC-080ID i5-11400H 8GB 512GB GTX1650 4GB W10",
            productPrice: 9399000
            },
            {
                productID: 3,
                productLink: "https://cdn.gramedia.com/uploads/items/9786230026218_Cov_Belajar_Sendiri_Mengolah_Data_dengan_Python_dan_Pandas.jpg",
                productTitle: "Belajar sendiri mengolah data dengan Python dan Pandas",
                productPrice: 58500
            }]
    },
    {
        videoID: "kqtD5dpn9C8",
        products: [{
            productID: 100,
            productLink: "https://www.softcom.co.id/wp-content/uploads/2021/04/M433-indie-black-1.jpg",
            productTitle: "ASUS Vivobook S14",
            productPrice: 5369000
            },
            {productID: 1,
            productLink: "https://lh3.googleusercontent.com/-G20tVv7BUn8/YWE9qe_6IgI/AAAAAAAAZoI/bpOtkVFu-ZYwG3qoMK4eBKq6PXatdjaOgCLcBGAsYHQ/s16000/MSI%2BGF63%2BThin%2B11SC%2B080ID%2BLaptophia.JPG",
            productTitle: "MSI GF63 Thin 11SC-080ID i5-11400H 8GB 512GB GTX1650 4GB W10",
            productPrice: 9399000
            },
            {
                productID: 3,
                productLink: "https://cdn.gramedia.com/uploads/items/9786230026218_Cov_Belajar_Sendiri_Mengolah_Data_dengan_Python_dan_Pandas.jpg",
                productTitle: "Belajar sendiri mengolah data dengan Python dan Pandas",
                productPrice: 58500
            }]
    },
    {
        videoID: "x7X9w_GIm1s",
        products: [{
            productID: 100,
            productLink: "https://www.softcom.co.id/wp-content/uploads/2021/04/M433-indie-black-1.jpg",
            productTitle: "ASUS Vivobook S14",
            productPrice: 5369000
            },
            {productID: 1,
            productLink: "https://lh3.googleusercontent.com/-G20tVv7BUn8/YWE9qe_6IgI/AAAAAAAAZoI/bpOtkVFu-ZYwG3qoMK4eBKq6PXatdjaOgCLcBGAsYHQ/s16000/MSI%2BGF63%2BThin%2B11SC%2B080ID%2BLaptophia.JPG",
            productTitle: "MSI GF63 Thin 11SC-080ID i5-11400H 8GB 512GB GTX1650 4GB W10",
            productPrice: 9399000
            },
            {
                productID: 3,
                productLink: "https://cdn.gramedia.com/uploads/items/9786230026218_Cov_Belajar_Sendiri_Mengolah_Data_dengan_Python_dan_Pandas.jpg",
                productTitle: "Belajar sendiri mengolah data dengan Python dan Pandas",
                productPrice: 58500
            }]
    },
    {
    videoID: "nLRL_NcnK-4",
    products: [{
        productID: 1,
        productLink: "https://lh3.googleusercontent.com/-G20tVv7BUn8/YWE9qe_6IgI/AAAAAAAAZoI/bpOtkVFu-ZYwG3qoMK4eBKq6PXatdjaOgCLcBGAsYHQ/s16000/MSI%2BGF63%2BThin%2B11SC%2B080ID%2BLaptophia.JPG",
        productTitle: "MSI GF63 Thin 11SC-080ID i5-11400H 8GB 512GB GTX1650 4GB W10",
        productPrice: 9399000
        },
    {
        productID: 2,
        productLink: "https://images.tokopedia.net/img/cache/500-square/product-1/2020/4/15/batch-upload/batch-upload_98ca9741-6ae4-4c38-a4fe-6223d55546f5.jpg",
        productTitle: "Fundamental of Python for Machine Learning",
        productPrice: 200000
    },
    {
        productID: 3,
        productLink: "https://cdn.gramedia.com/uploads/items/9786230026218_Cov_Belajar_Sendiri_Mengolah_Data_dengan_Python_dan_Pandas.jpg",
        productTitle: "Belajar sendiri mengolah data dengan Python dan Pandas",
        productPrice: 58500
    }]
    },
    {
        videoID: "8DvywoWv6fI",
        products: [{
            productID: 1,
            productLink: "https://lh3.googleusercontent.com/-G20tVv7BUn8/YWE9qe_6IgI/AAAAAAAAZoI/bpOtkVFu-ZYwG3qoMK4eBKq6PXatdjaOgCLcBGAsYHQ/s16000/MSI%2BGF63%2BThin%2B11SC%2B080ID%2BLaptophia.JPG",
            productTitle: "MSI GF63 Thin 11SC-080ID i5-11400H 8GB 512GB GTX1650 4GB W10",
            productPrice: 9399000
            },
        {
            productID: 2,
            productLink: "https://images.tokopedia.net/img/cache/500-square/product-1/2020/4/15/batch-upload/batch-upload_98ca9741-6ae4-4c38-a4fe-6223d55546f5.jpg",
            productTitle: "Fundamental of Python for Machine Learning",
            productPrice: 200000
        },
        {
            productID: 3,
            productLink: "https://cdn.gramedia.com/uploads/items/9786230026218_Cov_Belajar_Sendiri_Mengolah_Data_dengan_Python_dan_Pandas.jpg",
            productTitle: "Belajar sendiri mengolah data dengan Python dan Pandas",
            productPrice: 58500
        }]
    },
    {
        videoID: "PkZNo7MFNFg",
        products: [{
            productID: 100,
            productLink: "https://www.softcom.co.id/wp-content/uploads/2021/04/M433-indie-black-1.jpg",
            productTitle: "ASUS Vivobook S14",
            productPrice: 5369000
            },
            {productID: 1,
            productLink: "https://lh3.googleusercontent.com/-G20tVv7BUn8/YWE9qe_6IgI/AAAAAAAAZoI/bpOtkVFu-ZYwG3qoMK4eBKq6PXatdjaOgCLcBGAsYHQ/s16000/MSI%2BGF63%2BThin%2B11SC%2B080ID%2BLaptophia.JPG",
            productTitle: "MSI GF63 Thin 11SC-080ID i5-11400H 8GB 512GB GTX1650 4GB W10",
            productPrice: 9399000
            },
            {
                productID: 3,
                productLink: "https://cdn.gramedia.com/uploads/items/9786230026218_Cov_Belajar_Sendiri_Mengolah_Data_dengan_Python_dan_Pandas.jpg",
                productTitle: "Belajar sendiri mengolah data dengan Python dan Pandas",
                productPrice: 58500
            }]
    },
    {
        videoID: "DHjqpvDnNGE",
        products: [{
            productID: 1,
            productLink: "https://lh3.googleusercontent.com/-G20tVv7BUn8/YWE9qe_6IgI/AAAAAAAAZoI/bpOtkVFu-ZYwG3qoMK4eBKq6PXatdjaOgCLcBGAsYHQ/s16000/MSI%2BGF63%2BThin%2B11SC%2B080ID%2BLaptophia.JPG",
            productTitle: "MSI GF63 Thin 11SC-080ID i5-11400H 8GB 512GB GTX1650 4GB W10",
            productPrice: 9399000
            },
        {
            productID: 2,
            productLink: "https://images.tokopedia.net/img/cache/500-square/product-1/2020/4/15/batch-upload/batch-upload_98ca9741-6ae4-4c38-a4fe-6223d55546f5.jpg",
            productTitle: "Fundamental of Python for Machine Learning",
            productPrice: 200000
        },
        {
            productID: 3,
            productLink: "https://cdn.gramedia.com/uploads/items/9786230026218_Cov_Belajar_Sendiri_Mengolah_Data_dengan_Python_dan_Pandas.jpg",
            productTitle: "Belajar sendiri mengolah data dengan Python dan Pandas",
            productPrice: 58500
        }]
    }
];

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
# Tokopedia Play Clone
## Struktur Database
Aplikasi ini menggunakan MongoDB sebagai database. Di dalam database, terdapat 3 collection, masing-masing berisi data untuk video, produk dan komentar pada video. Berikut merupakan schema dari masing-masing collection:

1. `data_video` collection:
Didalam collection `data_video` terdapat:
-`videoData`: Sebuah array berisi object yang menyimpan informasi video. Didalam `videoData` berisi:
    -`videoID`: Sebuah string yang merepresentasikan identifier untuk video   
    -`URLthumbnail`: Sebuah string yang merepresentasikan link gambar untuk thumbnail video

3. `data_komen_video` collection:
Didalam collection `data_komen_video` terdapat:
-`videoID`: Sebuah string yang merepresentasikan identifier untuk video
-`comments`: Sebuah array berisi object yang menyimpan informasi komentar pada video yang bersangkutan. Didalam `comments` berisi:
    -`username`: Sebuah string yang menyatakan nama dari komentator
    -`comment`: Sebuah string yang menyatakan komentar yang dikirim oleh user
    -`timestamp`: Sebuah string yang menyatakan waktu kapan komentar telah dipost

4. `data_product_video` collection:
Didalam collection `data_product_video` terdapat:
-`videoID`: Sebuah string yang merepresentasikan identifier untuk video
-`products`: Sebuah array yang berisi object yang menyimpan informasi produk-produk yang berada didalam video yang bersangkutan. Didalam `products` berisi:
    -`productID`: Sebuah string yang menyatakan identifier untuk suatu produk
    -`productLink`: Sebuah string yang menyatakan link tempat pembelian untuk suatu produk
    -`productTitle`: Sebuah string yang menyatakan nama dari produk yang bersangkutan
    -`productPrice`: Sebuah data berformat Number yang menyatakan harga dari produk yang bersangkutan

Ketiga collection ini terhubung dengan field `videoID`. Field `videoID` berperan sebagai key yang dapat mengakses data-data dari masing-masing collection. Sebagai contoh, apabila user ingin mengakses komentar pada suatu video, maka user dapat meng-query collection `data_komen_video` menggunakan `videoID`.

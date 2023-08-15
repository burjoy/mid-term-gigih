# Tokopedia Play Clone
## Struktur Database
Aplikasi ini menggunakan MongoDB sebagai database. Di dalam database, terdapat 3 collection, masing-masing berisi data untuk video, produk dan komentar pada video. Berikut merupakan schema dari masing-masing collection:

1. `data_video` collection:<br />
Didalam collection `data_video` terdapat:<br />
-`videoData`: Sebuah array berisi object yang menyimpan informasi video. Didalam `videoData` berisi:<br />
    &emsp;`videoID`: Sebuah string yang merepresentasikan identifier untuk video<br />
    &emsp;`URLthumbnail`: Sebuah string yang merepresentasikan link gambar untuk thumbnail video<br />
    &emsp;`title`: Sebuah string yang merepresentasikan judul video<br />

2. `data_komen_video` collection:<br />
Didalam collection `data_komen_video` terdapat:<br />
-`videoID`: Sebuah string yang merepresentasikan identifier untuk video<br />
-`comments`: Sebuah array berisi object yang menyimpan informasi komentar pada video yang bersangkutan. Didalam `comments` berisi:<br />
    &emsp;`username`: Sebuah string yang menyatakan nama dari komentator<br />
    &emsp;`comment`: Sebuah string yang menyatakan komentar yang dikirim oleh user<br />
    &emsp;`timestamp`: Sebuah string yang menyatakan waktu kapan komentar telah dipost<br />

3. `data_product_video` collection:<br />
Didalam collection `data_product_video` terdapat:<br />
-`videoID`: Sebuah string yang merepresentasikan identifier untuk video<br />
-`products`: Sebuah array yang berisi object yang menyimpan informasi produk-produk yang berada didalam video yang bersangkutan. Didalam `products` berisi:<br />
    &emsp;`productID`: Sebuah string yang menyatakan identifier untuk suatu produk<br />
    &emsp;`productLink`: Sebuah string yang menyatakan link tempat pembelian untuk suatu produk<br />
    &emsp;`productTitle`: Sebuah string yang menyatakan nama dari produk yang bersangkutan<br />
    &emsp;`productPrice`: Sebuah data berformat Number yang menyatakan harga dari produk yang bersangkutan<br />

Ketiga collection ini terhubung dengan field `videoID`. Field `videoID` berperan sebagai key yang dapat mengakses data-data dari masing-masing collection. Sebagai contoh, apabila user ingin mengakses komentar pada suatu video, maka user dapat meng-query collection `data_komen_video` menggunakan `videoID`.

## Struktur API
Dibawah ini merupakan endpoint dan respon dari request API:<br />
1. `GET /`:<br />
&emsp;-Mengambil semua ID video beserta link thumbnailnya<br />
&emsp;-Parameter URL: Tidak ada<br />
&emsp;-Parameter Data: Tidak ada<br />
&emsp;-Header: Content-Type: application/json<br />
&emsp;-Response:<br />
Success: <br />
```javascript
[
    {
        "videoID": string,
        "URLthumbnail": string,
        "title": string
    },
    ...
]
```

2. `GET /video/:id`:<br />
&emsp;-Mengambil semua informasi produk yang terkait dengan video yang bersangkutan<br />
&emsp;-Parameter URL: `id=[string]`<br />
&emsp;-Parameter Data: Tidak ada<br />
&emsp;-Header: Content-Type: application/json<br />
&emsp;-Response: <br />
Success: <br />
```javascript
[
    {
        "productID": string,
        "productLink": string,
        "productTitle": string,
        "productPrice": integer
    },
    ...
]
```

3. `GET /video/:id/comments`:<br />
&emsp;-Mengambil semua komentar yang terkait dengan video yang bersangkutan<br />
&emsp;-Parameter URL: `id=[string]`<br />
&emsp;-Parameter Data: Tidak ada<br />
&emsp;Header: Content-Type: application/json<br />
&emsp;Response: <br />
Success: <br />
```javascript
[
    {
        "username": string,
        "comment": string,
        "timestamp": string,
    },
    ...
]
```

4. `POST /video/:id/comments/post`<br />
&emsp;-Menambahkan komentar baru pada video yang bersangkutan<br />
&emsp;-Parameter URL: `id=[string]`<br />
&emsp;-Parameter Data: <br />
```javascript
{
    Name: string,
    Comment: string
}
```
&emsp;Response: <br />
&emsp;&emsp;Success: Kode 200<br />
&emsp;&emsp;Fail: Kode 400

## How To Run in Local
Untuk menjalankan program ini secara lokal, berikut langkah-langkahnya:
1. Clone repository ini ke lokal machine Anda. Apabila Anda menggunakan git, clone repository dapat dilakukan dengan langkah berikut:<br />
   &emsp;-Copy link berikut: https://github.com/burjoy/mid-term-gigih.git<br />
   &emsp;-Buka terminal git Anda, lalu ketik `git clone (link yang sudah dicopy)` tanpa tanda kurung<br />
2. Pastikan bahwa Anda telah memasang Node.js dan MongoDB pada perangkat Anda. Untuk memeriksa apakah Anda sudah memasang Node atau belum, Anda dapat mengetik perintah `node -v` pada terminal Anda. Untuk memeriksa apakah Anda sudah memasang MongoDB, Anda dapat mengetik perintah `mongod -version` pada terminal Anda <br />
3. Install package yang diperlukan oleh program dengan mengetik perintah berikut pada terminal Anda: <br />
-`npm install express` untuk menginstall express.js<br />
-`npm install cors` untuk menginstall package cors<br />
-`npm install mongoose` untuk menginstall mongoose<br />
-`npm install dotenv` agar dapat mengakses file .env<br />
-`npm install --g nodemon` untuk menginstall node monitor (opsional)<br />
4. Jalankan server MongoDB di local machine Anda dengan membuat file .env di root dan tulis dengan:<br />
`LINK_MONGODB_ATLAS = mongodb://127.0.0.1/nama_database`<br />
5. Sebelum menjalankan server API, generate data untuk database terlebih dahulu. Hal ini dapat dilakukan dengan mengetik `node seeds.js` pada terminal Anda.<br />
6. Jalankan server API dengan mengetik perintah berikut di terminal Anda: <br />
`node index.js` <br />
atau jika Anda tidak ingin restart server setiap ada perubahan, Anda dapat menggunakan nodemon:
`nodemon index.js` <br />
7. Sekarang, server seharusnya telah berjalan di `http://localhost:3000`<br />
8. Setelah server API berjalan, Anda dapat mencoba request API program ini. Anda dapat menggunakan postman atau cURL untuk mengujinya <br />
9. Untuk menguji frontend di local, Anda harus mengubah `client_id` pada `server/apis/spotifyLogin` terlebih dahulu dengan client id spotify yang Anda miliki. Untuk mendapatkan client id spotify, Anda dapat menuju developer.spotify.com, lalu buat aplikasi baru. Anda akan mendapatkan client id spotify Anda didalam pengaturan aplikasi yang baru Anda buat.<br />
10. Didalam aplikasi yang Anda buat tadi, Anda juga harus mengubah settingan callback aplikasi Anda ke `http://localhost:5173` agar frontend dapat berjalan. Didalam `spotifyLogin.jsx` juga ubah variabel `redirect_url` menjadi `http://localhost:5173`<br />
11. Setelah callback dan client id selesai Anda ubah, Anda dapat menjalankan perintah `npm run dev` untuk menguji frontendnya.

## Fitur
1. Search video by title<br />
2. Add comment to video (Login first)<br />
3. Login (by spotify)<br />

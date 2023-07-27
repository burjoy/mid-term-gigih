# Tokopedia Play Clone
## Struktur Database
Aplikasi ini menggunakan MongoDB sebagai database. Di dalam database, terdapat 3 collection, masing-masing berisi data untuk video, produk dan komentar pada video. Berikut merupakan schema dari masing-masing collection:

1. `data_video` collection:<br />
Didalam collection `data_video` terdapat:<br />
-`videoData`: Sebuah array berisi object yang menyimpan informasi video. Didalam `videoData` berisi:<br />
    &emsp;`videoID`: Sebuah string yang merepresentasikan identifier untuk video<br />
    &emsp;`URLthumbnail`: Sebuah string yang merepresentasikan link gambar untuk thumbnail video<br />

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
        "URLthumbnail": string
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
&emsp;```javascript
{
    Name: string,
    Comment: string
}
```
&emsp;Response: <br />
Success: Kode 200<br />
Fail: Kode 400

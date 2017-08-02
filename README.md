---
Contact Management
---
Tested on:
- Ubuntu 14.04 64bit
- Node 6.2.2

# Usage
## Server
1. run `npm install`
2. run `npm start`

Server secara default berjalan di `localhost:3000`. Untuk mengatur konfigurasi buka file `config.json`

Pastikan mongodb sudah berjalan dan sesuai dengan `config.json`

## Client
Client terdapat pada directory `client` pastikan anda sudah masuk ke directory tersebut.

Client dibuat dengan `vue.js`. Untuk kemudahan testing, `client` akan dijalankan dalam development mode

1. run `npm install`
2. run `npm run dev`
3. buka browser di `localhost:8080`

Untuk membuat production version anda bisa menggunakan `npm run build`

# API Documentation
Untuk melihat dokumentasi api kunjungi [dokumentasi api](API.md)

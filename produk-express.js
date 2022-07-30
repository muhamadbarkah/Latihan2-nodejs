const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Ini Adalah Halaman Home');
});

app.all('/produk', function(req, res) {
    res.send('Ini Adalah Halaman Produk');
});

app.listen(8000, function() {
    console.log('Berhasil Konek');
});
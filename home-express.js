const express = require('express');
const app = express();

app.get('/', function (req,res) {
    res.send('Ini Adalah Halaman Home');
});

app.listen(8000, function() {
    console.log('Aplikasi Tampilin Text doank');
});
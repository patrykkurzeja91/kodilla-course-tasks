var express = require("express"),
    bodyParser = require("body-parser"),
    fs = require('fs'),
    app = express(),
    stringifyFile,
    port = 3000;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile("./test.json", 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    })
});

app.post('/updateNote/:note', function (req, res) {
    stringifyFile += '' + req.params.note;
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        console.log('file updated')
        res.send(stringifyFile);
    });
});

app.listen(port, function () {
    console.log('server runs on http://localhost/' + port);
});
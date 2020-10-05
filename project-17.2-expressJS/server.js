var express = require("express");
var app = express();

// app.get('/', function(req, res) {
            //     console.log('Hello GET');
            //     res.send('HELLO WORLD');
            // });
app.get('/:id', function(req, res) {
    res.send('Zdanie ktrore dopisales to: ' + req.params.id);
});
app.delete('/del_user', function(req, res) {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log('serwer dziala i czeka na akcje');
});
app.use(function(req, res, next) {
    res.status(404).send('Nie znaleźliśmy tego czego żądasz')
})

// normalnie używać port 3000 lub inny ale w przypadku c9 działa to co wyżej
// app.listen(3000, function() {
//     console.log('serwer dziala i czeka na akcje')
// })

var express = require("express"),
    app = express(),
    URL= "/auth/google/";
//set
app.set('view engine', 'pug');
app.set('views', './views');
//use
app.use(express.static('assets'));
//get
app.get('/', function (req, res) {
    
    res.render('login', {
        name: 'Google login page',
        url: URL,
    });
});
// app.get(URL, function (req, res) {
//     const response = {
//         first_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     res.end(JSON.stringify(response));
// });

app.get(URL, function (req, res) {
    res.render('content', {
        user: {
            first_name: req.query.first_name,
            last_name: req.query.last_name
        }
    });
});
//server
var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server runs on http://' + host + ':' + port);
});
app.use(function (req, res, next) {
    res.status(404).send('Server Error');
});
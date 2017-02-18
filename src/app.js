var express = require('express');
var bodyParser = require('body-parser');
var faker = require('faker');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/name', function(req, res) {
    res.json({ name: faker.name.findName() });
});

router.get('/email', function(req, res) {
    res.json({ email: faker.internet.email() });
});

router.post('/card', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({ card: faker.helpers.createCard() });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

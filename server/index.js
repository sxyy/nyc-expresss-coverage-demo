/*jslint nomen: true */
var path = require('path'),
    express = require('express'),
    url = require('url'),
    data = require('./data'),
    publicDir = path.resolve(__dirname, '..', 'public'),
    bodyParser = require('body-parser');


function list(req, res, next) {
    var parsed = url.parse(req.url, true),
        authors = data.authors;
    if (parsed.query.alive === '1') {
        authors = authors.filter(function (a) { return !a.deceased; });
    }
    res.render('index', { authors: authors });
}

function detail(req, res, next) {
    var id = req.params.id,
        authors = data.authors;

    authors = authors.filter(function (a) { return a.id === id; });
    if (authors.length === 0) {
        res.send(404);
    } else {
        res.render('detail', { author: authors[0] });
    }
}

function coverageData(req, res, next) {
    res.json(global.__coverage__)
}

module.exports = {
    start: function (port, needCover) {
        var app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.set('view engine', 'hbs');
        app.engine('hbs', require('hbs').__express);
        app.use(express['static'](publicDir));

        app.get('/', list);
        app.get('/authors/:id', detail);
        app.get('/coverageData', coverageData)
        app.listen(port);
    }
};


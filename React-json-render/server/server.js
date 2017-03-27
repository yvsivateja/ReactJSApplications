var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('body-parser');
var Client = require('node-rest-client').Client;

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/home', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/startInterview', function(req, res) {
    var client = new Client();
    var bearerAccessToken = 'Bearer ' + req.headers['token'];
    var params = {
        data: [],
        headers: {
            "Content-Type": "application/json",
            "Authorization": bearerAccessToken
        }
    };
    var appURL = 'https://mlc--dev14.cs41.my.salesforce.com/services/data/v37.0/process/interviews/Advisor_to_Client_Onboarding_Flow'

    var req = client.post(appURL, params, function(data, response) {
        return res.send(data);
    });
    req.on('error', function(err) {
        console.log('request error', err);
    });
})
app.post('/saveUserInputs', function(req, res) {
    var client = new Client();
    var bearerAccessToken = 'Bearer ' + req.headers['token'];
    var params = {
        data: req.body.SFRequest,
        headers: {
            "Content-Type": "application/json",
            "Authorization": bearerAccessToken
        }
    };
    var appURL = 'https://mlc--dev14.cs41.my.salesforce.com/services/data/v37.0/process/interviews/Advisor_to_Client_Onboarding_Flow/' + req.body.guid

    var req = client.patch(appURL, params, function(data, response) {
        return res.send(data);
    });
})
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(error) {
    if (error)
        throw error;
    console.log("Express server listening on port", app.get('port'));
});

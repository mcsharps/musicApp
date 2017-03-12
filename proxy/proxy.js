var express = require('express')
var app = express()
var Discogs = require('disconnect').Client;
var https = require('https');
var async = require('async');
var myRequestData,
    myAccessData,
    myMusicData,
    releaseUrls,
    usernameToFetch;
app.options ('/authorize', function(req, res){
    console.log('authorize options')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Request-Headers', '*');
    res.setHeader('User-Agent', 'YourAppName');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, responseType, X-Requested-With, authorizeUrl, usernameToFetch');
    res.writeHead(200);
    res.end();
});
app.post('/authorize', function(req, res){
    console.log('hit authorize');
    usernameToFetch = req.headers.usernametofetch;
    console.log('username to fetch now is ', usernameToFetch);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('crossDomain', 'true');
    res.setHeader('User-Agent', 'YourAppName');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, responseType, X-Requested-With, crossDomain, usernameToFetch');
    var oAuth = new Discogs().oauth();
    oAuth.getRequestToken(
        'YOUR_CONSUMER_KEY',
        'YOUR_CONSUMER_SECRET',
        'http://127.0.0.1:7777/callback', //to server get /callback down below
        function(err, requestData){
            console.log(err);
            // console.log(requestData);
            myRequestData = requestData;
            res.setHeader('User-Agent', 'YourAppName');
            res.send({authorize: requestData.authorizeUrl}); //for authorize button

        }
    );
})
app.options ('/callback', function(req, res){
    console.log('callback options')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('User-Agent', 'YourAppName');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, responseType, X-Requested-With, authorizeUrl, Access-Control-Allow-Origin');
    res.writeHead(200);
    res.end();
});
app.get('/callback', function(req, res){
    var oAuth = new Discogs(myRequestData).oauth();
    oAuth.getAccessToken(
        req.query.oauth_verifier, // Verification code sent back by Discogs
        function(err, accessData){
            console.log('accessdata ', accessData);
            myAccessData = accessData;
            res.redirect('http://127.0.0.1:8888/music') //to callback route on frontend with nice stuffz
        }
    );
});
app.options ('/music', function(req, res){
    console.log('music options')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('User-Agent', 'YourAppName');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, responseType, X-Requested-With, authorizeUrl, Access-Control-Allow-Origin');
    res.writeHead(200);
    res.end();
});
app.post('/music', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('User-Agent', 'YourAppName');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, responseType, X-Requested-With, authorizeUrl, Access-Control-Allow-Origin');
    var collection = new Discogs(myAccessData).user().collection();
    var db = new Discogs(myAccessData).database();
    collection.getReleases(usernameToFetch, 0, function(err, data){
    var releaseUrls = data.releases.map(function(release){
        return release.basic_information.resource_url
    });
        async.mapLimit(releaseUrls, 5, function(release, callback) {
           db.getImage(release, function (err, data) {
                if (err) return callback(err);
                    data = JSON.parse(data);
                    callback(null, data.images[0].resource_url);
                })
            }, function(err, results) {
               // results is an array of names
               console.log('err ', err);
               res.send({data: data, results: results});
        });
    console.log('err ', err);
    });

});
app.listen(7777, function () {
  console.log('Example app listening on port 7777!')
})


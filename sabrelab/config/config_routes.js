var key = require('./keys.js');

var SabreDevStudio = require('sabre-dev-studio');
var sabre_dev_studio = new SabreDevStudio({
  client_id:     key.client_id,
  client_secret: key.client_secret,
  uri:           'https://api.test.sabre.com'
});
var options = {};

function sabreCall(q, res) {
  sabreDevStudio.get(q, options, function(err, data) {
    response(res, err, data);
  });
}

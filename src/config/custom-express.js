require('marko/node-require').install();
require('marko/express');

const express = require('express');
const routes = require('../app/routes/routes.js');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
const app = express();

app.use('/static', express.static('src/app/public'));
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}))

routes(app);
module.exports = app;
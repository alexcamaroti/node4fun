const http = require('http');
const app = require('./src/config/custom-express.js');

app.listen(3000, function(req, resp){
    console.log("Server running on 3000");
});



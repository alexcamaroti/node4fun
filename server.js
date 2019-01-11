const express = require('express');
const app = express();
const http = require('http');

app.listen(3000, function(req, resp){
    console.log("Server running on 3000");
});

app.get("/", function(req, resp){
        resp.send(
            `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>WineHouse</title>
            </head>
            <body>
                <h1>Welcome to Winehouse website.</h1>
            </body>
            </html>
    `
        )
})

// const server = http.createServer(function(req, resp){
//     resp.end(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>WineHouse</title>
//     </head>
//     <body>
//         <h1>Welcome to Winehouse website.</h1>
//     </body>
//     </html>
//     `);
// });
// server.listen(3000);
const express = require('express'),
    app = express(),
    server = require('./util/connection-config'),
    port = server.server.port,
    bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(port, (err) => {
    if (err) {
        console.log(`Could not connect to the port: ${port}`);
    }
    console.log(`Connected to port: ${port}`);
});

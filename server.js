'use strict';

const Hapi = require('hapi');
const Models = require('./models');
const Routes = require('./routes');
const ENV = process.env.NODE_ENV || 'development';
const Config = require('./config/config.json')[ENV];

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: process.env.IP || Config.host, 
    port: process.env.PORT || Config.port
});

// Add the route
server.route(Routes);

Models.sequelize.sync().then(function() {
    // Start the server
    server.start((err) => {
    
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
'use strict';

const Hapi   = require('hapi');
const models = require('./models');
const routes = require('./routes');
const config = require('./config/config.json')[(process.env.NODE_ENV || 'development')];

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: process.env.IP || config.host, 
    port: process.env.PORT || config.port
});

// Add the route
server.route(routes);

models.sequelize.sync().then(function() {
    // Start the server
    server.start((err) => {
    
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
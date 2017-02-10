'use strict';

const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path:'/pets', 
        handler: function (request, reply) {
            reply('Pets index');
        }
    },
    {
        method: 'GET',
        path:'/pets/{id}', 
        handler: function (request, reply) {
            reply('Pet show');
        }
    },
    {
        method: 'POST',
        path:'/pets', 
        handler: function (request, reply) {
            reply('Create Pet');
        }
    }
];
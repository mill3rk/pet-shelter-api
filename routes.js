'use strict';

const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path:'/pets', 
        handler: function (request, reply) {

            return reply('Pets index');
        }
    },
    {
        method: 'GET',
        path:'/pets/{id}', 
        handler: function (request, reply) {

            return reply('Pet show');
        }
    },
    {
        method: 'POST',
        path:'/pets', 
        handler: function (request, reply) {

            return reply('Create Pet');
        }
    }
];
'use strict';

const Joi = require('joi');
const PetsRepo = require('./repositories/pets');
const LatLongRegExPattern = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

module.exports = [
    {
        method: 'GET',
        path:'/pets', 
        handler: PetsRepo.pets.all
    },
    {
        method: 'GET',
        path:'/pets/{id}', 
        handler: PetsRepo.pets.byId
    },
    {
        method: 'POST',
        path:'/pets',
        // validate: {
        //     payload: {
        //         name: Joi.string().required().min(3).max(255),
        //         location: Joi.string().required().min(3).max(255),
        //         longitude: Joi.string().regex(LatLongRegExPattern),
        //         latitude: Joi.string().regex(LatLongRegExPattern)
        //     }
        // }, 
        handler: PetsRepo.pets.store
    }
];
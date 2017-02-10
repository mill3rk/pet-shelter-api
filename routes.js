'use strict';

const Joi = require('joi');
const breedsRepo = require('./repositories/breeds');
const typesRepo = require('./repositories/types');
const petsRepo = require('./repositories/pets');
const latLongRegExPattern = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

module.exports = [
    {
        method: 'GET',
        path:'/pets', 
        handler: petsRepo.pets.all
    },
    {
        method: 'GET',
        path:'/pets/{id}', 
        handler: petsRepo.pets.byId
    },
    {
        method: 'POST',
        path:'/pets',
        // validate: {
        //     payload: {
        //         name: Joi.string().required().min(3).max(255),
        //         location: Joi.string().required().min(3).max(255),
        //         longitude: Joi.string().regex(latLongRegExPattern),
        //         latitude: Joi.string().regex(latLongRegExPattern)
        //     }
        // }, 
        handler: petsRepo.pets.store
    },
    {
        method: 'GET',
        path:'/types', 
        handler: typesRepo.types.all
    },
    {
        method: 'GET',
        path:'/breeds', 
        handler: breedsRepo.breeds.all
    }
];
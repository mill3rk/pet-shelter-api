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
        handler: petsRepo.pets.byId,
        config: {
            validate: {
                params: {
                    id: Joi.number()
                }
            }
        }
    },
    {
        method: 'POST',
        path:'/pets',
        config: {
            validate: {
                payload: {
                    name: Joi.string().required().min(3).max(255),
                    location: Joi.string().required().min(3).max(255),
                    breedId: Joi.number().required(),
                    typeId: Joi.number().required(),
                    longitude: Joi.string().required().regex(latLongRegExPattern),
                    latitude: Joi.string().required().regex(latLongRegExPattern)
                }
            }
        }, 
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
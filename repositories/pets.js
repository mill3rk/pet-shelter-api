const models = require('../models');

exports.pets = {
  all: (request, reply) => {
    models.Pet.findAll()
      .then((pets) => {
        reply(pets).code(200);
      });
  },
  byId: (request, reply) => {
    models.Pet.findById(request.params.id)
      .then((pet) => {
        reply(pet).code(200);
      });
  },
  store: (request, reply) => {
    models.Pet.create(request.payload)
      .then((pet) => {
        reply(pet).code(200);
      });
  }
};
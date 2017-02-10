var models = require('../models');

exports.pets = {
  all: function(request, reply) {
    models.Pet.findAll()
      .then(function(pets) {
        reply(pets).code(200);
      });
  },
  byId: function(request, reply) {
    models.Pet.findById(request.params.id)
      .then(function(pet) {
        reply(pet).code(200);
      });
  },
  store: function(request, reply) {
    models.Pet.create(request.payload)
      .then(function(pet) {
        reply(pet).code(200);
      });
  }
};
const models = require('../models');

exports.breeds = {
  all: (request, reply) => {
    models.Breed.findAll()
      .then((breeds) => {
        reply(breeds).code(200);
      });
  }
};
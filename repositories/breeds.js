const models = require('../models');

exports.breeds = {
  all: (request, reply) => {
    models.Breed.findAll({ include: [models.Type] })
      .then((breeds) => reply(breeds).code(200));
  }
};
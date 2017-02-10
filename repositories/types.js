const models = require('../models');

exports.types = {
  all: (request, reply) => {
    models.Type.findAll()
      .then((types) => {
        reply(types).code(200);
      });
  }
};
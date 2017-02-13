const models = require('../models');

exports.pets = {
  all: (request, reply) => {
    models.Pet.findAll({
        include: [ 
          models.Breed,
          models.Type,
        ]
      })
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
    console.log(request.payload.name);
    models.Pet.create(request.payload)
      .then((pet) => {console.log('success');
        reply(pet).code(200);
      });
  }
};
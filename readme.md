# Pet Shelter Api
Make sure Node.js and NPM are up to date.  If not, then run the following:

Get the latest node.js (to keep ng2 CLI happy).

> `nvm install node`

> `nvm use 7.5.0` or whichever is the latest at the time.

Update npm.

> `npm install -g npm`

Then run `npm install` to install dependencies.

## Run Migrations & Seeds
Run the following to set the db tables and also add some seeder data.
> `sequelize db:migrate`
> `sequelize db:seed:all`

## Run Server
Run `npm start` run the server.  Server can be found at http://0.0.0.0:8080

### Api Endpoints
action | url | description
--- | --- | ---
GET | /pets | Pets listing endpoint that will return all pets.
GET | /pets/{id} | Pet show endpoint that will a specific pet with id of {id}.
POST | /pets | Pets create endpoint that will create a new pet item in the db and return that pet.
GET | /types | Types listing endpoint that will return all types of animals in the db(Dogs, Cats, etc...).
GET | /breeds | Breeds listing endpoint that will return all Breeds with related types(Bulldog, Siamese, etc...).

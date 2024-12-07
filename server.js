const mongoose = require('mongoose');
require('dotenv').config();

const {
    createAndSavePerson,
    createManyPeople,
    findPeopleByName,
    findOneByFood,
    findPersonById,
    findEditThenSave,
    findAndUpdate,
    removeById,
    removeManyPeople,
    queryChain,
  } = require('./services/personService');
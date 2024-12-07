const Person = require('../models/personModel');


const createAndSavePerson = (done) => {
    const person = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['Pizza', 'Pasta'],
    });
  
    person.save((err, data) => {
      if (err) return console.error(err);
      done(null, data);
    });
  };
  
const Person = require('../models/personModel');


const createAndSavePerson = (done) => {
    const person = new Person({
      name: 'Stanley Odhiambo',
      age: 24,
      favoriteFoods: ['Chapati', 'Rice'],
    });
  
    person.save((err, data) => {
      if (err) return console.error(err);
      done(null, data);
    });
  };
  
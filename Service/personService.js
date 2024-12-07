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
  
  
const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, people) => {
      if (err) return console.error(err);
      done(null, people);
    });
  };

  
const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, people) => {
      if (err) return console.error(err);
      done(null, people);
    });
  };

  
const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, person) => {
      if (err) return console.error(err);
      done(null, person);
    });
  };
  
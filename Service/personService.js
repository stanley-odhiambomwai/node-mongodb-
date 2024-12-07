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

  
const findPersonById = (personId, done) => {
    Person.findById(personId, (err, person) => {
      if (err) return console.error(err);
      done(null, person);
    });
  };
  
  
const findEditThenSave = (personId, done) => {
    const foodToAdd = 'hamburger';
    Person.findById(personId, (err, person) => {
      if (err) return console.error(err);
      person.favoriteFoods.push(foodToAdd);
      person.save((err, updatedPerson) => {
        if (err) return console.error(err);
        done(null, updatedPerson);
      });
    });
  };
  
  
const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
    Person.findOneAndUpdate(
      { name: personName },
      { age: ageToSet },
      { new: true },
      (err, updatedPerson) => {
        if (err) return console.error(err);
        done(null, updatedPerson);
      }
    );
  };

  
const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId, (err, removedPerson) => {
      if (err) return console.error(err);
      done(null, removedPerson);
    });
  };

  const removeManyPeople = (done) => {
    const nameToRemove = 'Mary';
    Person.remove({ name: nameToRemove }, (err, result) => {
      if (err) return console.error(err);
      done(null, result);
    });
  };

  
const queryChain = (done) => {
    const foodToSearch = 'burritos';
    Person.find({ favoriteFoods: foodToSearch })
      .sort('name')
      .limit(2)
      .select('-age')
      .exec((err, people) => {
        if (err) return console.error(err);
        done(null, people);
      });
  };

  module.exports = {
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
  };
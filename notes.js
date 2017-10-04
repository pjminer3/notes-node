console.log('Starting notes.js');

//modue.exports is the property object that we can export to other files

module.exports.age = 25;

module.exports.addNote = () => {
  console.log('Add note');
  return 'New note';
}

module.exports.add = (a, b) => {
  return a + b;
}
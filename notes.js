console.log('Starting notes.js');

// add notes
var addNote = (title, body) => {
  console.log(`Adding Note: "${title}" is the title, and "${body}" is the body`);
}

// gets all notes and lists them
var getAll = () => {
  console.log('Getting all notes.');
}

// gets the note for people to read it
var getNote = (title) => {
  console.log(`Gets note ${title} for you to read`);
}

// removes note
var removeNote = (title) => {
  console.log(`Removes note ${title}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}




// //modue.exports is the property object that we can export to other files

// module.exports.addNote = () => {
//   console.log('Add note');
//   return 'New note';
// }

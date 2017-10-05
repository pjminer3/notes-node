console.log('Starting notes.js');

const fs = require('fs');

// add notes
var addNote = (title, body) => {
  // creates default note array if needed
  var notes = [];
  // creates new note
  var note = {
    title,
    body
  }

  // pulls existing notes if there are any
  try {
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  } catch (e) {
    // Don't need any catch code here
  }

  // check for duplicate titles
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    // pushes new note into existing notes
    notes.push(note);
    // saves notes as a string in notes-data.json
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
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

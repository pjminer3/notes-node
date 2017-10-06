console.log('Starting notes.js');

const fs = require('fs');

// Grabs the existing notes from notes-data.json, or grabs []
var fetchNotes = () => {
  // pulls existing notes if there are any
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    // If there are no previously existing notes...
    return [];
  }
};

// saves notes as a string in notes-data.json
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// add notes
var addNote = (title, body) => {
  // creates default note array if needed
  var notes = fetchNotes();
  // creates new note
  var note = {
    title,
    body
  }

  // check for duplicate titles
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    // pushes new note into existing notes
    notes.push(note);
    // Saves the new notes array to notes-data.json
    saveNotes(notes);
    // returns new note
    return note;
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

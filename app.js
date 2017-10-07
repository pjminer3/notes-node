const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleDesc = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyDesc = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

// process.argv is automatically populated with all command line arguements

const argv = yargs
  .command('add', 'Add new note', {
    title: titleDesc,
    body: bodyDesc
  })
  .command('list','List all notes')
  .command('read','Read specified note', {
    title: titleDesc
  })
  .command('remove', 'Removed specified note', {
    title: titleDesc
  })
  .help()
  .argv; // command line arguments after being processed by yargs

var command = argv._[0]; // standard command line arguments

if ( command === 'add') {
  // code for adding a note to the note list
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach( (note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note read');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  // code for removing a note from the note list
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note removed' : 'Note not found';
  console.log(message);
} else if (command === undefined) {
  console.log('Command not provided');
} else {
  console.log('Command not recognized');
}



console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// process.argv is automatically populated with all command line arguements

const argv = yargs.argv; // command line arguments after being processed by yargs
var command = argv._[0]; // standard command line arguments
console.log(`Command: ${command}`);
console.log(`Yargs ARGV: `, argv);

if ( command === 'add') {
  // code for adding a note to the note list
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('---')
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  // code for removing a note from the note list
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}



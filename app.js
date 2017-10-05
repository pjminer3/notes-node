console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// process.argv is automatically populated with all command line arguements

const argv = yargs.argv; // command line arguments after being processed by yargs
var command = process.argv[2]; // standard command line arguments
console.log(`Command: ${command}`);
console.log(`Yargs ARGV: `, argv);

if ( command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}



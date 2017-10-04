console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}!  You are ${notes.age} years old! \n`, function(err) {
  if (err) {
    console.log('Unable to write file');
  }
});

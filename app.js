const fs = require('fs');

const data = require('./data.json');
const add = require('./add.js')
const deleteID = require('./delete.js');
const update = require('./update.js');

const command = process.argv[2];
const firstInput = process.argv[3];
const secondInput = process.argv[4];


switch (command) {
  case 'read':
    for (var key in data.notes) {
      console.log(`${key}: ${data.notes[key]}`)
    }
    break;
  case 'add':
    add(firstInput, data);
    break;
  case 'delete':
    deleteID(firstInput, data);
    break;
  case 'update':
    update(firstInput, secondInput, data);
    break;
  default:
    console.log('oops not a command');
}

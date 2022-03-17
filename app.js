const fs = require('fs');

const data = require('./data.json');
const add = require('./add.js')
const deleteID = require('./delete.js');
const update = require('./update.js');

console.log(data.notes)
// add('hello', data);

// console.log(deleteID('3', data));

console.log(update('4', 'Hello World', data));

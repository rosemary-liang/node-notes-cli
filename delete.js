const fs = require('fs');

function delete(id, data) {
  delete data.notes[data.id];
}




// const fs = require('fs');

// function add(note, data) {
//   data.notes[data.nextId] = note;
//   data.nextId++;
//   let newData = JSON.stringify(data, null, 2);
//   fs.writeFile('data.json', newData, err => {
//     if (err) throw err;
//   });


// }

// module.exports = add

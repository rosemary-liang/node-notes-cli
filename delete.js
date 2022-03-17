const fs = require('fs');

function deleteID(id, data) {
  delete data.notes[id];
  let newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, err => {
    if (err) throw err;
  });
}


module.exports = deleteID;

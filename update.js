const fs = require('fs')

function update(id, note, data) {
  data.notes[id] = note;
  let newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, err => {
    if (err) throw err;
  });
}

module.exports = update;

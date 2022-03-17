const fs = require('fs')

function update(id, note, data) {
  data.notes[id] = note;

  return data;
}

module.exports = update;

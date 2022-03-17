const fs = require('fs');

function deleteID(id, data) {
  delete data.notes[id];

  return data;
}


module.exports = deleteID;

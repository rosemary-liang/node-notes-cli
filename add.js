
function add (note, data) {
  data.notes[data.nextId] = note;
  data.nextId++;
  JSON.stringify(data, null, 2)
}

module.exports=add

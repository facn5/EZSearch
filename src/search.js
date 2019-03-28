var data = require("../json/data.json").clubs;

function wordSearch(str) {
  var output = [];
  if (str === "") {
    return (output = []);
  }
  for (var i = 0; i < data.length && output.length < 6; i++) {
    var word = data[i].toLowerCase();
    if (word.includes(str)) {
      output.push(word);
    }
  }
  return output;
}

module.exports = wordSearch;

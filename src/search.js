var data = require("../data.json").clubs;

function wordSearch(str) {
  var output = [];
  if (str === "") {
    return (output = []);
  }
  for (var i = 0; i < data.length && output.length < 10; i++) {
    var word = data[i].toLowerCase();
    if (word.includes(str)) {
      output.push(word);
    }
  }
  console.log(output);
  return output;
}

module.exports = wordSearch;

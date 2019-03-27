var data = require("../data.json").names;

function wordSearch(str) {
  var output = [];
  // if (str === "") {
  //   return (output = []);
  // }
  for (var i = 0; i < data.length && output.length < 10; i++) {
    var word = data[i];
    if (word.indexOf(str) === 0) {
      output.push(word);
    }
  }
  return output;
}

module.exports = wordSearch;

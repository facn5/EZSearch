var test = require("tape");
var search = require("../src/search");

test("Search returns an array", function(t) {
  const actual = Array.isArray(search("a"));
  const expected = true;

  t.equal(actual, expected, "Search returns an array");
  t.end();
});

test("Search finds the expected output", function(t) {
    const actual = search("chelsea")[0];
    const expected = "chelsea";
  
    t.equal(actual, expected, "Search finds the output and returns it");
    t.end();
});

test("Check for returned length", function(t) {
  const actual = search("a").length;
  const expected = 6;

  t.equal(actual,expected,"Large search returns an array of no more than 6");
  t.end();
});

test("Check if empty string returns empty array", function(assert) {
    const actual = search("");
    const expected = [];
    assert.deepEquals(actual, expected, "Empty string");
    assert.end();
  });



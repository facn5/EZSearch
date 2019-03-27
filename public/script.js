var inputField = document.getElementById("search-input");
inputField.addEventListener("keyup", function(event) {
  event.preventDefault();
  fetchDataFromServer(inputField.value, appendDataFromServer);
});

function fetchDataFromServer(userQuery, callback) {
  var xhr = new XMLHttpRequest();
  userQuery = userQuery.toLowerCase();
  var url = "/search" + "?q=" + userQuery;
  var encoded = encodeURI(url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open("GET", encoded, true);
  xhr.send();
}

function appendDataFromServer(response) {
  var searchResults = document.getElementById("search-results");
  removeChildren(searchResults);
  if (response.length === 0 && inputField.value !== "") {
    var newDiv = document.createElement("div");
    newDiv.textContent = "Sorry, no results found.";
    searchResults.appendChild(newDiv);
  } else {
    response.forEach(function(items) {
      var googleURL = "https://www.google.co.il/search?q=" + items + " FC";
      var anchorText = document.createElement("a");
      anchorText.classList.add("line");
      anchorText.text = items;
      anchorText.href = googleURL;
      searchResults.appendChild(anchorText);
    });
  }
}

function removeChildren(obj) {
  while (obj.hasChildNodes()) {
    obj.removeChild(obj.firstChild);
  }
}

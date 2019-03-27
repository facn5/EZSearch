let apiKey = "QCbAV0VnE0UWZdureq8keOFGr1xBi0qy";
let imagesearch = document.getElementById("search-input");
var imagevalue = document.getElementById("search-input").value;

function setup() {
  fetch(giphyAPI)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(giphyAPI);
      console.log(json);
      console.log(json.data[0].images.original.url);
    })

    .catch(err => console.log(err));
}

imagesearch.addEventListener("keyup", function(event) {
  event.preventDefault();
  fetchDataFromServer(imagesearch.value, appendDataFromServer);
  if (event.keyCode === 13) {
    var imagevalue = document.getElementById("search-input").value;
    let giphyAPI =
      "https://api.giphy.com/v1/gifs/search?q=" +
      imagevalue +
      "&api_key=" +
      apiKey;
    console.log(giphyAPI);
  }
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

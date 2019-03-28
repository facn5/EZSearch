var apiKey = "QCbAV0VnE0UWZdureq8keOFGr1xBi0qy";
var inputField = document.getElementById("search-input");
var searchResult = document.getElementById("search-results");
var image = document.getElementById('image');

inputField.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (inputField.value !== ' ') {
    fetchData(inputField.value, appendData);
    searchResult.classList.remove('display-none');
    image.src = '';
    image.setAttribute("alt", "");
    if (inputField.value === '') {
      searchResult.classList.add('display-none');
    }
    if (event.keyCode === 13) {
      searchResult.classList.add('display-none');
      image.classList.toggle('display-none');
    }
  }
});

function fetchData(userQuery, callback) {
  var xhr = new XMLHttpRequest();
  userQuery = userQuery.toLowerCase();
  var url = "/search" + "?q=" + userQuery;
  var encoded = encodeURI(url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open("GET", encoded, true);
  xhr.send();
}

function appendData(response) {
  var res = response;
  getGiphy(res);
  var searchResults = document.getElementById("search-results");
  removeChildren(searchResults);
  if (response.length === 0 && searchResults.value !== "") {
    var newDiv = document.createElement("div");
    newDiv.textContent = "Sorry, no results found.";
    searchResults.appendChild(newDiv);
  } else {
    response.forEach(function (item) {
      var googleURL = "https://www.google.co.il/search?q=" + item + " FC";
      var anchorText = document.createElement("a");
      anchorText.text = item;
      anchorText.href = googleURL;
      searchResults.appendChild(anchorText);
    });
  }
}

function getGiphy(str) {
  if (str !== undefined) {
    var value = str[0];
  }
  if (value !== undefined) {
    var url = "https://api.giphy.com/v1/gifs/search?q=" + value + " fc" + "&api_key=" + apiKey;
    url = encodeURI(url);
    fetch(url)
      .then(res => {
        return res.json();
      }).then(json => {
        var name = json.data[0].slug;
        image.src = json.data[0].images.original.url;
        image.setAttribute("alt", `${name}`);
      })
      .catch(err => console.log(err));
  }
}

function removeChildren(obj) {
  while (obj.hasChildNodes()) {
    obj.removeChild(obj.firstChild);
  }
}

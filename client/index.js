const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.onload = function () {
      console.log(JSON.parse(xhr.response));
    };

    xhr.send();
  });
}

sendRequest('GET', requestURL)
.then(function(data) {
  return console.log(data);
})
.catch(function(err) {
  return console.log(err);
})
const requestURL = 'https://localhost:7000/about';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.send();
console.log("client");
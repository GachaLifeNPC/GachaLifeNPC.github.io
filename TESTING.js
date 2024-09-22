const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const query = params.get('q');
console.log(query); // Output: "dogs"

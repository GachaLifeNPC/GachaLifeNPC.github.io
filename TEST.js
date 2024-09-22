const params = new URLSearchParams();
params.set('q', 'dogs');
params.append('location', 'New York');
params.append('price', '100-200');
const searchUrl = 'https://www.example.com/search?' + params.toString();
console.log(searchUrl); // https://www.example.com/search?q=dogs&location=New%20York&price=100-200

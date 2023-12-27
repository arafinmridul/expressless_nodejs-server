const url = require("url").URL;
const myUrl = new url(
  "http://mywebsite.com:5000/hello.html?id=100&status=active"
);
// URL is globally available, so it doesn't need to be required
// const myUrl = new URL("http://mywebsite.com:5000/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href); // http://mywebsite.com:5000/hello.html?id=100&status=active
console.log(myUrl.toString()); // http://mywebsite.com:5000/hello.html?id=100&status=active

// Host (root domain)
console.log(myUrl.host); // mywebsite.com:5000

// Hostname (does not get port)
console.log(myUrl.hostname); // mywebsite.com

// Pathname
console.log(myUrl.pathname); // /hello.html

// Serialized query
console.log(myUrl.search); // ?id=100&status=active

// Params object
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append("user", "null");

// Loop through params
myUrl.searchParams.forEach((val, name) => console.log(`${name} : ${val}`));

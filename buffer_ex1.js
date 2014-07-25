// create uninitialzed buffer with 100 bytes

var buffer = new Buffer(100);
console.log(buffer)

// creating a string with 100 random characters
var string = "";

// math floor rounds down to nearest integer
// this returns a random number 1-10
console.log(Math.floor(Math.random() * 10));

for( var i=0; i < 100; i++ ) {
  console.log(i);
  string += Math.floor(Math.random() * 10);
}

console.log("string is: ", string)

// create uninitialzed buffer with 100 bytes

// Do what is asked on the previous exercise 
//and then slice the buffer with bytes ranging 
// 40 to 60. And then print it.

var buffer = new Buffer(100);
console.log(buffer)

var slice = buffer.slice(40, 60);

console.log("slice is ", slice)

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

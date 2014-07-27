// create uninitialzed buffer with 100 bytes

// Do what is asked on the previous exercise 
//and then slice the buffer with bytes ranging 
// 40 to 60. And then print it.



var buffer = new Buffer(100);
console.log(buffer)

var slice = buffer.slice(40, 60);
var slice2 = buffer



console.log("slice is ", slice)

// ex 3 Do what is asked on exercise 1 and then 
// copy bytes ranging 40 to 60 into a new buffer. 
// And then print it.


buffer.copy(slice2, 0, 40, 60)

console.log("slice 2 is ", slice2)

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

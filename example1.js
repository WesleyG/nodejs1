/* say becomes the local variable someFunction within execute, 
and execute can call the function in this variable by issuing 
someFunction() (adding brackets). */

function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello");

// also can be done with 

function execute(someFunction, value) {
  someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");
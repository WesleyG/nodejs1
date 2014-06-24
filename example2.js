/* this is synchronous, first do the DB query and THEN
write to console */

var result = database.query("SELECT * FROM hugetable");
console.log("Hello World");

/* this is asynchronous (as long as database.query() is part
of an asynchronous library, it is passed a second parameter
an anonymous function */

database.query("SELECT * FROM hugetable", function(rows) {
  var result = rows;
});
console.log("Hello World");
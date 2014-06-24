/* this is synchronous, first do the DB query and THEN
write to console */

var result = database.query("SELECT * FROM hugetable");
console.log("Hello World");

/* this is asynchronous (as long as database.query() is part
of an asynchronous library, it is passed a second parameter
an anonymous function.

essentially it says 'when at some point in the future the
database server is done and sends the results of the query,
then I have to execute the anonymous function that was
passed to database.query().'

then, while the above is pending, it immediately skips to
the console.log() function
*/

database.query("SELECT * FROM hugetable", function(rows) {
  var result = rows;
});
console.log("Hello World");
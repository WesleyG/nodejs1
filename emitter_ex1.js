// Build a pseudo-class named “Ticker” that emits a “tick” event every 1 second.

var EventEmitter = require('events').EventEmitter,
  util = require('util');

var ticker = function() {
  var self = this;
  setInterval(function(){
    self.emit('tick');
  }, 1000);
};
// Build a pseudo-class named “Ticker” that emits a “tick” event every 1 second.

// Build a script that instantiates one Ticker and bind to the “tick” event, 
// printing “TICK” every time it gets one.

var EventEmitter = require('events').EventEmitter,
  util = require('util');

var Ticker = function() {
  var self = this;
  setInterval(function(){
    self.emit('tick');
  }, 1000);
};

util.inherits(Ticker, EventEmitter)

var ticker = new Ticker();

ticker.on('tick', function(){
  console.log('TICK');
});

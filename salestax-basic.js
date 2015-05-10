"use strict";


module.exports = function salestax( options ) {

  var rate = options.rate

  this.add('role:salestax,cmd:calculate',calculate)


  function calculate( args, done ) {
    var total = args.net * (1+rate)
    done( null, { total:total } )
  }
}

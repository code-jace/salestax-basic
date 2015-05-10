"use strict";


module.exports = function salestax() {

  var rate = 0.21

  this.add('role:salestax,cmd:calculate',calculate)


  function calculate( args, done ) {
    var total = args.net * (1+rate)
    done( null, { total:total } )
  }
}

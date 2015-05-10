
var assert = require('assert')

var seneca = require('seneca')()
      .use('..',{rate:0.20})

describe('salestax-basic', function(){

  it('happy', function( fin ){
    seneca.act('role:salestax,cmd:calculate,net:100', function(err,out){
      if(err) return fin(err);

      try {
        assert.equal( 120, out.total )
        fin()
      }
      catch(e){ fin(e) }
    })
  })

})

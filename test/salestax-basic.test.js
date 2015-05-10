
var assert = require('assert')

var seneca = require('seneca')()
      .use('..')

describe('salestax-basic', function(){

  it('happy', function( fin ){
    seneca.act('role:salestax,cmd:calculate,net:100', function(err,out){
      if(err) return fin(err);

      try {
        assert.equal( 121, out.total )
        fin()
      }
      catch(e){ fin(e) }
    })
  })

})

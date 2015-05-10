var PORT = process.env.PORT || 51001

require('seneca')()
  .use('..', {rate:0.20} )
  .listen( PORT )

var PORT = process.env.PORT || 51001
var HOST = process.env.HOST || 'localhost'

require('seneca')()
  .use('..', {rate:0.20} )
  .listen( {port:PORT,host:HOST} )

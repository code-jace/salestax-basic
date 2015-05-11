var WEB_PORT = process.env.WEB_PORT || 51001
var WEB_HOST = process.env.WEB_HOST || 'localhost'
var BS_PORT  = process.env.BS_PORT  || 11300
var BS_HOST  = process.env.BS_HOST  || 'localhost'

require('seneca')()
  .use('..', {rate:0.20} )

  .use('beanstalk-transport')
  .listen({
    type: 'beanstalk',
    pin:  'role:salestax,cmd:calculate',
    port:  BS_PORT,
    host:  BS_HOST  
  })
  .listen({
    port:WEB_PORT, 
    host:WEB_HOST
  })

const router = require('koa-router')()
const Api = require('../controller/getIP')
const findIP  = require('../controller/findIP')


const routers = router
    .get('/ip', Api.IP)
    .post('/findip',findIP.IP)
    .get('/findIP/:domain',findIP.getIP)

module.exports = routers
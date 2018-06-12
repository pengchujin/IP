const IPinfo = require('../model/IPinfo')
const hostname = '0.0.0.0';
// const dns = require('dns')

// dns.lookup('192.168.1.1', function(err, result) {
//     console.log(result)
//   })
const IP = async (ctx) => {
    const ip = ctx.request.ip;
    const ips = ctx.request.ips;
    console.log(ips)
    // const ip = '211.87.1.1'
    console.log('request ip is ',ip)
    const info = await IPinfo.tbIP(ip)

    ctx.body = info 
}


module.exports = {
    IP
}

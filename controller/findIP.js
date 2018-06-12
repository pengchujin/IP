const dns = require('dns')
const IPinfo = require('../model/IPinfo')


function sync(domain) {
    return new Promise(resolve => {
        dns.lookup(domain,(err, address, family) => 
        resolve(address)
    )
    })
}

const IP = async (ctx) => {
    let ip = ''
    const data = ctx.request.body;
    console.log('data: ',data)
    let domain = data.domain
    console.log('domain:', domain)
    ip =  await sync(domain)
    console.log('ip: ' , ip)
    const info = await IPinfo.tbIP(ip)
    ctx.body = info
}

const getIP = async(ctx) => {
    let ip = ''
    const domain = ctx.params.domain
    console.log('domain:', domain)
    ip =  await sync(domain)
    console.log('ip: ' , ip)
    const info = await IPinfo.tbIP(ip)
    ctx.body = info
}


module.exports = {
    IP,
    getIP
}
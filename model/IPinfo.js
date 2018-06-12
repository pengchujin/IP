

const Axios = require('axios')

const tbIP = async(ip) => {
    let info = {};
    await Axios.get('http://ip.taobao.com/service/getIpInfo.php?ip=' + ip ).then( function(response){
        info = response.data
    }) .catch(function(error) {
        console.log(error);
    });
    return info;
}


module.exports = {
    tbIP
}
const Koa = require('koa');
const Router = require('koa-router');
const routers = require('./routes/api')
const bodyParser = require('koa-bodyparser')


const app = new Koa();
const router = new Router();


app.use(bodyParser())

// app.use(async ctx => {
//     const clientIP = ctx.request.ip;
//     console.log(clientIP)
//     ctx.body = clientIP
// });

app.use(async (ctx, next) => {
    const start = Date.now();
    const Req = ctx.request.url;
    console.log(Req )
    await next();
    const ms = Date.now() - start;
    console.log('Response time', `${ms}ms`)
})

router.use('',routers.routes())
app.use(router.routes())


app.listen(3000,'0.0.0.0', () => {
    console.log('Koa_IP is listening on 3000')
});
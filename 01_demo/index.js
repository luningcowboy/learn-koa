const koa = require('koa');
const app = new koa();
app.use(async ctx=>{
    ctx.body = 'HelloWorld'
});
app.listen(3000);

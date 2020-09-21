const Koa = require('koa' );
const Router = require('koa-router' );
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser');
const mysql = require('./configs/mysql.config')
const sqls = require('./utils/sqlQuery')

const app = new Koa();

const router = new Router({
  prefix: '/api'
});
 
router.post( '/login', async(ctx, next) => {
  // console.log('request >>>', ctx.request.body)

  const { username, password } = ctx.request.body
  mysql.query(sqls.QUERY_TABLE('user'))
  .then(data => {
    console.log('data', data)
  })
  .catch(err => {
    console.log('err>>>>>>>>', err)
  })
  let data = {
    code: '0',
    message: '登陆成功'
  }
  ctx.response.body = JSON.stringify(data)
});

//使用路由中间件
app.use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen( 8888, () => {
  console.log('serve is running at http://localhost:8888')
} )
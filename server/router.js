const Router = require('koa-router')
const User = require('./routes/user')
const Common = require('./routes/common')
const Product = require('./routes/product')

const router = new Router()

router
  .post('/user/register', User.register)
  .post('/user/login', User.login)
  .get('/user/info', User.getInfoByToken)
  .post('/user/info', User.modifyInfo)
  .get('/user/back/list', User.getBackList)

router
  .post('/common/upload', Common.upload)
  .post('/common/qiniuToken', Common.getQiniuToken)

router
  .post('/product/add', Product.add)
  .post('/product/edit', Product.edit)
  .get('/product/list', Product.getList)
  .get('/product/:id', Product.get)

module.exports = router
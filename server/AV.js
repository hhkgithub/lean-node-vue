/**
 * Created by hhkmac on 2017/2/3.
 */
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;   //  创建模型
// const News = new Schema({
//   title: String,
//   content: [{
//     content:String,
//   }],
//   type: String,
//   status: String,
//   author: String,
//   createtime: String,
//   clickrate: Number
// });
//
// const Products = new Schema({
//   ProdLocalUrl: String,
//   ProdTitle:String,
//   ProdDetail: [{
//     title:String,
//     content:String
//   }],
//   ProdType: String,
//   ProdStatus: String,
//   CreateDate: String
// });
//
// const Models = {
//   News: mongoose.model('News', News),
//   Products: mongoose.model('Products', Products)
// }
// mongoose.connect('mongodb://localhost/mydb')//；连接数据库
// mongoose.set('debug', true)
// const db = mongoose.connection
//
// db.on('error', function () {
//   console.log('Database connection error.')
// })
// db.once('open', function () {
//   console.log('The database has connected.')
// })
// module.exports = Models
const AV = require('leanengine')
//import AV from 'leancloud-storage'
AV.init({
  appId: 'fvNj37eIisKzO1HsM0oLMF9R-gzGzoHsz',
  appKey: 'qDfMvgBVWAHMvmWQFFD2byYv',
})
module.exports = AV

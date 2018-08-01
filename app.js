var express=require('express');
var app=express();//express对象的一个实例
var router=require('./routers/route')
app.use(express.static('public'))
var cors=require('cors')
//应用路由器
app.use(router)
app.use(cors())
app.listen(4000,function () {
    console.log('启动成功')
})
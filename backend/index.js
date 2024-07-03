const express=require('express')
const app=express()
const route=require('./route/userreq')
/* const products=require('./products'); */
app.use('/products',route)
/* app.get('/',(req,res)=>{
    res.send(products)
}) */

app.listen(3000,()=>{
    console.log("listening at 3000")
})
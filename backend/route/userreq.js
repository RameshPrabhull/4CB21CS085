const express=require('express')
const route=express.Router();
const product=require("/Projects/4CB21CS085/backend/productdetails/products")
route.get('/all',(req,res)=>{
    res.send(product)
})
route.get('/company/:company',(req,res)=>{
    const companyName=req.params
    const company=product.filter((p)=>{
        return(p["companyName"]===companyName.company)
    })
    res.send(company)
})
route.get('/product/:product',(req,res)=>{
    const product=req.product;
    
    
})
module.exports=route;
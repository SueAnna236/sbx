

const express=require('express');
const productRouter=require('./product_test.js');
const userRouter=require('./user_test.js');
var app=express();
app.listen(3000,()=>{});

app.use('/product',productRouter);
app.use('/user',userRouter);

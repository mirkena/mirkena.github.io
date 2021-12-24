const express=require('express');
const app=express();

app.use((req, res, next) => {
    console.log('This is always run');
    next();
    });
    app.use('/add-product', (req, res, next) => {
    console.log('In the 2nd middleware!');
    //res.send('<h1>The "Add Product" Page</h1>');
    next()
    });
    app.use('/', (req, res, next) => {
        console.log('In another 3rd middleware!');
        res.send('<h1>Hello from Express</h1>');
        });
    app.use('/add-product', (req, res, next) => {
        console.log('In the 2nd Next middleware!');
        next();
        });
    
    app.listen(8000);
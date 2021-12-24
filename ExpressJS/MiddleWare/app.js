const express = require('express');
const app = express();


var c;
app.use(
    (req, res, next) => {
      //  res.send('<h1>This is always run</h1>');
       c=3;
    console.log('This is always run');
    next();
});
app.use((req, res, next) => {
        c=c+1;
        console.log('In the middleware!');
       // res.send('<h1>The "Add Product" Page</h1>');
        next('route');
    });
    app.use((req, res, next) => {
        console.log('In another middleware!');
        //  next();
        res.send(`<h1>Hello from Express</h1>+${c}` );
       
    });






app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})
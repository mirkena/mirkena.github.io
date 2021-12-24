const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const jsonParser = express.json()
//  app.all('*',calcRec);
//  var calcRec=(req,res,next)=>{
//      res.send("f");
//  }
app.use(express.urlencoded({ extended: false }));
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<form action="/product" method="post"><input name="title"><input name="title2"><button type="submit">Submit</button></form>');
});
app.post('/product',jsonParser,(req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.title2);
    console.log(req.body); // { title: 'book' }
   // res.send(req.body.title);
    res.redirect('/add-product');
});
app.post('/api/users', jsonParser, function (req, res) {
    res.send(req.body)
})
app.listen(5000, () => {
    console.log('Your Server is running on 5000');
})
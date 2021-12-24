
const express = require('express');
const app = express();

app.all('/user', x);
app.all('*', userAuth);
app.all('/api/*', apiAuth);
function userAuth(req, res, next) {
    console.log('this is from *');
return next();
};
function apiAuth(req, res, next) {
    console.log('this is from user');
return next();
};
function x(req, res, next) {
    console.log('USER API CALLED');
   return  next(); 
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.redirect('/product');
});
app.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>');
});
app.get('/product', (req, res) => {
    console.log(req.body);
    res.send('<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>');
   
});
app.get('/error', function (req, res) {
    
    throw new Error('BROKEN') // Express will catch this on its own.
    
})

// const bodyParser=require('body-parser'); 
// // parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false })); 

app.post('/formdata', (req, res) => {
    console.log("This is from inside formdata")
    console.log(req.body);
    console.log("This is from formdata")
    res.json(req.body);
});
app.listen(3000, () => console.log('Server Started j'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// const express = require('express')
// const app = express()

// app.use(loggingMiddleware)

// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

// app.use('/users', authorizeUsersAccess, (req, res) => {
//     console.log(req.admin)
//   res.send('Users Page')
// })

// function loggingMiddleware(req, res, next) {
//     console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
//   next()
// }
// function authorizeUsersAccess(req, res, next) {
//     if (req.query.admin === 'true') {
//         req.admin = true
//         next()
//       } else {
//         res.send('ERROR: You must be an admin')
//       }
//   }
// app.listen(3000, () => console.log('Server Started j'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//this is another important MiddleWare

// const express = require('express')
// const app = express()

// app.get('/', middleware, (req, res) => {
//   console.log('Inside Home Page')
//   console.log('Inside Home Page 2nd')
//   res.send('Home Page')
// })

// function middleware(req, res, next) {
//   console.log('Before Next')
//   next()
//   console.log('After Next')
//   next()
//   console.log('After Next 2nd')
// }

// app.listen(4000, () => console.log('Server Started'))
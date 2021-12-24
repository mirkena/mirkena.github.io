const express=require('express');
const bodyparser=require('body-parser');

const PORT = process.env.PORT || 8000;

const path=require('path')
//const rout=require
 


const app=express();
app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname +"/index.html");
})

app.post('/',(req,res,next)=>{
    const n1=Number(req.body.num1);
    const n2=Number(req.body.num2);
    const n3=req.body.asmd;
    var result;
    var calc;
    if(n3=='Add'){
         calc=parseInt(n1+n2);
    }else if(n3=='Subtract'){
        calc=parseInt(n1-n2);
    }else if(n3=='Multiply'){
        calc=parseInt(n1*n2);
    }else if(n3=='Devide'){
        calc=parseInt(n1/n2);
    }
   
    res.redirect('/result?res='+calc);
    //res.send('The Sum is '+calc);
})
app.use('/result', (req, res, next) => { 
    res.send(`<h3> The Answer is: ${req.query.res}</h3> 
    <br>    <a href="http://localhost:8000/"> Another calculation </a> 
    ` );
});



app.listen(PORT,()=> console.log(`Server Started on port ${PORT}`));
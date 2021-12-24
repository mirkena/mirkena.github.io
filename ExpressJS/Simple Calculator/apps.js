const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;




const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res, next) => { 
    
res.send(`<form action="/operation" method="post">
<input type="number" name="num1" placeholder="Num1" > &nbsp;&nbsp;
<input type="number" name="num2" placeholder="Num2"> &nbsp;&nbsp;
<select name="opr">
<option name="add" value="add"> Add </option>
<option name="sub" value="sub"> Sub </option>
<option name="mul" value="mul"> Multiplication </option>
<option name="div" value="div"> Division </option>
</select>
<button type="submit">Result</button>
</form> ` 
);

console.log(req.query.res);
});

app.use('/operation', (req, res, next) => {
    var datas = req.body;
    var n1 = datas.num1, n2=datas.num2, opr=datas.opr , result;

    switch(opr){
        case 'add': result = parseInt(n1) + parseInt(n2);
        break;
        case 'sub': result = n1-n2;
        break;
        case 'mul': result = n1*n2;
        break;
        case 'div': result = n1/n2;
        break;
        default:
        break;
    }

//console.log(result); // { title: 'book' }
res.redirect('/result?res='+result);
});

app.use('/result', (req, res, next) => { 
    console.log(req.query.res);
    res.send(`<h3> The Answer is: ${req.query.res}</h3> 
    <br>    <a href="http://localhost:4000/add-product"> Another calculation </a> 
    ` );
});



app.listen(PORT,()=> console.log(`Server Started on port ${PORT}`));
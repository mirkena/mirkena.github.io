const express=require('express')
const upload=require('express-fileupload')
const { post } = require('jquery')

const app=express()

app.use(upload())
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/',(req,res)=>{
    if(res.file){
        console.log(req.files)
        var file=req.files.file
        var filename=file.name
        console.log(filename)
    }
})
app.listen(5000)
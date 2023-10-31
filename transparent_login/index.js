 express =require( 'express')
 mongoose =require( 'mongoose')
 fs =require( 'fs')
 path =require( 'path')

app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.static('static'))

app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    res.status(200).render('index.pug')
})

app.listen(80,()=>{
    console.log("The application has been started on port 80");
})
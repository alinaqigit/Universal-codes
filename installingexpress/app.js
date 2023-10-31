const express=require("express");
const path=require("path");
const app = express();
const port=8080;






// pug specific stuff

// set the template engine as pug
app.set("view engine","pug");

// Set the views directory
app.set("views",path.join(__dirname,"views"));

// Our pug demo endpoint

// app.get("/demo",(req,res)=>{
//     res.status(200).render("demo", {title:"Hey",message:'Hello there and thanks for telling me pug'});

// });




// Express specific stuff



// For serving static files
app.use('/static',express.static("static"));
app.use(express.urlencoded)

// app.get("/",(req,res)=>{
//     res.status(200).send("This is my first express app with cwh");

// })

// app.get("/about",(req,res)=>{
//     res.end("This is my about with cwh");

// })

// app.get("/this",(req,res)=>{
//     res.status(404).send("This page is not found.");

// })




// Endpoints
app.get('/',(req,res)=>{
    const con='This is the best content ';
    const params={'title':'pubg is the best game',"content":con }
    res.status(200).render('index.pug',params);
} );

app.post('/',()=>{
    console.log(req.body)
    const params={'message':'Your form has been submitted' }
    res.status(200).render('index.pug',params);
})










app.listen(port,()=>{
    console.log(`The application has started successfully on port${port}`);
}) 


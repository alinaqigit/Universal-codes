const express = require('express')
const app = express()
const path = require("path")
const fs=require('fs')

port = 80
localhost = "127.0.1.0"

app.use("/ali", express.static("ali"))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, 'views'))

app.get("/demopug", (req, res) => {
    res.status(200).render("ali1", { title: "Hey", message: "Hello kese ho" })
})


app.get("/", (req, res) => {
    res.send("This is my first backend website.")
})

app.post("/", (req, res) => {
    let name = req.body.name
    let age = req.body.age
    let more = req.body.more
    let address = req.body.address
    let gender = req.body.gender
    // console.log(req.body)
    let myjoson=JSON.stringify(req.body)
    fs.writeFileSync("Output.txt",myjoson)
    res.status(200).render("ali1", { 'message': "Your form has been submitted successfully." })
})


app.listen(port, () => {
    console.log(`This application started successufuly on http://${localhost}:${port}`)
})
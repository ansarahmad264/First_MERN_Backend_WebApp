console.log("Hello World!");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (reg, res) => {
    res.send("Hello World!")
})

app.get('/AboutUs', (reg, res) => {
    res.send("<p>Hello My name is  Ansar Ahmad and Im a Software Engineer im an ASP.Net Core MVC Web Developer and currestly im learning MERN Stack Backend</p>")
})

app.get('/ContactUs', (req, res) => {
    res.send("<h4>Gmail: ahmadansar264@gmail.com</h4>")
})

app.get('/Services', (req, res) => {
    res.send("<ul><li>Service 1</li><li>Service 2</li><li>Service 3</li></ul>");
});


app.listen(port, () =>{
    console.log('App listen on Port:' + port)
})
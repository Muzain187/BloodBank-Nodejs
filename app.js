const express = require('express')
const path = require('path')
const exphb = require('express-handlebars')
const app = express()
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


 

//handlebars 
app.engine('handlebars', exphb())
app.set('view engine', 'handlebars')

//static file contains the css ,img and js file for html(handlebar) files
app.use(express.static(__dirname + "/static"))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))


//listening @3333
app.listen(3333, () => { console.log("Server is running @ http://127.0.01:3333") });
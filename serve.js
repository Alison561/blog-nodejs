const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const indexRoute = require('./routes/indexRoute')
const adminRoute = require('./routes/adminRoute')


// view
app.set('view engine', 'ejs')
app.set('views', './App/Views')
app.use(express.static(path.join(__dirname,'public')))

// body parser
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// rotas
app.use('/', indexRoute)
app.use('/admin', adminRoute)

app.listen(3000)
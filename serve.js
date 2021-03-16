const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const indexRoute = require('./routes/indexRoute')
const adminRoute = require('./routes/adminRoute')
var session = require('express-session')

// view
app.set('view engine', 'ejs')
app.set('views', './App/Views')
app.use(express.static(path.join(__dirname,'public')))


app.use(session({ secret: 'keyboardcat', cookie: { maxAge: 60000, secure: false }}))
// body parser
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// rotas
app.use('/', indexRoute)
app.use('/admin', adminRoute)

app.get('/feijao', (req, res)=>{
    req.session.ano = 11
    console.log(req.session.ano )
    console.log(req.session)
})
app.get('/arroz', (req, res)=>{
    res.json(req.session)
    console.log(req.session)
    console.log(req.session.ano)
})

app.listen(3000)
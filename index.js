require('dotenv').config()
const express = require('express')
const { get } = require('express/lib/response');
const res = require('express/lib/response');
const methodOverride = require('method-override');

const app = express()

// EXPRESS SETTINGS
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// CONTROLLER & ROUTES
app.use('/places', require('./controllers/places'))


// HOME
app.get('/', (req, res) => {
    res.render('home')
})

// GET /places
app.get('/', (req, res) => {
  res.render('places/index')
})

// Error 404
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
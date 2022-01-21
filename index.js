require('dotenv').config()
const express = require('express')
const app = express()

// EXPRESS SETTINGS
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// CONTROLLER & ROUTES
app.use('/places', require('./controllers/places'))


// GET /home
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
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')
const app = express()
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())
require('./models/User')
require('./services/passport')
require('./routes/authRoutes')(app)
mongoose.connect(keys.mongoURI)

const PORT = process.env.PORT || 5000

app.listen(PORT);
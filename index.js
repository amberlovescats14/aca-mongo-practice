const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const app = express()
const port = process.env.PORT || 4000
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use('/users', usersRouter)

mongoose.connect('mongodb+srv://cami123:cami123@checkpoint2-e3knb.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true } )

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})
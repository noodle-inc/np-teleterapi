const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const port = 11999

const meetingsRouter = require('./routers/meetings')

app.set('views', `${__dirname}/views`)
app.set('view engine', 'mustache')
app.engine('mustache', mustacheExpress())

app.get('/', (req, res) => res.render('index', { foo: 'bar' }))

app.use('/meetings', meetingsRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))
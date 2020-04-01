const express = require('express')
const app = express()
const port = 11999

const meetingsRouter = require('./routers/meetings')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/api/meetings', meetingsRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))

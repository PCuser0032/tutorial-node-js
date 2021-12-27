const app = require('express')()

const host = 'localhost';
const port = 7000;

app.get('/home', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Home page')
})

app.get('/about', (req, res) => {
  res.status(200).type('text/plain')
  res.send('About page')
})

app.post('/api/admin', (req, res) => {
  res.status(200).type('text/plain')
  res.send(`${res}`)
})

app.post('/api/user', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Create user request')
})

app.use((req, res, next) => {
  res.status(404).type('text/plain')
  res.send('Not found')
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
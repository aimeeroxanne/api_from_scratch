const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index')

app.use('/', router)

//catch all 404 route
app.use((req,res,next) => {
  res.status(404).json({error: {message: "404 Not Found"}})
})

// how your server listens for requests on a specific port number
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '92742a0bb0de4ce7932aa5a1cad63cfd',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.listen(4000, () => {
    console.log('app is up on 4000')
})
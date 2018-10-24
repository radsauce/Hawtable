const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


require("./routes/htmlRoutes")(app)
require("./routes/apiRoutes")(app)


app.listen(3000, () => console.log('http://localhost:3000'))
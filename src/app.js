const express = require('express')
var app = express()

const router = express.Router()




router.get('/', (req, res) => res.
  json({ message: `Hello World!` }))
app.use(router)
const port = 3000
app.listen(port, () => console.log(`The Server is running on ${port}`))
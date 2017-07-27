'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))

app.get('/env', (req, res) => res.json(process.env.MONKEY))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

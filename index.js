const request = require('request')
const express = require('express')
const app = express()
var port = 8800
app.get('/', async (req, res) => {
  res.send('asd')
    const request = require('request')

    const fixieRequest = request.defaults({
        proxy: process.env.FIXIE_URL,
    })

    fixieRequest.post(
        'https://nienluannganh.herokuapp.com/test',
        (err, res, body) => {
            console.log(`Got response: ${res.statusCode}`)
        }
    )
  console.log('sdfsdfsdfsdf sdf sdf sd fsd fsd f')
    res.send('asd')
})
app.listen(10000, () => {
    console.log(process.env.PORT)
})

const request = require('request')
const express = require('express')
const app = express()
var port = 8800
app.get('/', async (req, res) => {
    const request = require('request')
    const proxyRequest = await request({
        method: 'POST',
        uri: 'http://nienluannganh.herokuapp.com/test',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            crossDomain: true,
        },

        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10,
        proxy: process.env.IPB_HTTP,
    })

    console.log(proxyRequest)
})

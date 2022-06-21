const express = require('express')
const app = express()

const { resolve } = require('path')

app.use('/', express.static(resolve(__dirname, './dist')))
app.use('/menu', express.static(resolve(__dirname, './dist')))
app.use('/dashboard', express.static(resolve(__dirname, './dist')))
app.use('/signin', express.static(resolve(__dirname, './dist')))
app.use('/signup', express.static(resolve(__dirname, './dist')))

app.listen(process.env.PORT) || 8080
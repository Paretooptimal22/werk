const {model, Schema} = require('mongoose')

const User = require('./User.js')(model, Schema)
// const Exercise = require('./Exercise.js')(model, Schema)

module.exports = { User }
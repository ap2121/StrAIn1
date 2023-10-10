const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Description = new Schema({
    userEmail: {type: String, required: true},
    strainName: {type: String, required: true},
    cross1: {type: String, required: false},
    cross2: {type: String, required: false},
    desc: {type: String, required: true}
})

module.exports = mongoose.model('Description', Description)
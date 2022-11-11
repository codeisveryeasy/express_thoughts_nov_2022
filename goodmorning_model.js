let mongoose = require('mongoose')

//create new schema
let mongoSchema = mongoose.Schema

let goodMorningCollection = new mongoSchema({
    "message":String,
    "author":String,
    "likes":Number
}, {collection:"goodmorning"})

module.exports = mongoose.model("gmModel", goodMorningCollection)
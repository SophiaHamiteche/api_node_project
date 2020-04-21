// Importation de mongoose
const mongoose = require('mongoose');

// Récupération du schéma
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    "name": {
        type: String,
        required: true
    },

    "lastname": {
        type: String,
        required: true
    },

    "birth": {
        type: String,
        required: true
    },

    "passion": {
        type: String
    }
})

// On compile, on met dans une variable et on exporte vers routes/users.js
module.exports = user = mongoose.model('user', UserSchema)
// Importation de mongoose
const mongoose = require('mongoose');

// Récupération du schéma
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    "name": {
        type: String,
        required: true
    },

    "nb_places": {
        type: Number,
        required: true
    },
})

// On compile, on met dans une variable et on exporte vers routes/event.js
module.exports = event = mongoose.model('event', EventSchema)
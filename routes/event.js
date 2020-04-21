const express = require('express')

const router = express.Router();

const Event = require('../models/Event');

// Définition d'un utilisateur
// 1er paramètre : nom de la route, url qui va être appelé
router.get("/places", (req, res) => {
    Event.find(function (error, items) {
        if (error) {
            console.log(error);
            res.end(); // On met un terme à la réponse
        }
        else {
            res.send(items) // Si pas d'erreurs on envoie les items
            res.end();
        }
    });
});

router.post("/create", (req, res) => {
    if((req.body !== null) && (req.header !== null)) {
        const newEvent = new Event({
            "name": req.body.name, //on récupère la valeur du name
            "nb_places": req.body.nb_places,
        });

        newEvent.save().then((item) => { //item : utilisateur enregistré en base
            res.status(201).json(item).end(); // 201 : http created
        }).catch((error) => {
            res.status(500).end();
        })
    }
});

// On exporte notre router vers le server
module.exports = router;
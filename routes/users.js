const express = require('express')

const router = express.Router();

const User = require('../models/Users');

// Définition d'un utilisateur
// 1er paramètre : nom de la route, url qui va être appelé
router.get("/get_users", (req, res) => {
    User.find(function (error, items) {
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


router.post("/register", (req, res) => {
    if((req.body !== null) && (req.header !== null)) {
        const newUser = new User({
            "name": req.body.name, //on récupère la valeur du name
            "lastname": req.body.lastname,
            "birth": req.body.birth,
            "passion": req.body.passion
        });

        newUser.save().then((item) => { //item : utilisateur enregistré en base
            res.status(201).json(item).end(); // 201 : http created
        }).catch((error) => {
            res.status(500).end();
        })
    }
});

//On enregistre l'user dans la base
// On exporte notre router vers le server
module.exports = router;
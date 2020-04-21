const express = require('express');
const mongoose = require('mongoose');

//Connexion ) mongoose
const mongo_url = 'mongodb+srv://SHamiteche:hetic22@cluster0-8ejft.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongo_url, {
    dbName: "bdd",
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('MongoDB connecté');
}).catch((error) => {
        console.error(error);
});

const app = express(); //app : c'est notre serveur http
app.use(express.json()); // express propose un middleware json qui permet de renseigner les content-type 

app.use('/api/users', require('./routes/users')); // url sur laquelle on doit aller et import de notre router
app.use('/api/event', require('./routes/event')); // url sur laquelle on doit aller et import de notre router

const port = 5000;

// On demande au serveur d'écouter le port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    console.log(`http://localhost:${port}`)
})
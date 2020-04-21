# Récupère la dernière version de nodejs pour l'image docker
FROM node:latest 

# Définition d'un répertoire de travail (qui va contenir tous nos fichiers)
# Toutes les commandes vont s'effectuer à partir du workdir
WORKDIR /api

# Copie demande la source et la destination
# ici source = repertoire courant 
# dest = repertoire courant dans le conteneur docker 
COPY . .

# Installation des paquets 
CMD npm install && node server.js
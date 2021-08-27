# Projet 7 Groupomania
  - [Back-end](#back-end)
    - [Node et dépendances](#node-et-dépendances)
    - [Installation](#installation)
--------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------
## Back-end

run "nodemon" pour lancer le serveur du back-end. Toutes les dépendances de node nécessaires doivent être installées pour que le projet fonctionne.
Les dépendances sont supposées être installées mais n'hésitez pas à vérifier le package.json.

### Node et dépendances 


| NPM dépendances                   | Utilité                                                                                                       |
|:---------------------------------:|:-------------------------------------------------------------------------------------------------------------:|
| nodemon                           |Met à jour le serveur après chaque modification                                                                |
| express                           |Framework node utilisé pour l'application.                                                                     |
| mysql et mysql2                          |Assure la connexion à la base de donnée                                                              |
| bcrypt                            |Chiffre les mots de passe dans la DB                                                                           |
| password-validator                |Limite les mots de passe à un schéma type                                                                      |
| jsonwebtoken                      |Permet de créer un token d'identification pour sécuriser les routes de l'api                                   |
| path                              |Module permettant de travailler sur les chemins de fichier et répertoires                                      |
| multer                            |Permet d'autoriser les fichiers entrants dans la DB                                                            |
| dotenv                            |Charge les variables environnement contenues dans le fichier .env                                              |
| cors                              |Permet d'éviter les erreurs de cors                                                                            |
| helmet                            |Protège l'application contre des attaques connues (cross-site scripting, sniffing, protection xss,...)         |
| fs                                |(File System) Permet de gèrer les téléchargement et modification d'images                                      |

### Installation

Vous trouverez le fichier sql contenant la DB à la racine du backend, il vous faudra l'importer et lancer mysql avant d'exécuter Nodemon, sinon le serveur ne se lancera pas.

Le projet a été développé en utilisant wampserver.

Pour installer le projet :

La base de données :

1. Ouvrir phpMyAdmin (via wampserver par exemple)
2. CLiquer sur 'New' et créer une base de donnée nommé 'groupomania' (sélectionnez utf8mb4_0900_ai_ci dans le menu déroulant) et cliquez sur 'create'
5. Assurez vous d'être dans la base de données 'groupomania'
4. Faites ensuite import et sélectionnez le fichier groupomania.sql, situé dans le dossier 'backend' du projet
5. Assurez vous que 'character set of the file' est bien sur utf-8
6. Cliquez sur 'Go' au bas de la page

Le projet (avec VScode):

1. Ouvrez le dossier contenant le projet avec VScode
2. Dans le terminal (assurez vous d'être dans le dossier 'backend'), tapez npm install puis la touche 'entrée'
3. Toujours dans le terminal (et toujours dans le dossier 'backend'), tapez nodemon puis la touche 'entrée'
4. Rendez vous dans le dossier frontend, ouvrez index.html et lancez le live server.

Vous devriez être sur la page d'accueil du projet dans votre navigateur.

Vous pouvez créer un utilisateur pour entrer dans le réseau social et en tester les fonctionnalités. (Votre mot de passe devra avoir au moins 8 caractères dont une lettre majuscule, une lettre minuscule, deux chiffres et pas d'espace. Votre mot de passe ne peut pas être Passw0rd, ou Password123.)

Vous pouvez aussi vous connecter avec les credentials fournis dans le fichier 'admin_credentials' pour avoir le compte administrateur et les privilèges qui vont avec.
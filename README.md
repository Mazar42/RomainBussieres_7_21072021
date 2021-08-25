# Projet 7 Groupomania
  - [Back-end](#back-end)
    - [Node et dépendances](#node-et-dépendances)
    - [Infos sur la base de données](#infos-sur-la-base-de-données)
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

### Infos sur la base de données

Vous trouverez le fichier sql contenant la DB à la racine du backend, il vous faudra l'importer et lancer mysql avant d'exécuter Nodemon, sinon le serveur ne se lancera pas.

Le projet a été développé en utilisant wampserver.

Une fois la base de données importée et le projet lancé, vous pourrez le tester en créant un nouvel utilisateur et en mettant 'is_admin' à '1' dans la DB, afin d'avoir les privilèges. Pour tester l'affichage des commandes pour un utilisateur non administrateur, vous pouvez laisser 'is_admin' à '0'. (Les quotes sont présents ici pour des questions de lisibilité et ne doivent pas être entrés dans la base de données)
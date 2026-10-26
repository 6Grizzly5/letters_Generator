P.R.O.S.P.E.R. Letters Generator

Générateur de lettres de candidature et de demande de stage au format PDF.

P.R.O.S.P.E.R. Letters Generator est une application web développée avec React et Vite, conçue pour simplifier la création de lettres de candidature personnalisées. Elle permet de générer des documents PDF directement depuis le navigateur, sans nécessiter de serveur backend.

Fonctionnalités

- Génération de PDF : création de lettres prêtes à être téléchargées et imprimées.
- Modèles de lettres variés : plusieurs structures rédactionnelles pour adapter les candidatures.
- Personnalisation : intégration des coordonnées du candidat et des informations relatives à l'entreprise.
- Interface responsive : utilisation adaptée aux ordinateurs, tablettes et smartphones.
- Traitement côté client : génération des documents directement dans le navigateur, sans transmission nécessaire à un backend.
- Configuration centralisée : modification des informations personnelles et des modèles de lettres depuis des fichiers dédiés.

Technologies utilisées

- "React" (https://react.dev/) — création de l'interface utilisateur.
- "Vite" (https://vite.dev/) — environnement de développement et outil de build.
- JavaScript — logique applicative.
- Génération de PDF côté client.

Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- "Node.js" (https://nodejs.org/) (version compatible avec les dépendances du projet).
- npm, installé avec Node.js.
- Git, pour cloner le dépôt.

Installation

Clonez le dépôt :

git clone <URL_DU_DEPOT>

Accédez au répertoire du projet :

cd letters_generator

Installez les dépendances :

npm install

Lancement en développement

Démarrez le serveur de développement :

npm run dev

Ouvrez ensuite dans votre navigateur l'adresse locale affichée dans le terminal, généralement "http://localhost:5173".

Compilation pour la production

Générez la version de production :

npm run build

Les fichiers optimisés sont générés dans le répertoire "dist/".

Pour prévisualiser cette version localement :

npm run preview

Personnalisation

Les principaux éléments du générateur peuvent être modifiés directement dans le code source.

Fichier| Rôle
"src/config.js"| Informations personnelles et coordonnées du candidat
"src/lib/templates.js"| Contenu et structures des modèles de lettres

Les modifications apportées à ces fichiers permettent d'adapter les lettres sans avoir à reconstruire toute l'application.

Déploiement

L'application peut être déployée sur une plateforme d'hébergement statique compatible avec Vite, notamment "Vercel" (https://vercel.com/).

Configuration de build recommandée :

- Framework preset : Vite
- Build command : "npm run build"
- Output directory : "dist"

Une fois déployée, l'application est accessible depuis un navigateur mobile ou de bureau.

«Remarque : l'installation sur l'écran d'accueil d'un smartphone ne garantit pas, à elle seule, le fonctionnement hors ligne. Celui-ci nécessite une configuration adaptée de l'application.»

Confidentialité

La génération des documents s'effectue côté client, sans backend applicatif. Les informations personnelles utilisées pour remplir les lettres ne nécessitent donc pas d'être envoyées à un serveur de génération PDF.

La confidentialité des données dépend également des services d'hébergement, des éventuels scripts tiers et du code exécuté dans le navigateur.

Contribution

Les suggestions d'amélioration et les contributions sont les bienvenues. Pour proposer une modification :

1. Forkez le dépôt.
2. Créez une branche dédiée à votre fonctionnalité.
3. Effectuez vos modifications.
4. Soumettez une Pull Request décrivant les changements apportés.

Licence

Aucune licence n'est spécifiée pour le moment. Toute réutilisation ou redistribution du code doit respecter les droits de son auteur jusqu'à l'ajout d'une licence explicite.

---

P.R.O.S.P.E.R. Letters Generator
Simplifier la création de candidatures, un document à la fois.
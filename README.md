# Letters Generator V2

App React (Vite) qui génère des lettres de demande de stage en PDF, 100 % dans le navigateur (aucun backend).
Au premier lancement, une page de configuration enregistre le profil de l'utilisateur dans le localStorage de son appareil.

    npm install
    npm run dev      # test local
    npm run build    # build de production (dossier dist)

Textes des lettres : `src/lib/templates.js`. Déploiement Vercel : framework Vite, build `npm run build`, sortie `dist`.

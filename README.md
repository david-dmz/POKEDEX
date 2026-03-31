#  PokéDex App - React Project

Bienvenue dans le projet **PokéDex**, une application web interactive développée avec **React** qui permet d'explorer l'univers Pokémon en utilisant les données en temps réel de la [PokéAPI](https://pokeapi.co/).

## Aperçu du Projet
Ce projet a été conçu pour offrir une expérience fluide de recherche et de consultation des statistiques de Pokémon. Il combine la puissance de React pour l'interface utilisateur et une gestion efficace des appels API asynchrones.

##  Stack Technique
* **Framework :** [React.js](https://reactjs.org/)
* **Gestion d'état :** React Hooks (`useState`, `useEffect`)
* **Appels API :** Fetch API / Axios
* **Stylisation :** CSS3 / Flexbox & Grid
* **Déploiement :** [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/) (optionnel)

## Installation Locale

Pour tester le projet sur votre machine :

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/david-dmz/POKEDEX.git](https://github.com/david-dmz/POKEDEX.git)
   ```
2. **Accéder au dossier du projet :**
   ```bash
   cd POKEDEX
   ```
3. **Installer les dépendances :**
    ```bash
   npm install
   ```
4. **Lancer l'application :**
     ```bash
   npm start
   ```
## Structure du Code:
├── public/          # Fichiers statiques (index.html, favicon)
├── src/
│   ├── components/  # Composants (Card, SearchBar, Header)
│   ├── assets/      # Images et icônes des types
│   ├── App.js       # Composant principal et logique de routage
│   └── index.js     # Point d'entrée de l'application
└── package.json     # Dépendances et scripts

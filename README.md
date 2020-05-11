# Contenu

Tests de la page des informations patient : 
- Test de mise à jour du prénom 
- Test de mise à jour du nom 
- Test de mise à jour de la date de naissance
L'upload de document est intégré à chaque test.

## Installation

Utiliser Node Js (https://nodejs.org/en/download/package-manager/) pour installer les packages suivants

```bash
npm install cypress --save-dev (https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)
npm install cypress-cucumber-preprocessor
npm install --save-dev cypress-file-upload
npm install --save-dev mochawesome
```

## Usage

Pour lancer les tests, exécuter la commande suivante 

```bash
npx cypress run
```
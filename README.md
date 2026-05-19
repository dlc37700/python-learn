# 🐍 Python Learn

Application web éducative pour apprendre les bases de Python, destinée aux élèves de 3ème.

## Fonctionnalités

- **7 modules de cours** avec explications simples et exemples interactifs
- **Exercices pratiques** avec éditeur de code intégré
- **Quiz** à la fin de chaque module avec feedback immédiat
- **Terminal Python libre** pour tester n'importe quel code
- **Progression sauvegardée** dans le navigateur (localStorage)
- **Exécution Python dans le navigateur** via Pyodide (WebAssembly)

## Modules

| # | Titre | Notions |
|---|-------|---------|
| 1 | 🚀 Premiers pas | `print()`, commentaires |
| 2 | 📦 Les variables | `int`, `str`, `float`, `bool` |
| 3 | ➕ Les opérations | Arithmétique, concaténation |
| 4 | 🔀 Les conditions | `if`, `elif`, `else` |
| 5 | 🔄 Les boucles | `for`, `while`, `range()` |
| 6 | 📋 Les listes | Création, accès, `.append()`, `len()` |
| 7 | 🔧 Les fonctions | `def`, paramètres, `return` |

## Lancer en local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvre ensuite http://localhost:5173 dans ton navigateur.

> **Note :** Pyodide se charge depuis un CDN au premier lancement. Une connexion internet est nécessaire.

## Build de production

```bash
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`.

## Déploiement sur GitHub Pages

Le projet est configuré pour GitHub Pages avec `base: '/python-learn/'` dans `vite.config.js`.

### Via GitHub Actions (recommandé)

Crée `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Manuellement

```bash
npm run build
# Déploie le dossier dist/ sur la branche gh-pages
```

## Stack technique

- **React 19** + **Vite**
- **Tailwind CSS** (CDN)
- **Pyodide** (Python WebAssembly)
- **highlight.js** pour la coloration syntaxique

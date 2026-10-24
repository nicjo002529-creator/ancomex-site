# Ancomex — refonte du site

Site vitrine + catalogue statique (HTML/CSS/JS, sans build) pour Ancomex srl : radios chasse VHF, CB 27 MHz, UHF/VHF/PMR 446, caméras de recul, signalisation.

- `index.html` — structure de la page
- `styles-v5.css` — design system Neubrutalism + Bento (polices auto-hébergées dans `fonts/`)
- `products.js` — catalogue (modifier ici les prix et produits)
- `app-v5.js` — filtres, recherche, panier (localStorage), commande par e-mail

Le panier envoie la commande par e-mail à info@ancomex.com (aucun paiement en ligne).

## Déploiement

Hébergé sur Render (Static Site, plan gratuit), déployé automatiquement à chaque push sur `main`.

## Conformité (UE / Belgique)

- Pages légales : `mentions-legales.html`, `cgv.html`, `confidentialite.html`, `cookies.html`, générées par `node tools/build-legal.js` (modifier ce fichier, puis relancer).
- Aucun cookie ni traceur ; seul le panier est stocké en localStorage (strictement nécessaire, pas de bandeau requis).
- Polices hébergées localement (pas de Google Fonts).
- Après un changement de CSS ou JS, renommer le fichier (ex. `styles-v6.css`) : le CDN de Render ignore les `?v=`.

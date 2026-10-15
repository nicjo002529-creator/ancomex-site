# Ancomex — refonte du site

Site vitrine + catalogue statique (HTML/CSS/JS, sans build) pour Ancomex srl : radios chasse VHF, CB 27 MHz, UHF/VHF/PMR 446, caméras de recul, signalisation.

- `index.html` — structure de la page
- `styles.css` — design system (palette industrielle ardoise + rouge, Space Grotesk / DM Sans, mode sombre)
- `products.js` — catalogue (modifier ici les prix et produits)
- `app.js` — filtres, recherche, panier (localStorage), commande par e-mail

Le panier envoie la commande par e-mail à info@ancomex.com (aucun paiement en ligne).

## Déploiement

Hébergé sur Render (Static Site, plan gratuit), déployé automatiquement à chaque push sur `main`.

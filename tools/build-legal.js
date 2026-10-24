// Génère les pages légales à partir d'un gabarit commun. Usage : node tools/build-legal.js
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const UPDATED = "24 octobre 2026";

const CO = {
  name: "ANCOMEX SRL",
  addr: "Rue Arthur-Patiny 14, 5150 Floreffe, Belgique",
  bce: "0473.010.701",
  vat: "BE 0473.010.701",
  tel: "+32 495 577 004",
  telHref: "+32495577004",
  mail: "info@ancomex.com"
};

const page = (file, title, desc, body) => {
  const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} — Ancomex</title>
  <meta name="description" content="${desc}">
  <meta name="theme-color" content="#FFD60A">
  <link rel="icon" href="favicon.svg?v=4" type="image/svg+xml">
  <link rel="stylesheet" href="styles-v6.css">
</head>
<body>
  <a class="skip" href="#main">Aller au contenu</a>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></symbol>
  </svg>
  <header class="header">
    <div class="container header__in">
      <a class="logo" href="index.html" aria-label="Ancomex, accueil">
        <img class="logo__img" src="img/ancomex-logo.jpg" alt="Ancomex" width="160" height="91">
      </a>
    </div>
  </header>
  <main id="main" class="legal">
    <div class="container legal__in">
      <a class="back" href="index.html"><svg class="ic" aria-hidden="true"><use href="#i-arrow"/></svg>Retour à la boutique</a>
      <nav class="legal__nav" aria-label="Pages légales">
        <a class="link" href="mentions-legales.html"${file === "mentions-legales.html" ? ' aria-current="page"' : ""}>Mentions légales</a>
        <a class="link" href="cgv.html"${file === "cgv.html" ? ' aria-current="page"' : ""}>CGV</a>
        <a class="link" href="confidentialite.html"${file === "confidentialite.html" ? ' aria-current="page"' : ""}>Confidentialité</a>
        <a class="link" href="cookies.html"${file === "cookies.html" ? ' aria-current="page"' : ""}>Cookies</a>
      </nav>
      <h1>${title}</h1>
      <p class="updated">Dernière mise à jour : ${UPDATED}</p>
${body}
    </div>
  </main>
  <footer class="footer">
    <div class="container footer__bottom">
      <p>${CO.name} · ${CO.addr} · BCE / TVA : ${CO.vat}</p>
      <p>© ${new Date().getFullYear()} ${CO.name}. Tous droits réservés.</p>
    </div>
  </footer>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, file), html);
};

const idBox = `      <div class="box">
        <p><strong>${CO.name}</strong> (société à responsabilité limitée)<br>
        Siège : ${CO.addr}<br>
        Numéro d'entreprise (BCE) : ${CO.bce} · TVA : ${CO.vat}<br>
        Téléphone : <a href="tel:${CO.telHref}">${CO.tel}</a> · E-mail : <a href="mailto:${CO.mail}">${CO.mail}</a></p>
      </div>`;

// ---------------- Mentions légales ----------------
page("mentions-legales.html", "Mentions légales",
  "Identification de l'éditeur du site Ancomex, hébergeur et propriété intellectuelle.", `
      <h2>Éditeur du site</h2>
${idBox}
      <p>Le site est édité par ${CO.name}, entreprise inscrite à la Banque-Carrefour des Entreprises et assujettie à la TVA.</p>

      <h2>Hébergement</h2>
      <p>Le site est hébergé par Render Services, Inc., San Francisco, Californie (États-Unis) — <a href="https://render.com" rel="noopener">render.com</a>. Les photos de produits sont servies depuis le serveur ancomex.be, géré par ${CO.name}.</p>

      <h2>Propriété intellectuelle</h2>
      <p>Les textes, la mise en page et les éléments graphiques de ce site appartiennent à ${CO.name}, sauf mention contraire. Les marques et noms de produits cités (Kenwood, Président, CRT, ICOM, Sirio, KHIKO, Peltor, John Deere, Fendt…) appartiennent à leurs propriétaires respectifs et sont utilisés uniquement pour désigner les produits vendus.</p>
      <p>Les polices de caractères (Lexend Mega, Public Sans, Space Mono) sont distribuées sous licence SIL Open Font License et hébergées sur ce site.</p>

      <h2>Responsabilité</h2>
      <p>Nous apportons le plus grand soin aux informations publiées. Malgré cela, des erreurs (prix, caractéristiques, disponibilité) peuvent subsister ; elles sont corrigées dès qu'elles nous sont signalées. Les caractéristiques et le prix confirmés lors de la commande font foi.</p>

      <h2>Vente et données personnelles</h2>
      <p>Les ventes sont régies par nos <a href="cgv.html">conditions générales de vente</a>. Le traitement de vos données est décrit dans notre <a href="confidentialite.html">politique de confidentialité</a> et l'usage du stockage local dans notre <a href="cookies.html">politique cookies</a>.</p>`);

// ---------------- Confidentialité ----------------
page("confidentialite.html", "Politique de confidentialité",
  "Comment Ancomex traite vos données personnelles, conformément au RGPD.", `
      <p>Cette politique explique quelles données personnelles nous traitons, pourquoi, combien de temps et quels sont vos droits, conformément au Règlement général sur la protection des données (RGPD, règlement (UE) 2016/679) et à la loi belge du 30 juillet 2018.</p>

      <h2>1. Responsable du traitement</h2>
${idBox}
      <p>Pour toute question ou demande relative à vos données : <a href="mailto:${CO.mail}">${CO.mail}</a>.</p>

      <h2>2. Données traitées, finalités et bases légales</h2>
      <table>
        <thead><tr><th>Situation</th><th>Données</th><th>Finalité</th><th>Base légale (RGPD art. 6)</th></tr></thead>
        <tbody>
          <tr><td>Commande</td><td>Nom, e-mail, téléphone, adresse de livraison, produits commandés</td><td>Traiter et livrer la commande, facturer, gérer le service après-vente</td><td>Exécution du contrat (6.1.b) ; obligations comptables et fiscales (6.1.c)</td></tr>
          <tr><td>Formulaire de contact</td><td>Nom, e-mail, contenu du message</td><td>Répondre à votre demande</td><td>Mesures précontractuelles à votre demande (6.1.b) ou intérêt légitime à répondre (6.1.f)</td></tr>
          <tr><td>Navigation</td><td>Adresse IP, date et heure, page demandée, navigateur (journaux techniques de l'hébergeur)</td><td>Fournir le site, en assurer la sécurité</td><td>Intérêt légitime (6.1.f)</td></tr>
          <tr><td>Panier</td><td>Produits et quantités, stockés uniquement dans votre navigateur</td><td>Garder votre panier entre deux visites</td><td>Nécessaire au service demandé (voir <a href="cookies.html">cookies</a>)</td></tr>
        </tbody>
      </table>
      <p>Les formulaires du site n'enregistrent rien sur nos serveurs : ils ouvrent votre propre logiciel de messagerie avec un message prérempli, que vous choisissez d'envoyer ou non. Nous recevons donc vos données uniquement par e-mail.</p>
      <p>Nous ne faisons ni profilage, ni décision automatisée, ni publicité ciblée, et nous ne vendons jamais vos données.</p>

      <h2>3. Durée de conservation</h2>
      <ul>
        <li><strong>Commandes et factures :</strong> pendant la durée imposée par la législation comptable et fiscale belge.</li>
        <li><strong>Demandes de contact sans suite :</strong> 12 mois au maximum après notre dernier échange.</li>
        <li><strong>Journaux techniques de l'hébergeur :</strong> durée limitée fixée par l'hébergeur à des fins de sécurité.</li>
        <li><strong>Panier :</strong> jusqu'à ce que vous le vidiez ou effaciez les données de votre navigateur.</li>
      </ul>

      <h2>4. Destinataires</h2>
      <p>Vos données ne sont communiquées qu'aux personnes et prestataires qui en ont besoin :</p>
      <ul>
        <li>le transporteur (UPS) pour livrer votre colis : nom, adresse, téléphone ;</li>
        <li>notre fournisseur de messagerie électronique, qui héberge nos e-mails ;</li>
        <li>notre hébergeur web, Render Services, Inc. (États-Unis), pour les journaux techniques ;</li>
        <li>notre comptable et les administrations, lorsque la loi l'exige.</li>
      </ul>

      <h2>5. Transferts hors de l'Union européenne</h2>
      <p>Notre hébergeur Render est établi aux États-Unis. Il est certifié au titre du cadre de protection des données UE–États-Unis (EU-US Data Privacy Framework), reconnu adéquat par la Commission européenne, et son accord de traitement des données prévoit les clauses contractuelles types de la Commission.</p>

      <h2>6. Vos droits</h2>
      <p>Vous pouvez à tout moment demander l'<strong>accès</strong> à vos données, leur <strong>rectification</strong>, leur <strong>effacement</strong>, la <strong>limitation</strong> du traitement, leur <strong>portabilité</strong>, ou vous <strong>opposer</strong> à un traitement fondé sur notre intérêt légitime. Écrivez-nous à <a href="mailto:${CO.mail}">${CO.mail}</a> ; nous répondons dans un délai d'un mois. Nous pouvons vous demander de prouver votre identité.</p>
      <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une plainte auprès de l'Autorité de protection des données : rue de la Presse 35, 1000 Bruxelles — <a href="https://www.autoriteprotectiondonnees.be" rel="noopener">autoriteprotectiondonnees.be</a>.</p>

      <h2>7. Sécurité</h2>
      <p>Le site est servi exclusivement en HTTPS. Il ne charge aucun script de suivi ni aucune ressource de régie publicitaire ; les polices sont hébergées sur notre propre site.</p>

      <h2>8. Modifications</h2>
      <p>Nous pouvons mettre à jour cette politique ; la date de dernière mise à jour figure en haut de la page.</p>`);

// ---------------- Cookies ----------------
page("cookies.html", "Politique cookies",
  "Le site Ancomex n'utilise aucun cookie de suivi ni de publicité.", `
      <div class="box">
        <p><strong>En bref :</strong> ce site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience, de publicité ou de réseau social. C'est pourquoi aucun bandeau de consentement ne vous est présenté.</p>
      </div>

      <h2>Ce que le site enregistre dans votre navigateur</h2>
      <table>
        <thead><tr><th>Nom</th><th>Type</th><th>Contenu</th><th>Finalité</th><th>Durée</th></tr></thead>
        <tbody>
          <tr><td><code>ancomex-cart</code></td><td>Stockage local (localStorage)</td><td>Identifiants des produits et quantités</td><td>Conserver votre panier</td><td>Jusqu'à ce que vous le vidiez ou effaciez les données du site</td></tr>
        </tbody>
      </table>
      <p>Ce stockage est strictement nécessaire au service que vous demandez (le panier). Il est donc exempté de consentement au sens de l'article 5, paragraphe 3, de la directive 2002/58/CE « vie privée et communications électroniques », transposé en droit belge. Il ne contient aucune donnée personnelle, n'est jamais transmis à nos serveurs et n'est lu par aucun tiers.</p>

      <h2>Ressources externes</h2>
      <ul>
        <li><strong>Photos de produits :</strong> chargées depuis ancomex.be, notre propre serveur.</li>
        <li><strong>Polices :</strong> hébergées sur ce site ; aucun appel à Google Fonts ou à un autre service tiers.</li>
        <li><strong>Facebook :</strong> un simple lien. Aucun module Facebook n'est intégré ; Facebook ne reçoit rien tant que vous ne cliquez pas sur le lien.</li>
      </ul>

      <h2>Comment effacer ces données</h2>
      <p>Videz votre panier, ou supprimez les « données de site » pour ancomex-site.onrender.com dans les réglages de votre navigateur.</p>

      <h2>Évolution</h2>
      <p>Si nous ajoutons un jour un outil de mesure d'audience ou tout autre traceur non nécessaire, nous vous demanderons votre consentement préalable, libre et révocable à tout moment, au moyen d'un bandeau avec des boutons « Accepter » et « Refuser » de même importance.</p>`);

// ---------------- CGV ----------------
page("cgv.html", "Conditions générales de vente",
  "Conditions générales de vente d'Ancomex : commande, prix, livraison, droit de rétractation et garantie légale.", `
      <h2>1. Identification du vendeur</h2>
${idBox}

      <h2>2. Champ d'application</h2>
      <p>Les présentes conditions s'appliquent à toutes les ventes conclues à distance via ce site entre ${CO.name} et ses clients. Elles sont acceptées par le client lors de la commande. Les règles protectrices des consommateurs (Code de droit économique, livre VI) s'appliquent à tout client agissant à des fins privées et priment sur toute clause contraire. Des conditions particulières peuvent être convenues par écrit avec les clients professionnels.</p>

      <h2>3. Produits et prix</h2>
      <p>Les produits sont décrits le plus fidèlement possible. Les photos sont illustratives. Les prix sont indiqués en euros, <strong>TVA belge comprise</strong>, hors frais de livraison. Lorsqu'une réduction est annoncée, le prix barré correspond au prix le plus bas pratiqué au cours des 30 jours précédant la réduction.</p>
      <p><strong>Radios et émetteurs :</strong> l'utilisation de certains appareils (VHF/UHF, versions « export ») peut nécessiter une licence ou être limitée à certaines fréquences en Belgique (IBPT). Il appartient à l'utilisateur de respecter la réglementation radio applicable. Les radios « chasse BE » vendues sont agréées pour la Belgique. N'hésitez pas à nous demander conseil avant l'achat.</p>

      <h2>4. Commande et conclusion du contrat</h2>
      <ol>
        <li>Vous ajoutez des produits au panier, puis cliquez sur « Passer commande ».</li>
        <li>Vous indiquez vos coordonnées, vérifiez le récapitulatif, acceptez les présentes conditions et cliquez sur « Commander avec obligation de paiement ». Votre logiciel de messagerie s'ouvre avec la commande préremplie, que vous nous envoyez.</li>
        <li>Nous vous confirmons par e-mail, sous 24 heures ouvrables, la disponibilité, les frais de livraison éventuels, le total définitif et les modalités de paiement. <strong>Le contrat est conclu à la réception de cette confirmation.</strong></li>
      </ol>
      <p>Jusqu'à la confirmation, vous pouvez corriger ou annuler votre commande sans frais en nous écrivant. Si un produit n'est pas disponible, nous vous en informons et ne vous facturons rien pour ce produit.</p>

      <h2>5. Paiement</h2>
      <p>Le paiement s'effectue selon les modalités indiquées dans la confirmation de commande. Les produits sont expédiés après réception du paiement. Ils restent la propriété de ${CO.name} jusqu'au paiement complet.</p>

      <h2>6. Livraison</h2>
      <p>Les colis sont expédiés par UPS, avec numéro de suivi, en principe dans les 2 jours ouvrables suivant la réception du paiement. Sauf accord contraire, la livraison intervient au plus tard 30 jours après la conclusion du contrat.</p>
      <p><strong>Frais de livraison :</strong> gratuits à partir de 250 € d'achat. En dessous, ils dépendent du poids du colis et vous sont communiqués dans la confirmation, avant tout paiement. Une livraison contre signature (UPS Extra) est possible sur demande, moyennant supplément.</p>
      <p>Pour un consommateur, le risque de perte ou d'endommagement passe au client au moment où lui-même, ou un tiers qu'il a désigné, prend physiquement possession du colis. En cas de colis endommagé, signalez-le-nous le plus rapidement possible, si possible avec des photos.</p>

      <h2 id="retractation">7. Droit de rétractation (consommateurs)</h2>
      <p>Vous disposez d'un délai de <strong>15 jours</strong> pour vous rétracter du contrat, sans avoir à justifier de motif. Ce délai (plus favorable que le minimum légal de 14 jours) court à partir du jour où vous, ou un tiers que vous avez désigné, prenez physiquement possession du bien — ou du dernier bien, en cas de commande livrée en plusieurs fois.</p>
      <h3>Comment exercer ce droit</h3>
      <p>Informez-nous de votre décision par une déclaration claire, par e-mail à <a href="mailto:${CO.mail}">${CO.mail}</a> ou par courrier à l'adresse du siège. Vous pouvez utiliser le modèle de formulaire ci-dessous, mais ce n'est pas obligatoire. Il suffit d'envoyer votre déclaration avant l'expiration du délai.</p>
      <h3>Retour des produits</h3>
      <p>Renvoyez les produits sans retard excessif et au plus tard 14 jours après nous avoir informés de votre rétractation, à l'adresse : ${CO.addr}. <strong>Les frais directs de renvoi sont à votre charge.</strong> Vous pouvez manipuler le produit comme en magasin pour l'examiner ; votre responsabilité peut être engagée en cas de dépréciation résultant d'autres manipulations.</p>
      <h3>Remboursement</h3>
      <p>Nous vous remboursons tous les paiements reçus, y compris les frais de livraison standard (hors supplément pour un mode de livraison plus coûteux choisi par vous), au plus tard 14 jours après avoir été informés de votre rétractation. Nous utilisons le même moyen de paiement que celui de la transaction initiale, sauf accord contraire, sans frais pour vous. Nous pouvons différer le remboursement jusqu'à la réception des produits ou jusqu'à ce que vous ayez fourni une preuve d'expédition.</p>
      <h3>Exceptions</h3>
      <p>Le droit de rétractation ne s'applique pas aux biens confectionnés selon vos spécifications ou nettement personnalisés (par exemple un câblage réalisé sur mesure), ni aux biens scellés ne pouvant être renvoyés pour des raisons d'hygiène (oreillettes, écouteurs) lorsqu'ils ont été descellés après la livraison.</p>

      <div class="box">
        <h3 style="margin-top:0">Modèle de formulaire de rétractation</h3>
        <p>(Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat.)</p>
        <p>À l'attention de ${CO.name}, ${CO.addr} — ${CO.mail} :</p>
        <p>Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant sur la vente du bien (*) ci-dessous :<br>
        — Commandé le (*) / reçu le (*) :<br>
        — Nom du (des) consommateur(s) :<br>
        — Adresse du (des) consommateur(s) :<br>
        — Signature du (des) consommateur(s) (uniquement en cas de notification sur papier) :<br>
        — Date :</p>
        <p>(*) Rayez la mention inutile.</p>
      </div>

      <h2>8. Garantie légale de conformité</h2>
      <p>Tous nos produits bénéficient de la garantie légale de conformité de <strong>deux ans</strong> à compter de la livraison (articles 1649bis et suivants de l'ancien Code civil). En cas de défaut, vous avez droit à la réparation ou au remplacement du produit, sans frais, ou à défaut à une réduction de prix ou à la résolution de la vente. Merci de nous informer d'un défaut dans les deux mois de sa découverte. Une éventuelle garantie commerciale du fabricant s'ajoute à cette garantie légale sans la remplacer.</p>

      <h2>9. Données personnelles</h2>
      <p>Vos données sont traitées conformément à notre <a href="confidentialite.html">politique de confidentialité</a>.</p>

      <h2>10. Réclamations et litiges</h2>
      <p>Pour toute réclamation, contactez-nous d'abord : <a href="mailto:${CO.mail}">${CO.mail}</a> ou <a href="tel:${CO.telHref}">${CO.tel}</a>. Nous cherchons toujours une solution à l'amiable.</p>
      <p>Si vous n'êtes pas satisfait de notre réponse, vous pouvez vous adresser gratuitement au Service de Médiation pour le Consommateur, North Gate II, boulevard du Roi Albert II 8, 1000 Bruxelles — <a href="https://www.mediationconsommateur.be" rel="noopener">mediationconsommateur.be</a>.</p>
      <p>Le droit belge s'applique, sans priver le consommateur de la protection que lui accordent les règles impératives de son pays de résidence. Les tribunaux compétents sont ceux désignés par la loi.</p>`);

console.log("Pages légales générées.");

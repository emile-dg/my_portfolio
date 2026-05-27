---
slug: cryptoaccounting
title: Ingénieur Logiciel Lead
company: CRYPTOACCOUNTING
location: Paris, France
period: Depuis mars 2023
summary: Direction du développement frontend, backend, déploiement, sécurité et flux comptables pour une plateforme SaaS en production.
---


## Présentation

CRYPTOACCOUNTING est une plateforme SaaS en production conçue pour les professionnels de la comptabilité gérant des portefeuilles de cryptomonnaies. La plateforme automatise les flux de réconciliation complexes, génère des rapports fiscaux conformes et offre une interface claire pour gérer les données clients à grande échelle.

J'ai rejoint l'équipe en tant qu'ingénieur principal et suis devenu le seul responsable de la stack technique — des décisions d'architecture jusqu'aux déploiements en production.


::ImageCarousel
---
pixelsPerSecond: 24
maxTimeScale: 10
imageWidth: 720
imageHeight: 480
gap: 24
borderRadius: 0
fullBleed: true
fit: contain
---
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_8.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_9.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_10.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_11.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_12.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_13.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_14.jpg)
::


## Projets sur lesquels j'ai travaillé

### Moteur de comptabilité principal
Conception et développement du moteur de réconciliation qui traite les données de transactions blockchain et les convertit en écritures comptables (FIFO, LIFO, coût moyen). Le moteur gère les imports multi-chaînes et produit des sorties structurées compatibles avec les normes comptables françaises et européennes.

### Interface de tableau de bord et rapports
Développement complet de l'application frontend avec Vue 3. L'interface permet aux comptables d'importer des données de transactions, de consulter les réconciliations, de générer des rapports PDF/CSV et de gérer plusieurs espaces de travail clients.

### Système d'authentification et d'autorisation
Implémentation d'une couche d'authentification multi-tenant avec contrôle d'accès basé sur les rôles, permettant aux cabinets de gérer comptables et clients de façon indépendante. Utilisation de JWT avec rotation de token de rafraîchissement et intégration de la double authentification (2FA).

### Déploiement et infrastructure
Mise en place de l'infrastructure cloud sur AWS — EC2 pour le calcul, RDS pour les données relationnelles, S3 pour le stockage de documents, et CloudFront pour les assets statiques. Mise en place de pipelines CI/CD avec GitHub Actions pour automatiser les tests et les déploiements.

### Sécurisation
Audit de sécurité complet de l'application. Implémentation de la validation des entrées, du rate limiting, du stockage chiffré pour les données financières sensibles, et application du HTTPS dans tous les environnements.

## Mes contributions

- Seul ingénieur responsable de l'ensemble de la stack technique
- Définition et application des standards de code, des patterns d'architecture et des processus de déploiement
- Livraison des fonctionnalités de bout en bout : conception → implémentation → tests → déploiement → monitoring
- Construction de bibliothèques de composants réutilisables et d'une couche utilitaire partagée côté frontend
- Maintien de la documentation API et de la documentation technique interne

## Valeur apportée

La plateforme est passée d'un prototype fragile à un SaaS fiable et prêt pour la production, utilisé par de véritables cabinets comptables. J'ai réduit le temps de réconciliation manuelle des clients de plusieurs jours à quelques heures, permis à l'entreprise d'embarquer de nouveaux clients avec un effort minimal, et mis en place des pratiques de sécurité conformes aux standards des logiciels financiers professionnels.

---
slug: cryptoaccounting
title: Ingénieur Logiciel Lead
company: CRYPTOACCOUNTING
location: Paris, France
period: Depuis Mai 2023
summary: Responsable technique unique d'une plateforme SaaS en production pour les professionnels de la comptabilité crypto — architecture, développement, sécurité et livraison du produit complet, du moteur backend à l'interface frontend.
tags:
  - Ownership full-stack
  - Architecture SaaS
  - Systèmes backend
  - Livraison produit
  - Sécurité & déploiement
---

## Contexte

CRYPTOACCOUNTING est une plateforme SaaS en production au service des cabinets comptables et auditeurs qui gèrent des portefeuilles de cryptomonnaies pour leurs clients. Le problème central qu'elle résout est l'un des plus techniquement complexes de la comptabilité moderne : mapper les données de transactions blockchain — provenant de dizaines de chaînes et de plateformes — vers des écritures comptables structurées conformes aux normes françaises et européennes.

Le produit est utilisé directement par des comptables et auditeurs professionnels. Les enjeux sont élevés : une réconciliation incorrecte entraîne des erreurs fiscales avec des conséquences légales. La plateforme devait être à la fois techniquement rigoureuse et suffisamment accessible pour des non-techniciens.

Lorsque j'ai rejoint le projet, le produit n'était qu'un prototype fragile. Je suis devenu le seul responsable technique à partir de ce moment.

:::ImageCarousel
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
:::

## Mon rôle & mes responsabilités

J'étais le seul ingénieur sur ce projet durant toute ma période d'implication. Il n'y avait aucun autre personnel technique. Chaque décision — architecturale, produit, sécurité, déploiement — m'appartenait.

**Décisions produit & techniques** — J'ai traduit les exigences métier et comptables en spécifications logicielles. J'ai conçu le modèle de données, défini les contrats d'API et pris tous les compromis architecturaux. J'ai participé aux discussions produit avec les fondateurs en tenant compte des contraintes du domaine (normes comptables, exigences d'audit, isolation multi-tenant).

**Backend / API / base de données** — J'ai conçu et développé l'intégralité du backend : API REST, moteur comptable, pipelines d'import de transactions et schéma de base de données relationnelle. Toute la logique métier, la validation et le calcul s'exécutent côté serveur.

**Frontend / interfaces produit** — J'ai développé l'application frontend complète from scratch. Cela comprend le tableau de bord comptable, l'interface de révision des réconciliations, l'UI de génération de rapports et la gestion des espaces de travail clients.

**Déploiement / infrastructure** — J'ai mis en place et maintenu l'infrastructure cloud sur AWS : calcul, base de données managée, stockage de documents, CDN. J'ai introduit des pipelines CI/CD pour automatiser les tests et déploiements.

**Sécurité / fiabilité** — J'ai conduit une revue de sécurité complète de l'application et implémenté des pratiques de sécurité adaptées aux logiciels financiers : stockage chiffré, HTTPS obligatoire, rate limiting, validation des entrées et gestion sécurisée des tokens avec 2FA.

## Projets sur lesquels j'ai travaillé

### Moteur de comptabilité principal

**Problème**

La comptabilité crypto nécessite d'associer les données de transactions issues de wallets, d'exchanges et de protocoles DeFi à des écritures comptables selon des méthodes de valorisation réglementées (FIFO, CUMP). Ce processus, effectué manuellement, prend plusieurs jours par client aux comptables. Les règles sont complexes, les données sont hétérogènes, et les erreurs ont des conséquences légales.

**Ce que j'ai construit**

J'ai conçu et implémenté un moteur de comptabilité paramétrique qui traite les données brutes de transactions blockchain et génère automatiquement des écritures comptables conformes. Le moteur supporte les algorithmes de valorisation FIFO et coût unitaire moyen pondéré (CUMP) et produit des sorties alignées sur les normes comptables françaises.

**Travail technique**

- Conception du modèle de données pour gérer la complexité multi-chaînes, multi-actifs, multi-wallets
- Implémentation des algorithmes FIFO et CUMP avec suivi complet des lots
- Construction du pipeline de réconciliation : ingestion → normalisation → classification → calcul → génération d'écritures
- Gestion des cas limites : récompenses de staking, événements de liquidité DeFi, bridges cross-chain, transactions NFT
- Conception d'un système de classification par règles permettant aux comptables de définir le traitement de types de transactions personnalisés
- Construction de la génération de rapports : sorties PDF et CSV structurées pour audits et déclarations fiscales
- Rédaction de tests unitaires couvrant la logique de valorisation et les types de transactions atypiques

**Impact**

Le temps de réconciliation manuelle a été réduit de plusieurs jours à quelques heures pour les comptables gérant des portefeuilles crypto complexes. Le moteur a traité 500M+ transactions en production sans problème de fiabilité. L'entreprise a pu embarquer de nouveaux clients comptables sans intervention manuelle dans le pipeline de calcul.

---

### Système d'import de transactions

**Problème**

Les données de transactions des clients provenaient de plus de 20 plateformes différentes : exchanges centralisés (Binance, Coinbase, Kraken), protocoles DeFi, wallets matériels et explorateurs blockchain. Chacune avait un format de données, une API ou une structure d'export différente.

**Ce que j'ai construit**

J'ai développé une couche d'import normalisée qui se connectait à chaque plateforme et standardisait les données de transactions dans un format interne unique avant de les transmettre au moteur comptable.

**Travail technique**

- Intégration de 20+ plateformes via des API REST et des imports par fichier (CSV, JSON, formats propriétaires)
- Construction d'un pipeline de normalisation mappant le schéma de données de chaque plateforme vers le modèle de transaction interne
- Implémentation du traitement en arrière-plan pour les grands ensembles de transactions afin d'éviter les timeouts
- Ajout de la gestion des erreurs et des logs par source d'import pour remonter les problèmes de qualité de données au comptable
- Construction d'une UI d'administration pour gérer les connexions aux plateformes et consulter les logs d'import

**Impact**

Les comptables pouvaient consolider les données de toutes les plateformes clients sans reformatage manuel. La couverture des principales plateformes rendait le produit immédiatement utilisable pour la plupart des portefeuilles clients sans développement spécifique.

---

### Interface de tableau de bord et rapports

**Problème**

Les comptables avaient besoin d'une interface professionnelle et structurée pour gérer plusieurs espaces de travail clients, réviser les réconciliations, inspecter des transactions individuelles et exporter des rapports conformes — sans nécessiter de connaissances techniques.

**Ce que j'ai construit**

J'ai développé l'application frontend complète from scratch avec Vue 3 et Nuxt. L'interface couvrait l'intégralité du workflow comptable de bout en bout.

**Travail technique**

- Conception et implémentation de l'architecture de composants pour un tableau de bord multi-espaces de travail
- Construction de tableaux de révision des transactions avec filtrage, tri et correction inline
- Implémentation d'écrans de révision de réconciliation avec indicateurs de statut et vues de piste d'audit
- Construction des flux d'export de rapports PDF et CSV avec sélection du format et configuration du périmètre
- Implémentation de la gestion des espaces de travail clients : création, assignation, paramètres
- Construction de mises en page responsives adaptées à l'usage professionnel sur desktop
- Création d'une bibliothèque de composants réutilisables partagée dans toute l'application

**Impact**

L'interface a transformé un backend techniquement complexe en un produit utilisable par des non-techniciens. Les comptables pouvaient gérer l'intégralité du workflow de réconciliation et de reporting sans intervention développeur.

---

### Authentification, autorisation & multi-tenancy

**Problème**

Les cabinets comptables gèrent plusieurs clients. Chaque cabinet avait besoin de son propre espace de travail isolé, avec plusieurs utilisateurs comptables ayant des niveaux de permissions différents. Les données clients devaient être strictement séparées entre tenants.

**Ce que j'ai construit**

J'ai conçu et implémenté le système complet d'authentification et d'autorisation multi-tenant.

**Travail technique**

- Implémentation de l'authentification JWT avec rotation de token de rafraîchissement
- Intégration de la double authentification (2FA) pour les comptes comptables
- Conception d'un modèle de données multi-tenant avec isolation stricte des espaces de travail au niveau base de données
- Implémentation du RBAC (contrôle d'accès basé sur les rôles) avec rôles admin de cabinet, comptable et auditeur
- Extension avec ABAC (contrôle d'accès basé sur les attributs) pour des permissions granulaires sur les ressources
- Construction des flux d'invitation d'utilisateurs et de gestion des sessions

**Impact**

Les cabinets pouvaient embarquer plusieurs comptables et gérer les données clients de façon indépendante et sécurisée. Aucune fuite de données entre tenants n'était possible by design.

---

### Déploiement & infrastructure

**Problème**

Le produit devait être fiable, déployable sans étapes manuelles, et maintenable par un seul ingénieur.

**Ce que j'ai construit**

J'ai conçu et mis en place l'infrastructure AWS complète et automatisé le pipeline de déploiement.

**Travail technique**

- Provisionnement de l'infrastructure AWS : EC2 (calcul), RDS (base de données relationnelle), S3 (stockage de documents et exports), CloudFront (assets statiques et CDN)
- Configuration de la séparation des environnements : développement, staging, production
- Mise en place de pipelines CI/CD avec GitHub Actions : tests automatisés sur pull request, déploiement automatisé à la fusion sur main
- Configuration HTTPS avec gestion des certificats et redirection forcée depuis HTTP
- Mise en place du monitoring applicatif et des alertes pour la disponibilité et les taux d'erreur
- Implémentation de politiques de sauvegarde pour la base de données de production

**Impact**

Les déploiements sont passés de manuels à entièrement automatisés. L'environnement de production a fonctionné de façon fiable sans nécessiter d'interventions manuelles régulières.

## Défis techniques

### Implémenter des algorithmes de valorisation corrects pour la conformité comptable

**Défi** — FIFO et CUMP sont des concepts comptables bien connus, mais leur implémentation correcte pour les cryptomonnaies — où le même actif peut être acquis sur des centaines de transactions sur plusieurs plateformes, sur plusieurs années — est significativement plus complexe que la comptabilité de stock standard.

**Pourquoi c'était difficile** — Chaque acquisition crée un "lot" qui doit être suivi individuellement pour le FIFO. L'ordonnancement des lots est sensible aux timestamps entre chaînes, qui ne sont pas toujours fiables. Les splits, consolidations et transferts entre wallets devaient être gérés sans déclencher incorrectement un événement imposable.

**Comment je l'ai abordé** — J'ai modélisé les lots comme des entités de premier ordre dans le modèle de données. J'ai implémenté les algorithmes de valorisation comme des fonctions pures et testables avec un état de lot explicite. J'ai construit une suite de tests complète couvrant les flux normaux et les cas limites incluant les transferts, les montants résiduels, les mouvements cross-wallet et les récompenses de staking.

**Résultat** — Le moteur a produit des sorties vérifiablement correctes pour les cas de test fournis par l'équipe comptable. Il est devenu le fondement de confiance du produit.

---

### Intégrer 20+ plateformes externes avec des données hétérogènes

**Défi** — Chaque plateforme avait son propre format de données, sa terminologie et ses caractéristiques de fiabilité. Certaines disposaient d'API officielles ; d'autres nécessitaient de parser des exports CSV aux formats non documentés.

**Pourquoi c'était difficile** — La couche d'import devait être résiliente aux changements de format, aux champs manquants et aux problèmes de qualité de données — et remonter des erreurs utiles aux comptables non-techniciens en cas de problème.

**Comment je l'ai abordé** — J'ai conçu un schéma de transaction interne normalisé et développé une couche d'adaptateurs par plateforme. Chaque adaptateur était responsable uniquement de transformer le format de sa plateforme vers le schéma interne. J'ai ajouté la validation et le reporting d'erreurs par plateforme, et développé des outils pour tester les adaptateurs sur des données de référence réelles.

**Résultat** — Les échecs d'import étaient isolés à leur source et remontés clairement. L'ajout d'une nouvelle plateforme ne nécessitait qu'un nouvel adaptateur, sans modification du pipeline principal.

---

### Ownership seul d'une application financière en production

**Défi** — J'étais la seule personne technique sur le produit. Architecture, livraison, qualité, sécurité, incidents et décisions produit me revenaient simultanément.

**Pourquoi c'était difficile** — Un logiciel financier engage une responsabilité légale. Il n'y avait pas de revue par les pairs, pas de deuxième avis sur les décisions de sécurité, et personne à qui escalader les incidents. Chaque décision devait être défendable.

**Comment je l'ai abordé** — J'ai appliqué mes propres standards d'ingénierie rigoureusement : documentation des décisions d'architecture, maintien de la couverture de tests, respect d'une checklist sécurité avant chaque release, et documentation du système suffisamment complète pour raisonner sur n'importe quelle partie sous pression.

**Résultat** — Le produit a fonctionné en production sans incident majeur. La base de code est restée maintenable à mesure qu'elle s'est développée.

## Décisions d'architecture & d'ingénierie

**Modèle de données** — Le cœur du système est le modèle transaction et lot. Les transactions sont importées et normalisées ; les lots sont dérivés des acquisitions et suivis jusqu'aux cessions. Les écritures comptables sont calculées depuis l'état des lots, pas re-dérivées des transactions brutes au moment du reporting. Cette séparation rend le système à la fois correct et auditable.

**Conception des API** — Le backend expose une API REST structurée consommée exclusivement par le frontend. Les contrats d'API sont versionnés et documentés. La logique métier vit entièrement dans le backend ; le frontend est maintenu fin et centré sur l'affichage.

**Structure frontend** — Vue 3 avec une architecture orientée composants. Les composants UI partagés ont été extraits tôt dans une bibliothèque, ce qui a réduit la duplication à mesure que l'interface grandissait. La gestion d'état est maintenue locale là où c'est possible pour réduire la complexité.

**Approche de déploiement** — Déploiement AWS mono-région avec environnements séparés. Le CI/CD via GitHub Actions signifie que les déploiements sont automatisés, cohérents et réversibles. L'infrastructure est configurée manuellement mais documentée pour la reproductibilité.

**Approche sécurité** — La sécurité a été traitée comme une préoccupation de premier ordre compte tenu des données financières impliquées. Décisions clés : isolation des tenants au niveau base de données (scoping par ligne), stockage chiffré pour les champs sensibles, tokens d'accès à courte durée de vie avec rotation, 2FA pour tous les comptes utilisateurs, et validation des entrées à la frontière de l'API.

**Maintenabilité** — En tant que seul ingénieur, j'ai optimisé pour que moi-même, des mois plus tard, puisse comprendre les décisions prises. Cela impliquait des frontières de modules claires, un nommage cohérent, de la documentation inline pour la logique non évidente, et une documentation architecturale maintenue à jour.

## Résultats & preuves

- Livraison du produit d'un prototype vers un SaaS en production utilisé par de vrais cabinets comptables
- Construction et maintien d'un moteur comptable traitant 500M+ transactions en production
- Intégration de 20+ sources de données avec une architecture d'import résiliente basée sur des adaptateurs
- Implémentation complète de l'authentification et autorisation multi-tenant RBAC + ABAC
- Mise en place d'un pipeline de déploiement CI/CD automatisé sur AWS
- Réduction du temps de réconciliation manuelle des comptables de plusieurs jours à quelques heures
- Opération du produit complet — frontend, backend, infrastructure, sécurité — en équipe d'un seul

## Ce que cette expérience prouve

Cette expérience démontre ma capacité à posséder un produit technique de niveau production de bout en bout, de façon indépendante. J'ai pris des décisions architecturales, géré une logique de domaine complexe, développé l'ensemble de la stack, géré la sécurité dans un contexte financier, et maintenu une infrastructure de production — sans équipe sur laquelle m'appuyer.

Elle démontre que je peux traduire des exigences métier et réglementaires complexes en logiciel fonctionnel. Le moteur comptable nécessitait une vraie compréhension du domaine, pas seulement du code. Le modèle de sécurité multi-tenant nécessitait une conception soignée, pas seulement une implémentation.

Elle prouve que je peux opérer à un niveau senior dans des environnements où l'ownership est total et la marge d'erreur est faible.

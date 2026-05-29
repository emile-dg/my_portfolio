---
slug: cealis-tech-studio
title: Ingénieur Logiciel Lead, Cofondateur & CTO
company: CEALIS TECH STUDIO
location: Yaoundé, Cameroun
period: Juin 2024 – Mars 2026
summary: Co-fondation d'un studio d'ingénierie logicielle et direction de toutes les décisions techniques, de l'architecture, de la livraison et du développement d'équipe sur des projets clients et des produits internes.
tags:
  - Leadership technique
  - Ownership full-stack
  - Livraison produit
  - Mentorat d'équipe
  - Architecture SaaS
---

## Contexte

CEALIS TECH STUDIO était un studio d'ingénierie logicielle que j'ai co-fondé pour livrer des produits logiciels sur mesure à des clients en Afrique centrale et dans la diaspora. Le studio fonctionnait avec une équipe réduite — un petit groupe d'ingénieurs prenant en charge des projets à haute complexité nécessitant un développement full-stack, une stratégie produit et un vrai leadership technique.

La proposition de valeur du studio était un logiciel de qualité construit aux standards internationaux, livré depuis le Cameroun. Les clients allaient des entrepreneurs avec des idées de produit en phase initiale aux entreprises ayant besoin d'outils internes fiables. Les projets couvraient la technologie de construction, l'analytique de données sportives, l'infrastructure de deep-link et des produits web orientés clients.

En tant que CTO et Ingénieur Logiciel Lead, j'étais responsable de chaque couche de l'opération technique : décisions d'architecture, développement direct, communication client, recrutement d'équipe, mentorat et livraison.

## Mon rôle & mes responsabilités

**Décisions produit & techniques** — J'ai possédé la direction technique pour chaque projet que le studio a pris en charge. Cela signifiait évaluer les exigences, définir l'architecture, choisir la stack, cadrer le travail et prendre des décisions de faire vs. acheter. J'étais le contact technique principal pour tous les clients et traduisais leurs besoins métier en spécifications implémentables.

**Backend / API / base de données** — J'ai implémenté des services backend et des API pour les projets clients et les produits internes. Pour la plateforme d'analytique de données sportives, j'ai conçu et développé l'intégralité de l'infrastructure backend from scratch.

**Frontend / interfaces produit** — J'ai conçu et développé les applications front-facing pour le produit de deep-link interne du studio et contribué aux produits web orientés clients. J'ai également contribué au prototypage UI/UX pour certains projets avant de passer à l'implémentation.

**Déploiement / infrastructure** — J'ai mis en place l'infrastructure de développement du studio : dépôts, pipelines CI/CD, configurations d'environnement et processus de déploiement.

**Équipe / collaboration client** — J'ai recruté et intégré des développeurs juniors, formé et mentoré un développeur frontend junior, conduit des revues de code et maintenu des standards de qualité sur l'output de l'équipe. J'ai géré la communication directe avec les clients tout au long des cycles de vie des projets.

## Projets sur lesquels j'ai travaillé

### Plateforme d'analytique de données sportives

**Problème**

Un client avait besoin d'une plateforme pour collecter, traiter et exposer des données de performance sportive à des fins d'analyse. Le système devait gérer l'ingestion de données structurées depuis plusieurs sources et les présenter de manière utile pour les analystes et entraîneurs.

**Ce que j'ai construit**

J'ai implémenté l'intégralité des services backend et de l'infrastructure associée pour la plateforme — pipelines d'ingestion de données, couche API, conception de la base de données et déploiement.

**Travail technique**

- Conception du modèle de données pour des données de performance multi-sports, multi-événements
- Construction de pipelines d'ingestion de données pour traiter et normaliser les inputs de différentes sources
- Développement de la couche API REST consommée par l'interface d'analytique frontend
- Mise en place de l'infrastructure cloud et du pipeline de déploiement
- Implémentation de l'authentification et du contrôle d'accès pour les rôles analyste et admin

**Impact**

Livraison d'un backend fonctionnel et prêt pour la production que le client pouvait développer et étendre. Le système gérait les données structurées à l'échelle et fournissait une fondation API fiable pour l'interface d'analytique.

---

### Produit de deep-link interne (clients front-facing)

**Problème**

Le studio a développé un produit de deep-link en interne — un outil pour générer des liens intelligents qui redirigent les utilisateurs vers la bonne destination sur les applications mobiles ou le web, selon leur appareil et leur contexte. Il nécessitait une interface client front-facing soignée pour les utilisateurs finaux et une couche de configuration admin.

**Ce que j'ai construit**

J'ai conçu, architecturé et implémenté les applications client front-facing pour le produit de deep-link.

**Travail technique**

- Conception de l'architecture applicative pour l'interface client front-facing
- Implémentation de la logique de génération de liens et de routage dans le frontend
- Construction de l'interface de configuration et de gestion des règles de liens et du comportement de redirection
- Assurance de la compatibilité cross-device et gestion des fallbacks pour les environnements non supportés
- Contribution au design UI/UX de l'interface produit

**Impact**

Le studio disposait d'un produit interne utilisable et bien architecturé, pouvant être présenté aux clients et utilisé comme base pour des offres commerciales.

---

### Logiciel d'estimation paramétrique — Seleri

**Problème**

Les maîtres d'ouvrage et ingénieurs en construction avaient besoin d'un outil pour estimer les coûts de projet en phase de planification initiale, avant que le travail de conception détaillée ne commence. L'estimation paramétrique — estimer à partir de paramètres de haut niveau plutôt que de métrés détaillés — est une pratique standard dans les grands marchés de construction, mais peu accessible aux petites entreprises de la région.

**Ce que j'ai construit**

J'ai dirigé l'architecture et le développement de Seleri, un outil d'estimation de coûts paramétrique accessible sur le web. L'application permettait aux utilisateurs de définir des paramètres de projet et de recevoir des estimations de coûts structurées basées sur une base de données de coûts configurable.

**Travail technique**

- Conception de l'architecture système : frontend Nuxt, API Node.js/TypeScript, base de données relationnelle structurée
- Construction du moteur d'estimation : calcul de coûts piloté par les paramètres avec modèles de coûts configurables
- Conception du modèle de données pour les types de projets, catégories de coûts et mappings de paramètres
- Implémentation de l'interface utilisateur pour la saisie des paramètres, la révision des estimations et l'export
- Mise en place du déploiement et de la configuration d'environnement
- Construction de l'interface admin pour gérer les modèles de coûts et les configurations de paramètres

**Impact**

Livraison d'un outil d'estimation fonctionnel accessible via le web. Le produit répondait à un vrai manque d'outils pour la planification des coûts de construction en phase initiale sur le marché.

---

### Moteur ERP — Xentry

**Problème**

Au fur et à mesure que le studio grandissait, il devenait clair que de nombreux produits clients partageaient les mêmes exigences fondamentales : authentification, autorisation, gestion de données multi-tenant, modules comptables et logique métier pluggable. Construire tout cela from scratch pour chaque projet était inefficace et incohérent.

**Ce que j'ai construit**

J'ai architecturé et prototypé un moteur ERP backend modulaire — Xentry — conçu pour servir de plateforme interne partagée pour plusieurs produits SaaS. Le moteur fournissait des modules réutilisables et configurables pour la logique métier commune.

**Travail technique**

- Définition de l'architecture modulaire : moteur central avec modules métier pluggables
- Conception et implémentation du système d'authentification et d'autorisation (multi-tenant, RBAC)
- Construction du module comptable : primitives de comptabilité en partie double, plan comptable, écritures de journal
- Conception des contrats d'interface de modules permettant d'ajouter de la logique métier spécifique sans modifier le cœur
- Documentation de l'architecture et des contrats de modules pour l'équipe

**Impact**

Le moteur a réduit le coût de démarrage pour les nouveaux projets. Les modules communs — auth, comptabilité, gestion des tenants — étaient disponibles et testés, permettant aux nouveaux projets de démarrer depuis une base fonctionnelle plutôt que de zéro.

---

### Réalisations clients personnalisées

**Problème**

Plusieurs clients sont venus au studio avec des besoins produit spécifiques : tableaux de bord internes, systèmes de réservation et applications web sur mesure. Chacun nécessitait un cadrage, une architecture et une livraison de la part d'une petite équipe.

**Ce que j'ai construit**

J'ai joué le rôle d'architecte lead et développeur senior sur ces projets, en travaillant directement avec les clients pour définir les exigences et livrer des logiciels prêts pour la production.

**Travail technique**

- Conduite du recueil des besoins et du cadrage technique pour chaque projet
- Définition de l'architecture et décisions de stack adaptées aux contraintes de chaque client
- Direction du développement et revue de tout le code produit par les membres juniors de l'équipe
- Gestion du déploiement et de la passation pour chaque projet livré

**Impact**

Livraison de quatre projets à fort impact sur environ deux ans. Chaque projet a été mis en production et remis aux clients qui pouvaient l'opérer de façon autonome.

## Défis techniques

### Construire un studio logiciel avec une petite équipe sous pression de livraison

**Défi** — Gérer un studio avec une équipe réduite signifiait simultanément gérer les attentes des clients, la livraison technique, le développement de l'équipe et les produits internes. Il n'y avait pas de marge : les retards sur un projet affectaient la capacité sur les autres.

**Pourquoi c'était difficile** — Le défi n'était pas purement technique. Il demandait une priorisation constante, des conversations honnêtes avec les clients sur le périmètre, et s'assurer que les développeurs juniors apprenaient tout en livrant.

**Comment je l'ai abordé** — J'ai investi tôt dans la mise en place d'une infrastructure partagée et de standards d'ingénierie : conventions de dépôts, processus de revue de code et composants partagés réutilisables entre projets. Cela a réduit la charge par projet. J'ai également pris des décisions délibérées sur ce qu'il fallait construire en interne (Xentry) vs. ce qu'il fallait acheter ou utiliser off-the-shelf.

**Résultat** — Livraison de quatre projets clients en production sur deux ans, tout en développant les outils internes du studio et en faisant progresser un membre junior de l'équipe vers l'autonomie.

---

### Architecturer pour la réutilisation sur des projets divers

**Défi** — Chaque projet client avait des exigences différentes, mais construire chacun entièrement from scratch n'était pas soutenable pour une petite équipe.

**Pourquoi c'était difficile** — Identifier le bon niveau d'abstraction pour les modules partagés n'est pas trivial. Trop abstraits, les modules sont difficiles à utiliser ; trop spécifiques, ils ne se généralisent pas.

**Comment je l'ai abordé** — J'ai identifié les préoccupations communes essentielles entre projets — authentification, autorisation, isolation des tenants, primitives comptables — et j'ai construit le moteur Xentry autour de celles-ci. J'ai maintenu les contrats d'interface de modules explicites et documentés, ce qui permettait aux membres de l'équipe de les utiliser sans comprendre entièrement les internals.

**Résultat** — Les nouveaux projets démarraient depuis une base fonctionnelle plutôt que de zéro, ce qui réduisait significativement le temps avant le premier build fonctionnel.

## Décisions d'architecture & d'ingénierie

**Infrastructure studio** — L'investissement précoce dans les outils partagés a payé. La structure de dépôt standardisée, les templates CI/CD et une bibliothèque de composants partagée signifiaient que les nouveaux projets se lançaient plus vite et maintenaient une qualité cohérente.

**Conception des modules Xentry** — Le moteur ERP a été conçu autour d'interfaces de modules explicites, pas d'héritage ou de couplage fort. Cela signifiait que chaque module pouvait être testé et déployé indépendamment, et que de nouveaux modules pouvaient être ajoutés sans toucher aux modules existants.

**Architecture frontend** — Nuxt était le framework frontend par défaut pour les projets du studio, offrant les capacités SSR et un modèle de développement cohérent. Les bibliothèques de composants Vue étaient réutilisées entre projets là où c'était applicable.

**Approche de déploiement** — Chaque projet avait son propre pipeline de déploiement, configuré de façon cohérente selon les conventions établies du studio. Cela réduisait la charge opérationnelle de gérer plusieurs produits en production simultanément.

**Transfert de connaissances** — J'ai traité la documentation et la revue de code comme des outils principaux de transfert de connaissances. Les développeurs juniors devaient lire et comprendre les décisions d'architecture, pas simplement implémenter des tâches.

## Collaboration & leadership

J'ai co-fondé le studio et occupé simultanément le rôle de CTO et celui d'ingénieur lead. Cela signifiait que j'étais la seule personne responsable de la direction technique tout en produisant une part significative du code.

Côté équipe, j'ai recruté et intégré des développeurs, formé et mentoré un développeur frontend junior de ses débuts jusqu'à l'autonomie, et conduit des revues de code sur tout l'output de l'équipe. J'ai fixé le niveau de qualité et en étais responsable.

Côté client, j'ai géré toute la communication technique : recueil des besoins, présentations d'architecture, mises à jour d'avancement et remises de projets. Les clients me faisaient confiance directement, ce qui impliquait d'équilibrer honnêteté technique et confiance dans la livraison.

## Résultats & preuves

- Co-fondation et direction de l'opération technique d'un studio d'ingénierie logicielle
- Livraison de quatre projets clients à fort impact en production sur environ deux ans
- Construction et livraison de deux produits internes : Seleri (estimation paramétrique) et Xentry (moteur ERP)
- Conception et implémentation du backend complet d'une plateforme d'analytique de données sportives
- Construction des applications client front-facing pour le produit de deep-link du studio
- Recrutement, intégration et mentorat de développeurs juniors
- Mise en place des processus d'ingénierie (CI/CD, revue de code, bibliothèques de composants) appliqués par l'équipe

## Ce que cette expérience prouve

Cette expérience démontre ma capacité à opérer en tant que leader technique au niveau fondateur — prendre des décisions d'architecture, livrer des logiciels, construire une équipe et gérer des clients, simultanément.

Elle démontre que je peux construire des organisations et des processus, pas seulement du code. Mettre en place un studio from scratch demandait de définir comment l'équipe travaille, comment la qualité est maintenue et comment les connaissances sont transmises — en plus du travail d'ingénierie lui-même.

Elle prouve que je peux gérer plusieurs produits et projets en parallèle, maintenir la qualité de livraison sous contraintes de ressources et traduire des exigences clients ambiguës en logiciels livrés.

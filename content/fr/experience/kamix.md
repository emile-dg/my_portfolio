---
slug: kamix
title: Développeur Backend Lead
company: KAMIX
location: Yaoundé, Cameroun
period: Mars 2022 – Mai 2023
summary: Responsable du développement backend pour des systèmes internes et un produit client co-possédé par l'entreprise, et co-concepteur d'un prototype backend KYC interne.
tags:
  - Systèmes backend
  - Développement API
  - KYC & conformité
  - Déploiement
---

## Contexte

KAMIX est une entreprise technologique opérant en Afrique centrale. Pendant mon passage, l'équipe d'ingénierie travaillait sur deux axes principaux : un produit client co-possédé avec l'employeur, et un prototype interne pour la vérification d'identité (KYC).

J'ai rejoint l'équipe principalement dans un rôle backend, avec la responsabilité sur la conception des API, l'implémentation et le déploiement. J'ai participé au cycle de développement complet — de l'analyse des besoins et la conception jusqu'à l'implémentation et le déploiement en production.

## Mon rôle & mes responsabilités

**Backend / API / base de données** — J'étais le développeur backend principal sur les deux axes. J'ai conçu et implémenté des services API pour les systèmes internes et le produit client, contribué à la conception de la base de données, et possédé l'implémentation backend de la spécification au déploiement.

**Décisions produit & techniques** — J'ai participé à l'analyse et au recueil des besoins avec l'équipe, contribué aux décisions de conception technique, et continué à développer les services backend de façon itérative tout au long de la mission.

**Déploiement / infrastructure** — J'étais responsable du déploiement, en particulier de la gestion des déploiements sur des environnements VPN fraîchement configurés. Cela nécessitait une coordination rigoureuse de la mise en place de l'infrastructure à chaque release.

**Sécurité / conformité** — Sur le prototype KYC, j'étais responsable de s'assurer que la conception et l'implémentation respectaient les standards de conformité, sécurité et vie privée applicables aux workflows de vérification d'identité.

## Projets sur lesquels j'ai travaillé

### Backend du produit client

**Problème**

L'entreprise co-possédait un produit client qui nécessitait des services API backend fiables pour supporter ses workflows principaux. Le produit avait besoin d'API bien structurées consommables par les systèmes internes et clients.

**Ce que j'ai construit**

J'ai implémenté les services API pour le produit client, prenant en charge la couche backend de la conception au déploiement.

**Travail technique**

- Participation à l'analyse des besoins et aux sessions de conception technique
- Implémentation des services API REST couvrant les workflows principaux du produit
- Contribution à la conception du schéma de base de données et à la logique de la couche de données
- Garantie de la fiabilité et de la correction des API par les tests et la validation
- Gestion du déploiement des services backend sur l'infrastructure VPN

**Impact**

Livraison d'une couche backend fonctionnelle et fiable supportant les workflows du produit client. Le système a été déployé et opérationnel dans le délai de la mission.

---

### Prototype backend KYC

**Problème**

KAMIX avait besoin d'un prototype interne pour la vérification approfondie des clients — un système KYC (Know Your Customer) capable d'intégrer des API de vérification d'identité externes et de traiter des documents d'identité en tenant compte des exigences de conformité.

**Ce que j'ai construit**

J'ai participé à la conception et à l'implémentation du prototype backend KYC, avec une responsabilité spécifique sur les standards de sécurité, conformité et vie privée.

**Travail technique**

- Participation à la conception du flux de vérification KYC et du modèle de données
- Intégration d'une API externe pour la vérification d'identité approfondie
- Implémentation du pipeline de vérification : soumission de document, appel API externe, gestion de la réponse, suivi de statut
- Application des bonnes pratiques de sécurité et vie privée : minimisation des données, stockage chiffré des données d'identité, contrôle d'accès sur les enregistrements sensibles
- Garantie de l'alignement de l'implémentation avec les exigences de conformité applicables à la vérification d'identité

**Impact**

Livraison d'un prototype interne fonctionnel démontrant la faisabilité du flux de vérification KYC et fournissant une base pour une productisation ultérieure.

## Défis techniques

### Déployer sur des environnements VPN fraîchement configurés

**Défi** — Les déploiements étaient gérés sur des configurations VPN fraîches, ce qui nécessitait de configurer l'infrastructure depuis un état vierge pour chaque cycle de déploiement.

**Pourquoi c'était difficile** — Chaque déploiement nécessitait un séquençage soigneux : configuration VPN, configuration d'environnement, installation des dépendances et déploiement des services devaient être coordonnés de façon fiable et reproductible.

**Comment je l'ai abordé** — J'ai systématisé le processus de déploiement, documentant les étapes et m'assurant que chaque déploiement suivait une procédure cohérente. Cela a réduit les erreurs et rendu le processus reproductible.

**Résultat** — Les déploiements ont été exécutés de façon fiable sans nécessiter de rework ou de rollback dû à des problèmes de configuration.

---

### Construire une intégration KYC sécurisée

**Défi** — Les systèmes KYC manipulent des données d'identité sensibles — passeports, pièces d'identité, données biométriques — ce qui nécessite une gestion stricte des données, une exposition minimale et des frontières de conformité claires.

**Pourquoi c'était difficile** — L'API externe introduisait une dépendance à un système tiers, ce qui signifiait que l'intégration devait gérer les erreurs, timeouts et réponses partielles de façon robuste. Pendant ce temps, toutes les données d'identité en transit et au repos devaient être sécurisées de façon appropriée.

**Comment je l'ai abordé** — J'ai conçu l'intégration avec des états d'erreur explicites et une logique de retry. J'ai appliqué la minimisation des données : seules les données nécessaires à la vérification étaient stockées, et les champs sensibles étaient chiffrés. L'accès aux enregistrements d'identité était restreint par rôle.

**Résultat** — Le prototype gérait correctement le flux de vérification et démontrait une approche sécurisée et conforme de la gestion des données d'identité.

## Décisions d'architecture & d'ingénierie

**Conception des API** — Les services backend ont été conçus comme des API REST structurées avec des contrats clairs. J'ai collaboré avec l'équipe sur les définitions des API et m'assurais que le backend était consommé proprement par les systèmes qui en dépendaient.

**Approche sécurité sur le KYC** — Compte tenu de la sensibilité des données d'identité, les décisions de sécurité ont été prises explicitement : stockage chiffré, contrôle d'accès au niveau de la couche de données, et rétention minimale des documents d'identité bruts. Les exigences de conformité ont informé la conception du modèle de données dès le départ.

**Approche de déploiement** — Les déploiements sur des environnements VPN nécessitaient un processus discipliné et documenté. J'ai maintenu des procédures de déploiement claires pour assurer la cohérence entre les releases.

## Résultats & preuves

- Livraison de services API backend pour un produit client co-possédé par l'employeur
- Participation au cycle de développement complet : analyse des besoins, conception, implémentation, déploiement
- Construction et livraison d'un prototype backend KYC interne intégrant une API de vérification d'identité approfondie
- Déploiement de services backend sur une infrastructure VPN, gestion du processus de déploiement complet
- Application des standards de sécurité et de vie privée aux workflows sensibles de vérification d'identité

## Ce que cette expérience prouve

Cette expérience démontre ma capacité à posséder des systèmes backend dans une équipe d'ingénierie structurée, à participer de façon significative au cycle de développement complet, et à gérer des workflows sensibles en matière de sécurité avec la rigueur appropriée.

Elle montre que je peux travailler sur des systèmes à dimension réglementaire — KYC, vérification d'identité — et appliquer un jugement d'ingénierie sur la gestion des données, le contrôle d'accès et les intégrations tierces dans des contextes où les enjeux dépassent une application CRUD standard.

Elle démontre l'étendue de mon expérience backend : conception d'API, modélisation de base de données, opérations de déploiement et implémentation consciente de la sécurité, appliqués de façon cohérente dans différents contextes produit.

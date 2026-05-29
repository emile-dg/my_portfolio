---
slug: clinkast
title: Ingénieur Logiciel Fullstack
company: Clinkast
location: Douala, Cameroun
period: Octobre 2021 – Février 2022
summary: Contrat court terme centré sur la construction d'un agent conversationnel pour la commande de médicaments — responsable de la planification, de l'implémentation et des tests des flux de conversation, de l'interface utilisateur et de l'expérience de bout en bout de la conversation au traitement des commandes.
tags:
  - Développement frontend
  - Interface conversationnelle
  - Livraison produit
---

## Contexte

Clinkast est une plateforme de santé numérique opérant au Cameroun. Lors de cette mission, l'axe principal était un produit spécifique : un agent conversationnel permettant aux utilisateurs de commander des produits pharmaceutiques via une interface de chat. L'objectif était de rendre la commande de médicaments accessible, guidée et simple — en remplaçant la friction d'une interface e-commerce traditionnelle par un flux de conversation structuré.

J'ai rejoint le projet sur un contrat court terme et ai principalement pris en charge le rôle d'ingénieur frontend et UX pour ce produit.

## Mon rôle & mes responsabilités

**Frontend / interfaces produit** — J'étais responsable de la planification, de l'implémentation et des tests de l'interface utilisateur de l'agent conversationnel. Cela couvrait l'expérience de chat complète : conception et implémentation du flux de conversation, rendu de l'interface, et la transition de la conversation vers le traitement des commandes.

**Décisions produit & UX** — Compte tenu de la nature conversationnelle du produit, une part significative du travail consistait à définir le comportement du flux de chat : quelles questions poser, dans quel ordre, comment gérer les cas limites dans les réponses des utilisateurs, et comment guider l'utilisateur de l'intention à la commande finalisée.

**Tests** — J'étais responsable des tests des flux de conversation et de l'expérience utilisateur, en m'assurant que les chemins de conversation fonctionnaient correctement et que la transition vers le traitement des commandes fonctionnait de bout en bout.

## Projet sur lequel j'ai travaillé

### Agent conversationnel pour la commande de médicaments

**Problème**

Les utilisateurs avaient besoin d'un moyen simple et guidé pour commander des produits pharmaceutiques sans naviguer dans un catalogue produit complexe. Une interface conversationnelle offrait une expérience plus accessible, particulièrement pour les utilisateurs moins à l'aise avec les flux e-commerce traditionnels. Le défi était de construire une expérience de chat qui semblait naturelle, gérait la collecte de données nécessaires de façon fiable, et se connectait correctement au backend de traitement des commandes.

**Ce que j'ai construit**

J'ai planifié, implémenté et testé l'interface conversationnelle — les flux de chat, l'interface, et l'expérience utilisateur du premier message à la commande finalisée.

**Travail technique**

- Planification et conception des flux de conversation : séquences de questions, gestion des réponses, logique de branchement pour différents types de commandes
- Implémentation de l'interface de chat : rendu des messages, gestion des inputs et états d'interaction
- Construction de la logique de collecte des informations nécessaires à la commande via la conversation (sélection de produit, quantité, informations de livraison)
- Implémentation de la transition de la conversation vers la confirmation et le traitement de la commande
- Tests des flux de chat de bout en bout : chemins de conversation, cas limites dans les inputs utilisateurs, et correction du passage à la commande
- Collaboration avec l'équipe backend sur le contrat de données entre la couche de conversation et le système de traitement des commandes

**Impact**

Livraison d'une expérience de commande conversationnelle fonctionnelle dans le délai du contrat. Le flux basé sur le chat a fourni un chemin plus guidé et accessible pour passer une commande par rapport à une interface de listing de produits traditionnelle.

## Défis techniques

### Concevoir des flux de conversation fiables

**Défi** — Les interfaces conversationnelles sont plus difficiles à réaliser correctement que les interfaces basées sur des formulaires. Les utilisateurs ne suivent pas les chemins attendus, donnent des réponses incomplètes, ou changent d'avis en cours de conversation. Le flux devait gérer cela gracieusement sans perdre de données de commande ni dérouter l'utilisateur.

**Pourquoi c'était difficile** — Contrairement à un formulaire avec des champs fixes, une conversation a un état qui évolue à travers les messages. Gérer les corrections, revenir en arrière dans le flux et récupérer depuis des inputs inattendus nécessitait une gestion d'état soignée dans le frontend.

**Comment je l'ai abordé** — J'ai modélisé la conversation comme une machine à états explicite : chaque étape du flux avait des transitions définies, des inputs attendus et des comportements de fallback. Cela rendait le flux testable et prévisible même quand les utilisateurs déviaient du chemin nominal.

**Résultat** — Le flux de conversation gérait correctement les cas courants et la plupart des cas limites, et la transition vers le traitement des commandes fonctionnait de façon fiable.

## Décisions d'architecture & d'ingénierie

**Conversation comme machine à états** — Modéliser le flux de chat comme une machine à états plutôt qu'un script linéaire a été la décision architecturale clé. Cela permettait une logique de branchement, une validation des inputs par étape et des transitions propres sans accumuler des conditionnelles en cascade.

**Contrat frontend / backend** — La transition de la conversation à la commande nécessitait un contrat de données propre : après que la conversation avait collecté toutes les informations requises, elle sérialisait le payload de commande et le soumettait au backend. Maintenir cette frontière explicite signifiait que la couche de conversation et la couche de traitement des commandes pouvaient être développées et testées indépendamment.

## Résultats & preuves

- Planification, implémentation et livraison d'un agent conversationnel de commande pharmaceutique dans le cadre d'un contrat court terme
- Construction de la gestion d'état de conversation gérant les flux à branchements et les inputs utilisateurs atypiques
- Livraison de l'expérience de bout en bout de l'interface de chat au passage de commande
- Tests de tous les chemins de conversation et des flux de soumission de commande pour leur correction

## Ce que cette expérience prouve

Cette expérience démontre ma capacité à prendre en charge un produit frontend de façon autonome dans une mission ciblée et délimitée dans le temps. J'ai planifié le travail, pris les décisions UX et architecturales clés pour l'interface conversationnelle, l'ai implémentée et testée — sans nécessiter de supervision extensive.

Elle montre ma capacité à travailler sur des paradigmes d'interface non standards au-delà des interfaces basées sur des formulaires traditionnels, et à réfléchir soigneusement à l'expérience utilisateur et à la gestion d'état dans des produits interactifs.

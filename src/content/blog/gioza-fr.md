---
title: "AI - NILM: désagrégation de la consommation d'énergie des appareils"
description: ""
pubDate: "Jul 15 2022"
cover: "/images/blog/usecase_gioa.jpg"
category: "Missions: Data & AI"
lang: "fr"
sidebarInfo:
  industry: "SaaS startup"
  headquarters: "Paris, France"
  founded: "2023"
  employees: "<10"
---

### **Non-Intrusive Load Monitoring (NILM) alimenté par l'IA pour Gioza : optimisation de la consommation d'énergie et réduction des coûts**

---

### **1. Objectifs commerciaux du client**

Gioza est un pionnier pour aider les entreprises à mieux gérer leur consommation d'énergie grâce à son système de gestion de l'énergie (EMS) sans capteur. Positionnée dans l'industrie de l'efficacité énergétique, la mission de Gioza est d'aider les clients industriels (uniquement) à réduire de manière significative leurs coûts énergétiques - avec des économies pouvant aller jusqu'à 20 %. L'offre principale de l'entreprise se déroule autour de la surveillance non intrusive de la consommation (NILM en anglais), une technologie qui désagrège les données de consommation électrique à partir d'un seul compteur électrique pour identifier la consommation d'énergie des appareils et des dispositifs individuels. En utilisant des solutions NILM basées sur l'IA, Gioza vise à améliorer les capacités EMS, permettant aux clients de repérer les gaspillages d'énergie au niveau des appareils et d'optimiser leur utilisation pour une efficacité maximale.

---

### **2. Les défis liés à l'IA et aux données**

Décomposer les données de consommation d'énergie agrégées en informations exploitables au niveau des appareils dans des environnements industriels est une tâche très complexe. Dans le cas d'opérations à grande échelle, les données de consommation d'énergie souvent recueillies à partir d'un seul point de mesure contenaient souvent un ensemble d'appareils fonctionnant simultanément, ce qui rendait difficile l'attribution précise de la consommation d'énergie à des appareils spécifiques. Ce manque d'informations précises sur la consommation d'énergie constituait un obstacle pour offrir aux clients des informations et des recommandations exploitables en vue d'optimiser leur consommation d'énergie. Les méthodes traditionnelles d'audit énergétique ne permettaient pas d'obtenir la granularité nécessaire (nécéssitant des capteurs sur chaque machine), ce qui se traduisait par des opportunités d'économies manquées et une gestion inefficace de l'énergie.

Le client avait besoin d'une solution capable de traiter les données agrégées d'un compteur d'énergie primaire et de les désagréger au niveau de l'appareil ou de l'atelier en temps réel, sans avoir besoin de capteurs supplémentaires ou de matériel intrusif. Cela permettrait à Gioza de fournir des informations très précises et granulaires sur la consommation d'énergie, permettant à ses clients de prendre le contrôle de leur consommation d'énergie et de réduire les gaspillages.

---

### **3. Solution proposée par Bubo **

Pour relever ces défis, Bubo SAS a mis en place une solution NILM basée sur l'IA, voici comment nous avons abordé le projet :

1. **Prétraitement des données** : Nous avons commencé par travailler avec Gioza pour comprendre les données collectées par le compteur d'énergie primaire, en identifiant les caractéristiques clés telles que les modèles de consommation d'énergie, les pics d'utilisation, le bruit, les données manquantes et la fréquence de fonctionnement.
2. **Désagrégation énergétique alimentée par l'IA** : En utilisant des algorithmes avancés de machine learning et des techniques NILM, Bubo SAS a développé un modèle capable de désagréger avec précision les données énergétiques composites. Le modèle a été entraîné à reconnaître des signatures énergétiques distinctes pour différents appareils, ce qui lui permet de cartographier automatiquement la consommation d'énergie pour des appareils individuels, même dans des environnements industriels complexes. Nous l'avons d'abord entraîné sur des ensembles de données accessibles au public, avant de l'affiner dans un second temps sur des données propriétaires.
3. **Traitement des données en temps réel** : La solution a été conçue pour traiter les données entrantes en temps réel, ce qui permet de savoir immédiatement quels sont les appareils qui consomment le plus d'énergie. En contrôlant en permanence les données du compteur électrique, Gioza a pu proposer des recommandations dynamiques pour optimiser l'utilisation de l'énergie, par exemple en programmant les appareils à forte consommation d'énergie pendant les heures creuses ou en identifiant les appareils qui fonctionnent mal ou de manière inefficace.
4. **Évolutif et non intrusif** : Notre solution NILM basée sur l'IA était entièrement non intrusive, c'est-à-dire qu'elle ne nécessitait aucune installation matérielle supplémentaire, ce qui la rend rentable et facile à déployer au sein de la base de clients de Gioza.

---

### **4. Résultats**

La mise en œuvre de la solution NILM pilotée par l'IA de Bubo SAS a entraîné les améliorations mesurables suivantes pour Gioza et ses clients :

- **Les séries chronologiques et leurs implications** : on voit les LLMs partout en ce moment, mais pas de LLMs dans ce cas d'usage en particulier. Nous traitons un autre type de données: les séries temporelles.
- La désagrégation de la consommation d'énergie au niveau des appareils a permis aux clients d'identifier les gaspillages d'énergie et les inefficacités, conduisant à une réduction moyenne des coûts énergétiques allant jusqu'à 20 %.
- **Amélioration de l'efficacité énergétique** : Grâce à des informations en temps réel sur la consommation d'énergie au niveau des appareils, les clients ont pu optimiser leur consommation d'énergie en programmant les appareils plus efficacement, en réduisant la consommation d'énergie inutile et en diminuant les coûts d'exploitation.

« L'expertise de Bubo dans les projets pilotés par l'IA, même si elle n'était pas directement liée à la désagrégation énergétique, nous a permis d'offrir une solution efficace. Le système NILM piloté par l'IA est un élément clé de différenciation pour nous, et nous sommes enthousiastes à l'idée de continuer à étendre son utilisation à notre base de clients pour les aider à optimiser leur consommation d'énergie. »

- CEO, Gioza
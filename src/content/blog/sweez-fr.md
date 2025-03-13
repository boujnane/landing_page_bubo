---
title: "AI - ASR / LLM: analyse approfondie des réunions"
description: ""
pubDate: "Jul 01 2022"
cover: "/images/blog/bubo_pasteque.jpg"
category: "Software development"
lang: "fr"
sidebarInfo:
  industry: "SaaS startup"
  headquarters: "Paris, France"
  founded: "2020"
  employees: "<10"
---
### **Amélioerer la gestion des réunions grâce à l'IA : plateforme d'analyse des réunions de Sweez**

---

### **1. Contexte commercial du client**

Le client construit une plateforme conçue pour optimiser la façon dont les entreprises gèrent les réunions en supprimant définitivement la prise de notes. L'outil regroupe toutes les réunions de l'entreprise et permet aux employés de retrouver facilement les informations pertinentes sans perdre de temps à les transcrire ou à les résumer. L'objectif principal de Sweez est de créer une expérience transparente où les données des réunions sont facilement accessibles, consultables et bien organisées. L'entreprise cherche à améliorer cette plateforme avec des technologies d'IA telles que la reconnaissance automatique de la parole (ASR) et les LLM afin d'améliorer la précision et l'utilité des résumés de réunion, d'enrichir l'extraction des connaissances et d'automatiser la création d'informations exploitables.

---

### **2. Les défis liés à l'IA et aux données**

Le principal défi auquel Sweez était confronté était l'inefficacité et les inexactitudes associées à la transcription des réunions et la difficulté de résumer des conversations longues. Le processus d'examen et d'extraction des informations pertinentes des réunions prenait beaucoup de temps et était sujet à des erreurs, en particulier lorsqu'il s'agissait de nombreux participants et de sujets de discussion variés. En outre, le système existant ne permettait pas de segmenter les réunions en chapitres clairs ou de générer automatiquement des résumés reprenant les points clés et les actions à entreprendre.

Sweez avait besoin d'une solution d'IA capable de transcrire les conversations avec précision, d'identifier qui a dit quoi (diarisation) et de diviser automatiquement les réunions en segments faciles à digérer. La plateforme nécessitait un mécanisme robuste d'extraction des questions-réponses pour fournir des métadonnées sur les sujets des réunions et les participants, ce qui était essentiel pour rendre les réunions exploitables et améliorer l'efficacité du suivi.

---

### **3. Solution proposée par Bubo **

L'équipe de Bubo a travaillé à la mise en œuvre d'une solution d'IA complète utilisant des technologies de pointe adaptées aux besoins spécifiques de l'analyse des réunions.

1. **ASR & diarisation** : Bubo SAS a finetuné un système de transcription automatique qui a converti l'audio de la réunion en texte avec une grande précision. L'intégration de la diarisation des participants a permis au système d'identifier et d'étiqueter les contributions de chaque speakers sur la base d'échantillons demandés initialement, garantissant ainsi la clarté et le contexte des transcriptions finales.
2. **Segmentation des réunions** : Pour améliorer la lisibilité et la facilité d'utilisation, l'équipe de Bubo a mis en œuvre un modèle de segmentation qui divise la transcription de la réunion en chapitres, sur la base des transitions naturelles de la discussion. Cette fonctionnalité a permis aux utilisateurs de naviguer plus efficacement dans les grandes réunions comme sur youtube par exemple, en se concentrant sur les sections les plus pertinentes sans avoir besoin de revoir l'ensemble de la conversation.
3. **Résumé et extraction de métadonnées basés sur le LLM** : Bubo SAS a utilisé des LLMs pour générer des résumés automatiques de haute qualité, qui capturent l'essence de chaque réunion. En outre, une approche de résumé basée sur les entités a été développée pour fournir des résumés personnalisés qui organisent l'information en fonction des personnes ou des sujets clés. L'extraction des questions-réponses a été incorporée, permettant au système d'extraire les données pertinentes de la réunion pour une référence rapide. 
4. **Intégration de l'IA dans la plateforme** : Les fonctions d'IA ont été intégrées de manière transparente dans la plateforme Sweez, ce qui a permis de traiter automatiquement toutes les réunions et de les structurer de manière à faciliter la navigation.

---

### **4. Résultats**

Les améliorations apportées par l'IA ont permis d'apporter des améliorations substantielles à la plateforme et à ses utilisateurs :

- Différents types de données** : dans le cadre de ce projet, nous avons travaillé non seulement sur des données textuelles comme nous le faisons habituellement, mais aussi sur des données audio et visuelles, la multi-modalité étant la clé pour passer au niveau supérieur dans ce domaine.
- La transcription, la segmentation et le résumé automatiques ont permis de réduire considérablement le temps nécessaire aux clients pour passer en revue les réunions et en extraire des informations essentielles.
- **Précision accrue** : Les fonctions de diarisation et d'identification du locuteur ont permis d'atteindre un taux de précision de plus de 80 % dans la capture et l'attribution correcte des discussions.
- **Des informations et des tableaux de bord exploitables** : Les résumés basés sur les entités et l'extraction des questions-réponses ont permis aux utilisateurs d'accéder rapidement aux points clés liés à des personnes ou à des sujets spécifiques, améliorant ainsi l'efficacité du suivi.

Ces améliorations ont permis une gestion plus efficace des réunions, une meilleure collaboration et une productivité accrue au sein des équipes.
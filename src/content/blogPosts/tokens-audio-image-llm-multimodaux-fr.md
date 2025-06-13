---
title: "Tokens audio et image : comment les LLM multimodaux voient et entendent"
description: "Découvrez comment les modèles d'IA transforment images et sons en tokens pour les comprendre, et comment cette révolution multimodale change notre interaction avec l'intelligence artificielle."
pubDate: "Jun 03 2025"
cover: "/images/blogposts/tokens_audio.jpg"
category: "Large Language Model(LLM)"
lang: "fr"
sidebarInfo:
  industry: ""
  headquarters: ""
  founded: ""
  employees: ""
  visibility: false
---

# Au-delà des mots : Comprendre les tokens audio et image dans les LLM multimodaux

Vous avez peut-être déjà lu notre article précédent sur les fondamentaux des tokens textuels dans les grands modèles de langage (LLM). Aujourd'hui, nous franchissons une nouvelle frontière : celle des modèles multimodaux, capables de comprendre et de traiter non seulement du texte, mais aussi **des images** et **des sons**. Comment ces modèles transforment-ils des pixels ou des ondes sonores en quelque chose de compréhensible pour une IA ? La réponse se trouve dans une évolution fascinante du concept de token.

## L'ère multimodale : quand les LLM s'ouvrent à d'autres sens

Les modèles de langage ont connu une évolution spectaculaire ces dernières années. D'abord limités au texte, ils peuvent désormais "voir" des images et "entendre" des sons. GPT-4o, Claude 3, Gemini ou Llama 3.2 sont des exemples de ces modèles multimodaux qui révolutionnent notre interaction avec l'IA.

Mais comment un modèle entraîné sur du texte peut-il soudainement comprendre une photo ou un enregistrement audio ? C'est là que la magie des tokens multimodaux entre en jeu.

## Rappel : qu'est-ce qu'un token textuel ?

Dans notre article précédent, nous avons vu qu'un token textuel est une unité de base utilisée par les LLM pour traiter le langage. Un token peut être un mot entier, une partie de mot, un signe de ponctuation ou même un espace. La phrase "J'aime l'intelligence artificielle." est ainsi découpée en plusieurs tokens comme "J'", "aime", " l'", "intelli", "gence", " artificielle", ".".

Cette tokenisation permet au modèle de traiter l'information de manière efficace. Mais qu'en est-il des images et des sons ?

## Les tokens d'image : transformer des pixels en langage

### Du pixel au patch : le découpage initial

Contrairement au texte qui est naturellement discret (composé d'unités distinctes comme les lettres et les mots), une image est continue - un ensemble de pixels formant un tout. La première étape consiste donc à découper cette image en morceaux appelés "patchs".

Imaginez une photo de 224×224 pixels. Au lieu de traiter chaque pixel individuellement (ce qui serait inefficace), le modèle découpe l'image en patchs de 16×16 pixels, créant ainsi 196 patchs. Chaque patch devient alors une unité d'information, un peu comme un "mot visuel".

### L'encodeur d'image : le traducteur visuel

Ces patchs sont ensuite traités par un encodeur d'image, généralement un Vision Transformer (ViT). Cet encodeur fonctionne comme un traducteur qui convertit l'information visuelle en représentations numériques.

Le processus se déroule ainsi :
1. L'image est découpée en patchs
2. Chaque patch est aplati en un vecteur
3. Ces vecteurs sont projetés dans un espace d'embedding de même dimension que les tokens textuels
4. L'encodeur ViT traite ces embeddings pour capturer les relations entre les différentes parties de l'image

### La projection linéaire : le pont entre vision et langage

L'étape cruciale est la projection linéaire, qui transforme les représentations visuelles en vecteurs de même dimension que les embeddings textuels. C'est comme si on traduisait le "langage visuel" en un format compatible avec le "langage textuel" que le LLM comprend déjà.

Par exemple, un patch d'image représenté par un vecteur de 256 dimensions pourrait être projeté vers un espace de 768 dimensions, correspondant à la taille des embeddings textuels du modèle.

## Les tokens audio : donner une oreille aux LLM

### La discrétisation du son continu

L'audio, comme l'image, est un signal continu qu'il faut transformer en unités discrètes. Pour ce faire, les modèles multimodaux utilisent des techniques de tokenisation audio spécifiques.

Le processus typique comprend :
1. La transformation du signal audio en spectrogramme (représentation visuelle des fréquences sonores)
2. L'extraction de caractéristiques audio via des modèles comme HuBERT ou wav2vec
3. La quantification de ces caractéristiques en tokens audio discrets

### HuBERT et wav2vec : les oreilles des LLM

HuBERT (Hidden-Unit BERT) et wav2vec sont des modèles qui ont révolutionné le traitement audio en IA. Ils fonctionnent en apprenant des représentations du son de manière auto-supervisée, sans nécessiter d'étiquettes manuelles.

Ces modèles génèrent des embeddings audio frame par frame (généralement toutes les 20 millisecondes). Ces embeddings sont ensuite quantifiés en tokens discrets à l'aide d'algorithmes comme le k-means, créant ainsi un "vocabulaire audio" limité.

### Le vocabulaire conjoint : parler la même langue

Pour qu'un LLM puisse traiter à la fois du texte et de l'audio, les chercheurs créent un "vocabulaire conjoint" qui englobe les tokens textuels et audio. Ce vocabulaire permet au modèle de traiter de manière transparente des séquences entrelacées de tokens textuels et audio.

Par exemple, le modèle AudioPaLM de Google utilise PaLM 2 comme base et étend son vocabulaire pour inclure des tokens audio. De même, SpeechGPT propose des "unit vectors" qui représentent conjointement la parole et le texte dans un même espace.

## L'architecture des LLM multimodaux : deux approches principales

Comment ces différents types de tokens sont-ils intégrés dans l'architecture d'un LLM ? Deux approches principales se distinguent :

### 1. L'architecture unifiée à décodeur (Unified Embedding Decoder)

Cette approche conserve l'architecture originale du LLM (comme GPT ou Llama) et se contente d'étendre son vocabulaire d'entrée. Les tokens d'image ou d'audio sont projetés dans le même espace d'embedding que les tokens textuels, puis concaténés en une seule séquence que le modèle traite de manière unifiée.

Avantages :
- Architecture simple et élégante
- Réutilisation complète des poids du LLM existant
- Traitement unifié de toutes les modalités

### 2. L'architecture à attention croisée (Cross-modality Attention)

Cette approche utilise des mécanismes d'attention spécifiques pour intégrer les différentes modalités. Au lieu de projeter tous les tokens dans un même espace, elle maintient des représentations séparées et utilise l'attention croisée pour établir des connexions entre elles.

Avantages :
- Préservation des caractéristiques spécifiques à chaque modalité
- Flexibilité accrue dans le traitement des différentes entrées
- Potentiellement plus performante pour certaines tâches complexes

## Des exemples concrets de modèles multimodaux

### Pour l'audio

- **AudioPaLM** : Développé par Google, ce modèle utilise PaLM 2 comme base et étend son vocabulaire pour inclure des tokens audio. Il excelle dans des tâches comme la reconnaissance vocale, la traduction de la parole et la génération de parole.

- **SpeechGPT** : Ce modèle de l'Université de Fudan propose un vecteur unitaire conjoint pour la parole et le texte. Il est entraîné sur des données de parole appariées et des instructions vocales, et peut effectuer des tâches comme la réponse à des questions audio et la transcription.

- **Qwen-Audio-Chat** : Développé par Alibaba, ce modèle prend en charge plus de 30 tâches audio, dont la transcription, la réponse à des questions audio et la classification sonore. Il supporte également les dialogues multilingues et multi-tours.

### Pour l'image

- **Llama 3.2** : Les derniers modèles multimodaux de Meta AI intègrent des capacités de vision dans l'architecture Llama, permettant au modèle de comprendre et de raisonner sur des images.

- **Yi-VL** : Ces modèles utilisent un Vision Transformer, un module de projection et un grand modèle de langage pour traiter des paires image-texte bilingues (anglais et chinois).

## Les défis et l'avenir des tokens multimodaux

Malgré les avancées impressionnantes, plusieurs défis persistent :

1. **L'alignement des modalités** : Assurer que les représentations textuelles, visuelles et audio sont correctement alignées dans un espace sémantique commun.

2. **L'efficacité computationnelle** : Le traitement de tokens multimodaux est plus exigeant en ressources que le texte seul.

3. **La contextualisation** : Comprendre le contexte à travers différentes modalités reste complexe.

L'avenir semble prometteur, avec des recherches en cours sur :
- Des tokens multimodaux plus efficaces
- L'intégration de modalités supplémentaires (toucher, goût, odorat via des capteurs)
- Des architectures hybrides combinant les avantages des différentes approches

## Conclusion : vers une IA aux sens multiples

Les tokens multimodaux représentent une évolution fascinante dans le domaine de l'IA. En permettant aux LLM de "voir" et d'"entendre", ils rapprochent l'intelligence artificielle de l'intelligence humaine, naturellement multimodale.

Cette capacité à traiter différentes modalités ouvre la voie à des applications plus intuitives et plus puissantes, des assistants virtuels capables de comprendre notre environnement aux outils créatifs qui peuvent générer du contenu multimédia cohérent.

La prochaine fois que vous interagissez avec un modèle comme GPT-4o ou Claude 3, rappelez-vous qu'il ne "voit" pas vraiment une image comme vous la voyez, mais qu'il la perçoit à travers le prisme de ces tokens visuels, ces petites unités de sens qui lui permettent de donner un sens au monde visuel et sonore.

image                      | audio
:-------------------------:|:-------------------------:
![tokenisation image](/images/blogposts/tokenisation_image_finale.webp) | ![tokenisation audio](/images/blogposts/tokenisation_audio_finale.webp)


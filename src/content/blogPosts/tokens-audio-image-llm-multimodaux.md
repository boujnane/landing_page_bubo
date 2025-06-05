---
title: "Tokens audio et image : comment les LLM multimodaux voient et entendent"
description: "Découvrez comment les modèles d'IA transforment images et sons en tokens pour les comprendre, et comment cette révolution multimodale change notre interaction avec l'intelligence artificielle."
pubDate: "Jun 03 2025"
# cover: "/images/blogposts/tokens_infographie_finale_divisee.webp"
category: "Missions: Data & AI"
lang: "en"
sidebarInfo:
  industry: ""
  headquarters: ""
  founded: ""
  employees: ""
  visibility: false
---

# Beyond words: Understanding audio and image tokens in multimodal LLMs

You may have already read our previous article on the fundamentals of text tokens in large language models (LLMs). Today, we're crossing a new frontier: that of multimodal models, capable of understanding and processing not only text, but also **images** and **sounds**. How do these models transform pixels or sound waves into something comprehensible to an AI? The answer lies in a fascinating evolution of the token concept.

## The multimodal era: when LLMs open up to other senses

Language models have undergone a spectacular evolution in recent years. Initially limited to text, they can now “see” images and “hear” sounds. GPT-4o, Claude 3, Gemini or Llama 3.2 are examples of these multimodal models that are revolutionizing our interaction with AI.

But how can a model trained on text suddenly understand a photo or audio recording? That's where the magic of multimodal tokens comes in.

## Reminder: what is a text token ?

In our previous article, we saw that a text token is a basic unit used by LLMs to process language. A token can be a whole word, part of a word, a punctuation mark or even a space. For example, the sentence “I love artificial intelligence” is broken down into tokens such as “I”, “love”, “the”, “intelli”, “gence”, “artificial”, “.”.

This tokenization enables the model to process information efficiently. But what about images and sounds?

## Image tokens: turning pixels into language

### From pixel to patch: the initial cut

Unlike text, which is naturally discrete (made up of distinct units such as letters and words), an image is continuous - a set of pixels forming a whole. The first step, therefore, is to cut this image into pieces called “patches”.

Imagine a 224×224 pixel photo. Instead of processing each pixel individually (which would be inefficient), the model slices the image into 16×16 pixel patches, creating 196 patches. Each patch then becomes a unit of information, a bit like a “visual word”.

### The image encoder: the visual translator

These patches are then processed by an image encoder, usually a Vision Transformer (ViT). This encoder functions as a translator, converting visual information into digital representations.

The process is as follows :
1. The image is cut into patches
2. Each patch is flattened into a vector
3. These vectors are projected into an embedding space of the same dimension as the text tokens.
4. The ViT encoder processes these embeddings to capture the relationships between the different parts of the image.

### Linear projection: the bridge between vision and language

The crucial step is linear projection, which transforms the visual representations into vectors of the same dimension as the text embeddings. It's like translating “visual language” into a format compatible with the “textual language” that LLM already understands.

For example, an image patch represented by a 256-dimensional vector could be projected into a 768-dimensional space, corresponding to the size of the model's text embeddings.

## Audio tokens: giving LLM an ear

### The discretization of continuous sound

Audio, like image, is a continuous signal that needs to be transformed into discrete units. To do this, multimodal models use specific audio tokenization techniques.

The typical process involves :
1. Transforming the audio signal into a spectrogram (visual representation of sound frequencies)
2. Extraction of audio characteristics via models such as HuBERT or wav2vec
3. Quantization of these features into discrete audio tokens

### HuBERT and wav2vec: the ears of LLM

HuBERT (Hidden-Unit BERT) and wav2vec are models that have revolutionized audio processing in AI. They work by learning sound representations in a self-supervised way, without the need for manual labels.

These models generate audio embeddings frame by frame (usually every 20 milliseconds). These embeddings are then quantized into discrete tokens using algorithms such as k-means, creating a limited “audio vocabulary”.

### Joint vocabulary: speaking the same language

To enable an LLM to handle both text and audio, the researchers create a “joint vocabulary” that encompasses both text and audio tokens. This vocabulary enables the model to seamlessly handle interleaved sequences of text and audio tokens.

For example, Google's AudioPaLM model uses PaLM 2 as its base and extends its vocabulary to include audio tokens. Similarly, SpeechGPT offers “unit vectors” that represent speech and text together in the same space.

## Multimodal LLM architecture: two main approaches

How are these different types of token integrated into the architecture of an LLM? There are two main approaches:

### 1. Unified Embedding Decoder architecture

This approach retains the original LLM architecture (like GPT or Llama) and simply extends its input vocabulary. Image or audio tokens are projected into the same embedding space as text tokens, then concatenated into a single sequence that the model processes in a unified way.

Benefits :
- Simple, elegant architecture
- Complete reuse of existing LLM weights
- Unified processing of all modalities

### 2. Cross-modality attention architecture

This approach uses specific attention mechanisms to integrate the different modalities. Instead of projecting all tokens into the same space, it maintains separate representations and uses cross-attention to establish connections between them.

Advantages :
- Preservation of modality-specific characteristics
- Greater flexibility in processing different inputs
- Potentially more efficient for certain complex tasks

## Concrete examples of multimodal models

### For audio

- **AudioPaLM**: Developed by Google, this model uses PaLM 2 as its base and extends its vocabulary to include audio tokens. It excels in tasks such as speech recognition, speech translation and speech generation.

- **SpeechGPT**: This model from Fudan University proposes a joint unit vector for speech and text. It is trained on matched speech data and speech instructions, and can perform tasks such as audio question answering and transcription.

- **Qwen-Audio-Chat**: Developed by Alibaba, this model supports over 30 audio tasks, including transcription, answering audio questions and sound classification. It also supports multilingual and multi-turn dialogs.

### For the image

- **Llama 3.2**: Meta AI's latest multimodal models integrate vision capabilities into the Llama architecture, enabling the model to understand and reason about images.

- Yi-VL**: These models use a Vision Transformer, a projection module and a large language model to process bilingual image-text pairs (English and Chinese).

## The challenges and future of multimodal tokens

Despite impressive progress, several challenges remain :

1. **Modality alignment**: Ensure that textual, visual and audio representations are correctly aligned in a common semantic space.

2. **Computational efficiency**: Processing multimodal tokens is more resource-intensive than text alone.

3. **Contextualization**: Understanding context across different modalities remains complex.

The future looks bright, with research underway into :
- More efficient multimodal tokens
- Integration of additional modalities (touch, taste, smell via sensors)
- Hybrid architectures combining the advantages of different approaches

## Conclusion: towards AI with multiple meanings

Multimodal tokens represent a fascinating development in the field of AI. By enabling LLMs to “see” and “hear”, they bring artificial intelligence closer to human intelligence, which is naturally multimodal.

This ability to handle different modalities paves the way for more intuitive and powerful applications, from virtual assistants capable of understanding our environment to creative tools that can generate coherent multimedia content.

The next time you interact with a model like GPT-4o or Claude 3, remember that it doesn't really “see” an image as you see it, but perceives it through the prism of those visual tokens, those little units of meaning that enable it to make sense of the visual and aural world.

image                      | audio
:-------------------------:|:-------------------------:
![tokenisation image](/images/blogposts/tokenisation_image_finale.webp) | ![tokenisation audio](/images/blogposts/tokenisation_audio_finale.webp)


---
title: "AI - Computer vision: recognition of radiological incidence"
description: ""
pubDate: "Jul 02 2022"
cover: "/images/blog/bubo_tvrad.png"
category: "Others"
lang: "en"
---

### *Enhancing radiological efficiency with AI: Image classification for a well known aligners firm*

---

#### 1. *Business context for the client*

The client, a leader in invisible dental aligners, is focused on optimizing every stage of the orthodontic treatment process, including radiology, to improve patient outcomes and streamline clinical workflows. To advance this vision, our client sought to implement an AI-based solution capable of automatically recognizing and categorizing radiographic images by their incidence, allowing for faster, more accurate pre-filling of technical descriptions in radiology reports. This AI transformation is part of a larger ambition to support dentists with automated tools, enhancing efficiency and contributing to overall profitability by accelerating patient care pathways.

---

#### 2. *The AI / data challenges faced*

Our client faced significant challenges in handling the vast and varied radiological image data required for aligner customization. With radiographic images coming in from multiple sources and no consistent labeling across datasets, classification and organization became labor-intensive and error-prone. Due to the absence of labeled data, conventional supervised learning methods weren’t applicable, leading our client to seek an unsupervised classification model. This would allow their system to recognize and group radiological images by similar incidences, facilitating automated documentation.

Additionally, the client required a scalable solution that could integrate seamlessly with their independent radiologists' Picture Archiving and Communication Systems (PACS) to ensure quick processing without disrupting existing workflows. Without such a solution, inefficiencies in data handling would persist, affecting the workflow and slowing down the image analysis necessary for treatment planning.

---

#### 3. *How Bubo helped*

Bubo partnered with the company to design an advanced AI solution for radiographic image classification. The team utilized convolutional neural networks (CNNs), a powerful deep learning technology, to perform unsupervised image classification, allowing the AI to learn and identify clusters of radiological incidences without labeled data.

1. *Data preprocessing and feature extraction*: Bubo began by designing a robust preprocessing pipeline to prepare raw radiographic images for model training. Key features were extracted to help the model recognize distinct patterns and visual markers associated with different incidences, setting a foundation for effective clustering.

2. *Unsupervised image clustering with CNNs*: Leveraging CNNs, Bubo implemented a clustering model to analyze image features and automatically categorize radiographs by incidence type. The model identified inherent visual similarities between images, creating logical clusters that aligned with standard radiological incidences. This clustering enabled the client to pre-fill descriptions in reports, saving time and minimizing manual errors.

3. *PACS integration and workflow optimization*: To ensure seamless use by independent radiologists, Bubo facilitated integration with existing PACS systems, enabling the AI model to automatically classify and tag radiographs as they were uploaded. This streamlined the workflow, allowing radiologists to spend less time on documentation and more on clinical decision-making.

---

#### 4. *Results*

- Automated classification significantly decreased the time required to pre-fill technical details in radiology reports.
- Achieved over 85% accuracy in identifying radiological incidences, reducing errors in documentation and interpretation.
- Faster documentation and classification meant quicker treatment planning, resulting in an enhanced patient experience and increased overall productivity.

>Collaborating with Bubo has greatly streamlined our radiology workflow. Their AI solution for radiographic image classification has transformed our documentation process, making it faster and more accurate. This advancement has freed up our team to focus more on patient care and less on manual administrative tasks, which has been invaluable in enhancing the quality and efficiency of our services.

Radiologist
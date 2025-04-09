---
title: "AI - NILM: disaggregation of appliance energy consumption"
description: ""
pubDate: "Jul 15 2022"
cover: "/images/blog/usecase_gioa.jpg"
category: "Missions: Data & AI"
lang: "en"
sidebarInfo:
  industry: "SaaS startup"
  headquarters: "Paris, France"
  founded: "2023"
  employees: "<10"
---

### **AI-powered Non-Intrusive Load Monitoring (NILM) for Gioza: optimizing energy consumption and reducing costs**

---

### **1. Business objectives of the client**

Gioza is pioneering the way businesses manage their energy usage with its cutting-edge, sensorless Energy Management System (EMS). Positioned at the forefront of the energy efficiency industry, Gioza’s mission is to help industrial clients significantly reduce their energy costs — with savings of up to 20%. The company’s core offering revolves around Non-Intrusive Load Monitoring (NILM), a technology that disaggregates electrical consumption data from a single power meter to identify the energy usage of individual appliances and devices. By utilizing AI-powered NILM solutions, Gioza aimed to enhance EMS capabilities, enabling customers to pinpoint energy wastage at the appliance level and optimize their usage for maximum efficiency.

---

### **2. AI / Data challenges faced**

Gioza faced significant challenges in breaking down aggregated energy consumption data into actionable insights at the appliance level within complex industrial environments. With large-scale operations, the energy consumption data often gathered from a single point of measurement often contained a composite of various appliances running simultaneously, making it difficult to accurately attribute energy usage to specific devices. This lack of precise information on energy consumption was a barrier to offering clients actionable insights and recommendations for optimizing their energy use. Traditional methods of energy auditing could not offer the granularity needed, resulting in missed opportunities for savings and inefficient energy management.

The client needed a solution that could process the aggregated data from a primary power meter and disaggregate it at the appliance or workshop level in real time, without the need for additional sensors or intrusive hardware. This would allow Gioza’s EMS to provide highly accurate, granular energy consumption insights, empowering their clients to take control of their energy usage and reduce waste.

---

### **3. How Bubo SAS helped**

To address these challenges, Bubo SAS implemented an AI-based NILM solution, here’s how we approached the project:

1. **Data preprocessing and feature engineering**: We began by working with Gioza to understand the data collected by the primary power meter, identifying key features such as power consumption patterns, usage spikes, noise, missing data and frequency of operation. These features were critical to understand deeply the data and for disaggregating the composite load data into individual appliance-level consumption.
2. **AI-powered energy disaggregation**: Using advanced machine learning algorithms and NILM techniques from the state of the art, Bubo SAS developed a model capable of accurately disaggregating the composite energy data. The model was trained to recognize distinct energy signatures for different appliances, enabling it to automatically map energy consumption to individual devices, even in complex industrial settings. We first trained it on publicly available datasets, to finetune it in a second time on proprietary data.
3. **Real-time data processing**: The solution was designed to process incoming data in real time, providing immediate insights into which appliances were consuming the most energy. By continuously monitoring power meter’s data, Gioza was able to offer dynamic recommendations for optimizing energy usage, such as scheduling high-energy-consuming devices during off-peak hours or identifying appliances that were malfunctioning or running inefficiently.
4. **Scalable and non-intrusive**: Our AI-based NILM solution was entirely non-intrusive, meaning it didn’t require any additional hardware installation, making it cost-effective and easy to deploy across Gioza’s client base. Furthermore, the solution was designed to scale, allowing for seamless implementation in facilities of varying sizes and energy needs.

---

### **4. Results**

The implementation of Bubo SAS’s AI-driven NILM solution resulted in the following measurable improvements for Gioza and its clients:

- **Time series and its implications**: We are seeing LLMs everyday these days, here we are not talking about LLM especially. We are dealing with another type of data, time series. This usecase was crucial to us, demonstrating our ability to diversify our data sources.
- The disaggregation of energy consumption at the appliance level enabled clients to identify energy wastage and inefficiencies, leading to an average energy cost reduction of up to 20%.
- **Improved energy efficiency**: With real-time insights into appliance-level energy usage, clients could optimize their energy consumption by scheduling devices more efficiently, reducing unnecessary energy consumption and lowering operational costs.

> Their expertise in AI-driven project, even if it was not related directly with energy disaggregation has allowed us to offer a value oriented solution. AI-powered NILM system is a key differentiator for us, and we are excited to continue expanding its use across our customer base to help them optimize their energy consumption.

– CEO, Gioza
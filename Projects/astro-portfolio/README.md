
# 🌐 Thomas Ware – Professional Portfolio Website

A modern, responsive personal website built with **Astro** and **Tailwind CSS**, designed to showcase work in **animatronics**, **automation**, **embedded systems**, and **fabrication**. The project emphasizes modular architecture, accessibility, and clean UI/UX principles suitable for a professional portfolio.



## 🚀 Features

- 🔧 **Astro** framework for lightning-fast static site generation
- 🎨 Styled using **Tailwind CSS v4**
- 🧩 Component-based architecture with reusable layouts and cards
- 📂 Organized sections:
  - `Home`
  - `About`
  - `Resume`
  - `Projects`
  - `Education & Certifications`
  - `Work Experience`
  - `Core Skills`
  - `Contact`
- 📄 Resume pages enhanced with download-ready work history and academic records
- 📸 Placeholder visuals representing real-world project media



## 📁 Project Structure

```mermaid
graph TD
  A[astro-portfolio]
  A --> B[public/]
  B --> B1[favicon.svg]
  B --> B2[files/private_Records/]
  A --> C[src/]
  C --> C1[components/]
  C --> C2[layouts/]
  C --> C3[pages/]
  C3 --> C31[index.astro]
  C3 --> C32[about.astro]
  C3 --> C33[resume.astro]
  C3 --> C34[projects.astro]
  C3 --> C35[education-certifications.astro]
  C3 --> C36[experience.astro]
  C3 --> C37[core-skills.astro]
  C3 --> C38[contact.astro]
  A --> D[tailwind.config.js]
  A --> E[astro.config.mjs]
  A --> F[package.json]
````



## 📦 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/astro-portfolio.git
cd astro-portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Build the site for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```



## 🛠 Tech Stack

* **[Astro](https://astro.build/)** – Static site framework
* **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first styling
* **Markdown** – Content formatting
* **VS Code** – Preferred development environment
* **Git & GitHub** – Version control & repository management
* **Obsidian** – Content organization and project planning



## 📄 License

© 2025 Thomas Ware. All rights reserved.
For personal and professional use only. Redistribution or commercial deployment requires written permission.



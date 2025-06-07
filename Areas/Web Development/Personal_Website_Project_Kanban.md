---
title: Personal Website Project - Kanban
category: Project
area: Web Development
project_status: active
tags: [project, PARA, web-dev, obsidian-kanban]
created: 2025-06-05
kanban-plugin: basic
---

## PARA: Personal Website Project – Thomas Ware

### 🔗 Project Linkage
- **Goal**: Build and deploy a custom Astro-based personal portfolio website with testimonials, projects, and social links using ChatGPT Projects and Canvas.
- **Stakeholder**: Thomas Ware
- **Related Areas**: Web Design, Personal Branding, Astro.js, Tailwind CSS
- **Related Resources**: Astro template files, resume, testimonials, Obsidian templates
- **Reference Notes**: `Resources/WebDesign/Astro_Template_Guide.md`, `Archives/Old_Portfolio_V1.md`

---

## 🎯 To Do
- [ ] Create new Astro project structure with clean component separation
- [ ] Build 5 pages: index, about, resume, projects, contact
- [ ] Implement Navigation.astro and include in BaseLayout
- [ ] Finalize global Tailwind setup (global.css, theme config)
- [ ] Add SEO/meta tag support in BaseLayout
- [ ] Connect pages using Layout and pass dynamic titles
- [ ] Add GitHub project repo link and contact links
- [ ] Test and deploy Astro site on Netlify or Vercel
- [ ] Create Testimonials section and integrate into index.astro
- [ ] Replace placeholder images for all project cards
- [ ] Match card dimensions to unified 4:3 style in Tailwind
- [ ] Correct image scaling using `object-contain` and `aspect-[4/3]`
- [ ] Fix all `.astro` layout import errors and wrap content in `<Layout>`

## 🛠 In Progress
- [ ] Refactor layout and Header into BaseLayout with Navigation
- [ ] Modularize components: Button, Card, Footer
- [ ] Build dynamic Projects.astro page using props and layout
- [ ] Finish individual project pages with matching layout
- [ ] Resize and upload final animatronic placeholder to match theme

## ✅ Done
- [x] Defined project structure and component layout strategy
- [x] Created BaseLayout.astro and set up global styles
- [x] Added Button.astro and Card.astro reusable components
- [x] Integrated title prop into layout and pages
- [x] Added testimonials section to index.astro
- [x] Generated 3 project placeholder images in matched style
- [x] Updated broken imports in project subpages

## 🔁 Backlog / Ideas
- [ ] Add Markdown blog support using `content/` directory
- [ ] Integrate Tailwind Typography plugin for styled content
- [ ] Explore adding animation with Astro integrations
- [ ] Add filtering by tag to Projects.astro

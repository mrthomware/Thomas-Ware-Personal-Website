# Thomas Ware Personal Website

This repository holds the source code and planning documents for the
personal domain **thomasware.ca**.  The site is built with
[Astro](https://astro.build/) and styled using Tailwind CSS.  The project is
organized following the PARA method (Projects, Areas, Resources, Archives).

## Repository layout

```
Archives/   # retired or legacy material
Areas/      # ongoing focus areas (e.g. Web Development)
Projects/   # active development projects
Resources/  # reference notes and templates
```

The main website lives in `Projects/Personal Website Project/` where you will
find the Astro project including `src/`, `public/`, and configuration files.
Each top‑level folder has its own `README.md` with further details.

## Getting started

1. Install **Node.js 18+**.
2. Change into the project directory:
   ```bash
   cd Projects/Personal\ Website\ Project
   ```
3. Install dependencies and launch the development server:
   ```bash
   npm install
   npm run dev
   ```
4. Build the production site with `npm run build`. The output appears in
   `dist/` and can be served from any static hosting provider.

## Contributing

This repository represents a personal project, but fixes and improvements are
welcome. Feel free to open issues or submit pull requests.

## License

No license has been specified; see the repository owner for usage terms.

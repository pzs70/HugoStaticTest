# Project Gemini: My New Hugo Project (Hextra Theme)

This project is a static website built with **Hugo** and the **Hextra** theme. It is primarily configured for documentation and blog content, with initial pages written in Hungarian.

## Project Overview

- **Static Site Generator:** Hugo
- **Theme:** [Hextra](https://github.com/imfing/hextra) (Modern, responsive, Tailwind CSS based)
- **Primary Content:** Documentation (located in `content/docs/`) and a landing page (`content/_index.md`).
- **Language:** Hungarian (`hu`) content, though `hugo.toml` currently defaults to `en-us`.

## Building and Running

### Development
To start the local development server with live reloading:
```bash
hugo server
```
By default, the site will be available at `http://localhost:1313/`.

### Production Build
To generate the static site for deployment:
```bash
hugo
```
The output files will be generated in the `public/` directory.

## Development Conventions

### Content Management
- **Documentation:** Place documentation files in `content/docs/`. Use `type: docs` in the front matter for subdirectories if they should follow the documentation layout.
- **Blog:** Place blog posts in `content/blog/`. A blog-specific archetype is available.
- **New Pages:**
  - For general content: `hugo new <path/to/file.md>`
  - For blog posts: `hugo new blog/<post-name>.md`
- **Shortcodes:** The Hextra theme provides custom shortcodes like `{{< cards >}}` and `{{< card >}}` for interactive UI elements.
- **Styling:** The project uses Tailwind CSS (integrated via the Hextra theme). Custom styles can be added to `assets/css/custom.css` (if configured in `hugo.toml`) or via inline styles/classes in Markdown files (requires `unsafe = true` for Goldmark renderer, which is enabled).

### Directory Structure
- `content/`: Markdown source files.
- `themes/hextra/`: The theme source (likely a git submodule or copy).
- `static/`: Static assets like images that should be served directly.
- `assets/`: Assets that require processing by Hugo Pipes (CSS, JS).
- `public/`: The built static site (do not edit directly).

## Key Files
- `hugo.toml`: Main project configuration.
- `content/_index.md`: Homepage content.
- `content/docs/_index.md`: Documentation landing page.
- `archetypes/default.md`: Template for new content files.

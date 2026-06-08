# Applied AI Agent — Folder Structure

## Organization Hierarchy

```
appliedaiagent/
├── 01-product/           Product strategy & core concepts
│   └── PRODUCT.md
│
├── 02-marketing/         Website, design, copy, marketing materials
│   ├── index.html (LIVE landing page)
│   ├── contact.html (LIVE contact form)
│   ├── work.html (LIVE portfolio/case studies)
│   ├── main.js (website JavaScript)
│   ├── style.css (website styling)
│   ├── CNAME (GitHub Pages domain config)
│   │
│   ├── CLAUDE-FORWARD-DEPLOYED-POSITIONING.md (positioning brief)
│   ├── CLAUDE-CODE-REDESIGN-PROMPT.md (code redesign instructions)
│   ├── CLAUDE-REFINEMENT-PROMPT.md (iterative refinement guide)
│   ├── CLAUDE-UI-REDESIGN-BRIEF.md (UI redesign guide)
│   │
│   ├── COLOR-PALETTE-REVISED-WARM.md (current color scheme)
│   ├── COMPREHENSIVE-REDESIGN-BRIEF.md (full redesign strategy)
│   ├── DESIGN-BRIEF-BASE44-WARM.md (base design system)
│   ├── REDESIGN-COMPLETE.md (completion notes)
│   └── REDESIGN-PROMPT-WARM-LIGHT.md (warm aesthetic guide)
│   └── FRAMER-DESIGN-BRIEF.md (Framer/design tool reference)
│
├── 03-operations/        Internal operations & processes
│   └── (not yet used)
│
├── 04-outreach/          Sales & client outreach
│   └── (not yet used)
│
├── 05-research/          Market research & competitive analysis
│   └── (not yet used)
│
├── assets/               Images, logos, icons
│   └── (not yet used)
│
├── docs/                 Project documentation
│   ├── CLAUDE.md (Claude Code project context)
│   └── (reference materials)
│
├── .claude/              Claude Code configuration
│   └── (project settings, MCP servers, custom commands)
│
└── .git/                 Git repository (DO NOT EDIT)
```

## How to Use

### I Want to...

**...review the live website**
→ Open: `02-marketing/index.html` in your browser

**...modify the website design**
→ Edit: `02-marketing/style.css` (styles) & `02-marketing/main.js` (interactivity)

**...update the contact form**
→ Edit: `02-marketing/contact.html`

**...show client work/case studies**
→ Edit: `02-marketing/work.html`

**...understand the current positioning**
→ Read: `02-marketing/CLAUDE-FORWARD-DEPLOYED-POSITIONING.md`

**...understand the current color palette**
→ Read: `02-marketing/COLOR-PALETTE-REVISED-WARM.md`

**...redesign the website**
→ Read: `02-marketing/COMPREHENSIVE-REDESIGN-BRIEF.md` first, then follow `02-marketing/CLAUDE-CODE-REDESIGN-PROMPT.md`

**...refine an existing design**
→ Follow: `02-marketing/CLAUDE-REFINEMENT-PROMPT.md`

## Naming Convention

- **Numbered folders** (01-, 02-, 03-) = main categories (don't change)
- **UPPERCASE filenames** = reference docs (PRODUCT.md, CLAUDE-*.md, COLOR-PALETTE-*.md)
- **lowercase filenames** = live/working files (index.html, main.js, style.css)

## Workflow

1. **Work locally** in `~/Local/appliedaiagent/` (this folder)
2. **Git commit** your changes: `git add . && git commit -m "message"`
3. **Cron syncs daily** to `~/Desktop/jake-hub/appliedaiagent/` at midnight
4. **GitHub Pages auto-deploys** when you push to `main` branch
5. **iCloud backs up** Desktop to the cloud

All files in this folder are version-controlled by git. Changes are automatically synced to Desktop/iCloud daily.

## Live Website

The website is hosted on **GitHub Pages** at your domain (configured in `02-marketing/CNAME`).

To deploy changes:
1. Make changes locally
2. Commit: `git add . && git commit -m "Update website"`
3. Push: `git push origin main`
4. Site deploys automatically (usually within 1-2 minutes)

## Pro Tips

- Keep briefs and strategy docs separate from the actual website files
- Use git commits to track design iterations: `git log --oneline`
- Check sync status: `git status`
- Don't edit files on Desktop directly — always work in Local
- Use `/effort high` when using Claude Code for design work

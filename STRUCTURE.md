# Applied AI Agent — Current Structure

**Last Updated:** June 11, 2026  
**Status:** Live website deployed to AppliedAIAgent.ai (deployed via Claude Code)

---

## Folder Organization

```
appliedaiagent/
├── 01-product/              Product strategy & core concepts
│   └── PRODUCT.md
│
├── 02-marketing/            Marketing materials (empty - briefs are in live-website/)
│
├── 03-operations/           Internal operations & processes
│   └── (not yet used)
│
├── 04-outreach/             Sales & client outreach
│   ├── 01-OUTREACH-STRATEGY.md
│   ├── 02-IMPLEMENTATION-TOOLKIT.md
│   ├── 03-QUICK-REFERENCE.md
│   ├── QUICK-START.txt
│   ├── README.md
│   ├── DELIVERY-SUMMARY.txt
│   └── outreach_dashboard.html
│
├── 05-research/             Market research & competitive analysis
│   └── (not yet used)
│
├── live-website/            ⭐ LIVE DEPLOYED WEBSITE (GitHub Pages)
│   ├── index.html           (35K - homepage with Mission Control dashboard)
│   ├── work.html            (24K - use cases/portfolio page)
│   ├── contact.html         (12K - contact form)
│   ├── style.css            (34K - styling with OKLCH colors)
│   ├── main.js              (7.3K - core interactivity)
│   ├── demo-engine.js       (11K - demo functionality)
│   ├── CNAME                (GitHub Pages domain config)
│   ├── create_brief.py      (morning brief generator)
│   └── daily_morning_brief.html (morning brief template)
│
├── assets/                  Images, logos, icons
│   └── (not yet used)
│
├── docs/                    Project documentation
│   └── CLAUDE.md            (Claude Code project context)
│
├── .claude/                 Claude Code configuration
│   ├── launch.json          (project launcher)
│   ├── settings.local.json  (local settings)
│   ├── commands/            (custom commands)
│   └── rewrite-prompt.txt   (rewrite instructions)
│
├── .git/                    Git repository (DO NOT EDIT)
│   └── (version control)
│
└── .gitignore               Git ignore rules

```

---

## Quick Reference

### I Want to...

**...review the live website**
→ Open: `live-website/index.html` in your browser (or visit AppliedAIAgent.ai)

**...modify the homepage**
→ Edit: `live-website/index.html`

**...update the use cases page**
→ Edit: `live-website/work.html`

**...change the styling**
→ Edit: `live-website/style.css` (OKLCH color system)

**...add interactivity**
→ Edit: `live-website/main.js` or `live-website/demo-engine.js`

**...update the contact form**
→ Edit: `live-website/contact.html`

**...view outreach strategy**
→ Read: `04-outreach/01-OUTREACH-STRATEGY.md`

**...understand the product**
→ Read: `01-product/PRODUCT.md`

---

## Design System

**Colors:** OKLCH (warm indigo hero + paper surfaces)  
**Font:** Inter  
**Dashboard:** Mission Control (animated metrics + activity feed)  
**Layout:** Responsive, mobile-first

---

## Deployment & Workflow

### Local Development
1. Edit files in `~/Local/appliedaiagent/live-website/`
2. Test locally in browser

### Git & GitHub
1. Commit changes: `git add . && git commit -m "message"`
2. Push to main: `git push origin main`
3. GitHub Pages auto-deploys (1-2 minutes)

### Backup Sync
- **Daily (midnight):** `~/Local/appliedaiagent/` → `~/Desktop/jake-hub/appliedaiagent/` (cron job)
- **Weekly (Sundays 2 AM):** Full ~/.hermes backup → Desktop/iCloud

### Live Site
- **URL:** AppliedAIAgent.ai
- **Hosted on:** GitHub Pages
- **Domain:** Configured in `live-website/CNAME`

---

## Important Notes

- **All live website files are in `live-website/` folder** — This is the source of truth
- **No old design briefs or iterations** — All outdated documents deleted (June 11, 2026)
- **GitHub Pages deploys on every push** — Changes live within 1-2 minutes
- **Git tracks all changes** — Check history: `git log --oneline`
- **Don't edit on Desktop** — Always work in `~/Local/appliedaiagent/`

---

## Future Structure Updates

**⚠️ IMPORTANT:** If you update the website structure in the future, I will ask you to confirm:
- New constraints or requirements
- Which old documents should be deleted
- How to reorganize files
- What the new structure should document

This prevents outdated files from confusing Hermes and giving incorrect instructions.

---

**Next Steps:**
- Website is live and deployed
- Use `live-website/` folder for all updates
- Commit and push changes to auto-deploy
- Backup syncs daily to Desktop/iCloud

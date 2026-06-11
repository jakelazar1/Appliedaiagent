# Applied AI Agent — UI/UX Redesign Brief

## Inspiration: Base44 Superagents
Your site should match the visual polish and UX patterns of base44.com/superagents while keeping your wine-country, owner-operated niche focus.

---

## Visual Design Updates

### Color & Gradients
- Keep your current cream/dark/gold palette
- **Add subtle gradient overlays** to section backgrounds (soft color transitions, not harsh blocks)
- Use gradient backgrounds on feature cards (each card gets a unique, complementary gradient: sage→gold, aqua→pink, warm orange→cream)
- Neon green or bright gold CTA buttons (currently too subtle — they should visually demand attention)

### Typography
- Maintain Fraunces + Manrope (already excellent)
- Larger, more prominent hero heading (aim for 60-80px on desktop)
- Keep body copy conversational and human (already good — don't overcomplicate)

### Spacing & Layout
- Generous whitespace between sections
- Softer, rounded corners on all cards and buttons
- Soft drop shadows on cards (not harsh borders)
- Full-width gradient sections (not boxed containers)

### Icons & Illustrations
- Replace any flat line icons with illustrated badges (like Base44's cute icons)
- Use consistent illustration style across the site (consider a custom badge set for your automations)

---

## Hero Section Overhaul

### Current
- Static text + image mockup

### New
- **Embedded video demo** (30-45 seconds): Show an AI agent in action handling a real wine-business task
  - Example: tasting room lead gets automated thank-you email → wine club pitch → confirmation → calendar invite
  - Or: wholesale buyer inquiry triggers outreach draft → follow-up after 3 days → proposal generation
  - Screen recording or animated demo (can be simple, doesn't need to be polished)
- **Minimal headline + subheading** (outcome-focused, not feature-focused)
- **Bright CTA button** ("Get Your Demo" or "See It in Action")
- **Trust signifier** below (e.g., "Free 15-minute demo, no credit card required")

---

## Feature/Automation Cards (Work Section)

### Current
- Text-based case studies

### New
- **Visual cards with gradient backgrounds** (each automation gets its own color)
- **Small illustrated badge** in top-left corner (unique icon for each automation type)
- **Headline only** (outcome-focused, not feature-focused)
- **On hover/scroll, subtle animation:** shadow grows, background slightly brightens
- **Card layout:** 2-3 columns on desktop, responsive to mobile
- **Examples of outcome-focused headlines:**
  - "Your leads never go cold" (lead capture + follow-up agent)
  - "Stop losing bookings" (lead follow-up, appointment reminders)
  - "Every customer leaves a review" (post-transaction review requests)
  - "Your inbox, handled" (email triage + draft replies)
  - "Your events, fully automated" (save-the-date → details → attendee follow-up → post-event survey)
  - "Your calendar, optimized" (meeting optimization, break scheduling, conflict resolution)

---

## Integration Section

### Current
- Text only

### New
- **Logo grid** showing tools you integrate with (n8n, Zapier, Google Workspace, Gmail, Google Calendar, Slack, etc.)
- **Headline:** "Connect to every tool you already use"
- **Subheading:** "Your AI agent learns to work with your tech stack. Just ask it to."

---

## Benefits/Trust Section

### Current
- Generic benefits

### New
- **6 illustrated badge cards** (like Base44's "Hassle free," "Always on," "Takes real action")
- **Keep current benefits, reword:**
  - "Hassle-free" → "No servers, no setup" (no Docker, no config, runs in minutes)
  - "Always on" → "Works while you sleep" (scheduled jobs, event-based triggers, 24/7)
  - "Takes real action" → "Sends emails, books calendars, updates CRMs" (not just suggestions)
  - "Remembers and evolves" → "Gets smarter over time" (learns your preferences, adds new tasks)
  - "Secure by default" → "Your data, your control" (permissions-based, sandboxed, transparent)
  - "Custom pricing" → "Starts small, grows with you" (per-hour retainer, no enterprise minimums)

---

## Copy Tone & Style

### Apply Everywhere
- **Outcome-focused headlines** (what the owner gets, not what the tech does)
- **Concrete examples** (any owner-operated business: "Get your leads back," "Stop losing bookings," "Your calendar, optimized" — not industry-specific jargon)
- **Conversational voice** (you're an AI builder based in wine country, not a Silicon Valley startup)
- **No jargon** (no "leverage," "synergize," "empower" — use plain English)
- **First-person benefit** ("Your business," "Your leads," "Your calendar")
- **Location as context, not positioning** ("Built by an AI engineer in Sonoma" or similar — it's where you are, not what defines you)

---

## Interactive Features (Nice-to-Haves)

1. **Pause/play button on feature card carousel** (if cards scroll horizontally)
2. **Hover effects on cards** (soft shadow growth, subtle color shift, maybe a slight scale)
3. **Smooth scroll behavior** (already have this, keep it)
4. **Accordion FAQ section** (expandable questions/answers)
5. **Smooth fade-in on scroll** (sections appear as user scrolls)

---

## Keep

- Current responsive design (mobile/tablet breakpoints working well)
- GitHub Pages deployment (pure HTML/CSS/JS, no build step)
- Google Fonts CDN (Fraunces + Manrope)
- Form backend (Formspree)
- Three-page structure (index, work, contact)

---

## Do NOT Change

- Overall structure or page flow
- Fraunces + Manrope fonts (perfect already)
- Existing HTML element IDs or classes (if they're in use)
- GitHub Pages deployment method

---

## Success Criteria

1. **Hero section has embedded video** (demo of an AI agent handling a real task)
2. **All headlines are outcome-focused** (what the owner benefits from, not what the tech does)
3. **Feature cards have gradient backgrounds** with illustrated badges
4. **CTA buttons are visually prominent** (bright color, larger, or subtle animation)
5. **Copy is conversational and specific** to wine country/owner-operated businesses
6. **Site feels polished and modern** like Base44 (soft gradients, generous space, rounded corners)
7. **Mobile responsive** (tested on phone, tablet, desktop)

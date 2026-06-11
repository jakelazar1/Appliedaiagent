# Applied AI Agent — UI/UX Redesign Execution Prompt

**For Claude Code:** Use this as your task description when running the redesign.

---

## Task Overview

Redesign the Applied AI Agent website (index.html, work.html, contact.html) to match the visual polish and UX patterns of base44.com/superagents. You are an AI engineer living in wine country building custom AI automation for owner-operated businesses.

The site should feel modern, gradient-rich, outcome-focused, and conversational—not corporate.

---

## Step 1: Hero Section Redesign (index.html)

### Current State
- Static text headline + mockup image

### Changes
1. **Replace the mockup image with an embedded video demo** (or placeholder for one)
   - Size: full-width container, responsive aspect ratio (16:9)
   - Can be a simple YouTube embed, Vimeo, or `<video>` tag with MP4
   - Shows an AI agent in action: lead inquiry → automated email → follow-up → booking confirmation
   - Placeholder text if no video ready: "30-second demo video coming soon"

2. **Update hero headline to outcome-focused:**
   - Current: Something generic?
   - New: "Add an AI layer to your business" or "Automate your repetitive work"
   - Keep it simple, conversational, no jargon

3. **Update hero subheading:**
   - Current: Feature-focused?
   - New: "Your AI agent handles the work you'd rather not. Lead follow-ups, booking reminders, email triage, calendar optimization—whatever you throw at it."

4. **Brighten the CTA button:**
   - Current: Subtle, gold-ish?
   - New: Neon green or bright gold—should visually demand attention
   - Text: "Get Your Demo" or "See It in Action"
   - Add trust signifier below: "Free 15-minute demo, no credit card required"

5. **Add gradient background to hero:**
   - Soft, subtle gradient (not harsh color blocks)
   - Could be dark background (current dark) with a subtle teal/aqua overlay that fades
   - No animation, just static gradient

---

## Step 2: Feature/Automation Cards (work.html)

### Current State
- Text-based case studies or feature list

### Changes
1. **Convert to visual cards with gradient backgrounds:**
   - Each card gets a unique, complementary gradient (e.g., sage→gold, aqua→pink, warm orange→cream)
   - Cards should have soft drop shadows (not harsh borders)
   - Rounded corners (aim for 16-20px border-radius)

2. **Add illustrated badge in top-left corner:**
   - Small square or circle badge with a simple icon (can be emoji, SVG, or simple CSS shape)
   - Each automation type gets a unique badge (e.g., 📧 for email, 📅 for calendar, 📞 for leads, etc.)
   - Keep them consistent in style

3. **Simplify card headlines to outcome-focused:**
   - Remove case study details—just headline + badge
   - Use these headlines:
     - "Your leads never go cold"
     - "Stop losing bookings"
     - "Every customer leaves a review"
     - "Your inbox, handled"
     - "Your events, fully automated"
     - "Your calendar, optimized"

4. **Add hover effects:**
   - On hover: shadow grows slightly, background brightens a touch, maybe slight scale (1.02x)
   - Smooth transition (0.3s ease)

5. **Layout:**
   - 2-3 columns on desktop
   - 1 column on mobile
   - Responsive spacing

---

## Step 3: Integration Section

### Current State
- Text only or minimal

### Changes
1. **Create a logo grid:**
   - Show tools you integrate with: n8n, Zapier, Google Workspace, Gmail, Google Calendar, Slack, Notion, HubSpot, etc.
   - Logo size: consistent, maybe 60-80px each
   - Grid: auto-fit columns, 3-5 columns on desktop, 2-3 on tablet, 1-2 on mobile
   - Spacing: generous gaps between logos

2. **Add headline and subheading:**
   - Headline: "Connect to every tool you already use"
   - Subheading: "Your AI agent learns to work with your tech stack. Just ask it to."

3. **Visual style:**
   - Clean, minimal—don't overdesign
   - Light gray or muted background for the section (or none, keep it clean)

---

## Step 4: Benefits/Trust Section

### Current State
- Generic benefit statements

### Changes
1. **Create 6 illustrated badge cards** (like Base44's style):
   - Small header icon/badge + title + one-sentence description
   - Grid layout: 2-3 columns desktop, 1-2 mobile

2. **Reword existing benefits to be more concrete:**
   - "No servers, no setup" (no Docker, no config, runs in minutes)
   - "Works while you sleep" (scheduled jobs, event-based triggers, 24/7)
   - "Sends emails, books calendars, updates CRMs" (not just suggestions)
   - "Gets smarter over time" (learns your preferences, adds new tasks)
   - "Your data, your control" (permissions-based, sandboxed, transparent)
   - "Starts small, grows with you" (per-hour retainer, no enterprise minimums)

3. **Visual style:**
   - Each benefit card should have a small illustrated badge (emoji, custom SVG, or CSS shape)
   - Soft background color (very light teal, cream, or just white with shadow)
   - Rounded corners

---

## Step 5: Global CSS Updates

### Colors
- **Keep:** Cream (#F5F0E8), dark (#0D1F1A), gold (#C4975A)
- **Add gradients:** sage→gold, aqua→pink, warm orange→cream, etc.
- **CTA buttons:** Neon green (#39FF14 or similar) or bright gold (brighter than current)

### Spacing
- Increase padding/margin between sections (more breathing room)
- Increase padding inside cards
- Larger gap between feature cards

### Borders & Shadows
- Soften all borders (increase border-radius)
- Replace harsh borders with soft drop shadows (`box-shadow: 0 4px 12px rgba(0,0,0,0.1)`)
- Hover states: increase shadow intensity

### Typography
- Hero heading: 60-80px on desktop, scale down for mobile
- Keep Fraunces + Manrope (don't change fonts)
- Increase line-height for readability (already good, maybe bump to 1.8-2.0 for body)

### Animations
- Smooth scroll behavior (keep existing)
- Card hover effects: shadow + slight scale + background shift
- Fade-in on scroll: sections fade in as user scrolls (optional, nice-to-have)

---

## Step 6: Copy Updates (All Pages)

### Tone Guidelines
- **Outcome-focused:** What the owner gets, not what the tech does
- **Conversational:** Sound like a human engineer, not a startup
- **Specific but broad:** Examples work for any owner-operated business (leads, bookings, email, calendar)
- **No jargon:** No "leverage," "synergize," "empower," "seamless," "cutting-edge," etc.
- **First-person benefit:** "Your business," "Your leads," "Your calendar"

### Pages to Update
1. **index.html hero:** (already covered above)
2. **index.html sections:** Update all headlines to outcome-focused
3. **work.html:** Update feature card headlines (already covered above)
4. **contact.html:** Ensure copy is conversational, no jargon

### Example Rewrites
- ❌ "Intelligent lead management system" → ✅ "Your leads never go cold"
- ❌ "Seamless calendar optimization platform" → ✅ "Your calendar, optimized"
- ❌ "Leverage our cutting-edge AI" → ✅ "Your AI agent handles the work you'd rather not"

---

## Step 7: Testing & QA

1. **Visual testing:**
   - Desktop (1440px, 1920px)
   - Tablet (768px)
   - Mobile (375px)
   - All gradients display correctly
   - All hover effects work smoothly
   - Shadows render clearly

2. **Functionality:**
   - All links work
   - Forms still submit (Formspree)
   - Video/image embeds load
   - Responsive images scale correctly

3. **Copy review:**
   - No jargon
   - All headlines are outcome-focused
   - Tone is conversational and confident
   - No typos

4. **Performance:**
   - No new dependencies (keep it pure HTML/CSS/JS)
   - Gradients render smoothly (no performance lag)
   - Page loads fast

---

## What NOT to Change

- HTML structure (preserve element IDs and classes)
- Fraunces + Manrope fonts
- Three-page structure (index, work, contact)
- GitHub Pages deployment method
- Form backend (Formspree)
- Overall page flow

---

## Success Criteria

1. ✅ Hero has embedded video placeholder or actual demo video
2. ✅ All headlines are outcome-focused (no feature speak)
3. ✅ Feature cards have gradient backgrounds + illustrated badges
4. ✅ CTA buttons are visually prominent (bright color)
5. ✅ Copy is conversational and specific to owner-operated businesses
6. ✅ Site feels polished and modern (soft gradients, generous space, rounded corners)
7. ✅ Mobile responsive (tested on 3 breakpoints)
8. ✅ No new dependencies or build steps

---

## Notes

- You have creative freedom on gradient colors—just keep them complementary and subtle
- Badge icons can be emoji, simple SVG, or even CSS shapes (don't spend time making them perfect)
- If you can't embed a real video, create a placeholder (gray box with "Demo video" text)
- Prioritize visual polish over animations—smooth shadows and gradients matter more than fancy motion

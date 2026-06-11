# Applied AI Agent — Refined Design Spec v2
## "A running system, not a slide deck."

This spec supersedes DESIGN_BRIEF.md. It is grounded in the existing codebase
(static HTML/CSS/JS, GitHub Pages, OKLCH design tokens in style.css) — no
framework migration, no Figma deliverables, no build step.

---

## 0. POSITIONING (replaces "embed with your team / accountable for outcomes")

**Hero line:**
> Most consultants leave you a slide deck.
> **I leave you a running system.**

**Support line:**
> Custom AI that answers your phone, books your calendar, chases your leads,
> and reports back — built by one person who sticks around until it works.

**Voice rules (apply to every word on the site):**
- First person singular. "I build," never "we deliver."
- Name real objects: phone, calendar, inbox, quote, booking. Never
  "workflows," "solutions," "outcomes," "ROI."
- Sonoma is where I am, not what I sell. One mention in the footer/badge.
- No emoji. No exclamation points. No "leverage/empower/seamless."

**Process section copy:**
1. I learn your business — a 15-minute call and a look at how work actually flows.
2. I build the system — custom, connected to the tools you already use.
3. I run it with you — I'm in the trenches for the first weeks, not gone at launch.
4. It keeps getting better — I watch it, tune it, and add what you need next.

---

## 1. DESIGN SYSTEM (evolve current style.css — do not replace)

### Color (OKLCH, extends existing tokens)
Keep the current indigo system. Two changes:

```css
/* Warm the paper — wine-country light, not clinical white */
--surface:      oklch(98.5% 0.004 85);   /* was 99.5% pure */
--surface-alt:  oklch(96.5% 0.006 85);

/* Keep */
--dark:    oklch(8% 0.04 275);
--accent:  oklch(58% 0.22 268);
--sage:    oklch(60% 0.052 158);          /* status/live dots only */
```

Rules:
- The indigo radial gradient appears in exactly two places: hero and final CTA.
- Sage green is reserved for "live/running" status dots — it becomes the
  signature "the system is on" signal.
- No teal, no #0066FF, no navy. Delete any hex colors that creep in.

### Typography
- Inter only, weights 300–800 (already loaded).
- Display headlines: 800 weight, -0.05em tracking (current).
- One new rule: demo/feed content uses tabular-nums
  (`font-variant-numeric: tabular-nums`) so timestamps and counters don't
  jitter while animating.

### Motion principles
- **Animate the work, not the furniture.** Page chrome gets one quiet
  fade-up (existing .fade system). All other motion lives inside the demo
  engine: messages arriving, statuses flipping, counters ticking.
- transform + opacity only. Existing --ease-expo / --ease-quart.
- `prefers-reduced-motion`: demo renders in its final/complete state, static.
- No parallax, no 3D, no scroll-jacking, no auto-playing video.

---

## 2. THE DEMO ENGINE (the centerpiece — build this first)

**One component, nine scripts.** A "live system" card that plays a timeline
of events, styled like a real operations feed. Same renderer everywhere;
only the data changes per vertical.

### Anatomy
```
┌─────────────────────────────────────┐
│ ● Applied AI · Booking Agent   LIVE │  ← header: sage pulsing dot + agent name
├─────────────────────────────────────┤
│ 11:42 PM  Inquiry from Maria S.     │  ← events appear one at a time
│           "Do you have Saturday      │
│            tastings for 6?"          │
│ 11:42 PM  ✓ Agent replied (38 sec)  │
│ 11:43 PM  ✓ Calendar checked         │
│ 11:44 PM  ✓ Booking confirmed —     │
│            Sat 2:00 PM · 6 guests   │
│ 11:44 PM  ✓ Confirmation sent       │
├─────────────────────────────────────┤
│ While the owner was asleep.         │  ← punchline line, fades in last
└─────────────────────────────────────┘
```

### Script format (one JSON object per vertical)
```js
{
  vertical: "tour-operators",
  agent: "Booking Agent",
  punchline: "While the owner was asleep.",
  events: [
    { t: 0,    type: "inbound", who: "Maria S.", text: "Do you have Saturday tastings for 6?" },
    { t: 1200, type: "action",  text: "Agent replied (38 sec)" },
    { t: 2200, type: "action",  text: "Calendar checked — Sat 2:00 PM open" },
    { t: 3400, type: "result",  text: "Booking confirmed · 6 guests · $540" },
    { t: 4200, type: "action",  text: "Confirmation + reminder sequence queued" }
  ]
}
```

### Renderer (~80 lines vanilla JS)
- Events slide in from below (8px, --ease-expo, 350ms), timestamps tick.
- `type: "result"` rows get an accent-colored left edge + subtle scale-pop.
- Loops with a 4s hold on the final state. Pauses when off-screen
  (IntersectionObserver — reuse existing observer pattern in main.js).
- Mobile: identical. A vertical feed is mobile-native by construction —
  this is what makes the 9-vertical showcase responsive for free.

### The nine scripts (event beats only — write final copy in-page)
| Vertical | Inbound | The win |
|---|---|---|
| Tour operators | Saturday group inquiry, 11:42 PM | Booked + paid while owner slept |
| HVAC | No-heat call, after hours | Triaged urgent, slotted 7 AM, tech notified |
| Real estate | Zillow lead | Replied in 90 sec, qualified, showing booked |
| Landscaping | Quote request w/ address | Estimate drafted, site visit scheduled |
| Accounting | "Where's my return?" | Status answered, missing doc requested |
| Salons | Reschedule text | Moved appt, filled the gap from waitlist |
| Auto repair | "Weird noise" inquiry | Intake done, drop-off booked, advisor briefed |
| Hospitality | Pre-arrival question | Answered, early check-in arranged, upsell offered |
| Coaching | New client signup | Intake form sent, first session on calendar |

---

## 3. INFORMATION ARCHITECTURE

### Homepage (index.html — refine, don't rebuild)
1. **Hero** — positioning headline left, demo engine playing the tour-operator
   script right (hidden < 960px, where it appears after the headline instead).
   `min-height: 100dvh` desktop; natural height + padding on mobile. Never 120/140vh.
2. **Three pillars** (replaces flat 9-tab row):
   - **Answer & Book** — tours, salons, hospitality
   - **Follow Up & Close** — real estate, HVAC, auto, landscaping
   - **Run the Back Office** — accounting, coaching
   Each pillar card: headline, two lines, industry chips. Clicking a chip
   swaps the shared demo engine below to that vertical's script.
3. **The difference** (dark section) — slide-deck vs. running-system contrast,
   two columns: "What you usually get" / "What I leave you with."
4. **Process** — four steps, copy from §0. Timeline Option A (simple line +
   markers), drawn once on scroll-in, nothing else animated.
5. **Integrations** — existing Clearbit logo grid. Keep.
6. **Final CTA** — dark + indigo burst (existing), "Tell me what's eating
   your time."

### Use cases page (work.html)
Keep current card grid. Add the demo engine at top with all 9 chips, grouped
under the three pillar headings.

### Contact (contact.html)
Keep as-is. Formspree endpoint xlgkepla confirmed working.

---

## 4. RESPONSIVE RULES
- Breakpoints: 480 / 768 / 960 (already in style.css). Don't add more.
- Demo engine: same markup all sizes; max-width 420px, full-width on mobile.
- Tap targets ≥ 44px; pillar chips ≥ 44px tall on touch.
- Use `dvh` not `vh` for any viewport-height section.

---

## 5. EXPLICITLY CUT (do not build)
- Per-vertical bespoke demos (maps, calculators, upload zones) — engine replaces all.
- Framer Motion / React / any build step.
- Figma master file + design-token handoff docs.
- Pricing guide PDF capture flow (no asset exists yet).
- Dark mode, 3D, parallax, scroll cue chevron, auto-playing anything.
- The fabricated contrast table from the old brief. Verify contrast with real
  tooling (OKLCH pairs in this spec all pass AA at stated sizes).

---

## 6. BUILD ORDER (solo, ~4–6 weeks)
1. **Week 1:** Demo engine + tour-operator script. Drop into current hero.
2. **Week 2:** Remaining 8 scripts. Pillar section replacing flat tabs.
3. **Week 3:** Copy pass site-wide to §0 voice rules. "The difference" section.
4. **Week 4:** work.html demo integration, surface-warmth token swap, QA on
   iPhone SE / mid-range Android, Lighthouse ≥ 90, reduced-motion audit.
5. **Buffer:** polish the one signature moment (hero demo) until it's
   genuinely impressive. Everything else stays quiet.

**Definition of "wow":** a prospect watches their own industry's
after-hours booking happen in eight seconds and thinks "that could be my
phone." Not gradients. Not scroll effects. The system, visibly working.

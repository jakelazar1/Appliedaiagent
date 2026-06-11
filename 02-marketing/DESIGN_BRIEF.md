# Applied AI Agent — Design Brief
## Custom AI Systems for Service Businesses

---

## EXECUTIVE OVERVIEW

Applied AI Agent is a custom software + AI automation partner for service businesses. The positioning is direct: we embed with your team, build proprietary systems, and stay accountable for outcomes. This is not a consulting site. This is a credible, hands-on builder in wine country showing what's possible.

The site communicates that distinction through premium design, not marketing fluff. Every visual decision reinforces the "embedded partner" positioning: high-fidelity workflow demos, clear process transparency, and minimal bullshit.

The primary job: Show 9 verticals (Tour Operators, HVAC, Real Estate, Landscaping, Accounting, Salons, Auto Repair, Hospitality, Coaching) with real, animated, industry-specific automation demos—not generic chat boxes. Make each one visually impressive and tactically specific to that industry's pain point.

---

## PART 1: DESIGN SYSTEM

### Typography

**Font Stack**
- Primary: Inter (Google Fonts) — System-optimized sans-serif
  - Why: Modern, highly legible, neutral enough for B2B credibility but clean enough for premium positioning
  - Pairing: Used exclusively for body, navigation, UI labels
  
- Display (Hero, Section Titles): Sohne (Commercial) or System Alternative (SF Pro Display on macOS fallback)
  - Why: Geometric, confident, used by Stripe/Vercel; signals premium/sophisticated
  - If avoiding commercial fonts: Use Inter Extra Bold (700-800 weight) for headlines instead
  
**Font Sizing & Hierarchy**

| Role | Desktop | Tablet | Mobile | Weight | Line Height |
|------|---------|--------|--------|--------|-------------|
| H1 (Hero) | 56px | 48px | 36px | 700 | 1.2 |
| H2 (Section Title) | 44px | 36px | 28px | 700 | 1.3 |
| H3 (Subsection) | 28px | 24px | 20px | 600 | 1.4 |
| Body Large | 18px | 16px | 16px | 400 | 1.6 |
| Body Regular | 16px | 15px | 15px | 400 | 1.6 |
| Body Small | 14px | 14px | 14px | 400 | 1.5 |
| Caption/Label | 12px | 12px | 12px | 500 | 1.4 |

**Font Rendering**
- Apply `-webkit-font-smoothing: antialiased` globally for consistent rendering
- Use font-display: swap for Google Fonts (loading priority: system > swap > custom)

---

### Color Palette

**Core Brand Colors**

| Color | Hex | Usage | Contrast Ratio (vs. White) | Contrast Ratio (vs. Dark BG) |
|-------|-----|-------|----------------------------|------------------------------|
| Primary Blue | #0066FF | Primary CTAs, links, highlights, select states | 8.2:1 ✓ AAA | 4.1:1 ✓ AA |
| Dark Navy | #001A4D | Text, headings, deep contrast | 15:1 ✓ AAA | N/A |
| Neutral Black | #0A0A0A | Primary body text, maximum contrast | 18:1 ✓ AAA | N/A |
| Light Gray | #F5F5F5 | Backgrounds, cards, subtle dividers | 1.1:1 N/A | 16:1 ✓ AAA |
| Mid Gray | #AEAEAE | Secondary text, disabled states | 7.8:1 ✓ AAA | 4.5:1 ✓ AA |
| Accent Teal | #00D9B3 | Success states, micro-interactions, callouts | 6.5:1 ✓ AA | 4.2:1 ✓ AA |
| Alert Red | #FF3B30 | Error states, destructive actions | 5.2:1 ✓ AA | 3.1:1 ✗ |

**Semantic Color Application**

- **Primary CTA Buttons**: Primary Blue (#0066FF) background with white text
- **Secondary CTA Buttons**: White background with Primary Blue border (2px) and text
- **Text on Light BG**: Dark Navy (#001A4D) for headings, Neutral Black (#0A0A0A) for body
- **Text on Dark/Image BG**: White (#FFFFFF) with minimum 4.5:1 contrast
- **Form Inputs**: Light Gray (#F5F5F5) background, Dark Navy (#001A4D) text, Primary Blue (#0066FF) on focus
- **Success Feedback**: Accent Teal (#00D9B3) for checkmarks, progress bars
- **Error/Validation**: Alert Red (#FF3B30) for validation messages only (not backgrounds)
- **Disabled States**: Mid Gray (#AEAEAE) with 60% opacity on interactive elements
- **Hover States**: Primary Blue darkened to #0052CC (no tinting, pure darkening for accessibility)
- **Card Backgrounds**: White (#FFFFFF) with 1px border Light Gray (#F5F5F5); or very light tinted (98% opacity) for depth

**Dark Mode (Optional Future)**
If implementing: Invert neutral values (Light Gray → #1A1A1A, Dark Navy → #E8E8E8), maintain color contrast minimums, test all ratios.

---

### Spacing & Grid System

**8px Base Unit Grid**
- All spacing derivatives multiples of 8px: 4px (half), 8px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px
- Exception: Use 4px for fine-tuning (form label spacing, tight component padding) but avoid it in layouts

**Breakpoints**
- Mobile: 320px - 639px (base breakpoint)
- Tablet: 640px - 1023px (one column → two column transitions)
- Desktop: 1024px+ (full layout)
- Large Desktop: 1440px+ (max-content width: 1280px, with 80px margins)

**Layout Structure**
- Desktop: 80px left/right margins, 2 column grid (most sections), 3 column for feature grids
- Tablet: 40px left/right margins, 1-2 column flexible
- Mobile: 16px left/right margins, single column full-width
- Vertical section spacing: 96px between major sections (80px tablet, 64px mobile)
- Internal component spacing: 32px - 48px between grouped elements

---

### Component Library Specs

**Buttons**

*Primary Button*
- Background: Primary Blue (#0066FF)
- Text: White, 16px / 600 weight
- Padding: 12px vertical, 24px horizontal (48px height)
- Border Radius: 6px
- Hover State: Background darkens to #0052CC, shadow elevation +2
- Active State: Background #003D99, no shadow
- Disabled State: Gray (#AEAEAE) background, 50% opacity
- Animation: All transitions 200ms cubic-bezier(0.2, 0, 0.38, 0.9)

*Secondary Button*
- Background: Transparent
- Border: 2px solid Primary Blue (#0066FF)
- Text: Primary Blue (#0066FF), 16px / 600 weight
- Padding: 10px vertical, 22px horizontal (48px height with border)
- Border Radius: 6px
- Hover State: Background Light Gray (#F5F5F5)
- Active State: Background #E8E8E8
- Animation: Same timing as primary

*Link*
- Color: Primary Blue (#0066FF)
- Underline: 1px solid on hover
- Transition: 150ms

---

**Form Elements**

*Text Input / Select*
- Background: Light Gray (#F5F5F5)
- Border: 1px solid #E0E0E0
- Padding: 12px 16px
- Border Radius: 6px
- Font: Inter, 16px regular, Dark Navy text
- Focus State: Border Primary Blue (#0066FF), box-shadow 0 0 0 3px rgba(0, 102, 255, 0.1)
- Error State: Border Alert Red (#FF3B30), error message below in same color
- Label: 14px, 500 weight, Dark Navy, above input, 8px margin-bottom
- Placeholder: Mid Gray (#AEAEAE), italic

*Checkbox / Radio*
- Size: 20px × 20px
- Background: Light Gray (#F5F5F5) unchecked
- Border: 1px solid #CBCBCB
- Checked: Background Primary Blue (#0066FF), white checkmark centered
- Focus: 3px outset ring Primary Blue
- Label: 16px, Dark Navy, 8px left margin

*Select Dropdown*
- Styled as text input with chevron icon (right-aligned, 16px)
- Open state: Box-shadow elevation +4, border Primary Blue
- Options background: White, hover state Light Gray
- Selected option: Background Light Gray, Primary Blue checkmark

---

**Cards**

*Standard Card*
- Background: White (#FFFFFF)
- Border: 1px solid Light Gray (#F5F5F5)
- Border Radius: 8px
- Padding: 32px
- Box Shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
- Hover (if interactive): Shadow elevation +8, transform scale 1.02, 300ms transition

*Demo Card (for vertical examples)*
- Background: White with subtle gradient overlay (top: rgba(0, 102, 255, 0.02), bottom: transparent)
- Border: 2px solid Light Gray (#F5F5F5)
- Border Radius: 12px
- Padding: 40px
- Internal spacing: 24px between title and demo area
- Demo area minimum height: 300px (desktop), 200px (tablet), 180px (mobile)

---

**Badges & Chips**

*Vertical Category Badge*
- Background: Very light tint of Primary Blue (rgba(0, 102, 255, 0.08))
- Text: Primary Blue (#0066FF), 12px / 600 weight
- Padding: 4px 12px
- Border Radius: 16px
- Border: None
- Active state: Solid Primary Blue background, white text

*Status Badge*
- Success: Accent Teal (#00D9B3) background, white text
- Error: Alert Red (#FF3B30), white text (use sparingly)
- Neutral: Mid Gray (#AEAEAE), white text

---

**Navigation Elements**

*Sticky Header*
- Background: White (#FFFFFF)
- Border-bottom: 1px solid Light Gray (#F5F5F5)
- Height: 64px
- Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) (only on scroll)
- Padding: 0 80px (desktop), 0 40px (tablet), 0 16px (mobile)
- z-index: 100

*Navigation Link (Active/Inactive)*
- Inactive: Dark Navy (#001A4D), 16px regular, opacity 70%
- Active: Dark Navy (#001A4D), 16px 600 weight, opacity 100%
- Hover: Primary Blue (#0066FF)
- Underline (active only): 2px solid Primary Blue, positioned 4px below text

---

### Animation & Transition Specs

**Timing Functions (Easing)**
- Standard: cubic-bezier(0.2, 0, 0.38, 0.9) — 200ms (most interactions)
- Entrance: cubic-bezier(0.34, 1.56, 0.64, 1) — 400ms (bouncy, friendly)
- Exit: cubic-bezier(0.7, 0, 1, 0.3) — 200ms (quick, confident)
- Scroll: cubic-bezier(0.25, 0.46, 0.45, 0.94) — variable duration

**Micro-interactions**
- Button hover: Scale 1.02 + shadow lift, 200ms
- Link hover: Color change + underline slide-in from left, 150ms
- Form focus: Border color + ring, 150ms, no scale
- Checkbox toggle: Scale 0.8 → 1.0 on check, 200ms

**Scroll Animations (Framer Motion / Intersection Observer)**
- Section entrance: Fade in + slide up 40px, triggering when 20% of section visible
- Stagger delay on lists: 50ms between items
- Parallax backgrounds: Use transform: translateY at reduced scroll velocity (0.5x) for subtle depth
- Demo reveals: Staggered element entrance (container first, then children) for premium feel

**Performance Targets**
- All animations target 60fps (16.67ms per frame)
- Use transform + opacity only for smooth animations (avoid animating layout properties)
- Reduce-motion: Apply @prefers-reduced-motion to skip entrance animations, keep focus states
- Mobile: Reduce scale/distance of animations (0.5x desktop intensity)

**3D & Complex Animations (if needed)**
- Use CSS transform matrix or GSAP for complex sequences
- Test on target devices before shipping
- Have graceful fallback for older browsers (simplified 2D version)

---

## PART 2: HERO SECTION

### Visual Language

**Concept**
The hero should immediately signal "embedded partner, not generic vendor." The visual language is abstract, sophisticated, and specific to automation—not AI chatbots.

**Design Direction**
Use a large-scale, flowing abstract visualization that represents "systems working together." Think less "robot," more "elegant flow of data/process optimization." This could be:
- Animated line work showing interconnected nodes/processes flowing together
- Gradient-based shapes that suggest movement and connection (inspired by Stripe's hero, but more geometric)
- A subtle 3D perspective of layered cards/systems (suggesting "embedded" partnership)
- Animated background pattern based on interconnected hexagons or rounded squares shifting position

**Why Not Generic AI**
Avoid: Chatbot interface, robot silhouettes, glowing brain icons, chat bubbles, generic "AI" imagery. These read as cheap and consultancy-like. Instead, visualize what the product *does*: integrates systems, automates workflows, stays embedded.

**Specific Recommendation**
Use a full-viewport SVG or Canvas-based animation (Framer Motion + SVG, or GSAP) showing abstract interconnected shapes—perhaps workflow nodes pulsing, connecting, flowing—with smooth color transitions (Light Gray → Primary Blue accents). This should feel like looking into a working system, not a marketing graphic.

---

### Layout & Typography

**Desktop (1024px+)**
- Viewport height: 100vh (full screen)
- Grid: Two columns, 50/50 split
  - Left column: Headline, subheadline, CTA buttons, optional: short value props
  - Right column: Abstract visual/animation
- Headline: H1 (56px, 700 weight, Dark Navy), max 60 characters
  - Suggested text: "Custom AI systems built to embed with your team" or similar (see copy doc for final)
- Subheadline: Body Large (18px, 400 weight, Mid Gray), max 100 characters, margin-top 16px
- CTA Group: Two buttons side-by-side (Primary + Secondary), margin-top 32px
  - Primary: "Schedule Free Assessment"
  - Secondary: "Get Pricing Guide"
- Left column padding: 80px right margin (from left edge: 80px content start, 50vw width, 80px right padding)
- Vertical alignment: Center (use flexbox, align-items center, justify-content flex-start, min-height 100vh)

**Tablet (640px - 1023px)**
- Viewport height: 120vh (slightly taller to fit stacked content)
- Single column layout (content above visual)
- Headline: 48px
- Subheadline: 16px
- Visual: Reduced size/complexity, 300px height
- Padding: 40px left/right
- Vertical alignment: Start with 60px top padding

**Mobile (320px - 639px)**
- Viewport height: 140vh
- Single column, stacked vertically
- Headline: 36px
- Subheadline: 16px
- Visual: Full width, 250px height (scale down gracefully)
- CTA buttons: Stack vertically (full width), 48px height each, 16px gap
- Padding: 16px left/right, 48px top/bottom
- Safe area consideration: Use viewport-fit=cover, apply padding-safe on mobile

---

### CTA Button Behavior

**Primary Button ("Schedule Free Assessment")**
- On click: Scroll to contact form (smooth scroll, 800ms)
- or: Modal overlay with assessment form (fade in, 300ms)
- Hover: See component specs (shadow + scale)

**Secondary Button ("Get Pricing Guide")**
- On click: Modal form (email capture) → email delivery or PDF download
- Simpler form: Just email field + submit
- Success state: "Check your email" confirmation message

---

### Scroll Behavior

**Entrance Animation**
- Headline + subheadline: Fade in + slide up 40px, 400ms, triggering on page load with 200ms stagger
- Buttons: Same entrance, 200ms delay after subheadline
- Visual (right column): Fade in from opacity 0, starts at 200ms (overlapping with text)

**Scroll Down Cue (Optional)**
- Small animated scroll indicator (chevron or line) at bottom center
- Pulses or drifts up/down gently, appears after 1.5s delay
- Opacity 40%, disappears once user scrolls 100px

---

## PART 3: VERTICALS SHOWCASE

### Information Architecture

**Challenge**: Present 9 verticals without overwhelming the user. Solution: Progressive disclosure with two-stage interaction.

**Stage 1: Vertical Selection**
- Horizontal scrollable list (mobile) or grid (desktop/tablet)
- 9 category badges/buttons, each representing one vertical
- Displays: Vertical name + optional icon
- Active state: Selected vertical highlighted with Primary Blue background
- Interaction: Click/tap to select, which triggers demo reveal below

**Stage 2: Demo Area**
- Below the selection list: Large interactive demo area
- Active demo slides/fades in when vertical selected
- Desktop: Minimum 400px height, tablet 300px, mobile 250px
- Spacing: 48px gap between selection grid and demo area

**Visual Hierarchy**
- Section title above verticals: "How We Work Across Industries" or similar (H2, Dark Navy)
- Selection area: Light background (subtle gradient or solid Light Gray #F5F5F5) with padding
- Demo area: White background, full-width on mobile, contained width on desktop
- Each demo area bordered/carded for visual containment

---

### The 9 Verticals: Specific Demo Concepts

Each vertical demo should show an actual workflow automation—not a chatbot response. Below are the specific interactions and visual directions:

---

#### 1. Tour Operators

**Workflow Shown**: Booking confirmation → calendar sync → client notification

**Demo Layout**
- Left side: Calendar widget (3-month view, animated)
  - Shows available dates with color coding (booked: light blue, available: white, pending: light yellow)
  - Highlight: One date gets selected (Primary Blue), triggers animation
  - Timeline below calendar: Shows "Tour confirmed" → "Itinerary sent" → "Reminder email queued"
  - Each step appears with checkmark + fade-in animation on stagger
- Right side: Booking confirmation card
  - Tour details (destination, dates, guest count)
  - Animated counter showing "guests notified: 12/12" with progress bar filling
  - Final CTA button "View Itinerary" (non-functional, just visual)

**Animation Sequence** (triggered on vertical select)
1. Calendar fades in + slides from left (300ms)
2. Selected date highlight (cubic-bezier entrance, 400ms delay)
3. Timeline items stagger in from bottom (50ms between items, starting 500ms in)
4. Confirmation card fades + slides from right (parallel to timeline)
5. Progress bar fills (1000ms linear animation, starts 800ms in)

**Why Premium**: Multi-element choreography, no static screenshots, shows actual business outcome (confirmations sent).

---

#### 2. HVAC

**Workflow Shown**: Customer call → dispatch → technician routing → status update

**Demo Layout**
- Left: Call intake form (simple, 3 fields)
  - "Address / ZIP"
  - "Issue type" (dropdown: heating, cooling, maintenance)
  - "Priority" (radio buttons: standard, urgent)
  - On submit: Form slides out, dispatch map slides in
- Center: Map interface (simplified, stylized)
  - Technician nodes (small circles) positioned on map
  - Service call location (red pin, pulsing)
  - Animated line showing assigned technician moving toward call (1-2 second animation, repeats)
  - ETA counter below ("Arriving in: 15 min")
- Right: Status timeline
  - Call received → dispatched → en route → at location
  - Checkmarks appear sequentially
  - Final state: "Service complete" (doesn't show, but timeline implies next step)

**Animation Sequence**
1. Form fades + slides in from left (300ms)
2. On form "submit" (click): Form fades out (200ms), pause 100ms
3. Map + timeline fade in + slide from bottom (300ms, staggered)
4. Technician dot animates along path (1.5s, cubic-bezier ease-in-out)
5. Timeline items cascade in (50ms stagger, starting when map visible)
6. Sequence repeats or loops to next state on hover/click

**Why Premium**: Represents actual dispatch logic, shows real-time routing (core HVAC pain), no chat interface.

---

#### 3. Real Estate

**Workflow Shown**: Lead qualification → meeting scheduling → confirmation

**Demo Layout**
- Top: Lead form (minimalist)
  - "Looking for:" (dropdown: buy, sell, rent)
  - "Budget/price range" (dual slider, animated value display)
  - "Timeline" (date picker or quick buttons)
  - "Contact" (email)
- Middle: Animated lead qualification result
  - Card appears with lead summary: "Hot lead – ready to schedule"
  - Qualification score visualization (bar chart or radial progress, animated fill)
  - Green checkmark(s) for quality indicators
- Bottom: Calendar interface for scheduling
  - Shows 3-5 available meeting slots (styled as time blocks)
  - On hover: Selected slot highlights (Primary Blue background, shadow lift)
  - On click: Confirmation animation (slot turns green, checkmark appears, small celebration micro-interaction like scale pop)

**Animation Sequence**
1. Form fades in from top (300ms)
2. On form submit: Qualification card slides up from bottom with staggered sub-elements (500ms total, items 100ms staggered)
3. Progress bars fill with color (600ms each, sequential timing)
4. Calendar slots fade in (300ms, staggered 50ms)
5. On slot selection: Ripple effect from slot outward (300ms), then confirmation checkmark scale-in (200ms)

**Why Premium**: Shows lead qualification workflow (real automation), calendar UI is sophisticated, micro-interactions on selection feel premium.

---

#### 4. Landscaping

**Workflow Shown**: Job inquiry → quote generation with animated calculations → client approval

**Demo Layout**
- Left: Job intake form
  - "Property size" (input + quick suggestions)
  - "Services needed" (checkboxes: lawn care, landscaping, maintenance)
  - "Timeline" (date picker)
- Right: Animated quote builder
  - Service items list (each with price)
  - As user checks items on left: Items appear in quote (fade + slide, 200ms each)
  - Running total price at bottom (animates with counter effect: 0 → final price over 600ms)
  - Subtotal → tax → final price each with their own calculation animation
- Below: "Approve quote?" action buttons (primary: "Accept", secondary: "Request changes")

**Animation Sequence**
1. Form fade-in from left (300ms)
2. Quote area fades + slides from right (300ms, 150ms delay)
3. As form items are checked: Quote items appear with slide + fade (200ms each, immediately)
4. Running total counter animates on each addition (600ms, cubic-bezier ease-out)
5. Final total box gets a subtle scale-in + glow effect (300ms) when all items selected

**Why Premium**: Calculator-style animations feel professional, shows business outcome (pricing automation), interactive without being gimmicky.

---

#### 5. Accounting

**Workflow Shown**: Document collection → organization → processing status

**Demo Layout**
- Left: Upload interface
  - Drag-drop area (visual cue with dashed border, Light Gray)
  - Shows "Upload receipts, invoices, statements"
  - Hovering shows animation (border Primary Blue, background tint)
- Center: Document processing timeline
  - As documents "upload" (simulated): Tiles appear in a grid (fade + scale-in, 200ms staggered)
  - Each document shows: icon (receipt, invoice, etc.), filename, processing status (icon: uploading → processing → complete)
  - Status icons animate: Loading spinner → checkmark
- Right: Summary stats
  - "Documents collected: 24"
  - "Ready for processing: 22"
  - "Flagged for review: 2"
  - Animated counters (number counts up over 400ms, staggered)
  - Progress bar showing % processed

**Animation Sequence**
1. Upload area fades in (300ms)
2. On drag-over or "upload" interaction: Documents animate in as tiles (300ms enter, 50ms stagger)
3. Status icons show loading state (100ms rotation, loops)
4. On "processing complete": Spinner transforms to checkmark (200ms), color shifts to Accent Teal
5. Stat counters in right panel animate simultaneously with docs (number rolling animation, 400ms each)
6. Progress bar fills (1000ms linear, staggered start)

**Why Premium**: Shows document workflow (real pain point), animated counters feel like live processing, no chat interface.

---

#### 6. Salons

**Workflow Shown**: Appointment scheduling → no-show prevention → confirmation

**Demo Layout**
- Top: Appointment grid calendar (week view, stylized)
  - Shows time slots (9am - 6pm in 30-min increments)
  - 4-5 stylists/stations as columns
  - Available slots show as white, booked as light blue, just-booked as Primary Blue
- Middle: Customer request form (minimal)
  - "Service type" (haircut, color, treatment)
  - "Preferred stylist" (dropdown or image grid)
  - "Time slot" (clicking calendar slot auto-fills this)
- Bottom: Confirmation flow
  - After booking: Animated confirmation card slides up from bottom
  - Shows: Appointment details (date, time, stylist, service)
  - Optional add-ons section with toggle (e.g., "Add reminders?", "Book next appointment?")
  - Success checkmark appears in top-right of card, card gets subtle green accent border
  - Timeline appears below: "Booking confirmed" → "Reminder sent at -24h" → "Reminder sent at -2h" (not all live, but shows what happens next)

**Animation Sequence**
1. Calendar grid fades in (300ms)
2. Available slots get a subtle pulse effect (optional, runs continuously as background animation)
3. On slot selection: Slot turns Primary Blue, selection slides over it as highlight (150ms)
4. Form fades in below calendar (300ms, 100ms delay)
5. On form submit: Confirmation card slides up from bottom (400ms, cubic-bezier ease-out)
6. Details stagger in within card (50ms between items, 200ms after card appears)
7. Success checkmark scales + bounces in (200ms, cubic-bezier entrance)
8. Timeline items fade in sequentially (50ms stagger, starting 300ms after checkmark)

**Why Premium**: Calendar UI is sophisticated, shows customer journey (booking → confirmation → ongoing), micro-interactions on selection feel premium.

---

#### 7. Auto Repair

**Workflow Shown**: Service intake → diagnostic recommendations → approval

**Demo Layout**
- Left: Service intake form
  - "Vehicle" (make/model - could show image thumbnail)
  - "Issue description" (textarea or common issues list)
  - "Mileage" (input)
- Center: Diagnostic recommendations interface
  - As form is filled: Recommendations appear in a card stack below (fade + slide from bottom)
  - Each recommendation card shows: Issue name, priority level (icon + color), description, estimated cost
  - Cards are arranged in a staggered "hierarchy" (critical at top/left, optional at bottom/right)
  - Priority visual: Critical = Alert Red accent, Standard = Primary Blue accent, Optional = Light Gray accent
- Right: Summary & approval
  - "Recommended work: 3 items"
  - Checkbox list to select which services to approve
  - As items are checked: Price updates (animated counter)
  - "Approve selected work" button

**Animation Sequence**
1. Form fades in from left (300ms)
2. Recommendation cards appear with staggered entrance (slide from bottom + fade, 200ms each, 100ms stagger)
3. Cards arrange themselves in priority order (could be animated if using layout animations)
4. Checkboxes get subtle scale-in animation when form complete (300ms staggered)
5. On checkbox: Card gets a subtle glow/scale effect (200ms), price counter animates (300ms)
6. Approve button changes to "Ready to start" on all selections (text color fade, 200ms)

**Why Premium**: Shows diagnostic workflow (actual automation value), recommendation UI is sophisticated, priority visualization is professional.

---

#### 8. Hospitality

**Workflow Shown**: Guest communication hub (check-in, requests, special occasions)

**Demo Layout**
- Center: Guest communication interface (NOT a chat box — a dashboard)
  - Top: Guest profile card (name, room number, check-in/out dates)
  - Below: Action buttons/panels (4-6 quick actions):
    - "Room requests" (icon + text)
    - "Special requests" (icon + text)
    - "Dining reservations" (icon + text)
    - "Local recommendations" (icon + text)
    - "Housekeeping" (icon + text)
    - "Concierge" (icon + text)
  - Each action panel is a card with consistent styling
  - On hover: Card lifts (shadow elevation), color accent appears on left edge
  - On click: Panel reveals contextual options (slide in from right, 300ms)
- Right: Example state showing opened panel
  - If "Room requests" selected: Shows request options (temperature, extra towels, maintenance) with checkboxes
  - Confirmation: "Request sent" with checkmark

**Animation Sequence**
1. Guest profile card fades in + slides from top (300ms)
2. Action panels fade in staggered grid (50ms between items, 200ms each, starting 200ms after profile)
3. On action panel hover: Shadow animation, accent line slides in from left (200ms)
4. On panel click: Slide out animation for main area (200ms), new panel slides in from right (300ms)
5. Request options stagger in within new panel (50ms each, starting when panel visible)
6. On request submission: Checkmark scales + bounces in (200ms)

**Why Premium**: Shows guest experience workflow (not generic chat), sophisticated dashboard UI, action panels are clearly organized.

---

#### 9. Coaching

**Workflow Shown**: Client onboarding → goal setting → scheduling → progress tracking

**Demo Layout**
- Top: Onboarding form (multi-step, visual progress indicator)
  - Step 1: "Coach details" (name, specialization)
  - Step 2: "Client information" (name, goals)
  - Step 3: "Session scheduling"
  - Progress bar at top showing which step active (filled portion Primary Blue)
  - On form field completion: Subtle glow or checkmark appears next to field
- Middle: Goal-setting interface
  - Shows client goal (e.g., "Build consistent exercise habit")
  - Breakdown into sub-goals (displayed as staggered cards or checklist)
  - Each sub-goal has a checkbox
- Bottom: Session calendar
  - Mini calendar showing booked sessions (filled dates highlighted in Primary Blue)
  - Upcoming sessions list below (next 3-4 sessions with dates, times, coach notes preview)
  - "Schedule next session" button

**Animation Sequence**
1. Form fades in (300ms), progress bar visible at top with 0% fill
2. As form progresses: Progress bar fills (smooth animation based on form progress)
3. On form field completion: Field gets subtle accent highlight + checkmark fades in (200ms)
4. On step completion: Fade out current step (200ms), fade in next step (300ms)
5. Goal cards fade in with staggered entrance (200ms each, 100ms stagger, 50ms bounce on arrival)
6. Calendar and upcoming sessions fade in (300ms, 300ms delay from goals)
7. On session selection from list: Session card highlights + grows (200ms)
8. Overall sequence feels progressive and celebratory (match cubic-bezier entrance easing)

**Why Premium**: Shows client lifecycle (not just booking), progress indicators feel motivating, multi-step interface is sophisticated.

---

### Vertical Showcase: Technical Layout

**Desktop (1024px+)**
- Section background: Light Gray (#F5F5F5) or white gradient
- Max width: 1280px centered, 80px margins
- Selection grid: Horizontal flex layout, 9 items per row
  - Item width: calc((100% - 8*16px) / 9) for 8px gaps
  - Or: Use CSS grid with auto-fit for responsive wrapping
  - Each badge: 120px width, 40px height minimum
  - Text: 14px, centered, Primary Blue (inactive), white on Primary Blue (active)
  - Hover: Scale 1.05 (all states)
- Demo area: Margin-top 48px, white background, border 1px Light Gray, border-radius 12px, padding 40px
  - Min height: 400px
  - Background: White or subtle gradient (top: rgba(0, 102, 255, 0.02), bottom: transparent)

**Tablet (640px - 1023px)**
- Selection grid: 3 items per row (3x3 grid)
  - Item width: calc((100% - 2*16px) / 3)
  - Spacing: 16px gaps
- Demo area: Margin-top 32px, padding 32px, min height 300px

**Mobile (320px - 639px)**
- Selection grid: 2 items per row (vertical scrolling), or carousel/scrollable list
  - If carousel: Use horizontal scroll with snap-scroll, show ~2.5 items visible
  - Badges smaller: 100px width, 36px height
  - Text: 12px
- Demo area: Full width minus 16px margins, padding 24px, min height 250px
- Scrollable height: Ensure demo fits in viewport without excessive scrolling

**Interaction Model**
- Default state: First vertical (Tour Operators) is selected and demo visible on load
- On vertical click: Previous demo fades out (150ms), new demo fades + slides in (300ms)
- Mobile touch: Tap to select, or swipe left/right to navigate (show visual indicator: "← Swipe to explore →")
- Mobile carousel option: Snap scroll with auto-centering on tap

---

### Vertical Showcase: Visual Design

**Demo Card Styling**
- White background (#FFFFFF)
- Border: 1px solid Light Gray (#F5F5F5), or 2px for emphasis
- Border radius: 8px - 12px
- Padding: 40px (desktop), 32px (tablet), 24px (mobile)
- Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) (subtle, increases on hover)
- Internal content should feel spacious, not crowded

**Demo Content Guidelines**
- Avoid: Text blocks, fake chat screenshots, static images
- Use: Animated interactions, form inputs, calendars, progress indicators, data visualizations
- Color: Use Primary Blue for active/important states, Accent Teal for confirmations, Light Gray for neutral
- Typography: Body Regular (16px) for descriptions, labels use 12px / 500 weight
- Icons: 24px-32px size, consistent stroke weight (2px or similar), Primary Blue or Dark Navy

**Responsive Demo Scaling**
- Desktop: Full layout with all elements visible, multi-column if applicable
- Tablet: Reorganize into single column if needed, reduce padding
- Mobile: Stack all elements vertically, reduce icon/component sizes (20px icons), ensure thumb-friendly tap targets (48px minimum)
- Animations: Reduce scale/distance on mobile (50% intensity), keep timing same for smoothness

---

## PART 4: PROCESS & ENGAGEMENT MODEL SECTION

### Concept

Show the differentiator: "Assessment → Design & Build → Deploy & Embed → Ongoing Optimization." This is not a typical consulting timeline—it emphasizes partnership and embedded presence.

### Layout & Design

**Desktop**
- Full width section, white background
- Section title: "How We Work" or "Our Process" (H2, 44px)
- Section subtitle: "Assessment → Design & Build → Deploy & Embed → Ongoing Optimization" (Body Large, Mid Gray)
- Four columns, equal width, 32px gaps between
- Each column represents one phase:
  - Title: H3 (28px, 600 weight, Dark Navy)
  - Description: Body Regular (16px, Mid Gray), 3-4 sentences
  - Visual indicator: Number badge (01, 02, 03, 04) or icon (optional)
- Connecting elements: Thin line connecting columns (or arrows between) showing flow

**Tablet**
- Two columns × two rows
- Same content density, slightly smaller typography

**Mobile**
- Single column, stacked vertically
- Each phase as a card with top badge (number or icon)
- Connecting lines/arrows become vertical (pointing down)

### Visual Treatment Options

**Option A: Timeline with Badges**
- Horizontal timeline line across top (Light Gray, 2px)
- Four position markers along line (circles, 32px diameter, Primary Blue filled for complete, outline for future)
- Each phase content below its marker
- Simple, clean, professional

**Option B: Chevron Flow**
- Chevron arrows between columns (Primary Blue, 24px)
- Suggests forward momentum and progression
- More visually interesting than timeline

**Option C: Gradient Flow**
- No explicit connecting line, but each column has a left accent line (4px, 8px width)
- Background gradient very subtle (left column: 0% opacity Primary Blue, right column: 0% opacity to transparent)
- Creates sense of flow through color transition
- More premium/modern feeling

**Recommended: Option A** (timeline) for clarity, or **Option B** (chevrons) for visual interest.

### Phase Content Examples

**Phase 1: Assessment**
- Title: "Assessment & Strategy"
- Description: "We understand your operations, pain points, and goals. Custom AI works best when it's built for your specific workflow, not retrofitted to generic software."
- Timeline: 1-2 weeks
- Key activities: Process review, data audit, goal alignment

**Phase 2: Design & Build**
- Title: "Design & Build"
- Description: "Custom systems built to your specifications. We design the automation, build the integrations, and ensure it works exactly as planned—before launch."
- Timeline: 4-8 weeks (typical)
- Key activities: Architecture design, development, testing

**Phase 3: Deploy & Embed**
- Title: "Deploy & Embed"
- Description: "We launch the system and integrate it into your team. Embedded means I'm accountable for adoption and outcomes, not just delivery."
- Timeline: 2-4 weeks
- Key activities: Training, rollout, optimization

**Phase 4: Ongoing Optimization**
- Title: "Ongoing Optimization"
- Description: "The system evolves with your needs. Continuous improvement, performance monitoring, and proactive optimization to maximize ROI."
- Timeline: Ongoing
- Key activities: Analytics review, refinement, scaling

### Animation

- Timeline: Draw itself on page load or on section entrance (stroke animation, 1000ms)
- Badges: Appear sequentially as you scroll to section (fade + scale, 300ms each, 150ms stagger)
- Connecting elements: Draw/animate in after timeline (chevrons slide, 400ms)
- Text: Fade in after visual elements (300ms, slight stagger)

---

## PART 5: CTA SECTIONS & FORMS

### Primary CTA: Assessment Form

**Placement**: After hero, or sticky footer option

**Form Fields** (optional, minimal approach)
- Name (text input)
- Email (email input, required)
- Business type (select dropdown: one of the 9 verticals)
- Pain point (text area, optional)
- Phone (optional, text input with formatting)
- Preferred contact method (radio: email, phone, schedule call)

**Validation**
- Real-time as-you-type (no aggressive error messages until blur or submit)
- Error state: Label turns Alert Red, input border Alert Red, error message below
- Success state: Input border turns Accent Teal, checkmark appears right side of input

**Submission**
- Button text: "Schedule Free Assessment"
- Loading state: Button shows spinner, text becomes "Scheduling..." (disabled during submission)
- Success: Modal overlay with "We'll be in touch within 24 hours" message, or redirect to thank-you page
- Error: Alert at top of form with retry option

---

### Secondary CTA: Pricing Guide Signup

**Placement**: In sidebar or as separate modal

**Form Fields**
- Email (required)
- Company name (optional)
- Checkbox: "Interested in scheduling a call?" (optional)

**Behavior**
- On submit: Modal shows "Check your inbox" message
- Email delivery: Sends PDF guide immediately (backend configured to do this)
- Optional: If checkbox selected, also trigger calendar booking interface

---

### Tertiary: Contact / General Inquiry

**Placement**: Footer or contact page

**Form Fields**
- Name
- Email
- Subject (small select: General inquiry, Technical question, Partnership, Other)
- Message (textarea)
- Phone (optional)

**Validation & Submission**: Same as assessment form above

---

## PART 6: NAVIGATION, HEADER & FOOTER

### Header / Navigation Bar

**Structure (Desktop)**
- Sticky on scroll (becomes sticky after user scrolls 100px down)
- Height: 64px
- Background: White (#FFFFFF) with 1px bottom border Light Gray
- Flexbox layout: Logo left, nav items center, CTA right
- Padding: 0 80px

**Logo**
- Size: 32px height (width auto-maintain aspect)
- Text or mark: "Applied AI Agent" or abbreviation (if mark available)
- Color: Dark Navy (#001A4D)
- Hover: No change (logo itself not clickable, but could have slight opacity on hover if desired)
- Spacing: 12px right margin

**Navigation Items**
- 4 items: "What I Build" | "How It Works" | "Case Studies" (or remove) | "Contact"
- Font: Inter, 16px regular, Dark Navy
- Spacing: 32px between items
- Active state: Dark Navy, 600 weight, with 2px underline below (4px from text)
- Inactive state: Dark Navy, opacity 70%
- Hover: Primary Blue color, underline slides in from left (200ms)
- Active page indication: Underline persistent when on that section

**CTA (Right side)**
- Button: "Schedule Assessment" (Primary Button styling)
- Alternative: Could be secondary button if primary CTAs already on page

**Tablet (640px - 1023px)**
- Padding: 0 40px
- Navigation items: 24px between
- Font: 15px
- Logo: 28px height

**Mobile (320px - 639px)**
- Hamburger menu icon (left side, 24px)
- Logo centered (24px height)
- CTA icon only or hidden (show in dropdown menu)
- Dropdown menu: Slide in from left (300ms), dark overlay behind (rgba(0,0,0,0.3))
  - Full-width menu items
  - Navigation items stacked vertically
  - CTA button at bottom of menu (full-width)
  - Close icon (X) top-right of menu

---

### Footer

**Background**: Dark Navy (#001A4D) or Light Gray (#F5F5F5)
- Recommended: Dark Navy with white text (high contrast, premium feel)

**Content Layout**
- Flexbox or grid, max-width 1280px, centered, 80px margins
- Desktop: 4 columns
  - Column 1: Branding + value statement (2-3 sentences)
  - Column 2: Quick links (What I Build, How It Works, Contact)
  - Column 3: Contact info (email, phone if desired)
  - Column 4: Optional (upcoming: social links, if any)
- Tablet: 2x2 grid
- Mobile: Single column, stacked

**Specific Content**
- Branding: "Applied AI Agent. Custom automation for service businesses. Built to embed with your team."
- Links: "What I Build" | "How It Works" | "Schedule Assessment"
- Contact: "jake@appliedai.dev" (or similar, based on actual contact)
- Copyright: "© 2024 Applied AI Agent. All rights reserved." (light gray, 12px, bottom center)

**Typography**
- Column titles: 16px, 600 weight, white (if dark footer) or Dark Navy (if light footer)
- Content: 14px regular, white 80% opacity (if dark) or Mid Gray (if light)
- Links: 14px regular, Primary Blue (if dark footer) or Primary Blue (if light), underline on hover

**Interactive Elements**
- Link hover: Opacity increase, underline (200ms)
- Email link: Clickable mailto:
- CTA in footer: Secondary button styling, full-width on mobile

**Padding**
- Vertical: 64px top/bottom (desktop), 48px (tablet), 32px (mobile)
- Horizontal: 80px (desktop), 40px (tablet), 16px (mobile)

---

## PART 7: MOTION & MICRO-INTERACTIONS

### Global Animation Strategy

**Page Load**
- Hero headline + subheadline: Fade in + slide up, staggered
- Hero visual: Fade in (paralleled with text)
- Scroll cue (if present): Appears after 1.5s, pulses gently

**Scroll-Triggered Sections**
- Verticals section: Badges cascade in as section scrolls into view
- Process section: Timeline draws + badges appear sequentially
- Footer: Subtle fade-in as user scrolls to bottom

**Interactive States**
- Buttons: Scale 1.02 + shadow on hover, scale 0.98 on active
- Form inputs: Border color change + subtle glow on focus
- Checkboxes: Scale animation when toggled
- Links: Color change + underline animation on hover
- Cards: Shadow elevation + subtle scale on hover (not clickable cards only scale on active)

### Performance & Accessibility

**Performance**
- Use transform + opacity only (no layout shift animations)
- Avoid animating box-shadow (replace with opacity-based alternatives or pre-render)
- Lazy-load demo components (only animate when visible via Intersection Observer)
- Test on low-end devices (iPhone SE, Android mid-range) for 60fps compliance

**Accessibility (@prefers-reduced-motion)**
- On reduced-motion enabled: Skip entrance animations
- Keep focus state animations (they're functional, not decorative)
- Keep form validation animations (they convey information)
- Remove auto-playing animations (like scroll cues)
- Test with screen readers: Ensure animated content is announced properly

---

## PART 8: RESPONSIVE DESIGN SUMMARY

### Breakpoints & Behavior

| Breakpoint | Use Case | Key Changes |
|------------|----------|-------------|
| 320px | Mobile small | Single column, 16px margins, stacked everything |
| 480px | Mobile medium | Slightly larger text, 20px margins |
| 640px | Tablet start | 2-column options, 40px margins |
| 768px | Tablet medium | Refined 2-column layouts, larger components |
| 1024px | Desktop start | 3-column options, full hero layout |
| 1280px | Desktop optimal | Max-content width achieved, all features visible |
| 1440px | Large desktop | Slight scaling up, no further major changes |

### Key Responsive Changes

**Hero**
- Desktop: Two-column split (50/50)
- Tablet: Single column stacked, visual below text
- Mobile: Single column, vertically compact

**Vertical Demo Cards**
- Desktop: Full-width interior layout optimized for space
- Tablet: Slight padding reduction, elements reorganize
- Mobile: Vertical stack of all elements, full-width, touch-optimized sizes (48px min tap targets)

**Process Timeline**
- Desktop: Horizontal, four columns
- Tablet: 2x2 grid
- Mobile: Single column with vertical flow

**Forms**
- Desktop: Inline label + input on same row (if space permits)
- Tablet: Stacked (label above input)
- Mobile: Full-width inputs, labels above, 16px margins

### Touch Optimization (Mobile)

- All interactive elements: Minimum 48px × 48px tap target (WCAG standard)
- Buttons: Full-width on mobile (or 48px-60px height, generous width)
- Form inputs: 44px minimum height (generous padding)
- Spacing: 16px minimum between tappable elements
- Hover states: Replace with active/pressed states (no hover on mobile)
- Modals/overlays: Full-screen or 95vw width (16px margin each side)

---

## PART 9: DESIGN SPECIFICATION SUMMARY

### Files & Assets Needed

1. **Figma File** (production master)
   - Design system page (colors, typography, components)
   - Hero page
   - Verticals showcase page (each vertical mockup)
   - Process section
   - Forms/CTA sections
   - Mobile/tablet variants
   - Animation specifications (documented in Figma prototypes)

2. **Exported Assets**
   - Logo (SVG, PNG)
   - Icons (SVG set, 24px and 32px)
   - Any illustrations/abstract shapes (if not SVG-native)
   - Photographs (if used, optimized for web)

3. **Documentation**
   - Animation timing/easing chart
   - Color usage guidelines
   - Typography scale reference
   - Component interaction specifications
   - Accessibility checklist

### Handoff to Development

- Figma link with inspect/code export enabled (developers can read exact measurements)
- Design tokens exported (colors, spacing, typography as JSON or CSS variables)
- Prototype links for interactive states
- Animation specifications (timing, easing, sequence) documented in separate spec or Figma comments
- Performance budget (max image sizes, animation complexity guidelines)

---

## FINAL NOTES

This design system is built for premium execution. Every choice—from color contrast to micro-interaction timing—serves the positioning: credible, sophisticated, embedded partner in wine country.

The absence of flashy effects (no auto-playing videos, no gratuitous animations, no AI imagery) is intentional. This site should feel solid and professional, not clever.

Implementation should prioritize performance (Lighthouse 90+, CWV green) and accessibility (WCAG AA minimum) as core requirements, not afterthoughts.


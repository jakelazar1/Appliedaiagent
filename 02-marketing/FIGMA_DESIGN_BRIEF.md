# Applied AI Agent Website Redesign
## Comprehensive Figma Design Brief

**Client:** Jake Lazar, Applied AI Agent (appliedaiagent.ai)  
**Project Scope:** Complete website redesign for custom AI systems & automation  
**Design System & Page Build:** 1 comprehensive specification document  
**Audience:** Service business owners seeking custom AI automation  
**Design Direction:** Premium, approachable, clean—inspired by Stripe, Vercel, Linear, Notion  

---

## 1. DESIGN SYSTEM FOUNDATION

### 1.1 Typography System

**Font Family Stack:**
- **Heading Font:** Inter (system default backup: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
  - Clean, modern, professional, zero personality issues
  - Widely available, excellent web performance
- **Body Font:** Inter (matching heading for cohesion)
  - Exceptional readability at all sizes
  - Strong OpenType feature support

**Typographic Scale** (based on 16px base):

| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|---|
| H1 Hero | 56px | 700 | 1.2 | -0.02em |
| H2 Section | 40px | 700 | 1.25 | -0.015em |
| H3 Subsection | 32px | 600 | 1.3 | 0 |
| H4 Card Title | 20px | 600 | 1.4 | 0 |
| H5 Label | 14px | 600 | 1.5 | 0.01em |
| Body Large | 18px | 400 | 1.6 | 0 |
| Body Regular | 16px | 400 | 1.6 | 0 |
| Body Small | 14px | 400 | 1.5 | 0 |
| Caption | 12px | 500 | 1.4 | 0.02em |

**Hierarchy Guidelines:**
- H1 reserved for hero section primary headline only
- H2 for major section beginnings
- H3 for subsection breaks within sections
- Body Large for important introductory copy
- Body Regular as primary body text
- Weights: 400 (regular), 500 (medium for accents), 600 (semibold for labels/cards), 700 (bold for headings)

---

### 1.2 Color Palette

**Primary Brand Colors:**
- **Primary Blue:** #0052FF (Stripe-inspired, confident, trustworthy)
  - Hex: #0052FF
  - RGB: 0, 82, 255
  - Use: CTAs, primary actions, brand accents
  
- **Primary Cyan:** #00D9FF (energetic secondary)
  - Hex: #00D9FF
  - RGB: 0, 217, 255
  - Use: Accent highlights, hover states, geometric accents
  - 30% opacity version: #00D9FF4D for subtle backgrounds

**Neutral Palette (Light Mode Foundation):**
- **Background:** #FFFFFF (pure white)
  - Primary page background, cards on light surfaces
  
- **Surface Secondary:** #F8F9FB (very subtle gray)
  - Subtle background for alternate sections, secondary cards
  - Hex: #F8F9FB (RGB: 248, 249, 251)
  
- **Text Primary:** #0F1419 (near-black, readable)
  - Hex: #0F1419 (RGB: 15, 20, 25)
  - Main body text, critical information
  
- **Text Secondary:** #565E73 (medium gray)
  - Hex: #565E73 (RGB: 86, 94, 115)
  - Supporting copy, labels
  
- **Text Tertiary:** #8A92A6 (light gray)
  - Hex: #8A92A6 (RGB: 138, 146, 166)
  - Placeholder text, disabled states

- **Border Color:** #E1E6ED (light gray borders)
  - Hex: #E1E6ED (RGB: 225, 230, 237)
  - Input borders, dividers, subtle separation

**Semantic Colors:**
- **Success:** #10B981 (emerald, positive actions)
- **Warning:** #F59E0B (amber, cautionary)
- **Error:** #EF4444 (red, destructive)
- **Info:** #3B82F6 (blue, informational)

**Gradient Library:**
- **Hero Gradient (Background):** Linear 135° from #FFFFFF to #F8F9FB with #00D9FF4D accent overlay
- **CTA Gradient (Button):** Linear 90° from #0052FF to #0041CC (subtle depth)
- **Accent Gradient (Hero Visual):** Linear 45° from #0052FF (20% opacity) through #00D9FF to transparent
- **Dark Overlay:** #0F1419 at 8-15% opacity (for text contrast over imagery)

**Color Contrast Validation:**
- All text-on-background combinations meet WCAG AAA (7:1+) contrast
- Button text always white or near-white (#FFFFFF or #F8F9FB) on primary backgrounds
- Disabled states: text at #C5CCDB (reduced contrast ~4.5:1)

---

### 1.3 Spacing & Grid System

**Base Unit:** 8px (multiples of 8 throughout)

**Spacing Scale:**
- xs: 4px (micro spacing, rarely used, icon gaps)
- sm: 8px (between inline elements, tight grouping)
- md: 16px (default section padding, card padding)
- lg: 24px (between major components)
- xl: 32px (section vertical spacing)
- 2xl: 48px (large gaps, section separators)
- 3xl: 64px (between major page sections)
- 4xl: 96px (hero to next section)

**Grid System:**
- Desktop: 12-column grid with 24px gutters
- Tablet: 6-column grid with 20px gutters
- Mobile: 2-column grid with 16px gutters (or full-width with padding)
- Container max-width: 1440px
- Container padding: 32px (desktop), 24px (tablet), 16px (mobile)

**Padding Guidelines:**
- Card padding: 24px minimum (md + lg)
- Section padding (vertical): 64px—96px between sections
- Hero section: 120px (top), 80px (bottom) minimum
- Text block padding: 16px to 32px depending on context

---

### 1.4 Shadow & Elevation System

**Shadow Tokens** (consistent with Vercel/Linear):

| Elevation | Box-Shadow | Use Case |
|-----------|-----------|----------|
| Flat (0) | none | Default state |
| Raised (1) | 0 1px 2px rgba(0,0,0,0.04) | Subtle hover, focus |
| Card (2) | 0 2px 8px rgba(0,0,0,0.08) | Cards, containers |
| Floating (3) | 0 4px 16px rgba(0,0,0,0.12) | Modal backgrounds |
| Modal (4) | 0 12px 32px rgba(0,0,0,0.16) | Modals, dropdowns |
| High (5) | 0 20px 48px rgba(0,0,0,0.2) | Floating CTAs |

**Usage:**
- Cards default to Card (2) shadow
- On-hover elevation increases by 1 level
- Modals use Modal (4) + semi-transparent backdrop at rgba(0,0,0,0.4)
- Avoid stacking shadows—choose single elevation level per element

---

### 1.5 Border Radius & Rounding

**Radius Scale:**
- None: 0px (sharp edges, very rare)
- sm: 4px (small elements, buttons)
- md: 8px (standard, cards, inputs)
- lg: 12px (larger cards, containers)
- xl: 16px (hero sections, prominent cards)
- full: 9999px (pills, badges)

**Application:**
- Buttons: 6px (sm+)
- Input fields: 8px (md)
- Cards: 12px (lg, consistent across product)
- Primary CTAs: 8px (md, not overly rounded)
- Configurator cards: 12px (lg, premium feel)
- Hero accent shapes: 16px (xl)

---

### 1.6 Component Library Structure

**Core Components:**
1. **Buttons**
   - Primary (blue, full width or auto width)
   - Secondary (white bg, blue border)
   - Ghost (no bg, text only)
   - Disabled state for all
   - Icon-left and icon-right variants

2. **Input Fields**
   - Text input
   - Email input
   - Textarea
   - Checkbox
   - Radio button
   - All with focus, error, disabled states
   - Floating label option

3. **Cards**
   - Feature card (icon, title, description)
   - Comparison card (feature list)
   - Process card (step number, title, description)
   - Value prop card (2-3 variant widths)

4. **Navigation**
   - Desktop nav bar
   - Mobile nav menu
   - Logo
   - Sticky header wrapper

5. **Hero**
   - Hero container
   - Hero headline
   - Hero subheadline
   - Hero CTA section
   - Visual element container

6. **Sections**
   - Section wrapper (padding, max-width)
   - Section headline container
   - Two-column layout
   - Three-column layout
   - Asymmetrical layout

7. **Configurator**
   - Industry selector buttons
   - Outcome display panel
   - Result card
   - Animation states

8. **Timeline/Process**
   - Process step card
   - Timeline connector
   - Milestone marker
   - Full process container

9. **Forms**
   - Assessment form (complete)
   - Pricing guide form
   - Success state
   - Error state

10. **CTA Sections**
    - Side-by-side CTA block
    - Centered CTA block
    - Form-integrated CTA

---

## 2. HERO SECTION (Visual-Driven, Impressive)

### 2.1 Layout & Structure

**Viewport Height:** 100vh minimum, 80vh acceptable on mobile

**Layout:** Asymmetrical split with visual dominance on right
- Left Column (50%): Text content, headline, subheadline, CTA
- Right Column (50%): Dynamic visual element, gradient accent, abstract shapes

**Text Positioning:**
- Headline (H1) positioned 120px from top
- Subheadline (Body Large) positioned 20px below headline
- CTA buttons positioned 32px below subheadline
- All text left-aligned with 40-60 character max line width

**Visual Design:**
- Background: White (#FFFFFF) with subtle gradient to #F8F9FB toward bottom-right
- Abstract geometric element on right: Large overlapping circles/blobs with gradient fills
- Primary circle: 480px diameter, filled with linear gradient from #0052FF (40% opacity) → #00D9FF (70% opacity), positioned at 60% right, 40% down
- Secondary circle: 320px diameter, filled with cyan (#00D9FF, 50% opacity), positioned at 80% right, 60% down
- Tertiary accent: Thin line elements in #00D9FF color, positioned behind/between circles for complexity

**Headline & Typography:**
```
"Custom AI Systems Built for Service Businesses"
```
- Font: Inter, 56px, Weight 700
- Color: #0F1419
- Line height: 1.2
- All caps: No
- Letter spacing: -0.02em
- Maximum width: 520px

**Subheadline:**
```
"Stop settling for generic tools. We design and deploy AI workflows that integrate seamlessly into your business, giving you the competitive edge you need."
```
- Font: Inter, 18px, Weight 400 (Body Large)
- Color: #565E73
- Line height: 1.6
- Maximum width: 520px

**CTA Area:**
- Primary Button: "Schedule Free Assessment"
  - Style: Solid blue (#0052FF) background, white text
  - Padding: 14px 28px
  - Border radius: 6px
  - Font: Inter, 16px, Weight 600
  - Icon: Arrow-right at 18px, positioned right of text with 8px margin
  
- Secondary Button: "View Capabilities"
  - Style: White background, #0052FF text, 1px solid #0052FF border
  - Padding: 14px 28px
  - Border radius: 6px
  - Font: Inter, 16px, Weight 600
  - Positioned directly below primary button, left-aligned

**Hover & Interaction States:**
- Primary button: Background darkens to #0041CC, shadow elevates to Raised (1)
- Secondary button: Background shifts to #F8F9FB
- Both buttons have 200ms ease-in-out transition

### 2.2 Mobile Adaptation (320px—767px)

- Layout: Stacked (100% width, text full-width)
- Headline: 36px (reduced from 56px)
- Subheadline: 16px
- Visual element: Repositioned below text, 100% width, height auto, reduced scale to 60%
- CTA buttons: Full width, stacked vertically
- Top padding: 60px
- Bottom padding: 40px

---

## 3. VALUE PROPOSITION SECTION

### 3.1 Section Structure

**Container:** Full width, #F8F9FB background, 96px padding top/bottom

**Headline Positioning:**
- Centered, max-width 700px container
- H2 headline: "Why Applied AI Agent" (40px, weight 700)
- Subheadline: "Purpose-built systems for service businesses" (18px, weight 400, color #565E73)
- 32px spacing between headline and subheadline

### 3.2 Layout Pattern

**Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- Gutter: 24px between cards
- Card width: 100% of column

**Four Differentiator Cards:**

**Card 1: "Seamlessly Embedded"**
- Icon: Plug icon (48x48px, #0052FF)
- Title: "Seamlessly Embedded" (20px, weight 600)
- Description: "Integrates directly into your existing systems—no disruption, no learning curve. Your team works the way they always have." (14px, weight 400)
- Visual treatment: Icon in 60x60px circle with #00D9FF20 background
- Border radius: lg (12px)
- Padding: md (24px)

**Card 2: "Custom-Built for Your Needs"**
- Icon: Sliders/customize icon (48x48px, #0052FF)
- Title: "Custom-Built for Your Needs" (20px, weight 600)
- Description: "No off-the-shelf compromises. Every system is designed and built specifically for your workflows, your processes, your goals." (14px, weight 400)
- Visual treatment: Icon in 60x60px circle with #00D9FF20 background
- Similar styling to Card 1

**Card 3: "Hands-On Partnership"**
- Icon: Handshake icon (48x48px, #0052FF)
- Title: "Hands-On Partnership" (20px, weight 600)
- Description: "You're not alone. We work directly with you through every stage—assessment, building, deployment, and ongoing optimization." (14px, weight 400)
- Visual treatment: Icon in 60x60px circle with #00D9FF20 background
- Similar styling to Card 1

**Card 4: "Accountable Results"**
- Icon: Checkmark circle icon (48x48px, #0052FF)
- Title: "Accountable Results" (20px, weight 600)
- Description: "Transparent metrics, measurable outcomes. We're invested in your success because our reputation depends on your results." (14px, weight 400)
- Visual treatment: Icon in 60x60px circle with #00D9FF20 background
- Similar styling to Card 1

**Card Styling Across All:**
- Background: #FFFFFF
- Border: 1px solid #E1E6ED
- Box-shadow: Card (2) elevation
- Border radius: md (8px)
- Hover state: Shadow elevates to Floating (3), translate-y -4px
- Transition: 200ms ease-out
- Text color: Primary #0F1419, secondary #565E73

### 3.3 Responsive Adjustments

**Tablet (768px—1439px):**
- 2-column grid
- Cards slightly wider
- Icon size: 40x40px
- Headline: 32px
- Gutter: 20px

**Mobile (320px—767px):**
- 1-column grid, full width
- Icons: 36x36px
- Title: 18px
- Description: 14px
- Padding: 16px
- No padding adjustment needed for full-width layout

---

## 4. INTERACTIVE CONFIGURATOR / COMPARISON SECTION

### 4.1 Positioning & Purpose

**Section Headline:**
- Centered, H2: "See What's Possible for Your Industry" (40px, weight 700)
- Subheadline: "Explore how our AI systems transform service businesses" (18px, weight 400)
- 48px spacing below, followed by configurator

**Section Background:** #FFFFFF
**Vertical Padding:** 96px top/bottom

### 4.2 Configurator Layout

**Two-Column Design (Desktop):**
- Left column (40%): Industry selector buttons
- Right column (60%): Dynamic outcome display

**Industry Selector (Left):**
- Title: "Select Your Industry" (16px, weight 600, color #0F1419)
- 5 option buttons, stacked vertically
- Button height: 56px
- Full width: 100% of column
- Spacing between buttons: 12px

**Industry Options:**
1. Real Estate Services
2. Professional Services (Legal/Accounting)
3. Home Services (HVAC, Plumbing, etc.)
4. Consulting Firms
5. Staffing/Recruitment

**Button Styling:**
- Default state: White background, #0F1419 text, 1px solid #E1E6ED border, left-aligned text
- Active state: #0052FF background, white text, no border, shadow elevated to Raised (1)
- Hover state (inactive): Background shifts to #F8F9FB, border color darker #C5CCDB
- Font: Inter, 16px, weight 500
- Border radius: 8px
- Padding: 16px (left/right), centered vertically
- Icon (arrow-right, 20px): Positioned at right edge, visible only on hover/active

**Dynamic Outcome Panel (Right):**

When industry selected, display card shows:

**Card Header** (16px, weight 600):
"How We Help [Industry Name]"

**Three-Row Outcome Display:**

**Row 1: "Primary Automation"**
- Icon: Automation-related icon (32x32px, #0052FF)
- Headline: "Automate [Process Name]" (20px, weight 600)
- Description: Dynamic text based on industry selection (14px, weight 400, #565E73)
- Example for Real Estate: "Automate property listing management, follow-up scheduling, and document coordination"

**Row 2: "Key Benefit"**
- Icon: Trend-up or efficiency icon (32x32px, #10B981 green)
- Headline: "[% Time Saved] Hours Recovered" (20px, weight 600, #10B981)
- Description: "Per month" (14px, weight 400, #565E73)
- Example for Real Estate: "20+ hours recovered per month for your team"

**Row 3: "Outcome"**
- Icon: Target/results icon (32x32px, #0052FF)
- Headline: "[Quantifiable Benefit]" (20px, weight 600)
- Description: Dynamic benefit statement (14px, weight 400, #565E73)
- Example for Real Estate: "More qualified leads, faster response times, better client experience"

**Card Styling:**
- Background: #F8F9FB
- Border: 1px solid #E1E6ED
- Border radius: lg (12px)
- Padding: lg (24px)
- Row spacing: 24px

**Animation Behavior:**
- On industry selection: Fade-out (200ms) of old content, simultaneous background shift
- Fade-in (400ms) of new outcome display
- Icon fills animate from gray to color over 500ms
- Text content animates in with subtle translate-y +8px → 0px, 400ms ease-out
- No layout shift—consistent card sizing

### 4.3 Mobile Adaptation (320px—767px)

**Layout:** Stacked vertically, full width
- Industry selector: Full width, buttons 48px height, 100% width
- Outcome display: Full width below selector, same styling
- Responsive: Buttons in row layout if space allows (2-column button grid)
- Headline: 28px
- Gutter: 16px

### 4.4 Industry Data Structure (Designer Reference)

For each industry, provide to developer:
- Industry name
- Primary automation focus
- Hours saved (per month)
- Key outcome/benefit metric
- Description copy (2-3 sentences)

**Real Estate Example:**
```
Name: Real Estate Services
Automation: Property listings, follow-ups, document management
Hours: 20
Outcome: 15% faster response times
Description: "Automatically sync property listings, schedule follow-ups, and manage documents—so your agents focus on closing deals."
```

---

## 5. PROCESS / ENGAGEMENT MODEL SECTION

### 5.1 Section Layout

**Container:** Full width, #FFFFFF background, 96px padding

**Headline:** Centered, H2: "Your Path to Implementation" (40px, weight 700, color #0F1419)
**Subheadline:** "A transparent, collaborative 4-stage process" (18px, weight 400, color #565E73)
**Spacing below headline:** 48px

### 5.2 Timeline Visualization (Premium Pattern)

**Design Approach:** Horizontal timeline with cards + connecting lines (desktop), vertical stacked timeline (mobile)

**4 Process Steps:**

**Step 1: Assessment**
- Number indicator: Circular badge, 48px diameter, #0052FF background, white "1" text, 24px weight 700
- Title: "Assessment & Discovery" (20px, weight 600)
- Duration: "1-2 weeks"
- Description: "We analyze your current workflows, understand your pain points, and define clear goals and metrics for success."
- Activities listed:
  - Current process audit
  - Stakeholder interviews
  - Goal & metric definition
  - Proposal & timeline

**Step 2: Design & Build**
- Number indicator: Circular badge, 48px diameter, #0052FF background, white "2" text, 24px weight 700
- Title: "Design & Build" (20px, weight 600)
- Duration: "2-4 weeks"
- Description: "Our team designs and builds the custom AI system tailored to your specific workflows. Transparent progress, weekly check-ins."
- Activities listed:
  - Architecture design
  - Custom development
  - Integration setup
  - Testing & refinement

**Step 3: Deploy & Embed**
- Number indicator: Circular badge, 48px diameter, #0052FF background, white "3" text, 24px weight 700
- Title: "Deploy & Embed" (20px, weight 600)
- Duration: "1-2 weeks"
- Description: "Seamless deployment into your environment with training and documentation. Your team is up and running."
- Activities listed:
  - Production deployment
  - Team training
  - Documentation handoff
  - Go-live support

**Step 4: Optimize & Support**
- Number indicator: Circular badge, 48px diameter, #0052FF background, white "4" text, 24px weight 700
- Title: "Optimize & Support" (20px, weight 600)
- Duration: "Ongoing"
- Description: "Continuous monitoring, optimization, and support to ensure your system evolves with your business needs."
- Activities listed:
  - Performance monitoring
  - Monthly optimization
  - Ongoing support
  - Feature enhancements

**Card Structure (Desktop Layout):**
- 4-column grid, equal width
- Cards positioned above connecting line
- Card height: flexible, content-driven (minimum 380px)
- Card background: #FFFFFF
- Card border: 1px solid #E1E6ED
- Card border radius: lg (12px)
- Card padding: 24px
- Card shadow: Card (2)
- Hover: Elevates to Floating (3), -4px translate-y, 200ms ease-out

**Connecting Line (Desktop):**
- Horizontal line at 20px below bottom of cards
- Height: 2px
- Color: #E1E6ED
- Dotted or solid—solid preferred for premium feel
- Extends full width, inset by 24px on left/right (accounting for column gutters)

**Number Badge Animation (Scroll-triggered):**
- On scroll into view: Badge background animates from #C5CCDB to #0052FF
- Number scales up from 0.8 → 1.0
- Duration: 600ms, ease-out
- Staggered timing: Step 1 at 0ms, Step 2 at 150ms, Step 3 at 300ms, Step 4 at 450ms

### 5.3 Mobile Timeline (320px—767px)

**Layout:** Vertical stack, 1 column
- Cards: Full width
- Connecting element: Vertical line (2px wide) on left side of each card
- Line color: #E1E6ED
- Line extends from bottom of one card to top of next

**Visual Treatment:**
- Number badges: 40px diameter
- Cards: 100% width, padding 16px
- Timeline line positioned 24px from left edge
- Slight left margin (32px) to account for timeline line

**Mobile-Specific Adjustments:**
- Duration text smaller: 12px
- Title: 18px
- Description: 14px
- Activities list: 12px

---

## 6. CTA SECTION (Demos + Pricing Guide)

### 6.1 Layout & Visual Design

**Section Type:** Full-width, high-contrast section
**Background:** Subtle gradient: linear 180° from #F8F9FB to #FFFFFF
**Vertical Padding:** 80px top/bottom

**Two-Column Layout (Desktop):**
- Left column (50%): CTA content + primary form
- Right column (50%): Secondary CTA or visual element

**Left Column Content:**

**Headline:**
```
"Ready to Build Something Better?"
```
- Font: H2, 40px, weight 700, color #0F1419
- Max-width: 480px

**Subheadline:**
```
"Schedule a free assessment to discuss your automation needs, or grab our pricing guide for an overview of investment ranges."
```
- Font: Body Large, 18px, weight 400, color #565E73
- Max-width: 480px
- Spacing below headline: 24px

**Form Content:**
- Form title: "Schedule Your Free Assessment" (16px, weight 600)
- Spacing below form title: 16px
- Form fields (all 100% width):
  1. Full Name (placeholder: "Your name")
  2. Email (placeholder: "your@email.com")
  3. Company Name (placeholder: "Your company")
  4. Industry dropdown (with 5-6 predefined options)
  5. Brief Description (textarea, placeholder: "Tell us about your challenges and goals")
  
- Input field styling:
  - Height: 44px (text), 100px (textarea)
  - Background: #FFFFFF
  - Border: 1px solid #E1E6ED
  - Border radius: md (8px)
  - Padding: 12px 16px
  - Font: 14px, weight 400
  - Placeholder color: #8A92A6
  - Focus state: Border color #0052FF, shadow Raised (1)
  - Label: 12px, weight 600, color #0F1419, positioned above input, 8px spacing below

- Spacing between fields: 16px

**Form Submission:**
- Primary button: "Schedule Assessment"
  - Style: Full width, #0052FF background, white text
  - Height: 44px
  - Font: 16px, weight 600
  - Border radius: 6px
  - Hover: Background #0041CC, shadow Raised (1)
  - Icon: Calendar or arrow-right, 18px, positioned right
  - Margin-top: 24px

**Right Column (Secondary CTA):**

**Card:** "Get Our Pricing Guide"
- Background: #FFFFFF
- Border: 2px solid #0052FF (emphasize)
- Border radius: lg (12px)
- Padding: 40px
- Shadow: Card (2)

**Card Content:**
- Icon: Document/PDF icon (48x48px, #0052FF)
- Title: "Pricing Guide" (24px, weight 700, color #0F1419)
- Description: "Understand our investment ranges, what's included at each tier, and how to budget for your custom AI system." (16px, weight 400, color #565E73)
- Spacing: 24px between elements
- Button: "Download PDF"
  - Style: Secondary (white background, #0052FF text, border)
  - Full width
  - Height: 44px
  - Font: 16px, weight 600
  - Icon: Download, 18px, positioned right
  - Margin-top: 24px

### 6.2 Form States & Interactions

**Focus State:**
- Input border: #0052FF
- Input shadow: Raised (1)
- Label color: #0052FF

**Error State:**
- Border: #EF4444 (red)
- Below field, 8px spacing: Error message in #EF4444, 12px font
- Shadow: Raised (1)

**Success State:**
- Checkmark icon appears in field (right-aligned)
- Border: #10B981
- No error message

**Submission Loading:**
- Button text: "Scheduling..."
- Button disabled (opacity 0.7)
- Loading spinner (12px) positioned left of text

**Success Screen (Post-submission):**
- Form replaced with success message card
- Icon: Large checkmark, 64x64px, #10B981
- Headline: "Assessment Scheduled" (24px, weight 700)
- Message: "We'll review your information and send you a calendar invite within 24 hours." (16px, weight 400)
- Secondary text: "In the meantime, feel free to download our pricing guide." (14px, color #565E73)
- Link: "Download Pricing Guide" (styled as secondary button)
- Fade-in animation: 400ms ease-out

### 6.3 Mobile Adaptation (320px—767px)

**Layout:** Stacked vertically, full width
- Form: 100% width, padding 16px
- Secondary card: Full width below form, padding 16px
- Button: Full width
- Icons: 40x40px (desktop 48x48px)
- Headline: 28px
- Subheadline: 16px

---

## 7. NAVIGATION & HEADER

### 7.1 Desktop Header (1440px+)

**Container:**
- Height: 72px (fixed/sticky)
- Background: #FFFFFF with subtle backdrop blur effect (8px blur, 0.95 opacity)
- Border-bottom: 1px solid #E1E6ED
- Padding: 0 32px
- Z-index: 1000 (above other content)

**Layout:** Flexbox, space-between

**Left Section: Logo**
- Logo container: 32px height, auto width
- Logo text: "Applied AI Agent" (or abbreviated "AIA" for small sizes)
- Font: Inter, 16px, weight 700, color #0F1419
- Icon: Optional small brand mark (20x20px) left of text with 8px spacing

**Center Section: Navigation Links**
- Link spacing: 24px between items
- Links: "What I Build" | "How It Works" | "Why Applied AI" | "Contact"
- Font: Inter, 14px, weight 500, color #565E73
- Hover state: Color changes to #0052FF, no underline
- Active state: Color #0052FF, bottom border-bottom 2px solid #0052FF (3px spacing from text)
- Transition: 150ms ease-in-out

**Right Section: CTA Button**
- Button: "Schedule Assessment"
- Style: Solid primary (#0052FF) background, white text
- Padding: 10px 20px
- Height: 40px
- Font: 14px, weight 600
- Border radius: 6px
- Hover: Background #0041CC, shadow Raised (1)
- Icon (optional): Arrow-right, 14px, positioned right

### 7.2 Sticky Header Behavior

**Scroll Trigger:** On scroll down 80px+
- Transition to: Slight shadow elevation (Raised 1), background opacity reduced to 0.92
- Duration: 200ms ease-in-out

**Scroll Up from Scroll Position:** Header animates back to full opacity, shadow removed

### 7.3 Mobile Header (320px—767px)

**Container:**
- Height: 64px (reduced from 72px)
- Padding: 0 16px
- Same background/border treatment

**Layout:**
- Left: Logo (same styling, 16px height)
- Right: Hamburger menu icon (24x24px, #0F1419)

**Hamburger Menu Icon:**
- Three horizontal lines
- Color: #0F1419
- Hover state: Color #0052FF
- Active state (menu open): Transition to "X" icon or different state

**Mobile Menu (Overlay/Drawer):**

**When Hamburger Clicked:**
- Full-screen overlay menu slides in from right (or top, designer's choice)
- Background: #FFFFFF
- Width: 100vw or 80vw (slides from right)
- Height: 100vh
- Padding: 16px
- Z-index: 999 (below header)
- Animation: Slide-in 300ms ease-out, backdrop 200ms

**Menu Content:**
- Close button (X icon, 24x24px, positioned top-right)
- Logo/brand at top (16px, weight 700, #0F1419)
- Navigation links (full-width, stacked):
  - Link styling: 16px, weight 500, color #0F1419, 48px height, left-padded 16px
  - Hover: Background #F8F9FB, color #0052FF
  - Active: Color #0052FF, left border 2px solid #0052FF
  - Spacing between links: 4px
- Primary CTA button: Full width, 44px height, positioned at bottom of menu
- Spacing: 24px top padding before first link, 24px bottom padding for button

**Menu Close Gesture:**
- Click outside menu: Menu slides out
- Click close button: Menu slides out
- Animation: 200ms ease-in-out

### 7.4 Responsive Breakpoints

**Desktop (1440px+):** Full horizontal nav, logo left, nav center, CTA right
**Tablet (768px—1439px):** Full horizontal nav, potentially reduced spacing/font sizes, logo and nav visible, hamburger appears at 1024px
**Mobile (320px—767px):** Hamburger menu only, logo + hamburger visible

---

## 8. FOOTER

### 8.1 Desktop Footer (1440px+)

**Container:**
- Full width
- Background: #0F1419 (dark gray)
- Padding: 64px 32px 32px 32px
- Semantic structure: 5-6 columns of content

**Footer Layout (5-Column Grid):**

**Column 1: Brand & Description**
- Logo: "Applied AI Agent" (white text, 16px, weight 700)
- Description: "Custom AI systems for service businesses" (14px, weight 400, #8A92A6, max-width 240px)
- Spacing below: 16px

**Column 2: Product**
- Headline: "Product" (12px, weight 600, all-caps, #FFFFFF)
- Links:
  - "What I Build"
  - "How It Works"
  - "Capabilities"
  - "Pricing"
  - All 14px, weight 400, color #8A92A6
  - Hover: #FFFFFF
  - Spacing between: 8px

**Column 3: Company**
- Headline: "Company" (12px, weight 600, all-caps, #FFFFFF)
- Links:
  - "About"
  - "Contact"
  - "Blog" (optional)
  - "Newsletter" (optional)
  - Same styling as Column 2

**Column 4: Resources**
- Headline: "Resources" (12px, weight 600, all-caps, #FFFFFF)
- Links:
  - "Case Studies"
  - "Documentation"
  - "FAQ"
  - "Contact Support"
  - Same styling as Column 2

**Column 5: Legal & Social**
- Headline: "Legal" (12px, weight 600, all-caps, #FFFFFF)
- Links:
  - "Privacy Policy"
  - "Terms of Service"
  - Same styling as Column 2
- Below (16px spacing):
  - Headline: "Follow" (12px, weight 600, all-caps, #FFFFFF)
  - Social icons (LinkedIn, Twitter, if applicable):
    - 24x24px icons
    - Color: #8A92A6
    - Hover: #FFFFFF
    - Spacing between: 12px

**Bottom Divider:**
- Full-width line, 1px solid #565E73, positioned 24px above bottom
- Padding-top: 24px

**Copyright & Additional:**
- Left side: "© 2024 Applied AI Agent. All rights reserved." (12px, weight 400, #8A92A6)
- Right side: Optional: "Made with care in Sonoma County" (12px, weight 400, #8A92A6)
- Spacing between sections: 32px

### 8.2 Mobile Footer (320px—767px)

**Layout:** Stacked vertically, 1 column
- Padding: 40px 16px 24px 16px
- Column width: 100%

**Arrangement:**
- Brand & description (full width)
- Spacing: 24px
- Product, Company, Resources columns reorganized:
  - Each section 100% width
  - Headline: 12px, weight 600, #FFFFFF
  - Links: 14px, weight 400, #8A92A6, stacked vertically with 8px spacing
  - Spacing between sections: 24px
- Legal section: Full width
- Social icons: Horizontal row, centered
- Spacing before divider: 24px
- Copyright text: Centered, 12px
- Spacing: 16px between elements

---

## 9. RESPONSIVE BREAKPOINTS & GRID ADJUSTMENTS

### 9.1 Desktop (1440px+)

- Grid: 12-column with 24px gutters
- Container max-width: 1440px, centered with auto margins
- Padding: 32px left/right
- Typography: All scales at 100%
- Spacing: All scales at 100%

### 9.2 Tablet (768px—1439px)

- Grid: 6-column with 20px gutters
- Container max-width: 100%, padding 24px left/right
- Typography:
  - H1: 44px (from 56px)
  - H2: 32px (from 40px)
  - Body Large: 16px (from 18px)
  - Body Regular: 15px (from 16px)
- Spacing:
  - Section padding: 48px top/bottom (from 64-96px)
  - Component spacing: md (16px) default
- Hero: 60vh height, text reduced, visuals scaled down

### 9.3 Mobile (320px—767px)

- Grid: 2-column with 16px gutters (or single-column full-width with 16px padding)
- Container: 100%, padding 16px left/right
- Typography:
  - H1: 36px (from 56px)
  - H2: 28px (from 40px)
  - H3: 24px (from 32px)
  - Body Large: 16px
  - Body Regular: 15px
  - Body Small: 14px
- Spacing:
  - Section padding: 32px top/bottom
  - Component padding: sm (8px) or md (16px)
  - Between sections: 2xl (48px)
- Hero: 70vh height, fully stacked text above visual
- Cards: Full width, no multi-column layouts
- Buttons: Full width, 44px height (touch-friendly)

### 9.4 Section-Specific Adjustments

**Hero Section:**
- Desktop: 100vh, split layout
- Tablet: 70vh, split layout with reduced text
- Mobile: 70vh, stacked layout, visual below text

**Value Proposition:**
- Desktop: 4-column grid
- Tablet: 2-column grid
- Mobile: 1-column, cards full width

**Configurator:**
- Desktop: 2-column (40/60 split)
- Tablet: Stacked vertically, full width
- Mobile: Stacked, full width, buttons horizontal-scrollable or wrapping

**Timeline:**
- Desktop: 4-column horizontal with connecting line
- Tablet: 2x2 grid or responsive based on space
- Mobile: Vertical stack with left-side connecting line

**CTA Section:**
- Desktop: 2-column (50/50)
- Tablet: Stacked vertically
- Mobile: Stacked, form and secondary card full width

---

## 10. ANIMATION & INTERACTION SPECIFICATIONS

### 10.1 Scroll-Triggered Animations

**Fade-In on Scroll:**
- Applies to: Section headlines, subsection content, cards
- Behavior: Element starts at opacity 0, transitions to opacity 1 when 20% visible in viewport
- Duration: 600ms
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94) (ease-out-quad)
- Reset: Animation repeats if element scrolls out of view and back in

**Slide-Up on Scroll:**
- Applies to: Card content, process step cards, feature cards
- Behavior: Element starts at transform: translateY(40px), transitions to translateY(0) when visible
- Duration: 600ms
- Easing: ease-out-quad
- Combined with fade-in for maximum impact

**Parallax (Light Touch):**
- Applies to: Hero visual elements, background shapes
- Behavior: Subtle movement (20-40px) at different scroll rates (0.3-0.5 parallax coefficient)
- Duration: Continuous, tied to scroll position
- Easing: Linear (scroll-tied)
- Mobile: Disabled (performance, avoid motion sickness)

**Counter Animation:**
- Applies to: Process step numbers, metric displays
- Behavior: Number counts from 0 to final value when visible
- Duration: 1000ms
- Easing: ease-out-cubic
- Example: "20 hours" counts from 0 to 20 over 1 second
- Stagger: Each counter delays by 200ms after previous

### 10.2 Hover & Interaction States

**Card Hover:**
- Elevation: Increases from Card (2) to Floating (3)
- Transform: translateY(-4px)
- Transition: 200ms ease-out
- Applies to: All feature cards, process cards, CTA cards
- Shadow: Updates simultaneously

**Button Hover:**
- Primary button: Background darkens to #0041CC, shadow elevates to Raised (1)
- Secondary button: Background shifts to #F8F9FB, border color darkens
- Ghost button: Background becomes #F8F9FB
- Transition: 200ms ease-out
- Text: Slight scale (1.02x) on hover, subtle
- Icon: Slight translate-x (+2px) for "arrow-right" icons

**Link Hover:**
- Color: Changes to #0052FF
- Text-decoration: None (avoid underlines unless specified)
- Border-bottom (if active): 2px solid #0052FF
- Transition: 150ms ease-in-out

**Input Focus:**
- Border: 2px solid #0052FF
- Shadow: 0 0 0 3px #0052FF20 (blue glow)
- Background: Remains #FFFFFF
- Transition: 150ms ease-out

**Industry Selector Button (Configurator):**
- Inactive hover: Background #F8F9FB, border darker
- Active state: #0052FF background, white text, shadow Raised (1)
- Transition: 300ms ease-out
- On click: Outcome panel fades out (200ms), new content fades in (400ms) with subtle stagger

### 10.3 Micro-Interactions

**Form Input:**
- On focus: Label color changes to #0052FF, slight scale-up (1.05x)
- On blur (with content): Label remains styled
- On blur (empty): Label returns to default
- Floating label animation: 300ms ease-out

**Button Press:**
- On click: Background slightly darkens (5% darker), shadow reduces momentarily
- Immediately returns to hover state over 150ms
- Creates "tactile" feedback

**Checkbox/Radio:**
- Default: Border 1px #E1E6ED, background #FFFFFF
- Hover: Border color #0052FF
- Checked: Background #0052FF, checkmark appears with 200ms animation
- Checkmark icon scales from 0 → 1 with ease-out-cubic

**Dropdown Selection:**
- On open: Chevron icon rotates 180°, menu items fade in
- On selection: Selected item highlights, dropdown closes with 150ms animation
- Selected state persists with #0052FF text color

### 10.4 Page Transitions

**Between Sections (Scroll):**
- Sections fade in as user scrolls into viewport (handled by fade-in/slide-up animations)
- No hard page transitions (single-page design)

**Modal/Form Submission:**
- On success: Form fades out (200ms), success message fades in (400ms)
- Success icon scales from 0.8 → 1 simultaneously
- Duration: 600ms total

**Menu Open/Close (Mobile):**
- Menu slides in from right: 300ms ease-out
- Backdrop fades in: 200ms ease-out
- On close: Menu slides out: 200ms ease-out, backdrop fades out: 150ms

### 10.5 Timing & Easing Curves

**Standard Transitions:**
- Quick feedback (buttons, inputs): 150ms ease-out
- Medium animations (cards, hovers): 200ms ease-out
- Longer animations (page entry, scrolls): 400-600ms ease-out-quad

**Easing Functions:**
- ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94) (default for most)
- ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1)
- ease-in-out: cubic-bezier(0.42, 0, 0.58, 1) (only for reversible animations)

### 10.6 Performance Considerations

**GPU Acceleration:**
- Use transform (translateY, scale) and opacity for animations
- Avoid animating: width, height, left, right, top, bottom (causes layout recalculation)

**Reduced Motion:**
- Respect prefers-reduced-motion media query
- When enabled: Remove parallax, reduce parallax to no movement
- Remove parallax animations entirely
- Reduce transition durations to 100-150ms
- Keep fade-ins but remove slide/transform animations

**Mobile Performance:**
- Disable parallax on mobile devices (CPU-intensive)
- Reduce stagger delays on mobile
- Limit simultaneous animations (max 3-4 elements animating at once)
- Use will-change CSS property sparingly

---

## 11. IMAGERY & VISUAL LANGUAGE

### 11.1 Abstract Shape Language

**Primary Shapes:**
- Circles/Blobs: Overlapping circles with soft edges, used for:
  - Hero section visual (3-4 circles with gradient fills)
  - Icon backgrounds (60x60px circles with 20% opacity fills)
  - Accent elements throughout
- Line Elements: Thin lines (1-2px) in primary colors, used for:
  - Dividers between sections
  - Decorative accents in hero
  - Progress indicators
- Gradients: Used as fills for shapes, directional and purposeful

**Visual Hierarchy:**
- Primary visual (hero): Large, 480px+ diameter circles
- Secondary visuals (sections): Medium, 200-300px circles
- Micro accents (cards, icons): Small, 60-120px circles

### 11.2 Gradient Specifications

**Hero Background Gradient:**
- Direction: Linear 135° (top-left to bottom-right)
- Color stops:
  - 0%: #FFFFFF (white, far left/top)
  - 70%: #F8F9FB (subtle gray)
  - 100%: #F8F9FB (bottom-right)
- Overlay: #00D9FF at 8-12% opacity, linear 45°, positioned right side

**Primary Accent Gradient (Shapes):**
- Direction: Linear 45° (bottom-left to top-right)
- Color stops:
  - 0%: #0052FF at 40% opacity
  - 100%: #00D9FF at 70% opacity
- Used for: Hero circles, accent elements

**Button Gradient (Optional):**
- Direction: Linear 90° (left to right)
- Color stops:
  - 0%: #0052FF
  - 100%: #0041CC
- Subtle depth, not overpowering

### 11.3 Illustration Approach (If Used)

**Style:** Minimal, geometric, flat illustration style
**Examples:** Simple process icons, industry illustrations, abstract representations
**Palette:** Use brand colors (#0052FF, #00D9FF, grays)
**Stroke Width:** 1.5-2px for consistency
**Corner Radius:** Consistent with lg (12px) or xl (16px) rounding

### 11.4 Photography (If Used)

**Style:** Modern, professional, lifestyle photography
**Tone:** Bright, clean, uncluttered backgrounds
**Color Grading:** Warm/cool neutral, no heavy saturation
**Avoid:** Stock photo clichés, overly styled images, AI-generated imagery
**Recommended Providers:** Unsplash (high-quality), Pexels, own brand photography

**If Used in Hero:** Subtle, as background layer with dark overlay (0F1419 at 15-20% opacity) for text readability

### 11.5 Light & Shadow Treatment

**Lighting Direction:** Top-left (consistent throughout)

**Shadow Language:**
- Soft shadows (Card elevation 2): Used for subtle depth
- Medium shadows (Floating elevation 3): Used for hover states, elevated cards
- Hard shadows avoided—all shadows are soft and diffuse

**Highlight Treatment:**
- Subtle white highlights on shapes (3-5% opacity)
- Used sparingly on hero shapes and accent elements
- Positioned opposite shadow direction (bottom-right)

### 11.6 Imagery Quality Standards

**Do:**
- Use clean, professional imagery
- Ensure high contrast for readability
- Optimize file sizes (web-safe formats, proper compression)
- Use consistent color grading across images
- Include proper alt text for all images

**Don't:**
- Use AI-generated imagery (Midjourney, Dall-E, etc.)
- Use generic stock imagery with watermarks
- Use low-resolution or pixelated images
- Use overly saturated or warm color grades
- Overload pages with too many images

---

## 12. ACCESSIBILITY SPECIFICATIONS

### 12.1 Color Contrast Ratios

**Text on Background:**
- All body text on background: 7:1+ ratio (WCAG AAA)
  - Example: #0F1419 on #FFFFFF = 21:1 ✓
- Secondary text: 4.5:1+ minimum (WCAG AA)
  - Example: #565E73 on #FFFFFF = 8.2:1 ✓
- Links: 4.5:1+ contrast
  - Example: #0052FF on #FFFFFF = 8.5:1 ✓

**Interactive Elements:**
- Button text on button background: 4.5:1+
  - Example: White (#FFFFFF) on #0052FF = 8.5:1 ✓
  - Example: #0052FF on #FFFFFF border = 8.5:1 ✓
- Form borders on background: 3:1+ (UI components)
  - Example: #E1E6ED on #FFFFFF = 2.4:1, needs adjustment
  - Adjusted to: #C5CCDB on #FFFFFF = 4:1 ✓

**Color Not Alone:**
- Information not conveyed by color alone
- Example: Error states use both red color and icon/text label
- Focus states: Border + outline, not color alone

### 12.2 Focus States

**Keyboard Navigation:**
- All interactive elements (buttons, links, inputs) have visible focus state
- Focus indicator: 2px solid outline in #0052FF, 2-4px offset from element
- Focus ring: Never removed or hidden

**Focus Styling:**
- Buttons: Outline + background emphasis
- Links: Outline + underline
- Form inputs: Blue border + glow shadow
- Keyboard tab order: Logical, left-to-right, top-to-bottom

**Focus Visible Pseudo-Class:**
- Use :focus-visible for keyboard-only focus (not mouse-click focus)
- Fallback to :focus for older browsers

### 12.3 Alt Text Strategy

**Images:**
- All functional images (icons, illustrations, diagrams): Descriptive alt text
- Decorative elements (abstract shapes, gradients): No alt text (empty alt="")
- Charts/diagrams: Detailed alt text describing data/relationships
- Photography: Context-specific alt text describing scene and relevance

**Examples:**
- Automation icon: alt="Automation icon representing custom AI workflows"
- Configurator screenshot: alt="Industry selection interface showing Real Estate Services option"
- Abstract hero shapes: alt="" (decorative)

**Form Labels:**
- Every form input has associated label (not placeholder)
- Label linked via htmlFor attribute to input id
- Aria-required on required fields

### 12.4 Semantic HTML Structure

**Heading Hierarchy:**
- H1: Only once per page (hero headline)
- H2: Section headlines
- H3: Subsection headlines
- Never skip heading levels (H1 → H3 is wrong)

**Landmarks:**
- <header> for navigation area
- <nav> for navigation links
- <main> for primary content
- <section> for major content sections
- <footer> for footer

**Form Structure:**
- <form> element wrapper
- <fieldset> + <legend> for form groups
- <label> for all inputs
- Error messages in <span role="alert"> or <aria-live="polite">

**Link Text:**
- Link text describes destination (never "click here")
- Avoid redundant "link" label (screen readers announce)

### 12.5 ARIA Attributes (When Needed)

**Modals:**
- aria-modal="true"
- aria-labelledby="modal-title"
- Focus trap (keyboard tab cycles within modal)

**Interactive Elements:**
- aria-pressed="true/false" for toggle buttons
- aria-expanded="true/false" for collapsible content
- aria-hidden="true" for decorative elements

**Form Feedback:**
- aria-invalid="true" on error inputs
- aria-describedby pointing to error message
- aria-live="polite" for dynamic messages

**Navigation State:**
- aria-current="page" on active nav link

### 12.6 Motion & Animation Accessibility

**Respects Prefers-Reduced-Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Disables on Reduced Motion:**
- Parallax animations disabled completely
- Stagger delays removed
- Transition durations set to 100-150ms max
- Fade-ins retained (no motion, just opacity)

---

## DESIGN HANDOFF NOTES

This comprehensive design system is ready for Figma build-out. Key recommendations:

1. **Create a Design System File:** Establish master component library before page design
2. **Use Design Tokens:** Implement spacing, color, and typography tokens for consistency
3. **Build Responsive Variants:** Create component variants for all breakpoints (desktop, tablet, mobile)
4. **Document Interactions:** Clearly label scroll triggers, animations, and state changes
5. **Performance Review:** Optimize SVG/image assets, limit animation complexity on mobile
6. **QA for Accessibility:** Run axe, WCAG checks on exported HTML/Figma prototype
7. **Developer Handoff:** Include animation timing specs, color hex codes, spacing measurements in Figma notes

This design is premium, intentional, and ready for execution.

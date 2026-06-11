# Applied AI Agent Website Rebuild
## Comprehensive Claude Code Implementation Prompt

**Project:** Complete website rebuild for appliedaiagent.ai  
**Scope:** Full-stack implementation from design to deployment  
**Target Audience:** Service business owners seeking custom AI automation  
**Tech Stack:** Next.js 14+ (App Router), React, TypeScript, Tailwind CSS, Framer Motion  
**Outcome:** Production-ready, high-performance, fully accessible website  

---

## 1. TECHNICAL ARCHITECTURE

### 1.1 Tech Stack Rationale

**Next.js 14+ (App Router):**
- Built-in image optimization, font optimization, code splitting
- Server components for performance (less JavaScript shipped to client)
- Built-in API routes for form handling
- Excellent performance (Lighthouse 90+)
- Simple deployment to Vercel
- Type-safe file-based routing

**React 18+:**
- Component-based architecture for maintainability
- Hooks for state management (simple enough for this project scale)
- Concurrent features for smoother interactions

**TypeScript:**
- Type safety reduces bugs
- Excellent developer experience
- Self-documenting code
- Better IDE support and refactoring

**Tailwind CSS:**
- Rapid development, no context switching
- Responsive design built-in (mobile-first breakpoints)
- Consistent spacing/color system
- PurgeCSS optimization (unused styles removed)
- Customizable config for brand colors/typography

**Framer Motion 11+:**
- Industry-standard animation library
- Scroll-triggered animations out-of-the-box
- Excellent performance (uses CSS transforms)
- Great for micro-interactions and page transitions

**Additional Libraries:**
- **react-intersection-observer:** Efficient scroll detection for animations
- **react-hook-form:** Lightweight form handling, excellent UX
- **zod:** TypeScript-first schema validation
- **clsx:** Conditional class merging
- **next/image:** Next.js Image optimization
- **@radix-ui/react-icons:** Clean icon library (or custom SVGs)

### 1.2 Performance Targets

**Lighthouse Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Bundle Size Targets:**
- Initial JS: < 150KB (gzipped)
- CSS: < 50KB (gzipped)
- Total page load: < 2MB

**Image Optimization:**
- All images served via next/image
- WebP format with fallbacks
- Lazy loading for below-the-fold images
- Responsive sizes (srcset) for different devices

---

## 2. PROJECT STRUCTURE

### 2.1 Directory Organization

```
applied-ai-agent/
├── public/                      # Static assets
│   ├── images/
│   │   ├── hero/
│   │   ├── industries/
│   │   ├── icons/
│   │   ├── logos/
│   │   └── og-image.jpg         # Open Graph image
│   ├── icons/                   # SVG icons
│   ├── fonts/                   # Custom fonts (Inter)
│   └── favicon.ico
├── src/
│   ├── app/                     # Next.js app directory
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   └── api/
│   │       ├── contact/route.ts # Contact form endpoint
│   │       └── subscribe/route.ts # Newsletter endpoint
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ValuePropositionSection.tsx
│   │   │   ├── ConfiguratorSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── index.ts          # Export all sections
│   │   ├── interactive/
│   │   │   ├── IndustryConfigurator.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── DemoForm.tsx
│   │   │   ├── PricingGuideForm.tsx
│   │   │   └── index.ts
│   │   ├── common/
│   │   │   ├── Button.tsx        # Reusable button component
│   │   │   ├── Card.tsx          # Reusable card component
│   │   │   ├── Input.tsx         # Reusable input component
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── index.ts
│   │   └── icons/
│   │       ├── ArrowRight.tsx
│   │       ├── CheckCircle.tsx
│   │       ├── Calendar.tsx
│   │       └── index.ts
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useFormSubmit.ts
│   │   ├── useIndustryConfig.ts
│   │   └── index.ts
│   ├── lib/
│   │   ├── constants.ts          # Brand colors, spacing, etc.
│   │   ├── types.ts              # TypeScript types/interfaces
│   │   ├── api.ts                # API client functions
│   │   └── animations.ts         # Animation variants
│   ├── styles/
│   │   ├── tailwind.config.ts    # Tailwind configuration
│   │   └── theme.ts              # Color/spacing exports
│   └── data/
│       ├── industries.ts         # Industry data for configurator
│       ├── navigation.ts         # Navigation links
│       ├── testimonials.ts       # (Optional) testimonials
│       └── metadata.ts           # SEO metadata
├── .env.local                   # Local environment variables
├── .env.example                 # Example env file
├── tailwind.config.ts           # Tailwind config
├── tsconfig.json                # TypeScript config
├── next.config.ts               # Next.js config
├── package.json
└── README.md
```

### 2.2 Component Hierarchy

```
Layout
├── Header
│   ├── Logo
│   ├── Navigation
│   └── MobileMenu
├── Main Content
│   ├── HeroSection
│   ├── ValuePropositionSection
│   │   ├── FeatureCard (x4)
│   ├── ConfiguratorSection
│   │   ├── IndustrySelector
│   │   └── OutcomeDisplay
│   ├── ProcessSection
│   │   └── ProcessTimeline
│   │       ├── ProcessCard (x4)
│   └── CTASection
│       ├── DemoForm
│       └── PricingGuideCard
└── Footer
```

### 2.3 Asset Organization

**Images:**
- Hero imagery: `/public/images/hero/`
- Industry icons: `/public/images/industries/`
- Feature icons: `/public/icons/` (SVG preferred)
- Background patterns: `/public/images/patterns/`
- OG image: `/public/og-image.jpg` (1200x630px)

**Fonts:**
- Self-host Inter font (or use Google Fonts with next/font)
- Store in `/public/fonts/` if self-hosted
- Load via `@font-face` or next/font

---

## 3. HERO SECTION SPECIFICATIONS

### 3.1 Component Structure

```tsx
// HeroSection.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/common/Button';
import HeroVisuals from '@/components/Hero/HeroVisuals';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Headline & Copy */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Custom AI Systems Built for Service Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Stop settling for generic tools. We design and deploy AI workflows 
              that integrate seamlessly into your business, giving you the competitive edge you need.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                href="#contact"
                className="inline-flex items-center gap-2"
              >
                Schedule Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                href="#capabilities"
              >
                View Capabilities
              </Button>
            </div>
          </div>

          {/* Right: Visual Element */}
          <HeroVisuals />
        </motion.div>
      </div>
    </section>
  );
}
```

### 3.2 Styling Approach (Tailwind)

**Color Utilities (Custom Tailwind Config):**
```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052FF',
          cyan: '#00D9FF',
          dark: '#0F1419',
          text: {
            primary: '#0F1419',
            secondary: '#565E73',
            tertiary: '#8A92A6',
          },
          border: '#E1E6ED',
          surface: {
            primary: '#FFFFFF',
            secondary: '#F8F9FB',
          },
        },
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.08)',
        floating: '0 4px 16px rgba(0, 0, 0, 0.12)',
        modal: '0 12px 32px rgba(0, 0, 0, 0.16)',
      },
    },
  },
};
```

**Typography (Tailwind Config):**
```ts
fontSize: {
  xs: ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
  sm: ['14px', { lineHeight: '1.5', letterSpacing: '0' }],
  base: ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
  lg: ['18px', { lineHeight: '1.6', letterSpacing: '0' }],
  xl: ['20px', { lineHeight: '1.4', letterSpacing: '0' }],
  '2xl': ['32px', { lineHeight: '1.3', letterSpacing: '0' }],
  '3xl': ['40px', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
  '4xl': ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
},
```

### 3.3 Hero Visuals Component

**Approach:** SVG-based animated shapes OR Three.js for advanced interactivity

**SVG Approach (Recommended for Performance):**
```tsx
// components/Hero/HeroVisuals.tsx
import { motion } from 'framer-motion';

export default function HeroVisuals() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative w-full h-96 md:h-full md:min-h-screen flex items-center justify-center"
    >
      <svg
        className="w-full h-full max-w-2xl"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary Circle with Gradient */}
        <defs>
          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0052FF', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#00D9FF', stopOpacity: 0.7 }} />
          </linearGradient>
          
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Animated Primary Circle */}
        <motion.circle
          cx="360"
          cy="240"
          r="240"
          fill="url(#primaryGrad)"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          filter="url(#blur)"
        />

        {/* Secondary Circle */}
        <motion.circle
          cx="480"
          cy="360"
          r="160"
          fill="#00D9FF"
          opacity={0.5}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </motion.div>
  );
}
```

### 3.4 Responsive Behavior

**Breakpoints in Component:**
```tsx
className="
  min-h-screen md:min-h-[80vh]           // Height
  px-4 sm:px-6 lg:px-8                   // Padding
  grid grid-cols-1 md:grid-cols-2        // Layout
  gap-8 md:gap-12                        // Spacing
  text-4xl sm:text-5xl lg:text-6xl       // Typography scale
"
```

**CSS Media Queries (for complex responsiveness):**
```css
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    padding: 3rem 1rem;
  }
  .hero-visuals {
    order: 2;
    height: 300px;
  }
}
```

### 3.5 Animation Details

**Framer Motion Variants:**
```tsx
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};
```

---

## 4. INTERACTIVE CONFIGURATOR / COMPARISON TOOL

### 4.1 Industry Data Structure

```ts
// data/industries.ts
export interface Industry {
  id: string;
  name: string;
  icon: string;
  automation: string;
  hoursSaved: number;
  outcome: string;
  description: string;
}

export const industries: Industry[] = [
  {
    id: 'real-estate',
    name: 'Real Estate Services',
    icon: '🏠',
    automation: 'Property listings, follow-ups, document management',
    hoursSaved: 20,
    outcome: '15% faster response times',
    description: 'Automatically sync property listings, schedule follow-ups, and manage documents—so your agents focus on closing deals.',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: '⚖️',
    automation: 'Client intake, document generation, billing workflows',
    hoursSaved: 18,
    outcome: '25% reduction in administrative tasks',
    description: 'Streamline client onboarding, automate document generation, and simplify billing—so your team focuses on billable work.',
  },
  // ... 3 more industries
];
```

### 4.2 Configurator Component

```tsx
// components/interactive/IndustryConfigurator.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '@/data/industries';
import Button from '@/components/common/Button';

export default function IndustryConfigurator() {
  const [selectedId, setSelectedId] = useState(industries[0].id);
  const selected = industries.find((ind) => ind.id === selectedId) || industries[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See What's Possible for Your Industry
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore how our AI systems transform service businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Industry Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Select Your Industry
            </label>
            <div className="space-y-2">
              {industries.map((industry) => (
                <motion.button
                  key={industry.id}
                  onClick={() => setSelectedId(industry.id)}
                  className={`
                    w-full px-4 py-3 rounded-lg text-left font-medium
                    transition-all duration-200
                    ${
                      selectedId === industry.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                    }
                  `}
                  whileHover={{ y: selectedId === industry.id ? 0 : -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {industry.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Outcome Display */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              How We Help {selected.name}
            </label>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                {/* Row 1: Automation */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex gap-3 mb-2">
                    <span className="text-2xl">⚙️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Automate {selected.automation.split(',')[0]}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {selected.automation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2: Time Saved */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex gap-3 mb-2">
                    <span className="text-2xl">📈</span>
                    <div>
                      <p className="text-lg font-bold text-green-600">
                        {selected.hoursSaved}+ hours recovered
                      </p>
                      <p className="text-sm text-gray-600">Per month</p>
                    </div>
                  </div>
                </div>

                {/* Row 3: Outcome */}
                <div>
                  <div className="flex gap-3 mb-2">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {selected.outcome}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {selected.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 4.3 State Management

**Use React Hooks (for this scale):**
```tsx
const [selectedId, setSelectedId] = useState(industries[0].id);
```

**Optional: useReducer for Complex Logic:**
```tsx
const [state, dispatch] = useReducer(configuratorReducer, initialState);

function configuratorReducer(state, action) {
  switch (action.type) {
    case 'SELECT_INDUSTRY':
      return { ...state, selectedId: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
```

---

## 5. PROCESS TIMELINE SECTION

### 5.1 Component Structure

```tsx
// components/interactive/ProcessTimeline.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProcessCard from './ProcessCard';
import { processSteps } from '@/data/processSteps';

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Path to Implementation
          </h2>
          <p className="text-lg text-gray-600">
            A transparent, collaborative 4-stage process
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop Only) */}
          <div
            className="
              hidden md:block absolute top-20 left-0 right-0 h-0.5
              bg-gray-300
            "
            style={{ width: 'calc(100% - 2rem)' }}
          />

          {/* Process Cards */}
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              step={step}
              stepNumber={index + 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 5.2 Process Card Component with Animations

```tsx
// components/interactive/ProcessCard.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface ProcessStep {
  id: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
}

interface ProcessCardProps {
  step: ProcessStep;
  stepNumber: number;
  index: number;
}

export default function ProcessCard({
  step,
  stepNumber,
  index,
}: ProcessCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8 }}
      className="relative"
    >
      {/* Step Number Badge */}
      <motion.div
        initial={{ scale: 0.8, backgroundColor: '#C5CCDB' }}
        animate={inView ? { scale: 1, backgroundColor: '#0052FF' } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
        className="
          w-12 h-12 rounded-full flex items-center justify-center
          text-white font-bold text-lg mb-4
        "
      >
        {stepNumber}
      </motion.div>

      {/* Card Content */}
      <div
        className="
          bg-white border border-gray-200 rounded-lg p-6
          shadow-card hover:shadow-floating
          transition-shadow duration-200
        "
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {step.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{step.duration}</p>
        <p className="text-gray-600 mb-4">{step.description}</p>

        {/* Activity List */}
        <ul className="space-y-2">
          {step.activities.map((activity, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span className="text-sm text-gray-600">{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
```

### 5.3 Mobile Timeline (Vertical)

```tsx
// Mobile Timeline Line (CSS)
@media (max-width: 768px) {
  .timeline-container {
    position: relative;
    padding-left: 2rem;
  }

  .timeline-container::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #e5e7eb;
  }

  .process-card {
    margin-bottom: 2rem;
    margin-left: 1rem;
  }
}
```

---

## 6. FORM COMPONENTS

### 6.1 Assessment Form Component

```tsx
// components/interactive/DemoForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { submitContactForm } from '@/lib/api';

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name required'),
  industry: z.string().min(1, 'Please select an industry'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError(null);
      await submitContactForm(data);
      setSubmitted(true);

      // Show success for 5 seconds then reset
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Assessment Scheduled
        </h3>
        <p className="text-gray-600">
          We'll review your information and send you a calendar invite within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
          Full Name
        </label>
        <Input
          id="fullName"
          placeholder="Your name"
          {...register('fullName')}
          error={errors.fullName?.message}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
          Company Name
        </label>
        <Input
          id="company"
          placeholder="Your company"
          {...register('company')}
          error={errors.company?.message}
        />
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-semibold text-gray-900 mb-2">
          Industry
        </label>
        <select
          id="industry"
          {...register('industry')}
          className={`
            w-full px-4 py-2 rounded-lg border text-gray-900
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${errors.industry ? 'border-red-500' : 'border-gray-300'}
          `}
        >
          <option value="">Select an industry</option>
          <option value="real-estate">Real Estate Services</option>
          <option value="professional">Professional Services</option>
          <option value="home-services">Home Services</option>
          <option value="consulting">Consulting Firms</option>
          <option value="staffing">Staffing/Recruitment</option>
        </select>
        {errors.industry && (
          <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Tell us about your needs
        </label>
        <textarea
          id="message"
          placeholder="Describe your challenges and goals..."
          rows={4}
          {...register('message')}
          className={`
            w-full px-4 py-2 rounded-lg border text-gray-900 resize-none
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${errors.message ? 'border-red-500' : 'border-gray-300'}
          `}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={isSubmitting}
        className="!mt-6"
      >
        {isSubmitting ? 'Scheduling...' : 'Schedule Assessment'}
      </Button>
    </form>
  );
}
```

### 6.2 Input Component (Reusable)

```tsx
// components/common/Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-2 rounded-lg border text-gray-900
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-colors duration-150
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {helper && !error && <p className="text-gray-500 text-sm mt-1">{helper}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
```

### 6.3 Form Submission API

```tsx
// lib/api.ts
export async function submitContactForm(data: ContactFormData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit form');
  }

  return response.json();
}
```

### 6.4 API Route Handler

```tsx
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { fullName, email, company, industry, message } = body;
    if (!fullName || !email || !company || !industry || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email (via SendGrid, Resend, or custom service)
    await sendContactEmail({
      fullName,
      email,
      company,
      industry,
      message,
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
```

---

## 7. ANIMATION & INTERACTION IMPLEMENTATION

### 7.1 Animation Libraries & Setup

**Install Framer Motion:**
```bash
npm install framer-motion react-intersection-observer
```

**Animation Constants:**
```ts
// lib/animations.ts
export const easeOutQuad = [0.25, 0.46, 0.45, 0.94];
export const easeOutCubic = [0.215, 0.61, 0.355, 1];

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOutQuad },
};

export const slideIn = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: easeOutQuad },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: easeOutQuad },
};
```

### 7.2 Scroll-Triggered Animations Hook

```ts
// hooks/useScrollAnimation.ts
import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(threshold = 0.2, triggerOnce = true) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
}
```

**Usage:**
```tsx
export default function Section() {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
    >
      Content fades in on scroll
    </motion.div>
  );
}
```

### 7.3 Parallax Implementation

```tsx
// components/common/ParallaxSection.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Disable parallax on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
```

### 7.4 Counter Animation Component

```tsx
// components/common/Counter.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

export default function Counter({ target, duration = 1, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
```

### 7.5 Respects Prefers-Reduced-Motion

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 8. STYLING SYSTEM

### 8.1 Tailwind Configuration

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052FF',
          cyan: '#00D9FF',
          dark: '#0F1419',
          light: '#FFFFFF',
        },
        text: {
          primary: '#0F1419',
          secondary: '#565E73',
          tertiary: '#8A92A6',
        },
        surface: {
          primary: '#FFFFFF',
          secondary: '#F8F9FB',
        },
        border: '#E1E6ED',
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.08)',
        floating: '0 4px 16px rgba(0, 0, 0, 0.12)',
        modal: '0 12px 32px rgba(0, 0, 0, 0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        sm: ['14px', { lineHeight: '1.5', letterSpacing: '0' }],
        base: ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
        lg: ['18px', { lineHeight: '1.6', letterSpacing: '0' }],
        xl: ['20px', { lineHeight: '1.4', letterSpacing: '0' }],
        '2xl': ['32px', { lineHeight: '1.3', letterSpacing: '0' }],
        '3xl': ['40px', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        '4xl': ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};

export default config;
```

### 8.2 Global Styles

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Font Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* CSS Variables */
:root {
  --color-primary: #0052ff;
  --color-secondary: #00d9ff;
  --color-dark: #0f1419;
  --color-light: #ffffff;
  --color-border: #e1e6ed;
  --spacing-unit: 8px;
}

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--color-light);
  color: var(--color-dark);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

/* Link Styles */
a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 150ms ease-in-out;
}

a:hover {
  color: var(--color-secondary);
}

a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 8.3 Button Component (Reusable)

```tsx
// components/common/Button.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      href,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-semibold
      transition-all duration-200 rounded-md
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
    };

    const variantStyles = {
      primary: `
        bg-brand-blue text-white
        hover:bg-blue-700 active:bg-blue-800
        shadow-card hover:shadow-floating
      `,
      secondary: `
        bg-white text-brand-blue border-2 border-brand-blue
        hover:bg-blue-50 active:bg-blue-100
      `,
      ghost: `
        bg-transparent text-brand-blue
        hover:bg-blue-50
      `,
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    const classNames = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

    if (href) {
      return (
        <Link href={href}>
          <a className={classNames}>{children}</a>
        </Link>
      );
    }

    return (
      <button ref={ref} className={classNames} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
```

---

## 9. NAVIGATION & LAYOUT

### 9.1 Header Component

```tsx
// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'What I Build', href: '#build' },
    { label: 'How It Works', href: '#process' },
    { label: 'Why Applied AI', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <span>AIA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
            >
              Schedule Assessment
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          links={navLinks}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </motion.header>
  );
}
```

### 9.2 Footer Component

```tsx
// components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Applied AI Agent</h3>
            <p className="text-sm">Custom AI systems for service businesses</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#build">What I Build</Link></li>
              <li><Link href="#process">How It Works</Link></li>
              <li><Link href="#capabilities">Capabilities</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="#blog">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#case-studies">Case Studies</Link></li>
              <li><Link href="#docs">Documentation</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © {currentYear} Applied AI Agent. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Made with care in Sonoma County
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## 10. IMAGE HANDLING

### 10.1 Next.js Image Optimization

```tsx
// Example: Hero image
import Image from 'next/image';

export default function HeroImage() {
  return (
    <Image
      src="/images/hero/abstract-shapes.webp"
      alt="Abstract gradient shapes representing custom AI"
      width={600}
      height={600}
      priority // Load immediately (above-the-fold)
      quality={85}
      className="w-full h-auto"
    />
  );
}
```

### 10.2 Responsive Images

```tsx
<Image
  src="/images/hero/pattern.webp"
  alt="Decorative pattern"
  width={1440}
  height={600}
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 80vw,
         100vw"
  priority
  quality={85}
/>
```

### 10.3 Image Optimization Config

```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  compress: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
```

---

## 11. PERFORMANCE REQUIREMENTS

### 11.1 Code Splitting Strategy

```tsx
// components/index.ts - Barrel exports for bundling
export { default as HeroSection } from './sections/HeroSection';
export { default as ValuePropositionSection } from './sections/ValuePropositionSection';
export { default as ConfiguratorSection } from './sections/ConfiguratorSection';
```

### 11.2 Bundle Size Optimization

**Install Bundle Analyzer:**
```bash
npm install --save-dev @next/bundle-analyzer
```

**next.config.ts:**
```ts
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  // config...
});
```

**Run Analysis:**
```bash
ANALYZE=true npm run build
```

### 11.3 Lighthouse Optimization

**Critical Optimizations:**
1. Load fonts with `next/font`
2. Lazy load images with Image component
3. Code-split route components
4. Remove unused CSS with Tailwind
5. Minimize JavaScript with Tree-shaking

**next/font Setup:**
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout() {
  return (
    <html lang="en" className={inter.variable}>
      <body>{/* ... */}</body>
    </html>
  );
}
```

---

## 12. ACCESSIBILITY COMPLIANCE

### 12.1 WCAG 2.1 AA Standard

**Requirements Implemented:**
- All text has 4.5:1+ contrast ratio
- All interactive elements focusable via keyboard
- All images have alt text
- Color not used as only means of conveying information
- Forms have associated labels
- Error messages are clear and helpful

### 12.2 Keyboard Navigation

```tsx
// Example: Form with keyboard support
<form onSubmit={handleSubmit}>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    tabIndex={0}
    required
    aria-required="true"
    aria-describedby="email-error"
  />
  <span id="email-error" role="alert">
    {errors.email?.message}
  </span>
</form>
```

### 12.3 Screen Reader Compatibility

```tsx
// Skip to content link
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Main content
<main id="main">
  {/* ... */}
</main>

// sr-only utility (Tailwind)
@layer utilities {
  .sr-only {
    @apply absolute w-px h-px p-0 -m-px overflow-hidden clip whitespace-nowrap border-0;
  }
  .sr-only:not(:focus-visible) {
    @apply sr-only;
  }
}
```

### 12.4 Focus Management

```tsx
// Use ref for focus management in modals
import { useRef, useEffect } from 'react';

export default function Modal({ isOpen, onClose }: any) {
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      firstFocusRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <dialog open={isOpen}>
      <button ref={firstFocusRef}>Close</button>
      {/* Modal content */}
    </dialog>
  );
}
```

---

## 13. DEPLOYMENT & HOSTING

### 13.1 Vercel Deployment (Recommended)

**Steps:**
1. Push code to GitHub
2. Connect GitHub account to Vercel
3. Import project and authorize
4. Vercel auto-detects Next.js
5. Deploy main branch, auto-deploy on push

**Environment Variables (.env.local):**
```
NEXT_PUBLIC_SITE_URL=https://appliedaiagent.ai
SENDGRID_API_KEY=your_key_here
RESEND_API_KEY=your_key_here
```

### 13.2 Alternative: Self-Hosted (Node.js)

```bash
npm run build
npm run start
```

Use PM2 for process management:
```bash
pm2 start npm --name "appliedaiagent" -- start
pm2 save
pm2 startup
```

### 13.3 Contact Form Backend Options

**Option A: Resend (Recommended)**
```bash
npm install resend
```

```ts
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();

  await resend.emails.send({
    from: 'contact@appliedaiagent.ai',
    to: 'jake@appliedaiagent.ai',
    subject: `New Assessment Request from ${body.fullName}`,
    html: `<p>Name: ${body.fullName}</p><p>Email: ${body.email}</p>...`,
  });

  return NextResponse.json({ success: true });
}
```

**Option B: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option C: Formspree (No backend needed)**
- Form action: `https://formspree.io/f/YOUR_FORM_ID`

### 13.4 Analytics Integration

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* ... */}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 14. DETAILED COMPONENT SPECIFICATIONS

### 14.1 Card Component

```tsx
// components/common/Card.tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined';
  interactive?: boolean;
  className?: string;
}

export default function Card({
  children,
  variant = 'elevated',
  interactive = false,
  className = '',
}: CardProps) {
  const baseClass = 'rounded-lg p-6 transition-all duration-200';
  const variantClass = variant === 'elevated'
    ? 'bg-white shadow-card hover:shadow-floating'
    : 'bg-white border border-gray-300';
  const interactiveClass = interactive ? 'cursor-pointer hover:scale-105' : '';

  return (
    <div className={`${baseClass} ${variantClass} ${interactiveClass} ${className}`}>
      {children}
    </div>
  );
}
```

### 14.2 SectionHeading Component

```tsx
// components/common/SectionHeading.tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

---

## 15. CODE QUALITY & BEST PRACTICES

### 15.1 TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 15.2 ESLint Configuration

```js
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@next/next/no-html-link-for-pages": "off",
    "prefer-const": "warn"
  }
}
```

### 15.3 Prettier Configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100
}
```

### 15.4 Error Boundaries

```tsx
// components/ErrorBoundary.tsx
import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please refresh the page.</h2>;
    }

    return this.props.children;
  }
}
```

---

## IMPLEMENTATION WORKFLOW

**Phase 1: Setup & Infrastructure**
- Create Next.js project with TypeScript
- Configure Tailwind CSS & design tokens
- Set up folder structure
- Configure ESLint/Prettier

**Phase 2: Layout & Foundation**
- Build Header, Footer, Layout components
- Create Button, Input, Card reusable components
- Set up global styles & animations

**Phase 3: Hero & Major Sections**
- Implement HeroSection with animations
- Build ValuePropositionSection with cards
- Create ConfiguratorSection with state management

**Phase 4: Interactive Features**
- Implement ProcessTimeline with scroll animations
- Build DemoForm with validation & submission
- Create PricingGuideForm

**Phase 5: Polish & Optimization**
- Add animations & micro-interactions
- Optimize images & bundle size
- Test accessibility (axe, Lighthouse)
- Performance optimization

**Phase 6: Deployment**
- Deploy to Vercel
- Configure domain & SSL
- Set up analytics
- Monitor performance

---

## FINAL CHECKLIST

- [ ] All TypeScript types defined
- [ ] Components fully responsive (mobile, tablet, desktop)
- [ ] Animations tested with reduced-motion
- [ ] All forms functional with validation
- [ ] Contact form integration working
- [ ] Images optimized (WebP, lazy loading)
- [ ] Lighthouse scores 90+
- [ ] Accessibility tested (WCAG AA)
- [ ] All links tested
- [ ] Meta tags & SEO optimized
- [ ] Environment variables configured
- [ ] Error boundaries in place
- [ ] Analytics integrated
- [ ] Deployed and live

This comprehensive prompt gives Claude Code everything needed to execute a production-grade website rebuild.

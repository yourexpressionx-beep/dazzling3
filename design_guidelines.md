# Design Guidelines for Dazzling Academy

## Design Approach
**Reference-Based Hybrid**: Drawing inspiration from premium education platforms and modern agency sites while maintaining professional credibility. Primary references: modern consultancy websites with clean layouts, educational platforms emphasizing trust and achievement, and corporate sites with sophisticated visual hierarchies.

## Core Design Principles
1. **Trust Through Clarity**: Clean, uncluttered layouts that emphasize credibility
2. **Achievement-Focused**: Highlight success metrics and partnerships prominently
3. **Approachable Premium**: Professional without being cold or intimidating
4. **Progressive Disclosure**: Guide users through information hierarchically

---

## Color Palette

### Light Mode
- **Primary Brand**: 220 90% 45% (Deep Blue - conveys trust, education, professionalism)
- **Secondary**: 260 65% 50% (Rich Purple - adds sophistication and academic prestige)
- **Accent**: 190 80% 50% (Bright Cyan - for CTAs and highlights, energetic yet professional)
- **Success/Achievement**: 150 60% 45% (Emerald Green - for placement stats and success indicators)
- **Backgrounds**: 0 0% 98% (Soft White), 220 20% 95% (Light Blue-Gray for sections)
- **Text**: 220 25% 15% (Dark Blue-Gray for primary text), 220 15% 40% (Mid-Gray for secondary)

### Dark Mode
- **Primary Brand**: 220 85% 60% (Lighter Blue for visibility)
- **Secondary**: 260 60% 65% (Lighter Purple)
- **Accent**: 190 75% 55% (Bright Cyan maintained)
- **Success/Achievement**: 150 55% 55% (Lighter Emerald)
- **Backgrounds**: 220 25% 10% (Deep Blue-Black), 220 20% 15% (Slightly lighter for cards/sections)
- **Text**: 0 0% 95% (Off-white for primary), 220 10% 70% (Light gray for secondary)

---

## Typography

### Font Families
- **Primary (Headings)**: 'Inter' with weights 700, 800 for headlines and 600 for subheadings
- **Secondary (Body)**: 'Inter' with weights 400, 500 for body text and UI elements
- **Accent (Stats/Numbers)**: 'Inter' weight 800 for large numerical displays

### Type Scale
- **Hero Headline**: text-5xl md:text-6xl lg:text-7xl (bold, commanding presence)
- **Page Titles**: text-4xl md:text-5xl font-bold
- **Section Headings**: text-3xl md:text-4xl font-bold
- **Subsections**: text-2xl md:text-3xl font-semibold
- **Body Large**: text-lg md:text-xl (for introductory paragraphs)
- **Body Standard**: text-base leading-relaxed
- **Body Small**: text-sm (for captions, metadata)

---

## Layout System

### Spacing Primitives
Consistent use of Tailwind spacing units: **4, 6, 8, 12, 16, 20, 24** for vertical rhythm and component spacing. Section padding follows py-16 md:py-24 lg:py-32 pattern for generous breathing room.

### Container Strategy
- **Max-width 7xl** (1280px) for full-width sections with inner content
- **Max-width 6xl** (1152px) for content-focused sections
- **Max-width prose** for long-form text content (About page descriptions)

### Grid Patterns
- **Hero**: Single column, centered content with asymmetric image/illustration placement
- **Services Grid**: 1-column mobile, 2-column tablet, 3-column desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Stats/Highlights**: 2-column mobile, 4-column desktop for quick metrics
- **Placement Companies**: Masonry-style or 3-4 column grid for logo showcase

---

## Component Library

### Navigation
- Sticky navbar with backdrop blur (backdrop-blur-lg bg-white/80 dark:bg-slate-900/80)
- Logo left-aligned, navigation links center/right with mobile hamburger menu
- Active state with bottom border and color shift
- Smooth height transition and shadow on scroll

### Hero Section (Home Page)
- **Large Hero Image**: Right-aligned or background with overlay, showing diverse students in consultation/celebration
- Split layout: 60% content (left), 40% visual (right) on desktop
- Headline with gradient text effect using brand colors
- Subtitle with max-width for readability
- Dual CTA buttons: Primary (solid accent) + Secondary (outline with blur background if on image)
- Animated entrance: Staggered fade-up for headline, subtitle, CTAs

### Service Cards
- Elevated cards with hover lift effect (hover:scale-105 transition)
- Icon at top (use Heroicons - academic-cap, sparkles, chart-bar, globe-alt)
- Title (text-xl font-semibold), short description (2-3 lines)
- Subtle gradient background or border accent
- 8-12px rounded corners for modern feel

### Statistics/Highlights Section
- Bold numbers (text-4xl md:text-5xl font-bold) with accent color
- Label text below in muted secondary color
- Icons paired with each stat for visual reinforcement
- Grid layout with subtle separators or contained cards

### Placement Section
- Company logo grid with grayscale filter, color on hover
- "Where Our Students Work" headline centered above
- 95% placement stat as a large callout card or banner
- Testimonial-style quote integration if space allows

### Contact Section
- Two-column layout: Contact form (left), Information cards (right)
- Form inputs with soft borders, focus state with accent color ring
- Information presented as icon + text cards for each contact method
- Map integration placeholder with subtle border
- WhatsApp CTA as a distinct button with brand green

### Footer
- Three-column layout: About/Mission snippet, Quick Links, Contact Summary
- Social media icons with hover state
- Copyright and additional legal links at bottom
- Subtle top border separator
- Maintained dark mode consistency

---

## Animations & Interactions

### Framer Motion Implementation
- **Page Transitions**: Fade with slight vertical slide (10px) on route change
- **Scroll Animations**: Fade-in from opacity 0 with 20px upward motion as elements enter viewport
- **Stagger Children**: 100ms delay between card animations in grids
- **Hover States**: Scale 105% for cards, color transitions for buttons (200ms duration)
- **CTA Buttons**: Subtle pulse animation on primary CTA in hero
- **Navigation**: Slide-down for mobile menu with backdrop fade

### Performance Constraints
- Use `initial="hidden" whileInView="visible"` for scroll triggers
- Limit animations to 3-4 simultaneous elements
- No continuous animations except subtle CTA pulse
- Reduce motion for accessibility (respect prefers-reduced-motion)

---

## Images

### Hero Section
**Large Hero Image**: Modern, high-quality photograph showing diverse students in an academic consultation setting or celebrating achievement. Should convey warmth, professionalism, and success. Position: Right side or full-width background with gradient overlay (left-to-right from brand color to transparent).

### About Page
**Team/Consultation Image**: Medium-sized image showing counselors with students in a professional setting. Position: Beside mission statement text in a two-column layout.

### Services Page  
**Icon-Based Approach**: Use large Heroicons instead of photos for service cards to maintain clean, modern aesthetic. Icons: academic-cap, rocket, users, globe-alt, chart-bar.

### Placements Page
**Company Logos**: Display actual or placeholder logos of partner companies (Google, Microsoft, Apollo, etc.) in a grid. Apply grayscale filter with color restoration on hover.

**Success Image**: Optional small image showing students in graduation or professional settings as a banner background with overlay.

### Contact Page
**No hero image needed** - Focus on functional contact form and information presentation.

---

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts, maximum spacing)

---

## Accessibility & Polish
- Minimum contrast ratio 4.5:1 for text, 3:1 for UI components
- Focus indicators with 2px accent color ring
- Semantic HTML5 elements (nav, main, section, article, footer)
- Alt text for all images describing content and context
- ARIA labels for icon-only buttons and interactive elements
- Keyboard navigation support with visible focus states
- Dark mode maintains readability and sufficient contrast throughout
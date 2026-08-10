# AGENTS.md - Master Rules & Execution Roadmap for Laxmi Furniture

## 🚨 MANDATORY PROJECT DIRECTIVES & RULES

1. **Brand Identity**: The platform is built for **Laxmi Furniture** (Handcrafted Solid Teak Furniture & Premium Home Comfort Storefront in Raipur, Chhattisgarh).
   - **Business Model**: B2B & Retail Direct Inquiry Storefront. **NO Cart, NO Checkout, NO Payment Gateway**. All purchase intent converts via direct **WhatsApp Lead Inquiry** (`wa.me`) or **Phone Call Consultation** (`tel:18002674445`).
   - **Core Value Callouts**: 10-Year Structural Frame Warranty, Factory Direct Prices, Custom Size & Wood Finishes, Free Home Delivery & Installation, 5,000+ Happy Local Homes (Est. 1998).
   - **Design Tokens & Theme**:
     - Primary Accent: `#F97316` (Warm Brand Orange)
     - Primary Text: `#111827` (Dark Charcoal / Black — WCAG 2.1 AA 16.5:1 ratio)
     - Secondary Text: `#4B5563` (Dark Slate Gray — WCAG 2.1 AA 7.0:1 ratio)
     - Backgrounds: `#FFFFFF` (Pure White), `#FAF6F1` (Warm Cream Surface), `#F9FAFB` (Subtle Light Surface)
     - WhatsApp CTA: `#25D366` (Green) with `#FFFFFF` text & pulse keyframe animation
     - Fonts: `Playfair Display` (headings), `Inter` (body/UI)

2. **Architecture & Color System Standards**:
   - Framework: Next.js 15 App Router, TypeScript (Strict), Tailwind CSS v4.
   - **100% Light Theme Standardization**: All dark mode background overrides (`dark:bg-[#1C1815]`, `dark:bg-[#18181B]`) are completely purged. Color scheme is locked to Light Mode to guarantee 100% outdoor sunlight readability on mobile devices.
   - Verification Requirement: EVERY phase or major change MUST be validated by running `npm run build` and `npm run typecheck` with 0 compilation or type errors before declaring success.

3. **Non-Negotiable Engineering Rules**:
   - **Build Gate**: `npm run build` after EVERY phase. Exit code 0 is the only acceptable state.
   - **No `any` TypeScript**: All types fully declared using interfaces from `src/types/index.ts`.
   - **No inline styles**: Only Tailwind CSS classes and design token variables in `globals.css`.
   - **Mobile-First**: Built mobile-first (360px–420px optimization), scaled seamlessly to desktop (1280px max-width).
   - **Accessibility (WCAG 2.1 AA)**: Minimum contrast ratio 4.5:1 for body text, keyboard navigation, ARIA labels, focus management.

---

## 🗺️ MASTER EXECUTION ROADMAP

### PHASE 1: Storefront B2B/Retail Lead Architecture Conversion (STATUS: COMPLETED ✅)
- Removed e-commerce Cart & Payment Gateway checkout workflows.
- Converted product action buttons to direct **"Request Best Price Quote"** (opens `InquiryModal.tsx`) and **"Inquire on WhatsApp"** (`wa.me`).
- Built persistent `useInquiryStore` with saved Shortlist Drawer (`InquiryDrawer.tsx`).

---

### PHASE 2: Mobile-First UX & Senior Product Design Overhaul (STATUS: COMPLETED ✅)
- Rebuilt 2-column touch-friendly product card grid (`ProductCard.tsx`) with 4:5 image container, image hover scale zoom, micro-copy tags (*"Trending in Raipur"* / *"Factory Direct"*), and active touch button physics (`active:scale-95`).
- Upgraded Emotional Lifestyle Hero Banner (`HeroCarousel.tsx`) with dark warm gradient backdrop, headline *"Upgrade Your Living Space — Handcrafted Teak Furniture for Modern Homes in Raipur"*, and social proof pill *"5,000+ Happy Homes in Raipur & CG • Est. 1998"*.
- Built 5-action persistent Mobile Bottom Navigation (`BottomNav.tsx`: Home, Categories, WhatsApp, Call, Showroom).

---

### PHASE 3: Local Showroom Trust & Authority Architecture (STATUS: COMPLETED ✅)
- Built `LocalShowroomTrustSection.tsx` featuring:
  - **Google 4.9★ Verified Rating Badge** (1,240+ verified local reviews).
  - Legacy mark: *"28+ Years of Craftsmanship Legacy (Since 1998)"*.
  - Physical showroom gallery with real-time *"Live Showroom Open Today"* indicator.
  - Direct **"Get Map Directions"** link (`maps.google.com`) and **"Book Store Visit"** WhatsApp action.

---

### PHASE 4: WCAG 2.1 AA Light-Mode Accessibility & Contrast Fixes (STATUS: COMPLETED ✅)
- **Globals & Tokens (`src/styles/globals.css`)**: Locked color-scheme to light mode. Set `#111827` primary text, `#4B5563` secondary text, `#E5E7EB` borders, `#F97316` brand orange.
- **Filter Panel Overhaul (`FilterSidebar.tsx`)**: Pure white container (`bg-white border border-[#E5E7EB]`), bold dark headers (`#111827`), crisp dark option labels (`#111827`), orange checkbox accent (`#F97316`).
- **Mobile Menu Drawer (`MobileMenu.tsx` & `Drawer.tsx`)**: Pure white drawer backdrop (`bg-white`), dark charcoal navigation text (`#111827`), orange category icons (`#F97316`), and call showroom CTA button.
- **Shop Catalog Page (`app/shop/page.tsx`)**: Pure white sort select box, dark charcoal header title (`#111827`).

---

### PHASE 5: Production Build Verification & Vercel Live Deployment (STATUS: COMPLETED ✅)
- **TypeScript Gate**: `npm run typecheck` passed 100% clean with **0 errors**.
- **Next.js 15 Production Build Gate**: `npm run build` static page generation 10/10 success in **14.5s–16.8s**.
- **GitHub Repository Sync**: Pushed commits to `https://github.com/vikasnayakrgh-stack/laxmi-furniture.git` (main branch).
- **Live Vercel Auto-Deployment**: Live at [https://laxmi-furniture-zeta.vercel.app/](https://laxmi-furniture-zeta.vercel.app/).

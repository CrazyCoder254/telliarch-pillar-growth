# Content Rebuild + Detailed Service Pages

This is a large content + structure update. I'll keep the existing blue/gold color scheme, animations, admin, auth, newsletter and backend intact — only swapping copy and adding new pages/sections.

## 1. Home Page — new copy & section order

Restructure `src/pages/Index.tsx` and rewrite components to reflect the new "Integrated Mental Health & Growth Solutions" positioning:

1. **Hero** — new headline/sub + two CTAs ("Book a Session", "Explore Our Services")
2. **Who We Are** — short intro + 3 pillars (mental health, personal/professional dev, growth strategies)
3. **What We Do** — 6 focus areas grid
4. **Who We Serve** — Individuals, Families, Schools, Hospitals, Corporates
5. **Our Approach** — therapy + coaching + training
6. **Tips / Programs / Blog / Partners / Newsletter / CallBack / Contact** — kept, copy refreshed where needed
7. **Final CTA** — "Ready to begin your growth journey?"

## 2. About page

Update `src/components/About.tsx` (and add a dedicated `/about` route page) with:
- Our Story
- Mission / Vision
- 5 Core Values (Holistic Growth, Empathy, Sustainability, Integrity, Empowerment)
- Our Approach (Therapy + Coaching + Training)

## 3. Services overview

Rewrite `src/components/Services.tsx` with the 8 service categories from the brief. Each card gets:
- Icon, title, short description
- "Subscribe to Updates" (existing)
- **"Read More"** button → routes to a detailed service page

## 4. Detailed service pages (NEW)

Add a route `/services/:slug` rendered by a new `src/pages/ServiceDetail.tsx`, with rich content for each of the six in-depth sections you provided:

```text
/services/individual-therapy        → Individual Therapy & Development
/services/family-integration        → Family Integration Services
/services/education-institutions    → Education Institutions Support
/services/corporate-wellbeing       → Corporate & Organizational Wellbeing
/services/group-therapy             → Group Therapy & Development
/services/specialized-therapy       → Specialized Therapeutic Services
```

Content stored in `src/data/services.ts` (one structured object per service: overview, what-you-gain, sub-services with examples, CTA). The detail page reuses the site's hero/section styling, blue/gold accents, framer-motion reveals, and the `ServiceSubscribeDialog` for that specific service.

## 5. Structural inspiration from eaglesconsultants.com

I'll borrow layout patterns only (color scheme stays blue/gold):
- Strong hero with overlay image + dual CTA
- "Who We Are / What We Do / Who We Serve / Our Approach" as distinct alternating sections
- Service cards in a clean grid that link to dedicated detail pages
- Quote/CTA band before footer

## 6. Routing & nav

- Add routes in `src/App.tsx` for `/about` and `/services/:slug`
- Update `Navbar.tsx` so "Services" links scroll to section, and each service card "Read More" navigates to its detail page

## Out of scope (unchanged)

- Admin dashboard, auth, newsletter system, blog/partners backend, chat assistant, footer attribution, deployment config — all preserved.

## Technical notes

- New file: `src/pages/ServiceDetail.tsx`
- New file: `src/pages/About.tsx` (optional — or keep About as homepage section only; I'll do both: section + dedicated page)
- New file: `src/data/services.ts` (typed service content)
- New components: `WhoWeAre.tsx`, `WhatWeDo.tsx`, `WhoWeServe.tsx`, `OurApproach.tsx`, `FinalCTA.tsx`
- Edit: `Hero.tsx`, `Services.tsx`, `About.tsx`, `Index.tsx`, `Navbar.tsx`, `App.tsx`
- No database or edge function changes

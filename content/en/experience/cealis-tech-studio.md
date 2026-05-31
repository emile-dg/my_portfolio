---
slug: cealis-tech-studio
title: Lead Software Engineer, Cofounder & CTO
company: CEALIS TECH STUDIO
location: Yaounde, Cameroon
period: June 2024 – March 2026
summary: Co-founded a software engineering studio and led all technical decisions, architecture, delivery, and team development across client projects and internal products.
tags:
  - Technical leadership
  - Full-stack ownership
  - Product delivery
  - Team mentorship
  - SaaS architecture
---

## Context

CEALIS TECH STUDIO was a software engineering studio I co-founded to deliver custom software products for clients across Central Africa and the diaspora. The studio operated as a lean team — a small group of engineers taking on high-complexity projects requiring full-stack development, product strategy, and genuine technical leadership.

The studio's value proposition was quality software built to international standards, delivered from Cameroon. Clients ranged from entrepreneurs with early-stage product ideas to companies needing reliable internal tooling. Projects spanned construction technology, sports data analytics, deep-link infrastructure, and client-facing web products.

As CTO and Lead Software Engineer, I was responsible for every layer of the technical operation: architecture decisions, direct development work, client communication, team hiring, mentorship, and delivery.

## My Role & Ownership

**Product & technical decisions** — I owned the technical direction for every project the studio took on. This meant assessing requirements, defining architecture, choosing the stack, scoping the work, and making build vs. buy decisions. I was the primary technical contact for all clients and translated their business needs into implementable specifications.

**Backend / API / database** — I implemented backend services and APIs for both client projects and internal products. For the sports data analytics platform, I designed and built the full backend infrastructure from scratch.

**Frontend / product interfaces** — I designed and built the front-facing applications for the studio's internal deep-link product and contributed to client-facing web products. I also contributed to UI/UX prototyping for some projects before moving to implementation.

**Deployment / infrastructure** — I set up development infrastructure for the studio: repositories, CI/CD pipelines, environment configurations, and deployment processes.

**Team / client collaboration** — I recruited and onboarded junior developers, trained and mentored a junior frontend developer, conducted code reviews, and maintained quality standards across the team's output. I managed direct communication with clients throughout project lifecycles.

## Projects I Worked On

### Sports Data Analytics Platform

**Problem**

A client needed a platform to collect, process, and surface sports performance data for analysis. The system had to handle structured data ingestion from multiple sources and present it in a way that was useful for analysts and coaches.

**What I Built**

I implemented the full backend services and related infrastructure for the platform — data ingestion pipelines, API layer, database design, and deployment.

**Technical Work**

- Designed the data model for multi-sport, multi-event performance data
- Built data ingestion pipelines to process and normalize input from different sources
- Developed the REST API layer consumed by the frontend analytics interface
- Set up the cloud infrastructure and deployment pipeline
- Implemented authentication and access control for analyst and admin roles

**Impact**

Delivered a functional, production-ready backend that the client could build on and extend. The system handled structured data at scale and provided a reliable API foundation for the analytics interface.

---

### Internal Deep-Link Product (Front-Facing Clients)

**Problem**

The studio developed an in-house deep-link product — a tool for generating smart links that route users to the correct destination on mobile apps or web, depending on their device and context. It needed a polished front-facing client interface for end users and an admin configuration layer.

**What I Built**

I designed, architected, and implemented the front-facing client applications for the deep-link product.

**Technical Work**

- Designed the application architecture for the client-facing interface
- Implemented the link generation and routing logic in the frontend
- Built the configuration and management interface for link rules and redirect behavior
- Ensured cross-device compatibility and fallback handling for unsupported environments
- Contributed to UI/UX design for the product interface

**Impact**

The studio had a usable, well-architected internal product that could be demonstrated to clients and used as a foundation for commercial offerings.

---

### Client Custom Builds

**Problem**

Multiple clients came to the studio with specific product needs: internal dashboards, booking systems, and custom web applications. Each required scoping, architecture, and delivery from a small team.

**What I Built**

I acted as lead architect and senior developer on these projects, working directly with clients to define requirements and delivering production-ready software.

**Technical Work**

- Conducted requirements gathering and technical scoping for each project
- Defined architecture and made stack decisions adapted to each client's constraints
- Led development and reviewed all code produced by junior team members
- Managed deployment and handoff for each delivered project

**Impact**

Delivered four high-impact projects over approximately two years. Each project was shipped to production and handed off to clients who could operate them independently.

## Technical Challenges

### Building a Software Studio with a Small Team Under Delivery Pressure

**Challenge** — Running a studio with a lean team meant simultaneously managing client expectations, technical delivery, team development, and internal product work. There was no buffer: delays in one project affected capacity for others.

**Why it was difficult** — The challenge was not purely technical. It required constant prioritization, honest scoping conversations with clients, and ensuring that junior developers were learning while still delivering.

**How I approached it** — I invested early in setting up shared infrastructure and engineering standards: repository conventions, code review processes, and shared components that could be reused across projects. This reduced per-project overhead and kept quality consistent across deliveries.

**Result** — Delivered four client projects to production over two years while developing the studio's internal tooling and growing a junior team member to become independently productive.

---

### Architecting for Reuse Across Diverse Projects

**Challenge** — Each client project had different requirements, but building each one entirely from scratch was unsustainable for a small team.

**Why it was difficult** — Identifying the right abstraction level for shared modules is non-trivial. Too abstract and the modules are hard to use; too specific and they don't generalize.

**How I approached it** — I identified the core shared concerns across projects — authentication, authorization, tenant isolation — and built shared modules around those. I kept the interface contracts explicit and documented, which made it possible for team members to use them without fully understanding the internals.

**Result** — New projects started from a working base rather than from zero, which meaningfully reduced time-to-first-working-build.

## Architecture & Engineering Decisions

**Studio infrastructure** — Early investment in shared tooling paid off. Standardized repository structure, CI/CD templates, and a shared component library meant that new projects launched faster and maintained consistent quality.

**Frontend architecture** — Nuxt was the default frontend framework for studio projects, providing SSR capabilities and a consistent development model. Vue component libraries were reused across projects where applicable.

**Deployment approach** — Each project had its own deployment pipeline, configured consistently using the studio's established conventions. This reduced the operational overhead of managing multiple live products simultaneously.

**Team knowledge transfer** — I treated documentation and code review as primary tools for knowledge transfer. Junior developers were expected to read and understand architecture decisions, not just implement tasks.

## Collaboration & Leadership

I co-founded the studio and held both the CTO role and the lead engineering role simultaneously. This meant I was the sole person responsible for technical direction while also producing a significant portion of the code.

On the team side, I recruited and onboarded developers, trained and mentored a junior frontend developer from early-stage to independently productive, and ran code reviews for all team output. I set the quality bar and was accountable for it.

On the client side, I managed all technical communication: requirements gathering, architecture presentations, progress updates, and delivery handoffs. Clients trusted me directly, which meant I had to balance technical honesty with delivery confidence.

## Results & Evidence

- Co-founded and led the technical operation of a software engineering studio
- Delivered four high-impact client projects to production over approximately two years
- Designed and implemented the full backend for a sports data analytics platform
- Built the front-facing client applications for the studio's deep-link product
- Recruited, onboarded, and mentored junior developers
- Established engineering processes (CI/CD, code review, component libraries) that the team operated under

## What This Experience Proves

This experience demonstrates my ability to operate as a technical leader at the founding level — making architecture decisions, delivering software, building a team, and managing clients, simultaneously.

It demonstrates that I can build organizations and processes, not just code. Setting up a studio from scratch required defining how the team works, how quality is maintained, and how knowledge is transferred — on top of the engineering work itself.

It proves I can manage multiple products and projects in parallel, maintain delivery quality under resource constraints, and translate ambiguous client requirements into shipped software.

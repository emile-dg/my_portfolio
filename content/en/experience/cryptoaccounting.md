---
slug: cryptoaccounting
title: Lead Software Engineer
company: CRYPTOACCOUNTING
location: Paris, France
period: Since March 2023
summary: Sole technical owner of a production SaaS platform for crypto-accounting professionals — architecting, building, securing, and shipping the full product from backend engine to frontend interface.
tags:
  - Full-stack ownership
  - SaaS architecture
  - Backend systems
  - Product delivery
  - Security & deployment
---

## Context

CRYPTOACCOUNTING is a production SaaS platform serving accounting firms and auditors who manage cryptocurrency portfolios for their clients. The core problem it solves is one of the most technically complex in modern accounting: mapping blockchain transaction data — from dozens of chains and platforms — to structured accounting entries that comply with French and European standards.

The product is used directly by professional accountants and auditors. The stakes are high: incorrect reconciliations result in tax errors with legal consequences. The platform had to be both technically rigorous and user-friendly enough for non-engineers.

When I joined, the product existed as a fragile early-stage prototype. I became the single technical owner from that point forward.

:::ImageCarousel
---
pixelsPerSecond: 24
maxTimeScale: 10
imageWidth: 720
imageHeight: 480
gap: 24
borderRadius: 0
fullBleed: true
fit: contain
---
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_8.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_9.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_10.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_11.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_12.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_13.jpg)
![Screenshot - Screen Cryptoaccounting](/images/gallery/cryptoaccounting/image_14.jpg)
:::

## My Role & Ownership

I was the sole engineer on this project for the duration of my involvement. There was no other technical staff. Every decision — architectural, product, security, deployment — was mine to make and mine to deliver.

**Product & technical decisions** — I translated business and accounting requirements into software specifications. I designed the data model, defined API contracts, and made every architectural trade-off. I participated in product discussions with the founders and accounted for domain constraints (accounting standards, audit requirements, multi-tenant isolation).

**Backend / API / database** — I designed and built the full backend: REST APIs, the core accounting engine, data pipelines for transaction imports, and the relational database schema. All business logic, validation, and computation ran server-side.

**Frontend / product interfaces** — I built the full frontend application from scratch. This included the accountant dashboard, the reconciliation review interface, report generation UI, and client workspace management.

**Deployment / infrastructure** — I set up and maintained the cloud infrastructure on AWS: compute, managed database, document storage, CDN. I introduced CI/CD pipelines to automate testing and deployment.

**Security / reliability** — I conducted a full security review of the application and implemented financial-grade security practices: encrypted storage, enforced HTTPS, rate limiting, input validation, and secure token handling with 2FA.

## Projects I Worked On

### Core Accounting Engine

**Problem**

Cryptocurrency accounting requires matching transaction data from wallets, exchanges, and DeFi protocols to accounting entries using regulated valuation methods (FIFO, WAUC). This process, done manually, takes accountants days per client. The rules are complex, the data is messy, and errors have legal consequences.

**What I Built**

I designed and implemented a parametric accounting engine that processes raw blockchain transaction data and generates compliant accounting entries automatically. The engine supports FIFO and weighted average unit cost (WAUC) valuation algorithms and produces outputs aligned with French accounting norms.

**Technical Work**

- Designed the transaction data model to handle multi-chain, multi-asset, multi-wallet complexity
- Implemented FIFO and WAUC valuation algorithms with full lot-tracking
- Built the reconciliation pipeline: ingest → normalize → classify → compute → generate entries
- Handled edge cases: staking rewards, DeFi liquidity events, cross-chain bridges, NFT transactions
- Designed rule-based classification system allowing accountants to define treatment for custom transaction types
- Built report generation: structured PDF and CSV outputs for audits and tax filings
- Wrote unit tests covering valuation logic and edge-case transaction types

**Impact**

Manual reconciliation time was reduced from days to hours for accountants handling complex crypto portfolios. The engine handled 500M+ transactions in production without reliability issues. The business was able to onboard new accounting clients without manual intervention in the computation pipeline.

---

### Transaction Import System

**Problem**

Client transaction data came from over 20 different platforms: centralized exchanges (Binance, Coinbase, Kraken), DeFi protocols, hardware wallets, and blockchain explorers. Each had a different data format, API, or export structure.

**What I Built**

I built a normalized import layer that connected to each platform and standardized transaction data into a single internal format before feeding it into the accounting engine.

**Technical Work**

- Integrated 20+ platforms via REST APIs and file-based imports (CSV, JSON, proprietary formats)
- Built a normalization pipeline that mapped each platform's data schema to the internal transaction model
- Implemented background processing for large transaction sets to avoid request timeouts
- Added error handling and logging per import source to surface data quality issues to the accountant
- Built an admin UI for managing platform connections and reviewing import logs

**Impact**

Accountants could consolidate data from all client platforms without manual reformatting. Import coverage across the major platforms meant the product was immediately usable for most client portfolios without custom work.

---

### Dashboard & Reporting Interface

**Problem**

Accountants needed a professional, structured interface to manage multiple client workspaces, review reconciliations, inspect individual transactions, and export compliant reports — without requiring technical knowledge.

**What I Built**

I built the full frontend application from scratch using Vue 3 and Nuxt. The interface covered the entire accountant workflow end-to-end.

**Technical Work**

- Designed and implemented the component architecture for a multi-workspace dashboard
- Built transaction review tables with filtering, sorting, and inline correction capabilities
- Implemented reconciliation review screens with status indicators and audit trail views
- Built PDF and CSV report export flows with format selection and scope configuration
- Implemented client workspace management: creation, assignment, settings
- Built responsive layouts suitable for professional desktop use
- Created a reusable component library shared across the application

**Impact**

The interface turned a technically complex backend into a usable product for non-engineers. Accountants could operate the full reconciliation and reporting workflow without developer involvement.

---

### Authentication, Authorization & Multi-Tenancy

**Problem**

Accounting firms manage multiple clients. Each firm needed its own isolated workspace, with multiple accountant users having different permission levels. Client data had to be strictly separated between tenants.

**What I Built**

I designed and implemented the full authentication and multi-tenant authorization system.

**Technical Work**

- Implemented JWT-based authentication with refresh token rotation
- Integrated 2FA (two-factor authentication) for accountant accounts
- Designed a multi-tenant data model with strict workspace isolation at the database level
- Implemented RBAC (role-based access control) with roles for firm admin, accountant, and auditor
- Extended with ABAC (attribute-based access control) for fine-grained resource permissions
- Built user invitation flows and session management

**Impact**

Firms could onboard multiple accountants and manage client data independently and securely. No cross-tenant data leakage was possible by design.

---

### Deployment & Infrastructure

**Problem**

The product needed to be reliable, deployable without manual steps, and maintainable by a single engineer.

**What I Built**

I designed and set up the full AWS infrastructure and automated the deployment pipeline.

**Technical Work**

- Provisioned AWS infrastructure: EC2 (compute), RDS (relational database), S3 (document and export storage), CloudFront (static assets and CDN)
- Configured environment separation: development, staging, production
- Set up CI/CD pipelines using GitHub Actions: automated tests on pull request, automated deploy on merge to main
- Configured HTTPS with certificate management and enforced redirect from HTTP
- Set up application monitoring and alerting for uptime and error rates
- Implemented backup policies for the production database

**Impact**

Deployments went from manual to fully automated. The production environment ran reliably without requiring regular manual intervention.

## Technical Challenges

### Implementing Correct Valuation Algorithms for Accounting Compliance

**Challenge** — FIFO and WAUC are well-known accounting concepts, but implementing them correctly for cryptocurrency — where the same asset can be acquired across hundreds of transactions on multiple platforms, over multiple years — is significantly more complex than standard inventory accounting.

**Why it was difficult** — Each acquisition creates a "lot" that must be tracked individually for FIFO. Lot ordering is sensitive to timestamps across chains, which are not always reliable. Asset splits, consolidations, and transfers between wallets had to be handled without incorrectly triggering a taxable event.

**How I approached it** — I modeled lots as first-class entities in the data model. I implemented the valuation algorithms as pure, testable functions with explicit lot state. I built a comprehensive test suite covering normal flows and edge cases including transfers, dust amounts, cross-wallet movements, and staking rewards.

**Result** — The engine produced verifiably correct outputs for the test cases provided by the accounting team. It became the trust foundation of the product.

---

### Integrating 20+ External Platforms with Inconsistent Data

**Challenge** — Each platform had its own data format, terminology, and reliability characteristics. Some had official APIs; others required parsing CSV exports with undocumented formats.

**Why it was difficult** — The import layer had to be resilient to format changes, missing fields, and data quality issues — and surface useful errors to non-technical accountants when something went wrong.

**How I approached it** — I designed a normalized internal transaction schema and built a per-platform adapter layer. Each adapter was responsible only for transforming its platform's format to the internal schema. I added per-platform validation and error reporting, and built tooling to test adapters against real fixture data.

**Result** — Import failures were isolated to their source and surfaced clearly. Adding a new platform required only a new adapter, not changes to the core pipeline.

---

### Solo Ownership of a Production Financial Application

**Challenge** — I was the only technical person on the product. Architecture, delivery, quality, security, incidents, and product decisions all fell on me simultaneously.

**Why it was difficult** — Financial software carries legal exposure. There was no peer review, no second opinion on security decisions, and no one to escalate incidents to. Every decision needed to be defensible.

**How I approached it** — I enforced my own engineering standards rigorously: documented architecture decisions, maintained test coverage, followed a security checklist before every release, and documented the system thoroughly enough that I could reason about any part of it under pressure.

**Result** — The product ran in production without major incidents. The codebase remained maintainable as it grew.

## Architecture & Engineering Decisions

**Data model** — The core of the system is the transaction and lot model. Transactions are imported and normalized; lots are derived from acquisitions and tracked through disposals. The accounting entries are computed from lot state, not re-derived from raw transactions at report time. This separation made the system both correct and auditable.

**API design** — The backend exposed a structured REST API consumed exclusively by the frontend. API contracts were versioned and documented. Business logic lived entirely in the backend; the frontend was kept thin and display-focused.

**Frontend structure** — Vue 3 with a component-driven architecture. Shared UI components were extracted into a library early, which reduced duplication as the interface grew. State management was kept local where possible to reduce complexity.

**Deployment approach** — Single-region AWS deployment with separate environments. CI/CD via GitHub Actions meant deployments were automated, consistent, and reversible. Infrastructure was configured manually but documented for reproducibility.

**Security approach** — Security was treated as a first-class concern given the financial data involved. Key decisions: tenant isolation at the database level (row-level scoping), encrypted storage for sensitive fields, short-lived access tokens with rotation, 2FA for all user accounts, and input validation at the API boundary.

**Maintainability** — As the sole engineer, I optimized for future-me being able to understand decisions made months earlier. This meant clear module boundaries, consistent naming, inline documentation for non-obvious logic, and architectural documentation kept up to date.

## Results & Evidence

- Delivered the product from prototype to a production SaaS used by real accounting firms
- Built and maintained a 500M+ transaction accounting engine in production
- Integrated 20+ data sources with a resilient, adapter-based import architecture
- Implemented full multi-tenant RBAC + ABAC authentication and authorization
- Set up automated CI/CD deployment pipeline on AWS
- Reduced manual reconciliation time for accountants from days to hours
- Operated the full product — frontend, backend, infrastructure, security — as a team of one

## What This Experience Proves

This experience demonstrates my ability to own a production-grade technical product end-to-end, independently. I made architectural decisions, handled complex domain logic, built the full stack, managed security in a financial context, and maintained production infrastructure — without a team to rely on.

It demonstrates that I can translate complex business and regulatory requirements into working software. The accounting engine required genuine domain understanding, not just coding. The multi-tenant security model required careful design, not just implementation.

It proves I can operate at a senior level in environments where ownership is total and the margin for error is low.

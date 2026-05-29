---
slug: kamix
title: Lead Backend Developer
company: KAMIX
location: Yaounde, Cameroon
period: March 2022 – March 2023
summary: Owned backend development for internal systems and a client-facing product co-owned by the company, and led the design and implementation of an internal KYC backend prototype.
tags:
  - Backend systems
  - API development
  - KYC & compliance
  - Deployment
---

## Context

KAMIX is a technology company operating in Central Africa. During my time there, the engineering team was working on two main tracks: a client's product co-owned with the employer, and an internal prototype for identity verification (KYC).

I joined primarily in a backend role, with ownership over API design, implementation, and deployment. I participated in the full development cycle — from requirements analysis and design through implementation and production deployment.

## My Role & Ownership

**Backend / API / database** — I was the primary backend developer across both tracks. I designed and implemented API services for internal systems and the client-facing product, contributed to database design, and owned backend implementation from spec to deployment.

**Product & technical decisions** — I participated in analysis and requirements gathering alongside the team, contributed to technical design decisions, and continued to develop backend services iteratively throughout the engagement.

**Deployment / infrastructure** — I was responsible for deployment, specifically managing deployments over fresh VPN environments. This required careful coordination of infrastructure setup alongside each release.

**Security / compliance** — On the KYC prototype, I was responsible for ensuring the design and implementation met compliance, security, and privacy standards relevant to identity verification workflows.

## Projects I Worked On

### Client Product Backend

**Problem**

The company co-owned a client product that required reliable backend API services to support its core workflows. The product needed well-structured APIs that internal and client-facing systems could consume.

**What I Built**

I implemented the API services for the client's product, taking ownership of the backend layer from design through deployment.

**Technical Work**

- Participated in requirements analysis and technical design sessions
- Implemented REST API services covering core product workflows
- Contributed to database schema design and data layer logic
- Ensured API reliability and correctness through testing and validation
- Managed deployment of backend services over VPN infrastructure

**Impact**

Delivered a functional and reliable backend layer that supported the client product's workflows. The system was deployed and operational within the engagement period.

---

### KYC Backend Prototype

**Problem**

KAMIX needed an internal prototype for deep verification of customers — a KYC (Know Your Customer) system that could integrate with external identity verification APIs and process identity documents with compliance requirements in mind.

**What I Built**

I participated in the design and implementation of the KYC backend prototype, with specific responsibility for security, compliance, and privacy standards.

**Technical Work**

- Participated in the design of the KYC verification flow and data model
- Integrated an external API for deep identity verification
- Implemented the verification pipeline: document submission, external API call, response handling, status tracking
- Applied security and privacy best practices: data minimization, encrypted storage of identity data, access control on sensitive records
- Ensured the implementation aligned with applicable compliance requirements for identity verification

**Impact**

Delivered a working internal prototype that demonstrated the feasibility of the KYC verification flow and provided a foundation for further productization.

## Technical Challenges

### Deploying Over Fresh VPN Environments

**Challenge** — Deployments were managed over fresh VPN setups, which required configuring infrastructure from a clean state for each deployment cycle.

**Why it was difficult** — Each deployment required careful sequencing: VPN setup, environment configuration, dependency installation, and service deployment had to be coordinated reliably and repeatably.

**How I approached it** — I systematized the deployment process, documenting the steps and ensuring each deployment followed a consistent procedure. This reduced errors and made the process repeatable.

**Result** — Deployments were executed reliably without requiring rework or rollback due to configuration issues.

---

### Building a Secure KYC Integration

**Challenge** — KYC systems handle sensitive identity data — passports, ID documents, biometric data — which requires strict data handling, minimal exposure, and clear compliance boundaries.

**Why it was difficult** — The external API introduced a dependency on a third-party system, which meant the integration had to handle errors, timeouts, and partial responses gracefully. Meanwhile, all identity data in transit and at rest had to be secured appropriately.

**How I approached it** — I designed the integration with explicit error states and retry logic. I applied data minimization: only the data necessary for verification was stored, and sensitive fields were encrypted. Access to identity records was restricted by role.

**Result** — The prototype handled the verification flow correctly and demonstrated a secure, compliant approach to identity data management.

## Architecture & Engineering Decisions

**API design** — Backend services were designed as structured REST APIs with clear contracts. I collaborated with the team on API definitions and ensured the backend was consumed cleanly by the systems that depended on it.

**Security approach on KYC** — Given the sensitivity of identity data, security decisions were made explicitly: encrypted storage, access control at the data layer, and minimal retention of raw identity documents. Compliance requirements informed the data model design from the start.

**Deployment approach** — Deployments over VPN environments required a disciplined, documented process. I maintained clear deployment procedures to ensure consistency across releases.

## Results & Evidence

- Delivered backend API services for a client-facing product co-owned by the employer
- Participated in the full development cycle: requirements analysis, design, implementation, deployment
- Built and shipped an internal KYC backend prototype integrating a deep identity verification API
- Deployed backend services over VPN infrastructure, managing the full deployment process
- Applied security and privacy standards to sensitive identity verification workflows

## What This Experience Proves

This experience demonstrates my ability to own backend systems in a structured engineering team, participate meaningfully in the full development lifecycle, and handle security-sensitive workflows with appropriate rigor.

It shows I can work on compliance-adjacent systems — KYC, identity verification — and apply engineering judgment about data handling, access control, and third-party integrations in contexts where the stakes are higher than a standard CRUD application.

It demonstrates the breadth of my backend experience: API design, database modeling, deployment operations, and security-conscious implementation, applied consistently across different product contexts.

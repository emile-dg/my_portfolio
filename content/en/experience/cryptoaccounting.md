---
slug: cryptoaccounting
title: Lead Software Engineer
company: CRYPTOACCOUNTING
location: Paris, France
period: Since March 2023
summary: Led development across frontend, backend, deployment, security, and accounting workflows for a production SaaS platform.
---

## Overview

CRYPTOACCOUNTING is a production SaaS platform built for accounting professionals who deal with cryptocurrency portfolios. The platform automates complex reconciliation workflows, generates tax-compliant reports, and provides a clean interface for managing client data at scale.

I joined as the lead engineer and became the single owner of the technical stack — from architecture decisions to production deployments.

::ImageCarousel
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
::


## Projects I Worked On

### Core Accounting Engine
Designed and built the reconciliation engine that processes blockchain transaction data and maps it to accounting entries (FIFO, LIFO, average cost). The engine handles multi-chain imports and produces structured outputs compatible with French and European accounting standards.

### Dashboard & Reporting Interface
Built the full frontend application from scratch using Vue 3. The interface allows accountants to upload transaction data, review reconciliations, generate PDF/CSV reports, and manage multiple client workspaces.

### Authentication & Authorization System
Implemented a multi-tenant authentication layer with role-based access control, allowing firms to manage accountants and clients independently. Used JWT with refresh token rotation and integrated 2FA.

### Deployment & Infrastructure
Set up the cloud infrastructure on AWS — EC2 for compute, RDS for relational data, S3 for document storage, and CloudFront for static assets. Introduced CI/CD pipelines using GitHub Actions to automate testing and deployment.

### Security Hardening
Conducted a full security audit of the application. Implemented input validation, rate limiting, encrypted storage for sensitive financial data, and HTTPS enforced across all environments.

## My Contributions

- Sole engineer responsible for the entire technical stack
- Defined and enforced coding standards, architecture patterns, and deployment processes
- Delivered features end-to-end: design → implementation → testing → deployment → monitoring
- Built reusable component libraries and a shared utility layer across the frontend
- Maintained API documentation and internal technical documentation

## Value I Brought

The platform went from a fragile prototype to a reliable, production-grade SaaS used by real accounting firms. I reduced manual reconciliation time for clients from days to hours, enabled the business to onboard new clients with minimal setup effort, and put in place security practices that meet professional financial software standards.

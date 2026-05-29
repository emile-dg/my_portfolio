---
slug: clinkast
title: Fullstack Software Engineer
company: Clinkast
location: Douala, Cameroon
period: October 2021 – February 2022
summary: Short-term contract focused on building a conversational agent for pharmaceutical ordering — responsible for planning, implementing, and testing chat flows, user interface, and the end-to-end user experience from conversation to order processing.
tags:
  - Frontend development
  - Conversational UI
  - Product delivery
---

## Context

Clinkast is a digital health platform operating in Cameroon. During this engagement, the focus was on a specific product: a conversational agent that allowed users to order pharmaceutical products through a chat interface. The goal was to make drug ordering accessible, guided, and easy — removing the friction of navigating a traditional e-commerce interface by replacing it with a structured conversation flow.

I joined on a short-term contract and primarily took on the frontend and UX engineering role for this product.

## My Role & Ownership

**Frontend / product interfaces** — I was responsible for planning, implementing, and testing the conversational agent's user interface. This covered the full chat experience: conversation flow design and implementation, UI rendering, and the handoff from conversation to order processing.

**Product & UX decisions** — Given the conversational nature of the product, a significant part of the work was defining how the chat flow should behave: what questions to ask, in what order, how to handle edge cases in user responses, and how to guide the user from intent to completed order.

**Testing** — I was responsible for testing the chat flows and user experience, ensuring that the conversation paths worked correctly and that the order processing handoff functioned end-to-end.

## Project I Worked On

### Conversational Agent for Pharmaceutical Ordering

**Problem**

Users needed a simple, guided way to order pharmaceutical products without navigating a complex product catalog. A conversational interface offered a more accessible experience, particularly for users less comfortable with traditional e-commerce flows. The challenge was building a chat experience that felt natural, handled the necessary data collection reliably, and connected correctly to the order processing backend.

**What I Built**

I planned, implemented, and tested the conversational interface — the chat flows, the UI, and the user experience from the first message to the completed order.

**Technical Work**

- Planned and designed the conversation flows: question sequences, response handling, branching logic for different order types
- Implemented the chat interface UI, including message rendering, input handling, and interaction states
- Built the logic to collect order-relevant information through the conversation (product selection, quantity, delivery details)
- Implemented the transition from conversation to order confirmation and processing
- Tested chat flows end-to-end: conversation paths, edge cases in user input, and order handoff correctness
- Collaborated with the backend team on the data contract between the conversation layer and the order processing system

**Impact**

Delivered a functional conversational ordering experience within the contract period. The chat-based flow provided a more guided and accessible path to placing an order compared to a traditional product listing interface.

## Technical Challenges

### Designing Reliable Conversation Flows

**Challenge** — Conversational interfaces are harder to get right than form-based UIs. Users don't follow expected paths, give incomplete answers, or change their minds mid-conversation. The flow had to handle this gracefully without losing order data or confusing the user.

**Why it was difficult** — Unlike a form with fixed fields, a conversation has state that evolves across messages. Handling corrections, going back in the flow, and recovering from unexpected inputs required careful state management in the frontend.

**How I approached it** — I modeled the conversation as an explicit state machine: each step in the flow had defined transitions, expected inputs, and fallback behaviors. This made the flow testable and predictable even when users deviated from the happy path.

**Result** — The conversation flow handled the common cases and most edge cases correctly, and the transition to order processing worked reliably.

## Architecture & Engineering Decisions

**Conversation as state machine** — Modeling the chat flow as a state machine rather than a linear script was the key architectural decision. It allowed branching logic, input validation per step, and clean transitions without accumulating spaghetti conditionals.

**Frontend / backend contract** — The handoff from conversation to order required a clean data contract: after the conversation collected all required information, it serialized the order payload and submitted it to the backend. Keeping this boundary explicit meant the conversation layer and the order processing layer could be developed and tested independently.

## Results & Evidence

- Planned, implemented, and delivered a conversational pharmaceutical ordering agent within a short-term contract
- Built conversation state management handling branching flows and edge-case user inputs
- Delivered the end-to-end experience from chat interface to order processing handoff
- Tested all conversation paths and order submission flows for correctness

## What This Experience Proves

This experience demonstrates my ability to take clear ownership of a frontend product within a focused, time-boxed engagement. I planned the work, made the key UX and architectural decisions for the conversational interface, implemented it, and tested it — without requiring extensive oversight.

It shows my capacity to work on non-standard UI paradigms beyond traditional form-based interfaces, and to think carefully about user experience and state management in interactive products.

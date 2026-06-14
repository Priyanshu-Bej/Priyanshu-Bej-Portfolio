---
title: "AI Features Need Mobile-Level Patience"
date: "2026-03-12"
excerpt: "AI inside mobile products works best when latency, cost, fallback states, and user trust are designed before the demo gets flashy."
tags: ["AI", "Mobile UX", "Cloud"]
---

AI features look easy in a demo and become real engineering once they sit inside a phone with poor network, impatient users, and a release deadline.

My rule is simple: the model is not the product. The workflow is the product.

- **Start with a boring fallback:** if inference fails, the user still needs a useful screen, not a mysterious spinner.
- **Cache decisions, not just responses:** repeated prompts should not keep burning time and cloud cost.
- **Show confidence carefully:** AI output should feel helpful, not like the app is pretending to know everything.
- **Keep the human edit path close:** mobile users forgive imperfect suggestions when fixing them is fast.
- **Measure the whole loop:** latency, correction rate, retry rate, and abandonment matter more than a pretty model name.

The best AI feature is the one that quietly removes work. If the user has to babysit it, we shipped a burden with nice branding.

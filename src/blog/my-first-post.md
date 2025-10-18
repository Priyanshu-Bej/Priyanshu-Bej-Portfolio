---
title: "Shipping Confident Flutter Features with Bloc"
date: "2024-05-28"
excerpt: "The guardrails I rely on to keep Bloc-powered codebases predictable, testable, and friendly for teammates."
tags: ["Flutter", "Bloc", "State Management"]
---

If a release week is getting loud, keeping Bloc predictable calms the crew. Here’s the playbook I hand over to teammates:

- **Name events like product conversations.** `ProfileUpdated` or `OnboardingSkipped` reads the same in Jira and in code, which keeps everyone aligned.  
- **Guard behaviour with `bloc_test`.** Happy paths plus the annoying realities (slow API, expired token) catch regressions before QA does.  
- **Push side effects into use-cases.** With data fetches outside the Bloc, contributors see the pure state transitions at a glance.  
- **Leave breadcrumbs where state hops feel odd.** A single-line comment explaining *why* we emit a specific sequence saves future hours.  

Following those four habits means a teammate can grab the Bloc mid-sprint and keep shipping without rewiring their brain around hidden state.

---
title: "Crash-Free Is Not Product Health"
date: "2026-03-30"
excerpt: "A mobile app can be crash-free and still feel broken. Product health needs telemetry around friction, retries, dead ends, and time-to-value."
tags: ["Observability", "Analytics", "QA"]
---

Crash-free sessions are important, but they do not tell the full truth. A user can complete zero work and still never crash the app.

That is why I like product telemetry beside technical telemetry.

- **Track meaningful starts and finishes:** if users begin an inspection, order, payment, or sync, we should know if they complete it.
- **Log retries with context:** repeated taps usually mean confusion, network pain, or a silent validation problem.
- **Watch empty states:** no data, no permissions, no connection, and no results can all hide broken experiences.
- **Measure time-to-value:** how long before the user gets the thing they opened the app for?
- **Read support tickets with logs open:** the best debugging happens when product language meets event timelines.

Stability is the floor. Health is whether real people can move through the workflow without fighting the system.

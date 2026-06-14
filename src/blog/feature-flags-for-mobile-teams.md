---
title: "Feature Flags Are Product Brakes, Not Decoration"
date: "2026-05-06"
excerpt: "Mobile flags are strongest when they protect rollout, recovery, experiments, and hardware-specific behavior without forcing a new binary."
tags: ["Remote Config", "Experiments", "Risk"]
---

Feature flags are not just a fancy way to hide unfinished screens. In mobile, they are brakes. They help you slow down without shipping another build.

I like flags when the risk is real.

- **Gate new flows by audience:** internal team, beta users, region, platform, or app version.
- **Keep defaults conservative:** if remote config fails, the app should fall back to the safer behavior.
- **Name flags like decisions:** `enable_nfc_card_scan_v2` is clearer than `newFlow`.
- **Delete old flags:** stale flags turn code into a museum of abandoned experiments.
- **Pair flags with telemetry:** if a flag changes behavior, the dashboard should show what changed after rollout.

The best flag is boring, temporary, and connected to a release decision. Anything else becomes another branch of confusion.

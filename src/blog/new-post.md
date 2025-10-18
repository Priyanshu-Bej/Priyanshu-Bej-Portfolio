---
title: "Android Release Checklist I Wish I Had at 23"
date: "2024-04-19"
excerpt: "My pre-flight ritual for shipping Android builds without the 2 AM rollback messages."
tags: ["Android", "Release Engineering", "Play Console"]
---

The first time I shipped an Android update, I assumed Gradle + Play Console would protect me. They didn’t. These days my release ritual is short and strict:

- **Versioning sanity:** bump `versionCode`, match `versionName`, cut a tag, and point Crashlytics at the right build type.  
- **Flags default off:** new experiments stay dark until crash-free sessions look healthy; remote config flips them later.  
- **Listing refresh:** give Play copy/screens a skim to make sure the story matches the build. Product and marketing stay in the loop.  
- **Archive the mapping file:** drop the ProGuard map alongside the release bundle so future stack traces are readable.  
- **Stagger the rollout:** launch at 10%, watch ANRs + vitals for a day, then ramp. No more 100% rollouts followed by emergency hotfixes.  

Those five bullets keep my phone quiet at 2 AM and make the QA team trust every release a little more.

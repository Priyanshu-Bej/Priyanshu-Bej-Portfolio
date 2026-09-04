import PageContainer from "../components/layout/PageContainer";

const policyHighlights = [
  "Developer: Priyanshu Bej",
  "Applies to apps developed, maintained, or published by me",
  "Privacy contact: codewithpriyanshubej@gmail.com",
];

const policySections = [
  {
    title: "Information We Collect",
    points: [
      "Account or contact details you choose to provide, such as name, email address, phone number, support messages, and attachments.",
      "App activity and diagnostics, including app version, device model, operating system, crash logs, performance events, and security events.",
      "Feature data you actively provide or enable, such as files, media, camera access, notifications, approximate or precise location, or other device permissions requested by a specific app feature.",
      "Payment, subscription, or transaction status may be processed by Google Play or another payment provider when a paid feature is offered. Full card or bank details are not stored by me.",
    ],
  },
  {
    title: "In-App Disclosures and Consent",
    points: [
      "When an app feature needs sensitive permissions or data access that may not be obvious, the app should explain the access before requesting permission or consent.",
      "Permissions such as location, camera, microphone, notifications, or files are requested only when needed for the relevant feature.",
      "You can deny optional permissions. Some related features may not work unless the permission is granted.",
      "Where an app is distributed through Google Play or another app marketplace, store privacy disclosures should stay consistent with this policy, app behavior, and third-party SDK behavior.",
    ],
  },
  {
    title: "How Information Is Used",
    points: [
      "Provide, maintain, personalize, and improve app functionality across devices and operating-system versions.",
      "Respond to support requests and communicate about updates, fixes, or important changes.",
      "Monitor performance, investigate crashes, detect abuse or security issues, and protect users from unauthorized or harmful activity.",
      "Measure feature usage with privacy-conscious analytics so future updates can focus on reliability, usability, and security.",
      "Meet legal, tax, compliance, fraud-prevention, and dispute-resolution obligations where they apply.",
    ],
  },
  {
    title: "Sharing and Third Parties",
    points: [
      "Information may be shared with trusted service providers that help operate app features, such as cloud hosting, authentication, analytics, crash reporting, notifications, maps, email, or payment processing.",
      "Third-party SDKs and platform services may collect data according to their own terms and privacy policies. I review integrations so app disclosures and marketplace privacy answers remain accurate.",
      "Information may be disclosed when required by law, to protect user safety, prevent fraud or abuse, enforce these policies, or respond to lawful requests.",
      "I do not sell your personal information or share it for cross-context behavioral advertising unless a specific app clearly discloses that practice and obtains any required consent.",
    ],
  },
  {
    title: "Security Practices",
    points: [
      "Personal and sensitive data is transmitted using encrypted connections where supported by the platform and service providers.",
      "Access to app data is limited to authorized people and systems that need it for support, maintenance, security, or legal compliance.",
      "I use reasonable technical and organizational safeguards, including secure configuration, dependency review, permission minimization, and monitoring for misuse.",
      "No online service can be guaranteed 100% secure, but I work to reduce risk and respond responsibly to suspected vulnerabilities or incidents.",
    ],
  },
  {
    title: "Retention and Deletion",
    points: [
      "Information is kept only for as long as reasonably needed to provide the app, maintain security, comply with legal obligations, resolve disputes, or enforce agreements.",
      "Support messages and diagnostic records may be retained for a limited period so recurring issues can be investigated and fixed.",
      "If an app allows account creation, you can request account deletion from the app where available or by contacting me at codewithpriyanshubej@gmail.com with the app name and account email.",
      "Account deletion requests include deletion of associated personal data unless retention is required for legal, tax, fraud-prevention, dispute-resolution, or legitimate security reasons.",
      "If an app does not create accounts or collect personal data, its marketplace privacy disclosures and in-app disclosures should reflect that limited data handling.",
    ],
  },
  {
    title: "Your Choices",
    points: [
      "You may grant, deny, update, or withdraw app permissions such as location, camera, microphone, notifications, or storage access in your device settings.",
      "You may uninstall an app at any time to stop future collection by that app.",
      "Where supported by the operating system or a specific app, you can limit ad personalization, analytics identifiers, background activity, or notification settings.",
      "For data access, correction, export, objection, restriction, or deletion requests, contact me using the details below.",
    ],
  },
  {
    title: "Children's Privacy",
    points: [
      "My apps are not directed to children under 13 unless a specific app listing clearly states otherwise and follows the applicable child-safety and family policies.",
      "I do not knowingly collect personal information from children under 13. If you believe a child provided personal data, contact me so I can review and delete it where required.",
    ],
  },
  {
    title: "International Users",
    points: [
      "Apps and service providers may process information in India, the United States, or other countries where hosting, support, analytics, or infrastructure providers operate.",
      "When information is transferred internationally, I rely on reasonable safeguards required by applicable law and by the service providers used to operate the apps.",
    ],
  },
  {
    title: "Changes to This Policy",
    points: [
      "I may update this Privacy Policy to reflect app changes, marketplace policy requirements, legal requirements, or security improvements.",
      "The updated version will be posted on this page with a revised date. Significant updates may also be highlighted in-app or on the relevant store listing.",
      "Continued use of the app after changes become effective means you accept the revised policy.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <div className="section-shell py-18 md:py-26">
        <section className="border-y border-line-light py-10 dark:border-line-dark">
          <p className="eyebrow">Privacy Policy</p>
          <h1 className="mt-4 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[1.02]">
            Protecting your data while you use apps developed by me.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-ink-muted dark:text-ink-inverse/80">
            This Privacy Policy explains how I, Priyanshu Bej, collect, use, share, retain, and
            safeguard information when you install or use mobile applications developed, maintained,
            or published by me.
          </p>
          <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
            Last updated: 04 Sep 2026
          </p>
        </section>

        <section className="mt-8 grid gap-3 md:grid-cols-3">
          {policyHighlights.map((item) => (
            <div
              key={item}
              className="rounded-md border border-line-light bg-surface-muted px-4 py-3 text-sm font-semibold text-ink-strong dark:border-white/15 dark:bg-surface-dark-elevated dark:text-ink-inverse"
            >
              {item}
            </div>
          ))}
        </section>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {policySections.map((section) => (
            <article key={section.title} className="premium-card p-6">
              <h2 className="text-xl font-bold">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted dark:text-ink-inverse/80">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary dark:bg-brand-secondary"
                      aria-hidden
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="premium-card mt-6 p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold">Questions or requests?</h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted dark:text-ink-inverse/80">
                I aim to respond to privacy inquiries within a reasonable timeframe. Contact me for
                data access, correction, deletion, account deletion, or security requests related to
                any of my apps.
              </p>
            </div>
            <div className="rounded-md border border-line-light bg-surface-muted px-4 py-3 text-sm font-semibold text-ink-strong dark:border-white/20 dark:bg-surface-dark-elevated dark:text-ink-inverse">
              <span>Contact: codewithpriyanshubej@gmail.com</span>
              <br />
              <span>Bengaluru, India</span>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default PrivacyPolicy;

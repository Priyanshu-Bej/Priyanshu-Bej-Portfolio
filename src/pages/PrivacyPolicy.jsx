import PageContainer from "../components/layout/PageContainer";

const policySections = [
  {
    title: "Information We Collect",
    points: [
      "Details you share with us such as name, email address, phone number, and any support messages or attachments you submit.",
      "Device and app diagnostics including device model, operating system, app version, crash logs, and performance events to keep the app stable.",
      "Optional data you enable for specific features, like location for location-aware experiences or files/media you choose to upload.",
    ],
  },
  {
    title: "How We Use Information",
    points: [
      "Provide, maintain, and improve app functionality across devices and OS versions.",
      "Respond to support requests and communicate about updates, fixes, or important changes.",
      "Monitor performance, detect abuse or security issues, and keep the service reliable.",
      "Run privacy-friendly analytics to understand feature usage and prioritize improvements.",
    ],
  },
  {
    title: "Sharing & Disclosure",
    points: [
      "Service providers that help us operate the app (analytics, crash reporting, cloud hosting) under contractual confidentiality and data-protection terms.",
      "Legal, safety, or compliance requirements when we must protect users, enforce policies, or respond to lawful requests.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data Retention & Security",
    points: [
      "We keep information only for as long as it is needed to deliver the app, meet legal obligations, or resolve disputes.",
      "Data is transmitted over encrypted channels, and access is limited to authorized personnel for legitimate purposes.",
      "You can request deletion of your personal data unless we need to retain it to comply with applicable law.",
    ],
  },
  {
    title: "Your Choices",
    points: [
      "You may update or withdraw app permissions (such as location, camera, or storage access) in your device settings at any time.",
      "You can opt out of non-essential analytics by disabling personalized ads/analytics at the OS level where supported.",
      "For data access, correction, or deletion requests, contact us using the details below.",
    ],
  },
  {
    title: "Children’s Privacy",
    points: [
      "Our apps are not directed to children under 13. If you believe a child provided personal data, contact us so we can delete it promptly.",
    ],
  },
  {
    title: "Changes to This Policy",
    points: [
      "We may update this Privacy Policy to reflect product, legal, or security changes. Significant updates will be highlighted in-app or on this site.",
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
            Protecting your data while you use my Google Play apps.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-ink-muted dark:text-ink-inverse/80">
            This Privacy Policy explains how I, Priyanshu Bej, collect, use, and safeguard
            information when you install or use the mobile applications published under my developer
            account on Google Play. If you have any questions, please reach out.
          </p>
          <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
            Last updated: 08 Jan 2025
          </p>
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
              I aim to respond to privacy inquiries within a reasonable timeframe. Contact me for data access,
              correction, or deletion requests related to any of my apps.
            </p>
          </div>
          <div className="rounded-md border border-line-light bg-surface-muted px-4 py-3 text-sm font-semibold text-ink-strong dark:border-white/20 dark:bg-surface-dark-elevated dark:text-ink-inverse">
            <span>Contact: priyanshubej2001@gmail.com</span>
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

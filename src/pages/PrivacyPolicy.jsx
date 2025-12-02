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
    <PageContainer className="gap-12">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/12 p-8 shadow-card-light backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-card-dark">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/12 via-transparent to-brand-secondary-soft/14" />
        <div className="relative space-y-4">
          <p className="eyebrow">Privacy Policy</p>
          <h1 className="font-display text-[clamp(2.25rem,3vw,3rem)] text-neutral-900 dark:text-white">
            Protecting your data while you use my Google Play apps.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            This Privacy Policy explains how I, Priyanshu Pritam Bej, collect, use, and safeguard
            information when you install or use the mobile applications published under my developer
            account on Google Play. If you have any questions, please reach out.
          </p>
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 dark:text-neutral-500">
            Last updated: 08 Jan 2025
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {policySections.map((section) => (
          <article
            key={section.title}
            className="relative overflow-hidden rounded-3xl border border-white/18 bg-white/10 p-6 shadow-card-light backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-white/6 dark:shadow-card-dark"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-secondary-soft/12 opacity-70" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/14 p-6 shadow-card-light backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-primary/12 via-transparent to-brand-secondary-soft/12" />
        <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Questions or requests?</h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              I aim to respond to privacy inquiries within a reasonable timeframe. Contact me for data access,
              correction, or deletion requests related to any of my apps.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-2xl border border-brand-primary/30 bg-brand-primary/10 px-4 py-3 text-sm font-semibold text-brand-primary shadow-glow">
            <span>Contact: priyanshubej2001@gmail.com</span>
            <span>Bengaluru, India</span>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default PrivacyPolicy;

import PageContainer from "../components/layout/PageContainer";

const termsSections = [
  {
    title: "Acceptance & Scope",
    points: [
      "By installing, accessing, or using the app, you agree to these Terms and any policies referenced here.",
      "If you do not agree, uninstall the app and discontinue use.",
    ],
  },
  {
    title: "Use of the App",
    points: [
      "Use the app only for lawful purposes and in accordance with applicable local laws and store policies.",
      "Do not attempt to interfere with, disrupt, or reverse engineer the app or any related services.",
      "You are responsible for maintaining the security of your device, credentials, and network connection.",
    ],
  },
  {
    title: "User Content & Permissions",
    points: [
      "You retain ownership of content you submit. You grant us a limited license to host and process that content solely to operate and improve the app.",
      "You represent that you have the rights to the content you upload and that it does not violate any law or third-party rights.",
      "You can manage device permissions (camera, location, storage, notifications) at any time in your system settings.",
    ],
  },
  {
    title: "Paid Features",
    points: [
      "If the app offers paid features or subscriptions, pricing and billing will be presented in-app before purchase.",
      "Charges processed via the app store are subject to store policies; taxes may apply based on your location.",
      "Refunds, if applicable, are handled through the respective store policies and local consumer laws.",
    ],
  },
  {
    title: "Third-Party Services",
    points: [
      "The app may rely on third-party services (e.g., analytics, crash reporting, maps, payment gateways). Their terms and privacy practices govern your use of those features.",
      "We are not responsible for third-party content, availability, or data handling outside our control.",
    ],
  },
  {
    title: "Availability & Changes",
    points: [
      "The app may change, be updated, or experience interruptions. Features can be modified or discontinued without prior notice.",
      "We may release updates that are required to continue using the app; please keep your app version current.",
    ],
  },
  {
    title: "Disclaimers & Limitation of Liability",
    points: [
      "The app is provided on an “as is” and “as available” basis without warranties of any kind, to the fullest extent permitted by law.",
      "To the maximum extent allowed, we are not liable for indirect, incidental, or consequential damages, loss of data, or business interruptions arising from your use of the app.",
    ],
  },
  {
    title: "Termination",
    points: [
      "We may suspend or terminate access if you violate these Terms or misuse the service.",
      "You may stop using the app at any time. Upon termination, these Terms continue to apply to any sections that by nature should survive (e.g., intellectual property, liability limits).",
    ],
  },
  {
    title: "Governing Law",
    points: [
      "These Terms are governed by the laws of India. Any disputes will be handled in the courts of Bengaluru, Karnataka, subject to applicable consumer protections.",
    ],
  },
  {
    title: "Changes to Terms",
    points: [
      "We may update these Terms to reflect new features, legal requirements, or security improvements. Material changes will be communicated in-app or on this site.",
      "Continued use after updates take effect means you accept the revised Terms.",
    ],
  },
];

const Terms = () => {
  return (
    <PageContainer className="gap-12">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/12 p-8 shadow-card-light backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-card-dark">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/12 via-transparent to-brand-secondary-soft/14" />
        <div className="relative space-y-4">
          <p className="eyebrow">Terms & Conditions</p>
          <h1 className="font-display text-[clamp(2.25rem,3vw,3rem)] text-neutral-900 dark:text-white">
            The ground rules for using my Google Play apps.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            These Terms govern your use of the mobile applications published under my Google Play
            developer account. Please read them carefully before using the app so you understand your rights
            and responsibilities.
          </p>
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400 dark:text-neutral-500">
            Last updated: 08 Jan 2025
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {termsSections.map((section) => (
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
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Need clarification?</h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              Reach out if you have questions about these Terms, feature usage, or if you believe your account
              has been used in violation of this agreement.
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

export default Terms;

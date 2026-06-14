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
    <PageContainer>
      <div className="section-shell py-18 md:py-26">
        <section className="border-y border-line-light py-10 dark:border-line-dark">
          <p className="eyebrow">Terms & Conditions</p>
          <h1 className="mt-4 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[1.02]">
            The ground rules for using my Google Play apps.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-ink-muted dark:text-ink-inverse/80">
            These Terms govern your use of the mobile applications published under my Google Play
            developer account. Please read them carefully before using the app so you understand your rights
            and responsibilities.
          </p>
          <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
            Last updated: 08 Jan 2025
          </p>
        </section>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {termsSections.map((section) => (
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
            <h2 className="text-xl font-bold">Need clarification?</h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted dark:text-ink-inverse/80">
              Reach out if you have questions about these Terms, feature usage, or if you believe your account
              has been used in violation of this agreement.
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

export default Terms;

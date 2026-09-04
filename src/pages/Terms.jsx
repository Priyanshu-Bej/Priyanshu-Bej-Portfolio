import PageContainer from "../components/layout/PageContainer";

const termsHighlights = [
  "Use apps lawfully and responsibly",
  "Protect your device, account, and credentials",
  "Contact: codewithpriyanshubej@gmail.com",
];

const termsSections = [
  {
    title: "Acceptance and Scope",
    points: [
      "By installing, accessing, or using any app developed, maintained, or published by me, you agree to these Terms and any policies referenced here.",
      "These Terms apply to mobile apps, app updates, support interactions, and related online services that link to this page.",
      "If you do not agree, do not use the app and uninstall it from your device.",
    ],
  },
  {
    title: "Use of the App",
    points: [
      "Use the app only for lawful purposes and in accordance with applicable local laws and store policies.",
      "Do not misuse the app, interfere with its services, attempt unauthorized access, bypass security controls, reverse engineer protected parts, or use the app to harm another person, system, or network.",
      "Do not upload or transmit malware, illegal content, abusive material, spam, or content that infringes another person's rights.",
      "You are responsible for maintaining the security of your device, credentials, network connection, backups, and any content you choose to store in or submit through the app.",
    ],
  },
  {
    title: "Accounts and Security",
    points: [
      "Some apps may allow or require account creation. You must provide accurate information and keep your login details confidential.",
      "You are responsible for activity that happens through your account unless the activity is caused by a security failure within my control.",
      "Notify me promptly if you believe your account, device, or app data has been accessed without authorization.",
      "I may limit, suspend, or remove access where needed to protect users, investigate abuse, comply with law, or enforce these Terms.",
    ],
  },
  {
    title: "User Content and Permissions",
    points: [
      "You retain ownership of content you submit. You grant me a limited license to host, process, display, transmit, and back up that content only as needed to operate, secure, support, and improve the app.",
      "You represent that you have the rights to the content you upload and that it does not violate any law or third-party rights.",
      "You can manage device permissions (camera, location, storage, notifications) at any time in your system settings.",
      "The app should only request permissions that are reasonably connected to its features. Denying a permission may limit the related feature without blocking unrelated parts of the app.",
    ],
  },
  {
    title: "Paid Features",
    points: [
      "If the app offers paid features or subscriptions, pricing and billing will be presented in-app before purchase.",
      "Charges processed via the app store are subject to store policies; taxes may apply based on your location.",
      "Refunds, if applicable, are handled through the respective store policies and local consumer laws.",
      "Unless stated otherwise, paid access is personal, non-transferable, and may end if payment fails, a subscription expires, or the app is discontinued.",
    ],
  },
  {
    title: "Third-Party Services",
    points: [
      "The app may rely on third-party services such as analytics, crash reporting, maps, cloud hosting, authentication, notifications, payment gateways, or Google Play services.",
      "Third-party terms and privacy practices may govern your use of those features. I am not responsible for third-party content, outages, or data handling outside my control.",
      "If a third-party service becomes unavailable or unsafe, I may modify, suspend, replace, or remove the affected feature.",
    ],
  },
  {
    title: "Privacy and Data",
    points: [
      "Your use of the app is also governed by the Privacy Policy linked on this site and, where applicable, by in-app permission prompts and disclosures.",
      "Do not use the app to collect, publish, or share another person's personal data without a lawful basis and their required permission.",
      "If an app provides account deletion or data deletion controls, use those controls or contact me for help with eligible requests.",
    ],
  },
  {
    title: "Availability and Changes",
    points: [
      "The app may change, be updated, be unavailable, or experience interruptions. Features can be modified, restricted, or discontinued where necessary.",
      "I may release updates that are required to continue using the app; please keep your app version current.",
      "I may perform maintenance or security updates that temporarily affect access or functionality.",
    ],
  },
  {
    title: "Intellectual Property",
    points: [
      "The app, design, code, branding, graphics, documentation, and related materials are owned by me or my licensors unless otherwise stated.",
      "You receive a limited, revocable, non-exclusive, non-transferable license to use the app for its intended purpose.",
      "You may not copy, resell, redistribute, modify, exploit, or create derivative works from the app except as allowed by law or with written permission.",
    ],
  },
  {
    title: "Disclaimers & Limitation of Liability",
    points: [
      "The app is provided on an \"as is\" and \"as available\" basis without warranties of any kind, to the fullest extent permitted by law.",
      "I do not guarantee that the app will be uninterrupted, error-free, fully secure, compatible with every device, or suitable for every use case.",
      "To the maximum extent allowed, I am not liable for indirect, incidental, special, consequential, or punitive damages, loss of data, lost profits, device issues, or business interruptions arising from your use of the app.",
      "Nothing in these Terms limits rights that cannot legally be limited under applicable consumer law.",
    ],
  },
  {
    title: "Termination",
    points: [
      "I may suspend or terminate access if you violate these Terms, create security risk, misuse the service, or create legal exposure.",
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
      "I may update these Terms to reflect app changes, legal requirements, store-policy requirements, or security improvements.",
      "The updated version will be posted on this page with a revised date. Material changes may also be communicated in-app or on the relevant store listing.",
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
            The ground rules for using apps developed by me.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-ink-muted dark:text-ink-inverse/80">
            These Terms govern your use of mobile applications developed, maintained, or published
            by Priyanshu Bej. Please read them carefully before using an app so you understand your
            rights, responsibilities, and security obligations.
          </p>
          <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
            Last updated: 04 Sep 2026
          </p>
        </section>

        <section className="mt-8 grid gap-3 md:grid-cols-3">
          {termsHighlights.map((item) => (
            <div
              key={item}
              className="rounded-md border border-line-light bg-surface-muted px-4 py-3 text-sm font-semibold text-ink-strong dark:border-white/15 dark:bg-surface-dark-elevated dark:text-ink-inverse"
            >
              {item}
            </div>
          ))}
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
                Reach out if you have questions about these Terms, feature usage, security concerns,
                or if you believe an account has been used in violation of this agreement.
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

export default Terms;

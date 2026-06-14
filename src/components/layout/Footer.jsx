import { NavLink } from "react-router-dom";

import { legalLinks, navItems, socialLinks } from "../../constants";

const Footer = () => (
  <footer className="mt-auto border-t border-line-light dark:border-line-dark">
    <div className="section-shell flex flex-col gap-10 py-10 md:flex-row md:items-start md:justify-between">
      <div className="max-w-md">
        <p className="font-display text-xl font-bold text-ink-strong dark:text-ink-inverse">
          Priyanshu Bej
        </p>
        <p className="mt-3 text-sm text-ink-muted dark:text-ink-inverse/80">
          Mobile app engineer building reliable product experiences with Flutter,
          clean architecture, and release discipline.
        </p>
        <p className="mt-6 text-xs meta-text">
          © {new Date().getFullYear()} Priyanshu Bej. All rights reserved.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        <nav aria-label="Footer navigation">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map(({ id, label, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className="break-all text-ink-muted transition hover:text-brand-primary dark:text-ink-inverse/80 dark:hover:text-brand-secondary"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {socialLinks.map(({ label, href, handle }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label === "Email" ? "_self" : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  className="text-ink-muted transition hover:text-brand-primary dark:text-ink-inverse/80 dark:hover:text-brand-secondary"
                >
                  {handle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
            Legal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {legalLinks.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className="text-ink-muted transition hover:text-brand-primary dark:text-ink-inverse/80 dark:hover:text-brand-secondary"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

import { useState } from "react";
import { NavLink } from "react-router-dom";

import { legalLinks, navItems, socialLinks } from "../../constants";

const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyWithSelection = (email) => {
    const field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  };

  const copyEmail = async (event, email) => {
    event.preventDefault();

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        copyWithSelection(email);
      }
    } catch {
      copyWithSelection(email);
    }

    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 1800);
  };

  return (
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

        <div className="grid min-w-0 gap-8 sm:grid-cols-3">
          <nav aria-label="Footer navigation" className="min-w-0">
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

          <div className="min-w-0">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {socialLinks.map(({ label, href, handle }) => {
                const isEmail = label === "Email";

                return (
                  <li key={label}>
                    <a
                      href={href}
                      target={isEmail ? "_self" : "_blank"}
                      rel={isEmail ? undefined : "noreferrer"}
                      onClick={isEmail ? (event) => copyEmail(event, handle) : undefined}
                      className="block max-w-full break-all text-ink-muted transition hover:text-brand-primary dark:text-ink-inverse/80 dark:hover:text-brand-secondary"
                      aria-label={isEmail ? "Copy email address" : undefined}
                    >
                      {isEmail && copiedEmail ? "Email copied" : handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="min-w-0">
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
};

export default Footer;

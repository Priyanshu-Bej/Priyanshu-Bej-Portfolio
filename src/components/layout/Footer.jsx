import { NavLink } from "react-router-dom";

import { legalLinks, navItems, socialLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/15 bg-white/10 backdrop-blur-2xl dark:border-white/10 dark:bg-black/10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-primary/25 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/55 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-neutral-900 dark:text-white">
            Priyanshu
            <span className="ml-1 bg-gradient-to-r from-brand-primary via-brand-secondary-soft to-brand-accent bg-clip-text text-transparent">
              dev
            </span>
          </p>
          <p className="mt-2 max-w-md text-sm text-neutral-500 dark:text-neutral-300">
            Crafting luxurious, high-performance mobile experiences with a glassmorphism edge.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.38em] text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Priyanshu Pritam Bej. All rights reserved.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400 dark:text-neutral-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map(({ id, label, path }) => (
                <li key={id}>
                  <NavLink
                    to={path}
                    end={path === "/"}
                    className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-left text-neutral-600 transition hover:border-brand-primary/30 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:text-neutral-300"
                  >
                    <span className="text-brand-primary/60">•</span>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400 dark:text-neutral-500">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {socialLinks.map(({ label, href, handle }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === "Email" ? "_self" : "_blank"}
                    rel={label === "Email" ? undefined : "noreferrer"}
                    className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-neutral-600 transition hover:border-brand-primary/30 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:text-neutral-300"
                  >
                    <span className="text-brand-primary/60">↗</span>
                    {handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-400 dark:text-neutral-500">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {legalLinks.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-left text-neutral-600 transition hover:border-brand-primary/30 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:text-neutral-300"
                  >
                    <span className="text-brand-primary/60">↗</span>
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

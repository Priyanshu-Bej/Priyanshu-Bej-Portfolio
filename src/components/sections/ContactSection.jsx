import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

import { contactChannels, socialLinks } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_bwghn2g";
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_5rh5m2q";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "M_oVO06IX1XNdxP3k";

const inputClass =
  "w-full border-0 border-b border-line-light bg-transparent px-0 py-4 text-base text-ink-base outline-none transition placeholder:text-ink-muted focus:border-brand-primary dark:border-line-dark dark:text-ink-inverse dark:placeholder:text-ink-inverse/70 dark:focus:border-brand-secondary";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [36, -42]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim().toLowerCase())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "What would you like to discuss?";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      );
      setStatus({
        type: "success",
        message: "Message sent. I will reply with a clear next step.",
      });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          "The form could not send right now. Email me directly at priyanshubej2001@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text", error);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-grid-lines section-grid-lines-inverse bg-ink-strong text-white dark:bg-black"
      aria-labelledby="contact-title"
    >
      <div className="grid lg:grid-cols-[0.95fr,1.05fr]">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-grid-lines section-grid-lines-inverse flex min-h-[70vh] flex-col justify-between border-b border-white/20 bg-ink-strong px-5 py-12 dark:bg-black sm:px-8 lg:sticky lg:top-0 lg:self-start lg:border-b-0 lg:border-r lg:px-12 lg:py-16"
        >
          <div>
            <motion.p variants={fadeInUp(0.05, 14)} className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
              Contact
            </motion.p>
            <motion.h2
              id="contact-title"
              variants={fadeInUp(0.1, 16)}
              className="mt-8 max-w-4xl text-balance text-[clamp(3rem,9vw,8rem)] font-extrabold leading-[0.88] text-white"
              style={{ y: shouldReduceMotion ? 0 : titleY }}
            >
              Send the brief. I will map the build.
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp(0.18, 16)} className="mt-12 grid gap-4 sm:grid-cols-3">
            {contactChannels.map((channel) => {
              const iconMap = {
                email: <FiMail />,
                location: <FiMapPin />,
                freelance: <FiMessageCircle />,
              };

              return (
                <div key={channel.label} className="border-t border-white/20 pt-4">
                  <div className="text-brand-secondary">{iconMap[channel.type] ?? <FiMessageCircle />}</div>
                  <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    {channel.label}
                  </p>
                  <div className="mt-2 text-sm font-semibold text-white/90">
                    {channel.href ? (
                      <a href={channel.href} className="break-all transition hover:text-brand-secondary">
                        {channel.value}
                      </a>
                    ) : (
                      channel.value
                    )}
                  </div>
                  {channel.type === "email" && (
                    <button
                      type="button"
                      onClick={() => handleCopy(channel.value)}
                      className="mt-3 rounded-md border border-white/30 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white transition hover:border-brand-secondary hover:bg-white/20 hover:text-brand-secondary"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  )}
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.form
          variants={fadeInUp(0.14, 16)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={handleSubmit}
          noValidate
          className="bg-canvas-light px-5 py-12 text-ink-base dark:bg-surface-dark dark:text-ink-inverse sm:px-8 lg:px-12 lg:py-16"
          aria-describedby={status.type ? "contact-status" : undefined}
        >
          <p className="eyebrow">Project Brief</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.name && (
                <p className="mt-2 text-xs font-semibold text-red-600 dark:text-red-300">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-2 text-xs font-semibold text-red-600 dark:text-red-300">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="message" className="text-sm font-bold">
              What are we building?
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="App idea, workflow, timeline, platform, or what is currently broken."
              value={form.message}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.message && (
              <p className="mt-2 text-xs font-semibold text-red-600 dark:text-red-300">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" disabled={loading} className="button-primary mt-8">
            <span>{loading ? "Sending..." : "Send brief"}</span>
            <FiSend />
          </button>

          {status.type && (
            <div
              id="contact-status"
              className={`mt-6 flex items-start gap-2 rounded-md border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-green-700/30 bg-green-700/10 text-green-700 dark:border-green-300/30 dark:bg-green-300/10 dark:text-green-300"
                  : "border-red-600/30 bg-red-600/10 text-red-600 dark:border-red-300/30 dark:bg-red-300/10 dark:text-red-300"
              }`}
            >
              <FiCheckCircle className="mt-0.5 shrink-0" />
              <span>{status.message}</span>
            </div>
          )}

          <div className="mt-12 border-t border-line-light pt-6 dark:border-line-dark">
            <p className="text-sm font-bold">Elsewhere</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, handle }) => {
                const icon =
                  label === "LinkedIn" ? FiLinkedin : label === "GitHub" ? FiGithub : FiMail;
                const Icon = icon;

                return (
                  <a
                    key={label}
                    href={href}
                    target={label === "Email" ? "_self" : "_blank"}
                    rel={label === "Email" ? undefined : "noreferrer"}
                    className="button-secondary px-4 py-2.5"
                  >
                    <Icon />
                    <span>{handle}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";

import { contactChannels, socialLinks } from "../../constants";
import { fadeInUp, staggered } from "../../utils/animations";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const serviceId =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_bwghn2g";
const templateId =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_5rh5m2q";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "M_oVO06IX1XNdxP3k";

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim().toLowerCase())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim())
      newErrors.message = "What would you like to discuss?";
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
        message: "Thanks for reaching out! I’ll respond within 1–2 business days.",
      });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Email me directly at priyanshubej2001@gmail.com.",
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
      id="contact"
      className="section-wrapper relative overflow-hidden bg-white/12 backdrop-blur-2xl dark:bg-surface-base/55"
      aria-labelledby="contact-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50 dark:bg-grid-dark" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-primary/20 via-transparent to-transparent dark:from-brand-primary/25" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp(0.1)} className="eyebrow">
            Contact
          </motion.p>
          <motion.h2
            id="contact-title"
            variants={fadeInUp(0.18)}
            className="mt-4 font-display text-[clamp(2rem,3vw,2.85rem)] text-neutral-900 dark:text-white"
          >
            Let’s shape your next launch with glassy precision.
          </motion.h2>
          <motion.p
            variants={fadeInUp(0.26)}
            className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
          >
            Share your idea, product roadblock, or collaboration spark. I’ll
            respond quickly with ways we can design, build, and scale together.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.div
            variants={fadeInUp(0.28)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2.75rem] border border-white/25 bg-white/14 p-8 shadow-card-light backdrop-blur-2xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark"
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 hover:opacity-100">
              <span className="absolute inset-0 bg-gradient-to-br from-brand-primary/18 via-transparent to-brand-secondary-soft/20" />
            </span>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
              aria-describedby={status.type ? "contact-status" : undefined}
            >
              {[
                {
                  id: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "How should I address you?",
                },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Where can I reach you back?",
                },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-200"
                  >
                    {label}
                  </label>
                  <div
                    className={`group mt-2 rounded-[1.75rem] border bg-white/8 px-1.5 py-1.5 shadow-inner transition dark:bg-white/5 ${
                      errors[id]
                        ? "border-brand-primary/80"
                        : "border-white/20 hover:border-brand-primary/40"
                    } ${
                      activeField === id
                        ? "border-brand-primary/80 shadow-glow"
                        : ""
                    }`}
                  >
                    <input
                      id={id}
                      name={id}
                      type={type}
                      placeholder={placeholder}
                      autoComplete={id === "email" ? "email" : "name"}
                      value={form[id]}
                      onChange={handleChange}
                      onFocus={() => setActiveField(id)}
                      onBlur={() => setActiveField(null)}
                      className="w-full rounded-[1.5rem] border-0 bg-transparent px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none dark:text-neutral-100 dark:placeholder:text-neutral-500"
                    />
                  </div>
                  {errors[id] && (
                    <p className="mt-1 text-xs text-brand-primary">{errors[id]}</p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-neutral-600 dark:text-neutral-200"
                >
                  Project details
                </label>
                <div
                  className={`group mt-2 rounded-[1.75rem] border bg-white/8 px-1.5 py-1.5 shadow-inner transition dark:bg-white/5 ${
                    errors.message
                      ? "border-brand-accent"
                      : "border-white/20 hover:border-brand-secondary-soft/40"
                  } ${
                    activeField === "message" ? "border-brand-secondary-soft shadow-glow" : ""
                  }`}
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the problem, timeline, or dream outcome."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    className="w-full rounded-[1.5rem] border-0 bg-transparent px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none dark:text-neutral-100 dark:placeholder:text-neutral-500"
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-xs text-brand-accent">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-brand-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>{loading ? "Sending…" : "Send message"}</span>
                <span className="absolute inset-0 translate-x-[-120%] bg-white/35 blur-xl transition duration-500 group-hover:translate-x-[120%]" />
              </button>

              {status.type && (
                <div
                  id="contact-status"
                  className={`flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm ${
                    status.type === "success"
                      ? "border-success/40 bg-success/10 text-success"
                      : "border-brand-accent/40 bg-brand-accent/10 text-brand-accent"
                  }`}
                >
                  <FiCheckCircle />
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            variants={fadeInUp(0.34)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2.75rem] border border-white/25 bg-white/14 p-8 shadow-card-light backdrop-blur-2xl dark:border-white/10 dark:bg-white/8 dark:shadow-card-dark"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-neutral-500 dark:text-neutral-400">
              Quick info
            </p>
            <ul className="mt-6 space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
              {contactChannels.map((channel) => {
                const iconMap = {
                  email: <FiMail />,
                  location: <FiMapPin />,
                  freelance: <FiMessageCircle />,
                };
                return (
                  <li
                    key={channel.label}
                    className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="mt-1 text-brand-primary">
                      {iconMap[channel.type] ?? <FiMessageCircle />}
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.36em] text-neutral-400 dark:text-neutral-500">
                        {channel.label}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        {channel.href ? (
                          <a
                            href={channel.href}
                            className="text-sm font-semibold text-neutral-800 transition hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:text-neutral-100"
                          >
                            {channel.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                            {channel.value}
                          </p>
                        )}
                        {channel.type === "email" && (
                          <button
                            type="button"
                            onClick={() => handleCopy(channel.value)}
                            className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary transition hover:border-brand-primary/50 hover:text-brand-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
                          >
                            {copied ? "Copied" : "Copy"}
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-neutral-500 dark:text-neutral-400">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, handle }) => {
                  const icon =
                    label === "LinkedIn"
                      ? FiLinkedin
                      : label === "GitHub"
                      ? FiGithub
                      : FiMail;
                  const Icon = icon;

                  return (
                    <a
                      key={label}
                      href={href}
                      target={label === "Email" ? "_self" : "_blank"}
                      rel={label === "Email" ? undefined : "noreferrer"}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-neutral-600 shadow-card-light backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:border-white/10 dark:bg-white/5 dark:text-neutral-200"
                    >
                      <Icon />
                      {handle}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

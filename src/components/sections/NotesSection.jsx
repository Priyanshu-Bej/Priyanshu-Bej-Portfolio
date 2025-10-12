import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { FiClock, FiExternalLink, FiX } from "react-icons/fi";

import { fadeInUp, staggered } from "../../utils/animations";

const rawNotes = import.meta.glob("../../blog/*.md", {
  eager: true,
  as: "raw",
});

const sanitizeValue = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed.replace(/'/g, '"'));
      return Array.isArray(parsed) ? parsed : trimmed;
    } catch {
      return trimmed;
    }
  }
  return trimmed;
};

const parseFrontMatter = (raw) => {
  const match = raw.match(
    /^---\s*[\r\n]+([\s\S]*?)\r?\n---\s*[\r\n]*([\s\S]*)$/m
  );

  if (!match) {
    return {
      data: {},
      content: raw.trim(),
    };
  }

  const [, front, body] = match;
  const data = front
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((acc, line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) {
        return acc;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = sanitizeValue(line.slice(separatorIndex + 1));

      if (Array.isArray(value)) {
        acc[key] = value;
      } else if (
        typeof value === "string" &&
        value.startsWith("[") &&
        value.endsWith("]")
      ) {
        const normalized = value.replace(/'/g, '"');
        try {
          const parsed = JSON.parse(normalized);
          acc[key] = parsed;
        } catch {
          acc[key] = value;
        }
      } else {
        acc[key] = value;
      }

      return acc;
    }, {});

  return {
    data,
    content: body.trim(),
  };
};

const parseNotes = () =>
  Object.entries(rawNotes)
    .map(([path, rawContent]) => {
      const { data, content } = parseFrontMatter(rawContent);
      const slug = path.split("/").pop().replace(".md", "");
      const readingTime = Math.max(
        1,
        Math.ceil(content.split(/\s+/).length / 180)
      );

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? content.slice(0, 140),
        tags: data.tags ?? [],
        content,
        readingTime,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

const notes = parseNotes();

const NoteModal = ({ note, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!note) return undefined;
    const previouslyFocused =
      (typeof document !== "undefined" && document.activeElement) || null;
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handlePointerDown = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [note, onClose]);

  if (!note) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/45 p-4 backdrop-blur">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="note-modal-title"
        tabIndex={-1}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/25 bg-white/90 shadow-soft-xl backdrop-blur-2xl dark:border-white/10 dark:bg-surface-elevated/90"
      >
        <button
          type="button"
          aria-label="Close note"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-neutral-200 bg-white/70 p-2 text-neutral-500 shadow-card-light transition hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary dark:border-white/10 dark:bg-surface-elevated/80 dark:text-neutral-200"
        >
          <FiX className="text-lg" />
        </button>
        <div className="overflow-y-auto px-6 py-8">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
            {note.date} · {note.readingTime} min read
          </p>
          <h3
            id="note-modal-title"
            className="mt-3 font-display text-2xl text-neutral-900 dark:text-neutral-50"
          >
            {note.title}
          </h3>
          <div className="mt-6 prose prose-neutral max-w-none dark:prose-invert">
            <ReactMarkdown>{note.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotesSection = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <section
      id="notes"
      className="section-wrapper relative overflow-hidden bg-white/14 backdrop-blur-2xl dark:bg-surface-base/60"
      aria-labelledby="notes-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-35 dark:bg-grid-dark" />
      <div className="absolute inset-x-0 top-16 h-40 bg-gradient-to-b from-brand-primary/16 via-transparent to-transparent dark:from-brand-secondary-soft/20" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp(0.1)} className="eyebrow">
            Notes
          </motion.p>
          <motion.h2
            id="notes-title"
            variants={fadeInUp(0.18)}
            className="mt-4 font-display text-[clamp(2rem,3vw,2.75rem)] text-neutral-900 dark:text-neutral-50"
          >
            Thinking out loud about mobile craft and product strategy.
          </motion.h2>
          <motion.p
            variants={fadeInUp(0.26)}
            className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
          >
            Short-form learnings, architecture explorations, and retros for the
            products I help ship. Expect honest notes over polished narratives.
          </motion.p>
        </motion.div>

        {notes.length === 0 ? (
          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 rounded-[2.5rem] border border-dashed border-brand-primary/45 bg-white/12 p-10 text-center shadow-card-light backdrop-blur-xl dark:border-brand-primary/35 dark:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-primary">
              Coming soon
            </p>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              Subscribe on LinkedIn to get notified when the first note drops.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggered(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {notes.map((note, index) => (
            <motion.article
              key={note.slug}
              variants={fadeInUp(0.1 * index)}
              className="group relative h-full overflow-hidden rounded-[2.25rem] border border-white/20 bg-white/14 p-6 shadow-card-light backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:shadow-soft-xl dark:border-white/10 dark:bg-surface-elevated/60 dark:shadow-card-dark"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-neutral-400 dark:text-neutral-500">
                  {note.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                  {note.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-300">
                  <span className="inline-flex items-center gap-1">
                    <FiClock /> {note.readingTime} min read
                  </span>
                  <div className="flex gap-2">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-primary/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-primary dark:bg-brand-primary/20 dark:text-neutral-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedNote(note)}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    Read note <FiExternalLink />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>

      <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)} />
    </section>
  );
};

export default NotesSection;
